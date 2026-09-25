"use client";

import { useCallback, useSyncExternalStore } from "react";
import { languages, type LanguageCode } from "@/content/site";

// Selection only — content isn't translated yet. The choice is remembered per browser.
const STORAGE_KEY = "bn-lang";
const EVENT = "bn-lang-change";

function read(): LanguageCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (languages.some((l) => l.code === stored)) return stored as LanguageCode;
  } catch {}
  return "en";
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useLanguage() {
  const current = useSyncExternalStore(subscribe, read, () => "en" as LanguageCode);

  const setLanguage = useCallback((code: LanguageCode) => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return [current, setLanguage] as const;
}
