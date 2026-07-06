import type { Express } from "express";
import { ENV } from "./env";
import { sdk } from "./sdk";

const PATH_TRAVERSAL_RE = /(\.\.|\/\/|\\|%2e%2e|%2f|%5c)/i;

function isSafeStorageKey(key: string): boolean {
  if (!key || key.length > 512) return false;
  if (PATH_TRAVERSAL_RE.test(key)) return false;
  // Keys must be printable ASCII, no control characters
  if (/[^\x20-\x7E]/.test(key)) return false;
  return true;
}

export function registerStorageProxy(app: Express) {
  app.get("/manus-storage/*", async (req, res) => {
    // Require authentication — storage files belong to authenticated sessions only
    try {
      await sdk.authenticateRequest(req);
    } catch {
      res.status(401).send("Unauthorized");
      return;
    }

    const key = req.path.replace(/^\/manus-storage\//, "");
    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }

    if (!isSafeStorageKey(key)) {
      res.status(400).send("Invalid storage key");
      return;
    }

    if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
      res.status(500).send("Storage proxy not configured");
      return;
    }

    try {
      const forgeUrl = new URL(
        "v1/storage/presign/get",
        ENV.forgeApiUrl.replace(/\/+$/, "") + "/",
      );
      forgeUrl.searchParams.set("path", key);

      const forgeResp = await fetch(forgeUrl, {
        headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
      });

      if (!forgeResp.ok) {
        const body = await forgeResp.text().catch(() => "");
        console.error(`[StorageProxy] forge error: ${forgeResp.status} ${body}`);
        res.status(502).send("Storage backend error");
        return;
      }

      const { url } = (await forgeResp.json()) as { url: string };
      if (!url) {
        res.status(502).send("Empty signed URL from backend");
        return;
      }

      // Validate the returned URL before redirecting
      let parsedUrl: URL;
      try {
        parsedUrl = new URL(url);
      } catch {
        res.status(502).send("Invalid signed URL from backend");
        return;
      }
      if (!["https:", "http:"].includes(parsedUrl.protocol)) {
        res.status(502).send("Invalid signed URL protocol");
        return;
      }

      res.set("Cache-Control", "no-store");
      res.redirect(307, url);
    } catch (err) {
      console.error("[StorageProxy] failed:", err);
      res.status(502).send("Storage proxy error");
    }
  });
}
