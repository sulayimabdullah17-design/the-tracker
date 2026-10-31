// src/lib/env.ts
export const env = {
  appEnv: import.meta.env.VITE_APP_ENV ?? "development",
  logLevel: import.meta.env.VITE_LOG_LEVEL ?? "info",
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  gaId: import.meta.env.VITE_GA_ID,
  sentryDsn: import.meta.env.VITE_SENTRY_DSN,
} as const;

// التحقق من المتغيرات المطلوبة
if (env.isProd && !env.sentryDsn) {
  console.warn("Sentry DSN missing in production");
}