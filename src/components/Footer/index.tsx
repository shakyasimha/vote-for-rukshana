import { font } from "@/lib/langFont";
import type { Language } from "@/ui/languages";

import Link from "next/link";

export const footerContent = {
  en: {
    name: "Rukshana Kapali",
    party: "Progressive Democratic Party",
    text: "Proportional Representation Candidate for House of Representatives Election, 2026.",
    secretariatHeader: "Campaign Secretariat",
    location: "📍 Yala, Nepal",
    email: "rukshanainpolitics@gmail.com",
    phone: "+977 9808262699",
    footerName: "Rukshana Kapali",
    year: "1146",
  },
  ne: {
    name: "रुक्शना कपाली",
    party: "प्रगतिशील लोकतान्त्रिक पार्टी",
    text: "समानुपातिक उम्मेदवार, प्रतिनिधि सभा निर्वाचन, २०८२",
    secretariatHeader: "अभियान सचिवालय",
    location: "📍 यल, नेपाल",
    email: "rukshanainpolitics@gmail.com",
    phone: "+९७७ ९८०८२६२६९९",
    footerName: "रुक्शना कपाली",
    year: "११४६",
  },
  nb: {
    name: "रुक्शना कपालि",
    party: "𑐥𑑂𑐬𑐐𑐟𑐶𑐳𑐶𑐮 𑐮𑑀𑐎𑐟𑐵𑑄𑐟𑑂𑐬𑐶𑐎 𑐥𑐵𑐬𑑂𑐟𑐶",
    text: "𑐳𑐩𑐵𑐣𑐸𑐥𑐵𑐟𑐶𑐎 𑐄𑐩𑑂𑐩𑐾𑐡𑐰𑐵𑐬, 𑐥𑑂𑐬𑐟𑐶𑐣𑐶𑐢𑐶 𑐳𑐨𑐵 𑐟𑑅𑐮𑑂𑐫𑐖𑑂𑐫𑐵, 𑑑𑑑𑑔𑑖",
    secretariatHeader: "𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐕𑑂𑐫𑐵𑐘𑑂𑐖𑐾𑐎𑐸𑐠𑐶",
    location: "📍 𑐫𑐮, 𑐣𑐾𑐥𑐵𑐮",
    email: "rukshanainpolitics@gmail.com",
    phone: "+𑑙𑑗𑑗 𑑙𑑘𑑐𑑘𑑒𑑖𑑒𑑖𑑙𑑙",
    footerName: "𑐬𑐸𑐎𑑂𑐳𑐣𑐵 𑐎𑐥𑐵𑐮𑐶",
    year: "𑑑𑑑𑑔𑑖",
  },
};

type FooterProps = {
  lang?: Language;
};

export default function Footer({ lang = "ne" }: FooterProps) {
  // Logic to check if the language exists in footerContent, otherwise default to 'ne'
  const effectiveLanguage = (['en', 'ne', 'nb'].includes(lang) ? lang : 'ne') as 'en' | 'ne' | 'nb';
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