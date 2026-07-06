# Security Audit — Upranked Platform
**Audit Date:** 2026-07-06  
**Auditor:** Enterprise Security Review (Claude Code)  
**Scope:** Full server-side codebase, client secrets handling, infrastructure configuration  
**Standard:** OWASP Top 10 2021, SANS CWE Top 25

---

## Executive Summary

The audit identified **14 security issues** across the server codebase and client configuration. Four critical/high vulnerabilities have been **patched in this session**. The remaining items are documented with remediation guidance.

| Severity | Total | Fixed This Session | Pending |
|----------|-------|-------------------|---------|
| Critical | 2 | 2 | 0 |
| High | 5 | 4 | 1 |
| Medium | 5 | 0 | 5 |
| Low | 2 | 0 | 2 |

---

## Critical Findings (P0) — Fixed

### C-01: JWT Secret Falls Back to Empty String
**File:** `server/_core/env.ts:3` (pre-fix)  
**CWE:** CWE-321 — Use of Hard-coded Cryptographic Key  
**CVSS:** 9.8 (Critical)

**Description:**  
`cookieSecret: process.env.JWT_SECRET ?? ""`  
If `JWT_SECRET` is unset, HMAC-HS256 signs all session tokens with an empty key. Any attacker who knows the signing algorithm can forge arbitrary session tokens with full admin access.

**Fix Applied:**  
`requireEnv("JWT_SECRET")` — throws at startup if the variable is absent, preventing the server from running in an insecure state.

**Verification:**  
Start server without `JWT_SECRET` set → server exits with `[Startup] FATAL: required environment variable "JWT_SECRET" is not set.`

---

### C-02: Path Traversal in Storage Proxy
**File:** `server/_core/storageProxy.ts:6` (pre-fix)  
**CWE:** CWE-22 — Path Traversal  
**CVSS:** 8.6 (Critical)

**Description:**  
`const key = req.params[0]` was used directly to construct the forge API URL without any sanitisation. An attacker could supply `../../admin/secrets` or URL-encoded equivalents (`%2e%2e%2f`) to traverse outside the intended storage prefix.

Additionally, the route required no authentication — any anonymous HTTP client could access any storage object by guessing its key.

**Fix Applied:**  
- Path extracted via `req.path.replace(/^\/manus-storage\//, "")` to avoid Express params typing issue  
- `isSafeStorageKey()` blocks `..`, `//`, `\`, and URL-encoded equivalents via regex  
- `sdk.authenticateRequest(req)` called first — unauthenticated requests receive HTTP 401

---

## High Findings (P1) — Fixed

### H-01: No Rate Limiting on Any Endpoint
**File:** `server/_core/index.ts` (pre-fix)  
**CWE:** CWE-770 — Allocation of Resources Without Limits  
**CVSS:** 7.5

**Description:**  
50MB body parser with no rate limiting on any route. A single client could flood the server with 50MB POST requests, exhausting memory and CPU. The OAuth callback (brute-forceable auth endpoint) had no protection.

**Fix Applied:**  
- General API limiter: 200 requests / 15 min on `/api/`  
- Auth limiter: 20 requests / 15 min on `/api/oauth/`  
- Body parser scoped: 1MB on `/api/trpc/`, 10MB elsewhere (was 50MB everywhere)

---

### H-02: Missing CORS Configuration
**File:** `server/_core/index.ts` (pre-fix)  
**CWE:** CWE-942 — Overly Permissive Cross-Domain Policy  
**CVSS:** 7.1

**Description:**  
No CORS middleware — Express defaults to reflecting `Access-Control-Allow-Origin: *` for non-credentialed requests. Any website could make requests to `/api/trpc` mutations and trigger state changes on behalf of authenticated users (CSRF via cross-origin fetch).

**Fix Applied:**  
Explicit `cors()` middleware with `allowedOrigins` allowlist. Requests from unlisted origins are rejected at the CORS preflight layer.

---

### H-03: No Security Headers on Express Server
**File:** `server/_core/index.ts` (pre-fix)  
**CWE:** CWE-1021 — Improper Restriction of Rendered UI Layers  
**CVSS:** 6.5

**Description:**  
No Helmet.js — Express shipped responses without `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, or `X-DNS-Prefetch-Control`. (Netlify headers in `netlify.toml` only protect the static site, not the Express backend.)

**Fix Applied:**  
`helmet()` middleware added. `contentSecurityPolicy` disabled in Helmet as CSP is managed in `netlify.toml`; can be re-enabled with a custom policy when deploying the Express server directly.

---

### H-04: Open Redirect via Unvalidated OAuth State Parameter
**File:** `server/_core/oauth.ts` (pre-fix)  
**CWE:** CWE-601 — URL Redirection to Untrusted Site  
**CVSS:** 6.1

**Description:**  
`decodeState(state)` called `atob(state)` to extract a redirect URI. The decoded URL was passed to `exchangeCodeForToken` without validation. An attacker crafting a phishing OAuth link could supply a `state` encoding `https://evil.com`, causing the user's browser to redirect to an attacker-controlled site after authentication.

**Fix Applied:**  
`validateRedirectUri()` checks decoded URL: must be `http:`/`https:`, hostname must be in `ALLOWED_REDIRECT_HOSTS` (`localhost`, `upranked.io`, `www.upranked.io`). Invalid state returns HTTP 400.

---

## High Findings (P1) — Pending Remediation

### H-05: Supabase Anon Key Hardcoded as Fallback
**File:** `client/src/lib/supabase.ts:4`  
**CWE:** CWE-798 — Use of Hard-coded Credentials  
**CVSS:** 6.5

**Description:**  
```ts
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_dtOltW0Hz6plqrVz2e3tjQ_UculjCKG';
```
The Supabase publishable key is committed to git history. Even if rotated, the old key may remain in old commits. The `sb_publishable_` prefix indicates this is intended for client-side use (anon key), but without Row Level Security enabled, it grants broad table access.

**Remediation Steps:**
1. Set `VITE_SUPABASE_ANON_KEY` in the Netlify environment dashboard
2. Remove the hardcoded fallback value from `supabase.ts`
3. Enable Row Level Security (RLS) on all Supabase tables
4. Rotate the key if any of the following tables are publicly readable: `blog_posts`, `users`, or any table with PII

**Risk reduction:** The key is prefixed `sb_publishable_` — it is scoped to anonymous read access. Risk is low if RLS is properly configured but must not be left as the only access control.

---

## Medium Findings (P2) — Pending Remediation

### M-01: Cookie `sameSite: "none"` Without Forced Secure
**File:** `server/_core/cookies.ts:46`  
**CWE:** CWE-614 — Sensitive Cookie Without Secure Attribute  

**Description:**  
`sameSite: "none"` requires `Secure: true` in all modern browsers. In development (HTTP), `isSecureRequest()` returns `false`, so the session cookie is set with `SameSite=None; Secure=false` — browsers silently reject this cookie, causing all sessions to fail in dev, and creating a cross-site request vector if HTTP is ever used in production.

**Recommended Fix:**  
```ts
sameSite: isSecureRequest(req) ? "none" : "lax",
secure: isSecureRequest(req),
```

---

### M-02: No Request Audit Logging on Sensitive Routes
**CWE:** CWE-778 — Insufficient Logging

**Description:**  
Auth events (login, logout, admin actions) are not logged with IP address, user ID, and timestamp. Impossible to detect brute-force attempts or audit privilege escalation.

**Recommended Fix:**  
Add structured logging middleware on `/api/oauth/callback`, `protectedProcedure`, and `adminProcedure` that records: `{ timestamp, ip, userId, route, statusCode }` to stdout (ingested by Netlify/Render log drain).

---

### M-03: No Maximum Length on tRPC Input Fields
**File:** `server/_core/systemRouter.ts:17-21`  
**CWE:** CWE-400 — Uncontrolled Resource Consumption

**Description:**  
`notifyOwner` input accepts `content: z.string().min(1)` with no max length. A malicious admin could POST a 10MB notification payload. Similar issue exists on any string field without `.max()`.

**Recommended Fix:**  
```ts
content: z.string().min(1).max(5000),
title: z.string().min(1).max(200),
```

---

### M-04: Database Silently No-Ops When `DATABASE_URL` Missing
**File:** `server/db.ts:10`  
**CWE:** CWE-390 — Detection of Error Condition Without Action

**Description:**  
`upsertUser` silently returns (with a `console.warn`) when the database is unavailable. Auth functions appear to succeed — the session token is issued — but the user is never persisted. On next request, `authenticateRequest` hits `getUserByOpenId` which also silently returns `undefined`, causing a 403.

**Recommended Fix:**  
Throw in `upsertUser` when DB is unavailable in production (`ENV.isProduction`). Accept silent no-op only in dev/test.

---

### M-05: LLM Error Details Exposed in API Response
**File:** `server/_core/llm.ts:326`  
**CWE:** CWE-209 — Generation of Error Message Containing Sensitive Information

**Description:**  
```ts
throw new Error(`LLM invoke failed: ${response.status} ${response.statusText} – ${errorText}`)
```
The full error body from the upstream AI provider (including internal model IDs, rate-limit quotas, or API key format hints) is bubbled up to the tRPC caller.

**Recommended Fix:**  
Log the detailed error server-side, return a sanitised message to the caller:
```ts
console.error("[LLM] invoke failed:", response.status, errorText);
throw new Error("AI request failed. Please try again.");
```

---

## Low Findings (P3) — Accepted or Trivial

### L-01: Voice Transcription Downloads Arbitrary URLs
**File:** `server/_core/voiceTranscription.ts:97`  
**CWE:** CWE-918 — Server-Side Request Forgery (SSRF)

**Description:**  
`fetch(options.audioUrl)` where `audioUrl` is caller-supplied. If this procedure were accessible to unauthenticated users, an attacker could use the server as an SSRF proxy to internal endpoints (`http://169.254.169.254/` AWS metadata, internal services). Currently only callable via `protectedProcedure` (requires session), which substantially mitigates the risk.

**Recommended Fix:**  
Validate `audioUrl` against an allowlist of storage origins before fetching.

---

### L-02: Image Generation Uses Predictable Filenames via Date.now()
**File:** `server/_core/imageGeneration.ts:85`  
**CWE:** CWE-338 — Use of Cryptographically Weak PRNG

**Description:**  
`generated/${Date.now()}.png` — timestamp-based filenames are guessable by an authenticated user. Combined with the now-fixed storage proxy auth bypass (C-02), this would have allowed enumeration of generated images. Now that auth is required, risk is minimal but filenames remain predictable.

**Recommended Fix:**  
Already uses `appendHashSuffix` in `storagePut` (via `crypto.randomUUID()`). The date prefix leaks generation time but is acceptable given auth protection.

---

## Infrastructure Checklist

| Item | Status |
|------|--------|
| CSP header in netlify.toml | ✅ Done |
| X-Frame-Options | ✅ Done (netlify.toml) |
| X-Content-Type-Options | ✅ Done (netlify.toml + Helmet) |
| Referrer-Policy | ✅ Done (netlify.toml) |
| Permissions-Policy | ✅ Done (netlify.toml) |
| CORS on Express | ✅ Fixed this session |
| Helmet on Express | ✅ Fixed this session |
| Rate limiting | ✅ Fixed this session |
| JWT_SECRET fail-fast | ✅ Fixed this session |
| Path traversal on storage proxy | ✅ Fixed this session |
| Auth on storage proxy | ✅ Fixed this session |
| Open redirect in OAuth | ✅ Fixed this session |
| DOMPurify on blog HTML | ✅ Done (prior session) |
| Netlify honeypot on contact form | ✅ Done (prior session) |
| npm overrides for form-data CVE | ✅ Done (prior session) |
| Supabase key in env var (no fallback) | ⚠️ Set VITE_SUPABASE_ANON_KEY in Netlify |
| Supabase RLS enabled | ⚠️ Must be configured in Supabase dashboard |
| sameSite cookie fix | ⚠️ Pending (M-01) |
| Audit logging | ⚠️ Pending (M-02) |
| tRPC input max lengths | ⚠️ Pending (M-03) |

---

## Dependency Audit

Run monthly: `npm audit --audit-level=high`

Previous state: 1 Critical CVE (form-data), 8 High CVEs (axios)  
Current state after patches: 0 Critical, 0 High (11 moderate — all in dev tools, not runtime)

**Packages patched this session:**
- `axios`: `^1.12.0` → `^1.16.0`
- `drizzle-orm`: `^0.44.5` → `^0.45.2`  
- `form-data`: overridden to `>=4.0.6` (fixes CVE-2023-45857)

---

## Security Roadmap

### Immediate (before next user launch)
1. Set `JWT_SECRET` in production environment (Netlify/Render env vars)
2. Set `VITE_SUPABASE_ANON_KEY` in Netlify dashboard; remove hardcoded fallback
3. Enable RLS on all Supabase tables

### Short Term (within 2 weeks)
4. Fix `sameSite` cookie logic (M-01)
5. Add `.max()` to all tRPC string inputs (M-03)
6. Add audit logging middleware (M-02)

### Medium Term (within 1 month)
7. Sanitise LLM error messages (M-05)
8. SSRF protection on voice transcription audioUrl (L-01)
9. Add `ALLOWED_ORIGINS` env var to production Netlify config
10. Monthly `npm audit` check in CI

---

*This document should be updated after each security change. Store in `.gitignore` if it contains any secret values — this version is safe to commit.*
