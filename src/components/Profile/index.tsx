"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { alegreyaSC, nithyaRanjana, notoSerifDevanagari } from "@/ui/fonts";

const content = {
  en: {
    name: "Rukshana Kapali",
    nameFont: alegreyaSC.className,
    bodyFont: alegreyaSC.className,
    lines: [
      "Candidate for House of Representatives Election, 2026.",
      "Proportional Representation Candidate no. 2, Progressive Democratic Party.",
    ],
    slogan: "Vote for Social Justice. Vote for Change.",
  },
  ne: {
    name: "रुक्शना कपाली",
    nameFont: notoSerifDevanagari.className,
    bodyFont: notoSerifDevanagari.className,
    lines: [
      "प्रतिनिधि सभा निर्वाचन, २०८२ को उम्मेदवार ।",
      "समानुपातिक उम्मेदवार, क्रम संख्या २, प्रगतिशील लोकतान्त्रिक पार्टी ।",
    ],
    slogan: "सामाजिक न्यायका लागि मतदान। परिवर्तनका लागि मतदान।",
  },
  new: {
    name: "रुक्शना कपाली",
    nameFont: nithyaRanjana.className,
    bodyFont: notoSerifDevanagari.className,
    lines: [
      "प्रतिनिधि सभा निर्वाचन, २०८२ को उम्मेदवार ।",
      "समानुपातिक उम्मेदवार, क्रम संख्या २, प्रगतिशील लोकतान्त्रिक पार्टी ।",
    ],
    slogan: "सामाजिक न्यायका लागि मतदान। परिवर्तनका लागि मतदान।",
  },
};

const NAVBAR_NAME = "Rukshana Kapali";

const inlayStyle = {
  color: "#f5f5f5",
  textShadow:
    "1px 1px 0px #6b7280, 2px 2px 0px #4b5563, 3px 3px 6px rgba(0,0,0,0.5)",
};

type ProfileProps = {
  lang?: "en" | "ne" | "new";
};

export default function Profile({ lang = "new" }: ProfileProps) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { name, nameFont, bodyFont, lines, slogan } = content[lang];

  useEffect(() => {
    const onScroll = () => {
      if (!nameRef.current) return;
      const { bottom } = nameRef.current.getBoundingClientRect();
      setScrolled(bottom < 64);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Name overlay centered in the fixed navbar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none h-16 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        <span className={`${alegreyaSC.className} text-white text-lg font-bold tracking-widest`}>
          {NAVBAR_NAME}
        </span>
      </div>

      {/* ── Profile section ── */}
      <div className="w-full bg-[#292f8c]">
        <div className="flex flex-col md:flex-row items-center gap-10 px-8 py-16 w-full max-w-4xl mx-auto">

          {/* Profile picture — left */}
          <div className="relative shrink-0 w-50 h-50 rounded-3xl overflow-hidden border-4 border-white/20 shadow-xl">
            <Image
              src="/rukshana-1-copy.jpg"
              alt="rukshana profile picture"
              fill
              className="object-cover"
            />
          </div>

          {/* Text — right */}
          <div className="flex-1 flex flex-col gap-3 text-center md:text-left">
            {/* Name */}
            <h1
              ref={nameRef}
              style={inlayStyle}
              className={`${nameFont} ${lang === "new" ? "" : "font-bold"} text-4xl md:text-5xl leading-tight transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              {name}
            </h1>

            {/* Supporting lines */}
            {lines.map((line, i) => (
              <p
                key={i}
                style={inlayStyle}
                className={`${bodyFont} text-base md:text-lg leading-snug opacity-90`}
              >
                {line}
              </p>
            ))}

            {/* Slogan — italic */}
            <p
              style={inlayStyle}
              className={`${bodyFont} text-base md:text-lg italic opacity-80 mt-2`}
            >
              {slogan}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}