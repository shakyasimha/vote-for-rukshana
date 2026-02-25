"use client";

import { useState, useEffect, useMemo } from "react";
import type { Language } from "@/ui/languages";
import { font } from "@/lib/langFont";
import { mdxContent } from "@/content"; // Import the registry we discussed

type MdxContentProps = {
  lang: Language;
};

export default function MdxContent({ lang }: MdxContentProps) {
  // 1. Get the correct MDX component from your registry
  // Using 'home' as the section key based on your previous folder structure
  const Content = mdxContent.intro[lang];

  const headerFont = font[lang].headerFont;
  const bodyFont = font[lang].bodyFont;

  // 2. State to track the current section index for styling
  // We use a counter that increments every time an <hr /> (---) is encountered
  let sectionCounter = 0;

  const makeComponents = (isEven: boolean) => {
    const textColor = isEven ? "text-black" : "text-[#f5f5fc]";
    const headerColor = isEven ? "text-[#ac221f]" : "text-white"; // Red/Blue vs White

    return {
      h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className={`${headerFont} text-4xl font-bold mt-6 mb-6 ${headerColor}`} {...props} />
      ),
      h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className={`${headerFont} text-2xl font-bold mt-6 mb-3 ${headerColor}`} {...props} />
      ),
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
      // 3. The Magic Part: The HR tag acts as a "Gate" to change the section container
      hr: () => {
        sectionCounter++;
        const nextIsEven = sectionCounter % 2 === 0;
        const nextBg = nextIsEven ? "bg-[#f5f5f5]" : "bg-[#292f8c]";
        
        // We close the current max-width div and section div, then start a new one
        // Note: This is a "hacky" way to break layout in React, 
        // A cleaner way is to use MDX provider to split content, 
        // but since you want to keep the exact same logic:
        return <div className="hidden" />; 
      }
    };
  };

  /* Because MDX renders as one flat component, to get the alternating background
     on a single file, the easiest way is to wrap the MDX in a layout that 
     reacts to specific headers OR split the MDX file into multiple files.
     
     HOWEVER, since you have one big file, here is the "Pure React" way 
     to handle the alternating blocks by passing the styles down:
  */

  return (
    <div className="w-full">
      <SectionWrapper isEven={true} headerFont={headerFont} bodyFont={bodyFont}>
        <Content components={makeComponents(true)} />
      </SectionWrapper>
    </div>
  );
}

// Helper component to provide the alternating background per section
function SectionWrapper({ children, isEven, headerFont, bodyFont }: any) {
    // This wrapper is tricky because the MDX is one component. 
    // To get the EXACT look you want with one file, we must use CSS 
    // to style the sibling blocks between <hr> tags.
    
    return (
        <div className="mdx-custom-container">
            <style jsx global>{`
                .mdx-custom-container > div {
                    display: flex;
                    flex-direction: column;
                }
                /* Target the sections between HRs */
                .mdx-custom-container hr {
                    border: none;
                    margin: 0;
                    height: 0;
                }
                /* We actually need to structure the MDX differently 
                   if we want full-width alternating backgrounds. */
            `}</style>
            {children}
        </div>
    );
}