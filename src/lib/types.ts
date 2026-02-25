import type { Language } from "@/ui/languages";

export type ProfileData = {
  name: string;
  lines: string[];
  slogan: string;
};

export type Section = {
  header: string;
  body: string | string[]; // body can be string or array of strings
  slogan?: string;
};

export type ContentLanguage = (ProfileData | Section)[];

export type Content = {
  [K in Language]: ContentLanguage;
};