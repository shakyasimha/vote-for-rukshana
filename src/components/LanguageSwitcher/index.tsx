"use client";

import { useLanguage } from "@/lib/languageContext";

type LanguageLabels = {
  en: string;
  ne: string;
  new: string;
};

const languageLabels: LanguageLabels = {
  en: "en",
  ne: "ने",
  new: "𑐣𑐾",
};

const languageOrder: ("en" | "ne" | "new")[] = ["en", "ne", "new"];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const handleClick = () => {
    const currentIndex = languageOrder.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languageOrder.length;
    setLang(languageOrder[nextIndex]);
  };

  return (
    <button
      className="mx-2 my-2 px-2 py-2 w-12 flex items-center justify-center rounded-xl bg-white border-2 border-gray-300 text-gray-700 font-medium hover:border-red-700 hover:text-red-700 transition duration-300"
      onClick={handleClick}
    >
      {languageLabels[lang]}
    </button>
  );
}
