"use client";

import {
  alegreyaSans,
  nithyaRanjana,
  notoSansDevanagari,
  notoSerifDevanagari,
  roboto,
} from "@/ui/fonts";

import { useLanguage } from "@/lib/languageContext";
// import { experienceTabs, publicationTabs } from "@/data/tabContent";
import { useState } from "react";

// // Importing components here
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
// import MdxContent from "@/components/MdxContent";
// import Tabs from "@/components/Tabs";
// import TravelMap from "@/components/TravelMap";

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

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Home / Profile section */}
      <div id="home">
        <Profile lang={lang} />
      </div>

      {/* Introduction */}
      <section id="about" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}>
          About Me
        </h2>
        <div className={`${font[lang].bodyFont} prose prose-gray max-w-none text-justify text-gray-700 [&_p]:mb-4`}>
          About Me (in depth)
          {/* <MdxContent section="about" /> */}
        </div>
      </section>

      <hr className="mx-auto w-1/2 border-t border-gray-300" />

      {/* Manifesto */}
      <section id="experiences" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}>
          Manifesto
        </h2>
        {/* <Tabs tabs={experienceTabs} /> */}
      </section>

      <hr className="mx-auto w-1/2 border-t border-gray-300" />

      {/* Pamphlet */}
      <section id="places-travelled" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}>
          Pamphlet
        </h2>
        {/* <TravelMap /> */}
      </section>

      <hr className="mx-auto w-1/2 border-t border-gray-300" />

      {/* Links / Publications */}
      <section id="publications" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className={`${font[lang].headerFont} ${lang === "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}>
          Links
        </h2>
        {/* <Tabs tabs={publicationTabs} /> */}
      </section>

      {/* Footer / Contact */}
      <div id="contact" className="mt-auto">
        Footer
        <Footer lang={lang} />
      </div>
    </div>
  );
}
