"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "@/lib/languageContext";

const navItems = [
  { label: { en: "Introduction", ne: "परिचय", new: "𑐩𑑂𑐴𑐳𑐶𑐂𑐎𑐵" }, href: "about" },
  { label: { en: "Manifesto", ne: "प्रतिबद्धता पत्र", new: "𑐧𑐔𑑄𑐥𑑁" }, href: "experiences" },
  { label: { en: "Pamphlet", ne: "चुनावी पर्चा", new: "𑐧𑐔𑑄𑐥𑑁" }, href: "places-travelled" },
  { label: { en: "Links", ne: "सामाजिक सञ्जाल", new: "𑐳𑐵𑐩𑐵𑐖𑐶𑐎 𑐳𑑄𑐖𑐵𑐮" }, href: "publications" },
  { label: { en: "Contact Me", ne: "सम्पर्क", new: "𑐳𑑂𑐰𑐵𑐥𑐹" }, href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(href);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const linkClass = "transition-colors duration-200 text-sm tracking-wide text-white/80 hover:text-white";
  const mobileLinkClass = "text-2xl transition-colors duration-200 text-white/60 hover:text-white";

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-[#292f8c] z-40">
        <div className="relative flex items-center px-8 h-16">
          {/* LEFT — nav links */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={`#${item.href}`} onClick={(e) => handleNavClick(e, item.href)} className={linkClass}>
                  {item.label[lang]}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT — language switcher */}
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* ── Mobile Navbar ── */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-[#292f8c] z-40">
        <div className="flex items-center justify-between px-4 h-14">
          {/* LEFT — burger */}
          <button onClick={toggleMenu} className="text-white focus:outline-none p-1" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* RIGHT — language switcher */}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* ── Mobile full-page overlay ── */}
      <div
        className={`md:hidden fixed inset-0 bg-[#292f8c] z-50 flex flex-col transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <button onClick={closeMenu} className="text-white focus:outline-none p-1" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <LanguageSwitcher />
        </div>

        <ul className="flex flex-col items-center justify-center flex-1 gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={`#${item.href}`} onClick={(e) => handleNavClick(e, item.href)} className={mobileLinkClass}>
                {item.label[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}