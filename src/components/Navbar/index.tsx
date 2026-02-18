"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "@/lib/languageContext";

const navItems = [
  {
    label: {
      en: "Home",
      ne: "गृहपृष्ठ",
      new: "𑐕𑐾𑑄𑐥𑐄",
    },
    href: "home",
  },
  {
    label: {
      en: "About",
      ne: "परिचय",
      new: "𑐩𑑂𑐴𑐳𑐶𑐂𑐎𑐵",
    },
    href: "about",
  },
  {
    label: {
      en: "Experiences",
      ne: "अनुभव",
      new: "𑐣𑑂𑐰𑐏𑑄",
    },
    href: "experiences",
  },
  {
    label: {
      en: "Places Travelled",
      ne: "भ्रमण स्थानहरू",
      new: "भ्रमण स्थानहरू",
    },
    href: "places-travelled",
  },
  {
    label: {
      en: "Publications",
      ne: "प्रकाशन",
      new: "𑐥𑑂𑐬𑐎𑐵𑐱𑐣",
    },
    href: "publications",
  },
  {
    label: {
      en: "Contact Me",
      ne: "सम्पर्क",
      new: "𑐳𑐩𑑂𑐥𑐬𑑂𑐎",
    },
    href: "contact",
  },
];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    closeMenu();

    // Special handling for "Contact Me" - scroll to footer
    if (href === "contact") {
      const element = document.getElementById(href);
      if (element) {
        const navbarHeight = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    // Special handling for "Home" - scroll to top
    else if (href === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("about"); // Default to showing About section
    }
    // For other sections, update active section
    else {
      setActiveSection(href);
      // Scroll to top of content area smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-[#f7f7f7] z-50">
        <div className="max-w-4xl mx-auto w-full px-4">
          <ul className="flex items-center justify-center gap-8 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors duration-200 ${
                    activeSection === item.href &&
                    item.href !== "home" &&
                    item.href !== "contact"
                      ? "text-gray-700 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {item.label[lang]}
                </Link>
              </li>
            ))}

            {/* Language switcher right next to links */}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-[#f7f7f7] z-50">
        <div className="flex justify-end items-center px-4 py-4">
          {/* Language switcher */}
          <LanguageSwitcher />

          {/* Burger Icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 px-8 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-lg transition-colors duration-200 block ${
                  activeSection === item.href &&
                  item.href !== "home" &&
                  item.href !== "contact"
                    ? "text-gray-700 font-semibold"
                    : "text-gray-400 hover:text-gray-700"
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
