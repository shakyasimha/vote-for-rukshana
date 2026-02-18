"use client";

import { content } from "@/content/content";
import {
  alegreyaSans,
  alegreyaSC,
  notoSansDevanagari,
  notoSerifDevanagari,
} from "@/ui/fonts";

type Props = {
  lang: "en" | "ne" | "new";
};

const StaticContent = ({ lang }: Props) => {
  const isEnglish = lang === "en";
  const headerFont = isEnglish ? alegreyaSC.className : notoSerifDevanagari.className;
  const bodyFont = isEnglish ? alegreyaSans.className : notoSansDevanagari.className;

  return (
    <>
      {content[lang].map((section, idx) => (
        <div
          key={idx}
          className={`w-full py-20 px-6 md:px-20`}
          style={{ backgroundColor: section.bg, color: section.text }}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-4xl mb-6 ${headerFont}`}>{section.header}</h2>
            <p className={`text-lg leading-relaxed ${bodyFont}`}>{section.body}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StaticContent;