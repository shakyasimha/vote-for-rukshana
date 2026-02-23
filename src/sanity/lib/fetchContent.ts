import { client } from "./client";
import type { Content, Section } from "@/lib/types";

export const fetchContent = async (): Promise<Content> => {
  const languages: (keyof Content)[] = ["en", "ne", "new"];
  const sections = ["whois", "background", "achievements", "vote", "why-vote"];
  const slugs = sections.flatMap((s) => languages.map((lang) => `${s}-${lang}`));

  const query = `
    *[_type == "post" && slug.current in $slugs]{
      name,
      "slug": slug.current,
      content
    }
  `;

  const posts: any[] = await client.fetch(query, { slugs });

  // Initialize with exact keys
  const content: Content = { en: [], ne: [], new: [] };

  for (const lang of languages) {
    content[lang] = sections
      .map((section) => {
        const slug = `${section}-${lang}`;
        const post = posts.find((p) => p.slug === slug);
        if (!post) return null;

        let body: string | string[] = "";
        if (post.content?.length) {
          const isNormalParagraphs = post.content.every(
            (b: any) => b._type === "block" && b.style === "normal"
          );
          if (isNormalParagraphs) {
            body = post.content
              .map((b: any) => b.children.map((c: any) => c.text).join(""))
              .join("\n\n");
          } else {
            body = post.content; // keep as Portable Text array
          }
        }

        return {
          header: post.name,
          body,
          bg: "#f5f5f5",
          text: "black",
        } as Section;
      })
      .filter(Boolean) as Section[];
  }

  return content;
};