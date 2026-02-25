"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { font } from "@/lib/langFont";
import type { Language } from "@/ui/languages";
import { parseProfile } from "@/lib/parseProfile";
import type { ProfileData } from "@/lib/parseProfile";
// import { content } from "@/content/content";

const inlayStyle = {
  color: "#f5f5f5",
  textShadow:
    "1px 1px 0px #6b7280, 2px 2px 0px #4b5563, 3px 3px 6px rgba(0,0,0,0.5)",
};

type ProfileProps = {
  lang?: Language;
};

export default function Profile({ lang = "new" }: ProfileProps) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const headerFont = font[lang].headerFont;
  const bodyFont = font[lang].bodyFont;

  // Fetch profile MDX
  useEffect(() => {
    async function loadProfile() {
      const res = await fetch(`/api/content/${lang}/profile`);
      const text = await res.text();
      setProfileData(parseProfile(text));
    }
    loadProfile();
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      if (!nameRef.current) return;
      const { bottom } = nameRef.current.getBoundingClientRect();
      setScrolled(bottom < 64);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!profileData) return null; // or a skeleton/spinner

  const { name, lines, slogan } = profileData;
  return (
    <>
      {/* ── Name overlay centered in fixed navbar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none h-16 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        <span
          className={`${headerFont} ${
            lang === "new" ? "font-normal" : "font-bold"
          } text-white text-lg tracking-widest`}
        >
          {name}
        </span>
      </div>

      {/* ── Profile section ── */}
      <div className="w-full bg-[#292f8c] mt-16">
        <div className="flex flex-col md:flex-row items-center gap-10 px-8 py-16 w-full max-w-4xl mx-auto">

          {/* Profile picture */}
          <div className="relative shrink-0 w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border-4 border-white/20 shadow-xl">
            <Image
              src="/rukshana.jpg"
              alt="rukshana profile picture"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col gap-3 text-center md:text-left">

            {/* Name */}
            <h1
              ref={nameRef}
              style={inlayStyle}
              className={`${headerFont} ${
                lang === "new" ? "" : "font-bold"
              } text-4xl md:text-5xl leading-tight transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              {name}
            </h1>

            {/* Supporting lines */}
            {lines.map((line: string, i: number) => (
              <p
                key={i}
                style={inlayStyle}
                className={`${bodyFont} ${
                  lang === "new" ? "font-normal" : "font-bold"
                } text-base md:text-lg leading-snug opacity-90`}
              >
                {line}
              </p>
            ))}

            {/* Slogan */}
            <p
              style={inlayStyle}
              className={`${bodyFont} ${
                lang === "new" ? "font-normal" : "font-bold"
              } text-base md:text-lg italic opacity-80 mt-2`}
            >
              {slogan}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}