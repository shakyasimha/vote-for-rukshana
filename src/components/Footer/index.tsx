import { font } from "@/lib/langFont";
import type { Language } from "@/ui/languages";

import Link from "next/link";
import { footerContent } from "@/content/footer";
// import { text } from "stream/consumers";

type FooterProps = {
  lang?: Language;
};

export default function Footer({ lang = "new" }: FooterProps) {
  const info = footerContent[lang];

  return (
    <footer className="bg-[#262c7a] text-[#f5f5f5] py-16 flex flex-col">
      
      {/* Top Content (grows to push bottom down) */}
      <div className="flex max-w-4xl mx-auto flex-col md:flex-row w-full items-start px-8 gap-40">
        
        {/* Name + Party */}
        <div className="shrink-2 flex flex-col gap-4 sm:m-0 m-2">
          <span
            className={`${font[lang].headerFont} ${
              lang === "new" ? "" : "font-bold"
            } text-5xl leading-tight`}
          >
            {info.name}
          </span>
          <span
            className={`${font[lang].bodyFont} ${
              lang === "new" ? "" : "font-semibold"
            } text-xl text-[#f5f5f5]/80 leading-snug`}
          >
            {info.party}
          </span>
          <span
            className={`${font[lang].bodyFont} ${
              lang === "new" ? "" : "font-semibold"
            } text-l text-[#f5f5f5]/80 leading-snug`}
          >
            {info.text}
          </span>
        </div>

        {/* Campaign Secretariat */}
        <div className={`${font[lang].bodyFont} shrink-2 flex flex-col gap-3 sm:m-0 m-4 text-base`}>
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
          {/* <span className="text-[#f5f5f5]/80">📞 {info.phone}</span> */}
        </div>
      </div>

      {/* Divider + Bottom text pinned to bottom */}
      <div className="mt-24 mb-[-48]">
        <div className="mx-auto w-3/4 h-px bg-white/20"></div>
        <div className={`${font[lang].bodyFont} text-center text-sm mt-4 text-[#f5f5f5]/50`}>
          &copy; {lang == "new" ? "𑐣𑐾.𑐳𑑄." : lang == "ne" ? "ने.सं." : "N.S."}{" "}
          {info.year}. {info.footerName}.
        </div>
      </div>
    </footer>
  );
}