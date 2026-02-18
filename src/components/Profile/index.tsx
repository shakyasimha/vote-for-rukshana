"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { alegreyaSC, nithyaRanjana, notoSerifDevanagari } from "@/ui/fonts";

const title = {
  en: {
    text: "I am Rukshana Kapali.",
    font: alegreyaSC.className,
  },
  ne: {
    text: "म रुक्शना कपाली हुँ।",
    font: notoSerifDevanagari.className,
  },
  new: {
    text: "जि रुक्शना कपाली खः।",
    font: nithyaRanjana.className,
  },
};

const NAVBAR_NAME = "Rukshana Kapali";

type ProfileProps = {
  lang?: "en" | "ne" | "new";
};

export default function Profile({ lang = "new" }: ProfileProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const titleContent = title[lang];

  useEffect(() => {
    const onScroll = () => {
      if (!titleRef.current) return;
      const { bottom } = titleRef.current.getBoundingClientRect();
      setScrolled(bottom < 64);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Name overlay centered in the fixed navbar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none h-[64px] transition-all duration-500 ${
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
        <div className="relative flex-shrink-0 w-50 h-50 rounded-3xl overflow-hidden border-4 border-white/20 shadow-xl">
          <Image
            src="/rukshana-1-copy.jpg"
            alt="rukshana profile picture"
            fill
            className="object-cover"
          />
        </div>

        {/* Title — right */}
        <div className="flex-1 text-center md:text-left">
          <h1
            ref={titleRef}
            style={{
              color: "#f5f5f5",
              textShadow:
                "1px 1px 0px #6b7280, 2px 2px 0px #4b5563, 3px 3px 6px rgba(0,0,0,0.5)",
            }}
            className={`${titleContent.font} ${lang === "new" ? "" : "font-bold"} text-5xl leading-tight transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            {titleContent.text}
          </h1>
        </div>
      </div>
      </div>
    </>
  );
}