"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "@/lib/languageContext";

const navItems = [
  { label: { en: "Home", ne: "गृहपृष्ठ", new: "𑐕𑐾𑑄𑐥𑐄" }, href: "/" },
  { label: { en: "About", ne: "परिचय", new: "𑐩𑑂𑐴𑐳𑐶𑐂𑐎𑐵" }, href: "/about" },
  { label: { en: "Experiences", ne: "अनुभव", new: "𑐣𑑂𑐰𑐏𑄀" }, href: "/experiences" },
  { label: { en: "Places Travelled", ne: "भ्रमण स्थानहरू", new: "भ्रमण स्थानहरू" }, href: "/places-travelled" },
  { label: { en: "Publications", ne: "प्रकाशन", new: "𑐥𑑂𑐬𑐎𑐵𑐱𑐣" }, href: "/publications" },
  { label: { en: "Contact Me", ne: "सम्पर्क", new: "𑐳𑐩𑑂𑐥𑐬𑑂𑐎" }, href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `transition-colors duration-200 text-sm tracking-wide ${
      isActive(href) ? "text-[#ac221f] font-semibold" : "text-white/80 hover:text-white"
    }`;

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-[#292f8c] z-40">
        {/* z-40 so Header's z-50 name overlay sits above */}
        <div className="relative flex items-center px-8 h-[64px]">
          {/* LEFT — nav links */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
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
        <div className="relative flex items-center justify-between px-4 h-[56px]">
          {/* LEFT — burger */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-1"
            aria-label="Toggle menu"
          >
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
              <Link
                href={item.href}
                onClick={closeMenu}
                className={`text-2xl transition-colors duration-200 ${
                  isActive(item.href) ? "text-[#ac221f] font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}