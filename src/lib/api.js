const rawApiUrl = import.meta.env.VITE_API_URL || "";

export const API_BASE_URL = rawApiUrl.replace(/\/$/, "");

export const buildApiUrl = (path = "") => {
  if (!API_BASE_URL) {
    return path;
  }

  if (!path) {
    return API_BASE_URL;
  }

  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";
