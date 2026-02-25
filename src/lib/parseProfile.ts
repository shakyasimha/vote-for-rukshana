import matter from "gray-matter";

export function parseProfile(mdxText: string) {
  const { data } = matter(mdxText);
  return {
    name: data.name,
    lines: data.lines || [],
    slogan: data.slogan || "",
  };
}