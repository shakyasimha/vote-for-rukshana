export type Section = {
  header: string;
  body: string | string[]; // body can be string or array of strings
  bg: string;
  text: string;
};

export type Content = {
  en: Section[];
  ne: Section[];
  new: Section[];
};