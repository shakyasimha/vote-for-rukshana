"use client";

import {
  alegreyaSans,
  nithyaRanjana,
  notoSansDevanagari,
  notoSerifDevanagari,
  roboto,
} from "@/ui/fonts";

// import enContent from "@/content/en.mdx";
// import neContent from "@/content/ne.mdx";
// import { content } from "@/content/content";
import { useLanguage } from "@/lib/languageContext";
// import { experienceTabs, publicationTabs } from "@/data/tabContent";
// import { useState } from "react";

// // Importing components here
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import StaticContent from "@/components/StaticContent";
// import MdxContent from "@/components/MdxContent";

const font = {
  en: {
    headerFont: alegreyaSans.className,
    bodyFont: roboto.className,
  },
  ne: {
    headerFont: notoSerifDevanagari.className,
    bodyFont: notoSansDevanagari.className,
  },
  new: {
    headerFont: nithyaRanjana.className,
    bodyFont: roboto.className,
  },
};

// Main component
export default function Home() {
  const { lang } = useLanguage();
  // const [activeSection, setActiveSection] = useState("about");
  // const source = lang === "en" ? enContent : neContent;
  // const mdxContent = lang === "en" ? enContent : neContent;

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
      <section id="manifesto" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}>
          Manifesto
        </h2>
        {/* <Tabs tabs={experienceTabs} /> */}
      </section>

      <hr className="mx-auto w-1/2 border-t border-gray-300" />

      {/* Pamphlet */}
      <section id="pamphlet" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}>
          Pamphlet
        </h2>
        {/* <TravelMap /> */}
      </section>

      <hr className="mx-auto w-1/2 border-t border-gray-300" />

      {/* Links / Publications */}
      <section id="links" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}>
          Links
        </h2>
        {/* <Tabs tabs={publicationTabs} /> */}
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}>
          Contact
        </h2>
        {/* <Tabs tabs={publicationTabs} /> */}
      </section>

      {/* Footer / Contact */}
      <div className="mt-auto">
        <Footer lang={lang} />
      </div>
    </div>
  );
}
