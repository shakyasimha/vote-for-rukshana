"use client"

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/lib/languageContext";
import { font } from "@/lib/langFont";

// // Importing components here
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import StaticContent from "@/components/StaticContent";

// Main component
export default function Home() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Home / Profile section */}
      <div id="home">
        <Profile lang={lang} />
      </div>

      {/* Introduction */}
      <section id="introduction" className="max-w-4xl mx-auto w-full px-4 py-12">
        <StaticContent lang={lang} />
      </section>

      <hr className="mx-auto w-1/2 border-t border-gray-300" />

      {/* Manifesto */}
      <section id="manifesto" className="w-full bg-[#292f8c] text-[#f5f5fc] py-12">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2
            className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-4 md:mb-0 text-4xl text-center md:text-left`}
          >
            {lang === "en"
              ? "Click here to read manifesto"
              : lang === "ne"
              ? "प्रतिबद्धता पत्र पढ्न क्लिक गर्नुहोस्"
              : "𑐖𑐶𑐐𑐹 𑐧𑐔𑑄𑐥𑑁 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵𑑄 𑐧𑑂𑐰𑐣𑐾𑐟 𑐠𑐣 𑐟𑐶𑐫𑐵𑐡𑐶𑐳𑑃 𑑋"}
          </h2>

          <Link
            href="/manifesto-np.pdf"
            target="_blank"
            className={`${font[lang].bodyFont} bg-[#ac221f] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-lg md:text-xl text-center`}
          >
            {lang === "en"
              ? "Read ->"
              : lang === "ne"
              ? "पढ्नुहोस् ->"
              : "𑐧𑑂𑐰𑐣𑐵𑐡𑐶𑐳𑑃 ->"}
          </Link>
        </div>
      </section>

      {/* Links */}
      <section id="links" className="w-full bg-[#f5f5fc] py-16">
        <h2
            className={`${font[lang].headerFont} ${
              lang === "new" ? "" : "font-bold"
            } mb-16 text-4xl text-center text-[#ac221f]`}
          >
            {lang === "en"
              ? "Connect With Me On Social Media"
              : lang === "ne"
              ? "मेरो सामाजिक सञ्जालका खाताहरूसँग जोडिनुहोस् "
              : "𑐖𑐶 𑐣𑐵𑐥𑑄 𑐳𑐵𑐩𑐵𑐖𑐶𑐎 𑐳𑑄𑐖𑐵𑐮𑐫𑑂 𑐳𑑂𑐰𑐵𑐣𑐵𑐡𑐶𑐳𑑃"
            }
          </h2>

          {/* Add section content here */}
          <div className={`${font[lang].headerFont} grid grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto gap-x-12 gap-y-8 mb-8`}>
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/rukshanainpolitics"
              target="_blank"
              className="flex flex-col items-center gap-3 text-black hover:scale-105 transition-transform duration-300 text-xl"
            >
              <FaFacebookF size={40} color="#1877F2" />
              { lang == "en" ? "Facebook" : lang == "ne" ? "फेसबुक" : "𑐦𑐾𑐳𑐧𑐸𑐎"}
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/rukshanainpolitics"
              target="_blank"
              className="flex flex-col items-center gap-3 text-black hover:scale-105 transition-transform duration-300 text-xl"
            >
              <FaInstagram size={40} color="#E4405F" />
              { lang == "en" ? "Instagram" : lang == "ne" ? "ईन्स्टाग्राम" : "𑐃𑐣𑑂𑐳𑑂𑐚𑐵𑐐𑑂𑐬𑐵𑐩"}
            </Link>

            {/* X */}
            <Link
              href="https://x.com/RukshanaNPolicy"
              target="_blank"
              className="flex flex-col items-center gap-3 text-black hover:scale-105 transition-transform duration-300 text-xl"
            >
              <FaXTwitter size={40} color="#000000" />
              { lang == "en" ? "X" : lang == "ne" ? "एक्स्" : "𑐊𑐎𑑂𑐳𑑂"}
            </Link>

            {/* TikTok */}
            <Link
              href="https://www.tiktok.com/@rukshanainpolitics"
              target="_blank"
              className="flex flex-col items-center gap-3 text-black hover:scale-105 transition-transform duration-300 text-xl"
            >
              <FaTiktok size={40} color="#000" />
              { lang == "en" ? "TikTok" : lang == "ne" ? "टिकटक" : "𑐚𑐶𑐎𑐚𑐎"}
            </Link>

            {/* Personal Website */}
            <Link
              href="https://rukshanakapali.com.np/"
              target="_blank"
              className="flex flex-col items-center gap-3 text-black hover:scale-105 transition-transform duration-300 text-xl sm:col-span-2"
            >
              <FaGlobe size={40} color="#4285F4" />
              { lang == "en" ? "Personal Website" : lang == "ne" ? "व्यक्तिगत वेबसाइट" : "𑐠𑑅𑐐𑐸 𑐰𑐾𑐧𑐳𑐵𑐃𑐚"}
            </Link>
          </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full bg-[#292f8c] mx-auto px-4 py-12">
        <h2
          className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-4xl text-center text-[#f5f5fc]`}
        >
          {lang === "en" ? "Contact" : lang === "ne" ? "सम्पर्क" : "स्वापू"}
        </h2>

        <div className={`${font[lang].bodyFont} flex flex-col md:flex-row items-center justify-center md:gap-16 text-center text-[#f5f5fc]`}>

          {/* Middle Section */}
          <div className="flex-1 text-center md:text-center md:px-4 flex flex-col justify-start mt-10 md:mt-0">
            <p className={`${lang === "new" ? "font-bold" : "font-semibold"} mb-1 text-xl`}>
              {lang === "en" ? "Siddhartha Ratna Guvaju" : lang === "ne" ? "सिद्धार्थ रत्न गुभाजु" : "𑐳𑐶𑐡𑑂𑐢𑐵𑐬𑑂𑐠 𑐬𑐟𑑂𑐣 𑐐𑐸𑐨𑐵𑐖𑐸"}
            </p>
            <p className="mb-2">{lang === "en" ? "Secretary" : lang === "ne" ? "सचिव" : "𑐳𑐔𑐶𑐰"}</p>
            <Link
              href="mailto:rukshanasecretariat1@gmail.com"
              className="items-center gap-2 text-[#f5f5f5]/80 hover:opacity-60 transition duration-300"
            >
              rukshanasecretariat1@gmail.com
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-0.5 bg-[#ac221f] mx-4"></div>

          {/* Right Section */}
          <div className="flex-1 text-center md:text-center md:pl-4 flex flex-col justify-start mt-10 md:mt-0">
            <p className={`${lang === "new" ? "font-bold" : "font-semibold"} mb-1 text-xl`}>
              {lang === "en" ? "Pratik Thapa" : lang === "ne" ? "प्रतिक थापा" : "𑐥𑑂𑐬𑐟𑐶𑐎 𑐠𑐵𑐥𑐵"}
            </p>
            <p className="mb-2">{lang === "en" ? "Secretary" : lang === "ne" ? "सचिव" : "𑐳𑐔𑐶𑐰"}</p>
            <Link
              href="mailto:rukshanasecretariat2@gmail.com"
              className="items-center gap-2 text-[#f5f5f5]/80 hover:opacity-60 transition duration-300"
            > 
              rukshanasecretariat2@gmail.com
            </Link>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <div className="mt-auto">
        <Footer lang={lang} />
      </div>
    </div>
  );
}
