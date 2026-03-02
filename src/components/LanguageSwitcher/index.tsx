"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
// 1. Rename the import to avoid the conflict
import { type Language, languages as allLanguages } from "@/ui/languages";

const languageLabels: Record<Language, string> = {
  // --- Priority Top 4 ---
  en: "EN",
  ne: "ने",
  nsl: "ने",
  nb: "𑐣𑐾",

  // --- Alphabetical Order ---
  acchami: "अछा",
  angika: "अं",
  awadhi: "अव",
  bahing: "बा",
  baitadeli: "बै",
  bajhangi: "बझा",
  bajjika: "बज्जि",
  bajureli: "बजु",
  bambule: "बम्",
  bantawa: "बाम",
  bhojpuri: "𑂦𑂷",
  bhojpuri_deva: "भोजपुरी",
  bn: "বা",  
  bo: "བོ",
  chamling: "चाम",
  chhantyal: "छन्त्या",
  chhepang: "छे",
  chhintang: "छि",
  dadeldhuri: "डडे",
  dhimal: "धि",
  dolakha: "दो",
  doteli: "डो",
  dumi: "दु",
  dungmali: "दुं",
  haryanvi: "हर",
  hi: "हिं",
  jirel: "जि",
  kumal: "कु",
  lhomi: "ल्हो",
  lohorong: "लोहो",
  magahi: "मग",
  majhi: "मा",
  marwadi: "मार",
  mgrkham: "खाम",
  maithili: "𑒧𑒻",
  maithili_deva: "मैथिली",
  pali: "𑀧𑀸",
  palideva: "पा",
  palinewa: "𑐥𑐵",
  puma: "पु",
  punjabi: "ਪੰ",
  rajbanshi: "राज",
  sindhi: "",
  skt: "सं",
  sktnewa: "𑐳𑑄",
  sonaha: "सो",
  tajpuriya: "ताज",
  tamu: "तम",
  thami: "थामी",
  "tharu-kochila": "थारु",
  "tharu-lampuchwa": "थारु",
  "tharu-rana": "थारु",
  "tharu-saptariya": "थारु",
  tmg: "ཏ",
  tmgd: "ता",
  ur: "ا",
  urav: "उ",
  xsr: "ཤ",
  yakkha: "या",
};

const languageNames: Record<Language, string> = {
  // --- Priority Top 4 ---
  en: "English",
  ne: "नेपाली",
  nsl: "सांकेतिक भाषा",
  nb: "𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵",

  // --- Alphabetical Order ---
  acchami: "अछामी",
  angika: "अङ्गिका",
  awadhi: "अवधी",
  bahing: "बाहिङ",
  baitadeli: "बैतडेली",
  bajhangi: "बझाङ्गी",
  bajjika: "बज्जिका",
  bajureli: "बाजुरेली",
  bambule: "बाम्बुले",
  bantawa: "बान्तावा",
  bhojpuri: "𑂦𑂷𑂔𑂣𑂳𑂩𑂲",
  "bhojpuri_deva": "भोजपुरी",
  bn: "বাংলা",
  bo: "བོད་ཡིག",
  chamling: "चाम्लिङ",
  chhantyal: "छन्त्याल",
  chhepang: "चेपाङ",
  chhintang: "छिन्ताङ",
  dadeldhuri: "डडेल्धुरी",
  dhimal: "धिमाल",
  dolakha: "दोलखा नेपालभाषा",
  doteli: "डोटेली",
  dumi: "दुमी",
  dungmali: "दुङ्माली",
  haryanvi: "हरियाणवी",
  hi: "हिंदी",
  jirel: "जिरेल",
  kumal: "कुमाल",
  lhomi: "ल्होमी",
  lohorong: "लोहोरुङ",
  magahi: "मगही",
  majhi: "माझी",
  marwadi: "मारवाडी",
  mgrkham: "मगर खाम",
  maithili: "𑒧𑒻",
  "maithili_deva": "मैथिली",
  pali: "𑀧𑀸𑀮𑀺",
  palideva: "पालि",
  palinewa: "𑐥𑐵𑐮𑐶",
  puma: "पुमा",
  punjabi: "ਪੰਜਾਬੀ",
  rajbanshi: "राजवंशी",
  sindhi: "سنڌي",
  skt: "संस्कृतम्",
  sktnewa: "𑐳𑑄𑐳𑑂𑐎𑐺𑐟𑐩𑑂",
  sonaha: "सोनाहा",
  tajpuriya: "ताजपुरिया",
  tamu: "तमु (गुरुङ)",
  thami: "थामी",
  "tharu-kochila": "थारु (कोचिला)",
  "tharu-lampuchwa": "थारु (लाम्पूछ्वा)",
  "tharu-rana": "थारु (राना)",
  "tharu-saptariya": "थारु (सप्तरीया)",
  tmg: "ཏ་མང་།",
  tmgd: "तामाङ",
  ur: "اُردُو།",
  urav: "उराव",
  xsr: "ཤར་བའི་གཏམ།",
  yakkha: "याक्खा",
};

// 2. Define your specific display order here
// We'll ensure the "Priority Top 4" languages appear first, followed by the
// rest in their natural order. `allLanguages` already contains every language,
// typically sorted alphabetically.
const priorityTop4: Language[] = ["en", "ne", "nsl", "nb"];

const displayOrder: readonly Language[] = [
  ...priorityTop4,
  ...allLanguages.filter((l) => !priorityTop4.includes(l)),
];

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