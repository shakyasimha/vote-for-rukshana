"use client";

import { useState, useEffect } from "react";
import type { Language } from "@/ui/languages";
import { font } from "@/lib/langFont";

type Section = {
  heading: string;
  Component: React.ComponentType<any>;
};

type MdxContentProps = {
  lang: Language;
};

export default function MdxContent({ lang }: MdxContentProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadContent() {
      setLoading(true);
      try {
        // Dynamically import the MDX file for this language
        const mdxModule = await import(`@/content/${lang}/body.mdx`);
        // mdxModule.default is the React component
        const Component = mdxModule.default;

        // If you want headings inside MDX, you can pre-process them, 
        // but simplest is just wrap everything in one section for now
        setSections([{ heading: "", Component }]);
      } catch (err) {
        console.error("Error loading MDX:", err);
      } finally {
        setLoading(false);
      }
    }
    loadContent();
  }, [lang]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#292f8c]" />
      </div>
    );
  }

  const headerFont = font[lang].headerFont;
  const bodyFont = font[lang].bodyFont;

  const makeComponents = (isEven: boolean) => {
    const textColor = isEven ? "text-black" : "text-[#f5f5fc]";
    return {
      p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className={`${bodyFont} text-lg leading-relaxed mb-4 ${textColor}`} {...props} />
      ),
      ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={`${bodyFont} list-disc pl-6 text-lg leading-relaxed space-y-2 ${textColor}`} {...props} />
      ),
      li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className={`${textColor}`} {...props} />,
      strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-bold" {...props} />,
      em: (props: React.HTMLAttributes<HTMLElement>) => <em className="italic" {...props} />,
      a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
          className={isEven ? "text-blue-600 hover:text-blue-800 underline" : "text-blue-300 hover:text-blue-100 underline"}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      ),
      h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className={`${headerFont} text-4xl font-bold mt-6 mb-3 ${textColor}`} {...props} />
      ),
      h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className={`${headerFont} text-2xl font-bold mt-6 mb-3 ${textColor}`} {...props} />
      ),
    };
  };

  return (
    <div className="w-full">
      {sections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        const bgColor = isEven ? "#f5f5f5" : "#292f8c";
        const textColor = isEven ? "black" : "#f5f5fc";

        const SectionComponent = section.Component;

        return (
          <div key={idx} className="w-full py-20 px-6 md:px-20" style={{ backgroundColor: bgColor, color: textColor }}>
            <div className="max-w-5xl mx-auto">
              {section.heading && (
                <h2 className={`${headerFont} text-4xl mb-6 font-bold`} style={{ color: textColor }}>
                  {section.heading}
                </h2>
              )}
              <div className={`${bodyFont}`}>
                <SectionComponent components={makeComponents(isEven)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}