"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  alegreyaSans,
  alegreyaSC,
  newaLipi,
  notoSerifDevanagari,
} from "@/ui/fonts";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!titleRef.current) return;
      const { bottom } = titleRef.current.getBoundingClientRect();
      // Once the title scrolls past the navbar height (~64px), show it in the navbar
      setScrolled(bottom < 64);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Navbar name overlay — renders centered in the fixed navbar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-500 h-16 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        <span
          className={`${alegreyaSC.className} text-white text-lg font-bold tracking-widest`}
        >
          {title}
        </span>
      </div>

      {/* ── Main header ── */}
      <div className="flex flex-col pt-16">
        {/* Cover photo */}
        <div className="w-full h-64 relative">
          <Image
            src="/cover-image-1.jpg"
            alt="generic cover image"
            fill
            className="object-cover"
          />
        </div>

        {/* Profile picture + name + language links */}
        <div className="flex flex-col md:flex-row items-center -mt-16 px-4 w-full max-w-4xl mx-auto">
          {/* Profile picture */}
          <div className="relative shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white mx-auto md:mx-0 z-10 shadow-md">
            <Image
              src="/rukshana-1-copy.jpg"
              alt="rukshana profile picture"
              fill
              className="object-cover"
            />
          </div>

          {/* Name + language links */}
          <div className="flex flex-col items-center justify-between w-full mt-4 md:mt-16">
            {/* Title — this is the one that "flies up" into the navbar */}
            <div className="text-center md:ml-4 md:mt-4">
              <h1
                ref={titleRef}
                className={`${alegreyaSC.className} text-3xl md:text-4xl font-bold text-[#ac221f] transition-opacity duration-500 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
              >
                {title}
              </h1>
            </div>

            {/* Language links */}
            <div className="mt-6 text-center flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                className={`${newaLipi.className} font-bold text-[#292f8c] hover:text-[#ac221f] transition-colors duration-300`}
                href="/ne"
              >
                𑐖𑐶𑐐𑐹 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵
              </Link>
              <Link
                className={`${notoSerifDevanagari.className} font-bold text-[#292f8c] hover:text-[#ac221f] transition-colors duration-300`}
                href="/np"
              >
                मेरो परिचय
              </Link>
              <Link
                className={`${alegreyaSans.className} font-bold text-[#292f8c] hover:text-[#ac221f] transition-colors duration-300`}
                href="/en"
              >
                My Introduction
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}