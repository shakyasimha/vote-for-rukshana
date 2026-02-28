// The languages used in the main content of the website

export const languages = [
  "ne",
  "en",
  "nb", // Nepal Bhasa
  "nbd", // Dolakha dialect of Nepal Bhasa
  "tib",
  // "sherpa",
  // "tamang",
  // "tamang_devnagari",
  // "urdu",
  // "maithili",
  // "maithili_devnagari",
  "bangla",
  "bhojpuri",
  "bhojpuri_devnagari",
] as const;

export type Language = (typeof languages)[number];