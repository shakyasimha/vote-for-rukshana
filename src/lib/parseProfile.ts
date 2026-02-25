export type ProfileData = {
  name: string;
  lines: string[];
  slogan: string;
};

export function parseProfile(raw: string): ProfileData {
  const get = (key: string) =>
    raw.match(new RegExp(`__${key}__:\\s*(.+)`))?.[1]?.trim() ?? "";

  return {
    name: get("Name"),
    lines: [get("Line1"), get("Line2")].filter(Boolean),
    slogan: get("Slogan"),
  };
}