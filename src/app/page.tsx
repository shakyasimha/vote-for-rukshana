"use client"

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/lib/languageContext";
import { font } from "@/lib/langFont";

// Importing components here
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import MdxContent from "@/components/MdxContent";

export default function Home() {
  const { lang } = useLanguage();

  // Define the fallback logic: If lang is not 'en' or 'new', default to 'ne'
  const activeLang = (lang === "en" || lang === "new") ? lang : "ne";

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Home / Profile section */}
      <div id="home">
        <Profile lang={activeLang} />
      </div>

      {/* Introduction */}
      <section id="introduction" className="max-w-4xl mx-auto w-full px-4 py-12">
        <MdxContent lang={activeLang} />
      </section>

      <hr className="mx-auto w-1/2 border-t border-gray-300" />

      {/* Manifesto */}
      {(lang === "en" || lang === "ne" || lang === "new") && (
      <section id="manifesto" className="w-full bg-[#292f8c] text-[#f5f5fc] py-12">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2
            className={`${font[activeLang].headerFont} ${activeLang === "new" ? "" : "font-bold"} mb-4 md:mb-0 text-4xl text-center md:text-left`}
          >
            {activeLang === "en"
              ? "Click here to read manifesto"
              : activeLang === "new"
              ? "𑐖𑐶𑐐𑐹 𑐧𑐔𑑄𑐥𑑁 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵𑑄 𑐧𑑂𑐰𑐣𑐾𑐟 𑐠𑐣 𑐟𑐶𑐫𑐵𑐡𑐶𑐳𑑃 𑑋"
              : "प्रतिबद्धता पत्र पढ्न क्लिक गर्नुहोस्"}
          </h2>

          <Link
            href="/manifesto-np.pdf"
            target="_blank"
            className={`${font[activeLang].bodyFont} bg-[#ac221f] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-lg md:text-xl text-center`}
          >
            {activeLang === "en"
              ? "Read ->"
              : activeLang === "new"
              ? "𑐧𑑂𑐰𑐣𑐵𑐡𑐶𑐳𑑃 ->"
              : "पढ्नुहोस् ->"}
          </Link>
        </div>
      </section>
      )}

      {/* Pamphlet Section */}
      {(lang === "en" || lang === "ne" || lang === "new") && (
      <section id="pamphlet" className="w-full bg-[#f5f5fc] mx-auto px-4 py-12">
        <h2 className={`${font[activeLang].headerFont} ${activeLang === "new" ? "" : "font-bold"} mb-8 text-4xl text-center text-[#ac221f]`}>
          {activeLang === "en" ? "Pamphlet" : activeLang === "new" ? "प्रचारपत्र" : "प्रचारपत्र"}
        </h2>
      </section>
      )}

      {/* Links */}
      {(lang === "en" || lang === "ne" || lang === "new") && (
      <section id="links" className="w-full bg-[#292f8c] py-16">
        <h2
          className={`${font[activeLang].headerFont} ${
            activeLang === "new" ? "" : "font-bold"
          } mb-16 text-4xl text-center text-white`}
        >
          {activeLang === "en"
            ? "Connect With Me On Social Media"
            : activeLang === "new"
            ? "𑐖𑐶 𑐣𑐵𑐥𑑄 𑐳𑐵𑐩𑐵𑐖𑐶𑐎 𑐳𑑄𑐖𑐵𑐮𑐫𑑂 𑐳𑑂𑐰𑐵𑐣𑐵𑐡𑐶𑐳𑑃"
            : "मेरो सामाजिक सञ्जालका खाताहरूसँग जोडिनुहोस्"}
        </h2>

        <div className={`${font[activeLang].headerFont} grid grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto gap-x-12 gap-y-8 mb-8`}>
          <Link href="https://www.facebook.com/rukshanainpolitics" target="_blank" className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform duration-300 text-xl">
            <FaFacebookF size={40} color="#1877F2" />
            {activeLang === "en" ? "Facebook" : activeLang === "new" ? "𑐦𑐾𑐳𑐧𑐸𑐎" : "फेसबुक"}
          </Link>

          <Link href="https://www.instagram.com/rukshanainpolitics" target="_blank" className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform duration-300 text-xl">
            <FaInstagram size={40} color="#E4405F" />
            {activeLang === "en" ? "Instagram" : activeLang === "new" ? "𑐂𑐣𑐳𑑂𑐟𑐵𑐐𑑂𑐬𑐵𑐩" : "ईन्स्टाग्राम"}
          </Link>

          <Link href="https://x.com/RukshanaNPolicy" target="_blank" className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform duration-300 text-xl">
            <FaXTwitter size={40} color="#000000" />
            {activeLang === "en" ? "X" : activeLang === "new" ? "𑐊𑐎𑑂𑐳" : "एक्स्"}
          </Link>

          <Link href="https://www.tiktok.com/@rukshanainpolitics" target="_blank" className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform duration-300 text-xl">
            <FaTiktok size={40} color="#000" />
            {activeLang === "en" ? "TikTok" : activeLang === "new" ? "𑐟𑐶𑐎𑐟𑐎" : "टिकटक"}
          </Link>

          <Link href="https://rukshanakapali.com.np/" target="_blank" className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform duration-300 text-xl sm:col-span-2">
            <FaGlobe size={40} color="#f5f5fc" />
            {activeLang === "en" ? "Personal Website" : activeLang === "new" ? "𑐠𑑅𑐐𑐸 𑐰𑐾𑐧𑐳𑐵𑐃𑐚" : "व्यक्तिगत वेबसाइट"}
          </Link>
        </div>
      </section>
      )}
          
      
      {/* Contact Section */}
      {(lang === "en" || lang === "ne" || lang === "new") && (
      <section id="contact" className="w-full bg-[#f5f5fc] mx-auto px-4 py-12">
        <h2 className={`${font[activeLang].headerFont} ${activeLang === "new" ? "" : "font-bold"} mb-8 text-4xl text-center text-[#ac221f]`}>
          {activeLang === "en" ? "Contact" : activeLang === "new" ? "स्वापू" : "सम्पर्क"}
        </h2>

        <div className={`${font[activeLang].bodyFont} flex flex-col md:flex-row items-center justify-center md:gap-16 text-center text-black`}>
          <div className="flex-1 text-center flex flex-col justify-start mt-10 md:mt-0">
            <p className={`${activeLang === "new" ? "font-bold" : "font-semibold"} mb-1 text-xl text-[#ac221f]`}>
              {activeLang === "en" ? "Siddhartha Ratna Guvaju" : activeLang === "new" ? "𑐳𑐶𑐡𑑂𑐢𑐵𑐬𑑂𑐠 𑐬𑐟𑑂𑐣 𑐐𑐸𑐨𑐵𑐖𑐸" : "सिद्धार्थ रत्न गुभाजु"}
            </p>
            <p className="mb-2">{activeLang === "en" ? "Secretary" : activeLang === "new" ? "𑐳𑐔𑐶𑐰" : "सचिव"}</p>
            <Link href="mailto:rukshanasecretariat1@gmail.com" className="hover:opacity-60 transition duration-300">
              rukshanasecretariat1@gmail.com
            </Link>
          </div>

          <div className="hidden md:block w-0.5 bg-[#ac221f] mx-4"></div>

          <div className="flex-1 text-center flex flex-col justify-start mt-10 md:mt-0">
            <p className={`${activeLang === "new" ? "font-bold" : "font-semibold"} mb-1 text-xl text-[#ac221f]`}>
              {activeLang === "en" ? "Pratik Thapa" : activeLang === "new" ? "𑐥𑑂𑐬𑐟𑐶𑐎 𑐠𑐵𑐥𑐵" : "प्रतिक थापा"}
            </p>
            <p className="mb-2">{activeLang === "en" ? "Secretary" : activeLang === "new" ? "𑐳𑐔𑐶𑐰" : "सचिव"}</p>
            <Link href="mailto:rukshanasecretariat2@gmail.com" className="hover:opacity-60 transition duration-300">
              rukshanasecretariat2@gmail.com
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <div className="mt-auto">
        <Footer lang={activeLang} />
      </div>
    </div>
  );
}