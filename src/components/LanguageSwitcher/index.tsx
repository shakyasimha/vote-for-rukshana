"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
// 1. Rename the import to avoid the conflict
import { type Language, languages as allLanguages } from "@/ui/languages";

const languageLabels: Record<Language, string> = {
  ne: "ने", en: "EN", nb: "𑐣𑐾", nbd: "दो", nsl: "ने", bo: "བོ", hi: "हि", bn: "बं", ur: "اردو",
  bhj: "𑂦𑂷", bhjd: "भो", mai: "𑒧𑒻", maid: "मै", xsr: "ཤ", tmg: "ཏ", tmgd: "ता",
  acchami: "अछा", angika: "अं", awadhi: "अव", bahing: "बा", baitadeli: "बै",
  bajhangi: "बझा", bajjika: "बज्जि", bantawa: "बाम", chamling: "चाम",
  chhantyal: "छन्त्या", chhepang: "छे", dadeldhuri: "डडे", doteli: "डो",
  dungmali: "दुं", haryanvi: "हर", jirel: "जि", kumal: "कु", lhomi: "ल्हो",
  lohorong: "लोहो", "mgrkham": "खाम", sonaha: "सो", tajpuriya: "ताज",
  dumi: "दु",
};

const languageNames: Record<Language, string> = {
  ne: "नेपाली", en: "English", nb: "𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵", nbd: "दोलखा नेपालभाषा", nsl: "सांकेतिक भाषा",
  bo: "བོད་ཡིག", hi: "हिंदी", bn: "বাংলা", ur: "اردو",
  bhj: "𑂦𑂷𑂔𑂣𑂳𑂩𑂲", bhjd: "भोजपुरी", mai: "𑒧𑒻𑒟𑒱𑒪𑒲", maid: "मैथिली",
  xsr: "ཤར་བའི་གཏམ", tmg: "ཏ་མང་།", tmgd: "तामाङ",
  acchami: "अछामी", angika: "अङ्गिका", awadhi: "अवधी", bahing: "बाहिङ",
  baitadeli: "बैतडेली", bajhangi: "बझाङ्गी", bajjika: "बज्जिका", bantawa: "बान्तावा",
  chamling: "चाम्लिङ",  chhantyal: "छन्त्याल", chhepang: "चेपाङ",
  dadeldhuri: "डडेल्धुरी", doteli: "डोटेली", dungmali: "दुङ्माली",
  haryanvi: "हरियाणवी", jirel: "जिरेल", kumal: "कुमाल", lhomi: "ल्होमी",
  lohorong: "लोहोरुङ", "mgrkham": "मगर खाम", sonaha: "सोनाहा", tajpuriya: "ताजपुरिया", 
  dumi: "दुमी",
};

// 2. Define your specific display order here
const displayOrder:readonly Language[] = allLanguages;

export default function LanguageSwitcher() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const currentLang = (params.lang as Language) || "ne";
  
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    // If Nepali Sign language, route to another page
    if (newLang === "nsl") {
      router.push("/nsl");
      setOpen(false);
      return;
    }

    // Old logic
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
        /* 3. Added max-h-80 and overflow-y-auto for scrollability */
        <ul
          className="absolute right-0 mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300"
          role="listbox"
        >
          {displayOrder.map((l) => (
            <li key={l}>
              <button
                className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between transition-colors duration-150 ${
                  currentLang === l
                    ? "bg-gray-100 text-gray-900 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => handleLanguageChange(l)}
              >
                <span>{languageNames[l] || l}</span>
                <span className="text-xs text-gray-400 font-mono ml-2">{languageLabels[l] || ""}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}