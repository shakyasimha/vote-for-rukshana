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
// import Footer from "@/components/Footer";
// import MdxContent from "@/components/MdxContent";
// import Tabs from "@/components/Tabs";
// import TravelMap from "@/components/TravelMap";

// const headerItems = {
//   en: {
//     headerFont: alegreyaSans.className,
//     aboutSection: "About Me",
//     experiencesSection: "My Experiences",
//     travelledSection: "Places Travelled",
//     publicationsSection: "My Publications",
//     advocacySection: "Advocacy & Litigation",
//   },
//   ne: {
//     headerFont: notoSerifDevanagari.className,
//     aboutSection: "मेरो परिचय",
//     experiencesSection: "अनुभव",
//     travelledSection: "भ्रमण गेरेका स्थानहरू",
//     publicationsSection: "प्रकाशन",
//     advocacySection: "वकालत र मुद्दाहरू",
//   },
//   new: {
//     headerFont: nithyaRanjana.className,
//     aboutSection: "जिगु म्हसिइका",
//     experiencesSection: "न्वखं",
//     travelledSection: "भ्रमण गेरेका स्थानहरू",
//     publicationsSection: "प्रकाशन",
//     advocacySection: "वकालत व मुद्दा",
//   },
// };

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
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Home section */}
      <div id="home">
        Header Section Goes Here
        <Profile lang={lang} />
      </div>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        <div className={`${roboto.className} text-center flex-1 md:mr-4 mx-4`}>
          {/* About Me */}
          {activeSection === "about" && (
            <div id="about">
              <h2
                className={`${font[lang].headerFont} ${lang == "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}
              >
                About Me goes here
                {/* {headerItems[lang].aboutSection} */}
              </h2>

              <div
                className={`${font[lang].bodyFont} prose prose-gray max-w-none text-justify text-gray-700 [&_p]:mb-4`}
              >
                About Me (in depth)
                {/* <MdxContent section="about" /> */}
              </div>
            </div>
          )}

          {/* Experiences */}
          {activeSection === "experiences" && (
            <div id="experiences">
              <h2
                className={`${font[lang].headerFont} ${lang == "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}
              >
                Section 2
                {/* {headerItems[lang].experiencesSection} */}
              </h2>

              {/* <Tabs tabs={experienceTabs} /> */}
            </div>
          )}

          {/* Places Travelled */}
          {activeSection === "places-travelled" && (
            <div id="places-travelled">
              <h2
                className={`${font[lang].headerFont} ${lang == "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}
              >
                Section 3
                {/* {headerItems[lang].travelledSection} */}
              </h2>

              {/* <TravelMap /> */}
            </div>
          )}

          {/* Publications */}
          {activeSection === "publications" && (
            <div id="publications">
              <h2
                className={`${font[lang].headerFont} ${lang == "new" ? "" : "font-bold"} mb-8 text-3xl text-red-700 text-center`}
              >
                Section 4 
                {/* {headerItems[lang].publicationsSection} */}
              </h2>

              {/* <Tabs tabs={publicationTabs} /> */}
            </div>
          )}
        </div>
      </div>

      {/* Footer section */}
      <div id="contact">
        Footer 
        {/* <Footer lang={lang} /> */}
      </div>
    </div>
  );
}
