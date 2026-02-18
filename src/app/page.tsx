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
      <section id="manifesto" className="w-full bg-[#292f8c] text-[#f5f5fc] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className={`${font[lang].headerFont} ${
              lang === "new" ? "" : "font-bold"
            } mb-8 text-4xl text-center`}
          >
            {lang === "en"
              ? "Manifesto"
              : lang === "ne"
              ? "घोषणा पत्र"
              : "बचंपौ"
            }
          </h2>
          {/* Add section content here */}
        </div>
      </section>

      {/* Pamphlet */}
      <section id="pamphlet" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2
            className={`${font[lang].headerFont} ${
              lang === "new" ? "" : "font-bold"
            } mb-8 text-4xl text-center text-[#ac221f]`}
          >
            {lang === "en"
              ? "Pamphlet"
              : lang === "ne"
              ? "चुनावी चर्चा"
              : "बचंपौ"
            }
          </h2>
      </section>

      {/* Links / Publications */}
      <section id="links" className="w-full bg-[#292f8c] text-[#f5f5fc] py-12">
        <h2
            className={`${font[lang].headerFont} ${
              lang === "new" ? "" : "font-bold"
            } mb-8 text-4xl text-center`}
          >
            {lang === "en"
              ? "Connect With Me On Social Media"
              : lang === "ne"
              ? "मेरो सामाजिक सञ्जालका खाताहरूसँग जोडिनुहोस् "
              : "जि नापं सामाजिक संजालय् स्वानादिसँ"
            }
          </h2>
          {/* Add section content here */}
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2
            className={`${font[lang].headerFont} ${
              lang === "new" ? "" : "font-bold"
            } mb-8 text-4xl text-center text-[#ac221f]`}
          >
            {lang === "en"
              ? "Contact"
              : lang === "ne"
              ? "सम्पर्क"
              : "𑐳𑑂𑐰𑐵𑐥𑐹"
            }
          </h2>
      </section>

      {/* Footer / Contact */}
      <div className="mt-auto">
        <Footer lang={lang} />
      </div>
    </div>
  );
}
