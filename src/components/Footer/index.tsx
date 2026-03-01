import { font } from "@/lib/langFont";
import type { Language } from "@/ui/languages";
import { footerContent } from "./footer";

import Link from "next/link";

type FooterProps = {
  lang?: Language;
};

export default function Footer({ lang = "en" }: FooterProps) {
  // Logic to check if the language exists in footerContent, otherwise default to 'ne'
  const effectiveLanguage = (['en', 'ne', 'nb'].includes(lang) ? lang : 'en') as 'en' | 'ne' | 'nb';
  const info = footerContent[effectiveLanguage as keyof typeof footerContent];

  return (
    <footer className="bg-[#262c7a] text-[#f5f5f5] py-16 flex flex-col">
      
      <div className="flex max-w-4xl mx-auto flex-col md:flex-row w-full items-start px-8 gap-40">
        
        {/* Name + Party */}
        <div className="shrink-2 flex flex-col gap-4 sm:m-0 m-2">
          <span
            className={`${font[effectiveLanguage as keyof typeof font].headerFont} ${
              effectiveLanguage === "nb" ? "" : "font-bold"
            } text-5xl leading-tight`}
          >
            {info.name}
          </span>
          <span
            className={`${font[effectiveLanguage as keyof typeof font].bodyFont} ${
              effectiveLanguage === "nb" ? "" : "font-semibold"
            } text-xl text-[#f5f5f5]/80 leading-snug`}
          >
            {info.party}
          </span>
          <span
            className={`${font[effectiveLanguage as keyof typeof font].bodyFont} ${
              effectiveLanguage === "nb" ? "" : "font-semibold"
            } text-l text-[#f5f5f5]/80 leading-snug`}
          >
            {info.text}
          </span>
        </div>

        {/* Campaign Secretariat */}
        <div className={`${font[effectiveLanguage as keyof typeof font].bodyFont} shrink-2 flex flex-col gap-3 sm:m-0 m-4 text-base`}>
          <h2 className={`${effectiveLanguage === "nb" ? "" : "font-bold"} text-lg text-[#f5f5f5] mb-1`}>
            {info.secretariatHeader}
          </h2>
          <span className="text-[#f5f5f5]/80">{info.location}</span>
          <Link
            href={`mailto:${info.email}`}
            className="flex items-center gap-2 text-[#f5f5f5]/80 hover:opacity-60 transition duration-300"
          >
            <span>📧</span>
            <span>{info.email}</span>
          </Link>
        </div>
      </div>

      {/* Divider + Bottom text */}
      <div className="mt-24 mb-[-48]">
        <div className="mx-auto w-3/4 h-px bg-white/20"></div>
        <div className={`${font[effectiveLanguage as keyof typeof font].bodyFont} text-center text-sm mt-4 text-[#f5f5f5]/50`}>
          &copy; {effectiveLanguage == "nb" ? "𑐣𑐾.𑐳𑑄." : effectiveLanguage == "ne" ? "ने.सं." : "N.S."}{" "}
          {info.year}. {info.footerName}.
        </div>
      </div>
    </footer>
  );
}