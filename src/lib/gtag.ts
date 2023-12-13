// src/lib/gtag.ts

declare global {
  interface Window {
    gtag?: (key: string, target: string, config: { [key: string]: any }) => void;
  }
}
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const existsGaId = GA_MEASUREMENT_ID !== "";

export const pageview = (path: string) => {
  if (window.gtag && existsGaId) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};
