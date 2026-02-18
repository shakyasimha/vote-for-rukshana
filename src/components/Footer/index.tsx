import {
  alegreyaSans,
  alegreyaSC,
  nithyaRanjana,
  newaLipi,
  notoSerifDevanagari,
} from "@/ui/fonts";

import Link from "next/link";
import { text } from "stream/consumers";

export const footerContent = {
  en: {
    name: "Rukshana Kapali",
    party: "Progressive Democratic Party",
    text: "Proportional Representation Candidate for House of Representatives Election, 2026.",
    secretariatHeader: "Campaign Secretariat",
    location: "📍 Yala, Nepal",
    email: "secretariat@rukshana2026.org",
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
    email: "secretariat@rukshana2026.org",
    phone: "+९७७ ९८०८२६२६९९",
    footerName: "रुक्शना कपाली",
    year: "११४६",
  },
  new: {
    name: "रुक्शना कपाली",
    party: "𑐥𑑂𑐬𑐐𑐟𑐶𑐱𑐷𑐮 𑐮𑑀𑐎𑐟𑐵𑐣𑑂𑐟𑑂𑐬𑐶𑐎 𑐥𑐵𑐬𑑂𑐚𑐷",
    text: "𑐳𑐩𑐵𑐣𑐸𑐥𑐵𑐟𑐶𑐎 𑐄𑐩𑑂𑐩𑐾𑐡𑐰𑐵𑐬, 𑐥𑑂𑐬𑐟𑐶𑐣𑐶𑐢𑐶 𑐳𑐨𑐵 𑐣𑐶𑐬𑑂𑐰𑐵𑐔𑐣, 𑑒𑑐𑑘𑑒",
    secretariatHeader: "𑐀𑐨𑐶𑐫𑐵𑐣 𑐳𑐔𑐶𑐰𑐵𑐮𑐫",
    location: "📍 𑐫𑐮, 𑐣𑐾𑐥𑐵𑐮",
    email: "secretariat@rukshana2026.org",
    phone: "+𑑙𑑗𑑗 𑑙𑑘𑑐𑑘𑑒𑑖𑑒𑑖𑑙𑑙",
    footerName: "𑐬𑐸𑐎𑑂𑐳𑐣𑐵 𑐎𑐥𑐵𑐮𑐶",
    year: "𑑑𑑑𑑔𑑖",
  },
};

const fonts = {
  en: {
    header: alegreyaSC.className,
    subheader: alegreyaSC.className,
    body: alegreyaSans.className,
  },
  ne: {
    header: notoSerifDevanagari.className,
    subheader: notoSerifDevanagari.className,
    body: notoSerifDevanagari.className,
  },
  new: {
    header: nithyaRanjana.className,
    subheader: notoSerifDevanagari.className,
    body: notoSerifDevanagari.className,
  },
};

type FooterProps = {
  lang?: "en" | "ne" | "new";
};

export default function Footer({ lang = "new" }: FooterProps) {
  const info = footerContent[lang];
  const font = fonts[lang];

  return (
    <footer className="bg-[#292f8c] text-[#f5f5f5] py-16 flex flex-col">
      
      {/* Top Content (grows to push bottom down) */}
      <div className="flex max-w-4xl mx-auto flex-col md:flex-row w-full items-start px-8 gap-40">
        
        {/* Name + Party */}
        <div className="shrink-2 flex flex-col gap-4 sm:m-0 m-2">
          <span
            className={`${font.header} ${
              lang === "new" ? "" : "font-bold"
            } text-5xl leading-tight`}
          >
            {info.name}
          </span>
          <span
            className={`${font.subheader} ${
              lang === "new" ? "" : "font-semibold"
            } text-xl text-[#f5f5f5]/80 leading-snug`}
          >
            {info.party}
          </span>
          <span
            className={`${font.subheader} ${
              lang === "new" ? "" : "font-semibold"
            } text-l text-[#f5f5f5]/80 leading-snug`}
          >
            {info.text}
          </span>
        </div>

        {/* Campaign Secretariat */}
        <div className={`${font.body} shrink-2 flex flex-col gap-3 sm:m-0 m-4 text-base`}>
          <h2 className={`${lang === "new" ? "" : "font-bold"} text-lg text-[#f5f5f5] mb-1`}>
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
          <span className="text-[#f5f5f5]/80">📞 {info.phone}</span>
        </div>
      </div>

      {/* Divider + Bottom text pinned to bottom */}
      <div className="mt-24 mb-[-48]">
        <div className="mx-auto w-3/4 h-px bg-white/20"></div>
        <div className={`${font.body} text-center text-sm mt-4 text-[#f5f5f5]/50`}>
          &copy; {lang == "new" ? "𑐣𑐾.𑐳𑑄." : lang == "ne" ? "ने.सं." : "N.S."}{" "}
          {info.year}. {info.footerName}.
        </div>
      </div>
    </footer>
  );
}