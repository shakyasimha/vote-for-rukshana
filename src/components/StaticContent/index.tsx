"use client";

import { fetchContent } from "@/sanity/lib/fetchContent";
import {
  alegreyaSans,
  alegreyaSC,
  notoSansDevanagari,
  notoSerifDevanagari,
} from "@/ui/fonts";

import { Section, Content } from "@/lib/types";

type Props = {
  lang: "en" | "ne" | "new";
};

const StaticContent = async ({ lang }: Props) => {
  const isEnglish = lang === "en";
  const headerFont = isEnglish ? alegreyaSC.className : notoSerifDevanagari.className;
  const bodyFont = isEnglish ? alegreyaSans.className : notoSansDevanagari.className;

  const content: Content = await fetchContent();


  return (
    <>
      {content[lang].map((section, idx) => (
        <div
          key={idx}
          className="w-full py-20 px-6 md:px-20"
          style={{ backgroundColor: section.bg, color: section.text }}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-4xl mb-6 ${headerFont}`}>{section.header}</h2>

            {Array.isArray(section.body) ? (
              <ul className={`list-disc pl-6 text-lg leading-relaxed ${bodyFont}`}>
                {section.body.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className={`text-lg leading-relaxed ${bodyFont}`}>{section.body}</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default StaticContent;