// src/lib/analytics.ts
import ReactGA from "react-ga4";

export function initAnalytics() {
  if (import.meta.env.PROD && import.meta.env.VITE_GA_ID) {
    ReactGA.initialize(import.meta.env.VITE_GA_ID);
  }
}

export function trackPageView(path: string) {
  ReactGA.send({ hitType: "pageview", page: path });
}

export function trackEvent(category: string, action: string, label?: string) {
  ReactGA.event({ category, action, label });
}