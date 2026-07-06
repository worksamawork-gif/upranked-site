function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value || value.trim() === "") {
    throw new Error(
      `[Startup] FATAL: required environment variable "${key}" is not set. ` +
      `Server cannot start safely without it.`
    );
  }
  return value;
}

function optionalEnv(key: string): string {
  return process.env[key] ?? "";
}

// Validate critical secrets at startup — fail fast rather than silently issuing insecure tokens.
export const ENV = {
  appId: optionalEnv("VITE_APP_ID"),
  // JWT_SECRET must be set; an empty fallback would make all JWTs cryptographically void.
  cookieSecret: requireEnv("JWT_SECRET"),
  databaseUrl: optionalEnv("DATABASE_URL"),
  oAuthServerUrl: optionalEnv("OAUTH_SERVER_URL"),
  ownerOpenId: optionalEnv("OWNER_OPEN_ID"),
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: optionalEnv("BUILT_IN_FORGE_API_URL"),
  forgeApiKey: optionalEnv("BUILT_IN_FORGE_API_KEY"),
};
