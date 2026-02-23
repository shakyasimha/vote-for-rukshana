"use client";

import { content } from "@/content/content";
import { font } from "@/lib/langFont";
// import { languages } from "@/ui/languages";
import type { Language } from "@/ui/languages";

type Props = {
  lang: Language;
};

const StaticContent = ({ lang }: Props) => {
  const headerFont = font[lang].headerFont;
  const bodyFont = font[lang].bodyFont;

  return (
    <>
      {content[lang].map((section, idx) => {
        // Alternate background/text colors
        const isEven = idx % 2 === 0;
        const bgColor = isEven ? "#f5f5f5" : "#292f8c";
        const textColor = isEven ? "black" : "#f5f5fc";

        return (
          <div
            key={idx}
            className="w-full py-20 px-6 md:px-20"
            style={{ backgroundColor: bgColor, color: textColor }}
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

              {/* Optional slogan rendering */}
              {section.slogan && (
                <p className={`mt-6 text-xl font-bold italic ${bodyFont}`}>
                  {section.slogan}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StaticContent;