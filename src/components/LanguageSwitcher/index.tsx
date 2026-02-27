"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import { type Language } from "@/ui/languages";

type Lang = "ne" | "en" | "nb" | "nbd" | "tib";

const languageLabels: Record<Lang, string> = {
  ne: "ने",
  en: "EN",
  nb: "𑐣𑐾",
  nbd: "दोलखा",
  tib: "བོ",
};

const languageNames: Record<Lang, string> = {
  ne: "नेपाली",
  en: "English",
  nb: "𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵",
  nbd: "दोलखा नेपालभाषा",
  tib: "བོད་ཡིག",
};

const languageOrder: Lang[] = ["ne", "en", "nb", "tib"];

export default function LanguageSwitcher() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  
  // Get current lang from URL params, fallback to 'ne'
  const currentLang = (params.lang as Lang) || "ne";
  
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLanguageChange = (newLang: Lang) => {
    // 1. Get the current path (e.g., /en/about)
    // 2. Replace the first segment (the lang) with the newLang
    const segments = pathname.split("/");
    segments[1] = newLang; 
    const newPath = segments.join("/");

    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        className="mx-1 my-2 px-3 py-2 min-w-12 flex items-center justify-center gap-1 rounded-xl bg-white/10 border-2 border-white/30 text-white font-medium hover:border-white hover:bg-white/20 transition duration-300 text-sm"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {languageLabels[currentLang] || "ने"}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50"
          role="listbox"
        >
          {languageOrder.map((l) => (
            <li key={l}>
              <button
                className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between transition-colors duration-150 ${
                  currentLang === l
                    ? "bg-gray-100 text-gray-900 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => handleLanguageChange(l)}
              >
                <span>{languageNames[l]}</span>
                <span className="text-xs text-gray-400 font-mono">{languageLabels[l]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}