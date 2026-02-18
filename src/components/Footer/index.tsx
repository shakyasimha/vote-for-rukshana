import {
  alegreyaSans,
  alegreyaSC,
  nithyaRanjana,
  newaLipi,
  notoSerifDevanagari,
} from "@/ui/fonts";

import Link from "next/link";

export const footerContent = {
  en: {
    name: "Rukshana Kapali",
    locationHeader: "Location",
    location: "Yala (Lalitpur), Nepal",
    emailHeader: "Email",
    email: "rukshanakapali1144@gmail.com",
    phoneHeader: "Phone",
    phone: "+977 9808262699",
    footerName: "Rukshana Kapali",
    year: "1146",
  },
  ne: {
    name: "रुक्शना कपाली",
    locationHeader: "स्थान",
    location: "यल (ललितपुर), नेपाल",
    emailHeader: "इमेल",
    email: "rukshanakapali1144@gmail.com",
    phoneHeader: "सम्पर्क",
    phone: "+९७७ ९८०८२६२६९९",
    footerName: "रुक्शना कपाली",
    year: "११४६",
  },
  new: {
    name: "रुक्शना कपाली",
    locationHeader: "𑐠𑐵𑐫𑑂",
    location: "𑐫𑐮, 𑐣𑐾𑐥𑐵𑐮",
    emailHeader: "𑐃𑐩𑐾𑐮",
    email: "rukshanakapali1144@gmail.com",
    phoneHeader: "𑐫𑐵𑑄𑐨𑐵𑐫𑑂 𑐮𑑂𑐫𑐵𑑅",
    phone: "+𑑙𑑗𑑗 𑑙𑑘𑑐𑑘𑑒𑑖𑑒𑑖𑑙𑑙",
    footerName: "𑐬𑐸𑐎𑑂𑐳𑐣𑐵 𑐎𑐥𑐵𑐮𑐶",
    year: "𑑑𑑑𑑔𑑖",
  },
};

const fonts = {
  en: {
    header: alegreyaSC.className,
    body: alegreyaSans.className,
  },
  ne: {
    header: notoSerifDevanagari.className,
    body: notoSerifDevanagari.className,
  },
  new: {
    header: nithyaRanjana.className,
    body: newaLipi.className,
  },
};

type FooterProps = {
  lang?: "en" | "ne" | "new";
};

export default function Footer({ lang = "new" }: FooterProps) {
  const info = footerContent[lang];
  const font = fonts[lang];

  return (
    <footer className="text-[#333] py-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row w-full items-center">
        {/* Name */}
        <div className="flex-1 flex flex-col py-4 gap-2 sm:m-0 m-4">
          <span
            className={`${font.header} ${lang === "new" ? "" : "font-bold"} text-4xl text-red-700`}
          >
            {info.name}
          </span>
        </div>

        {/* Contact links */}
        <div
          className={`${font.body} flex-1 flex flex-col py-4 gap-2 sm:m-0 m-4`}
        >
          <div className="flex flex-row gap-4">
            <h2 className="font-bold min-w-[120px]">{info.locationHeader}</h2>
            <span>{info.location}</span>
          </div>

          <div className="flex flex-row gap-4">
            <h2 className="font-bold min-w-[120px]">{info.emailHeader}</h2>
            <Link
              href={`mailto:${info.email}`}
              className={`${alegreyaSans.className} hover:opacity-60 hover:transition hover:duration-400`}
            >
              {info.email}
            </Link>
          </div>

          <div className="flex flex-row gap-4">
            <h2 className="font-bold min-w-[120px]">{info.phoneHeader}</h2>
            <span>{info.phone}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto w-1/2 h-[1px] bg-gray-400 mt-6"></div>

      {/* Bottom text */}
      <div className={`${font.body} text-center text-xs mt-4`}>
        &copy; {lang == "new" ? "𑐣𑐾.𑐳𑑄." : lang == "ne" ? "ने.सं." : "N.S."}{" "}
        {info.year}. {info.footerName}.
      </div>
    </footer>
  );
}
