// The languages used in the main content of the website

export const languages = [
  "en",
  "ne",
  "new",
  // "tib",
  // "sherpa",
  // "tamang",
  // "tamang_devnagari",
  // "urdu",
  // "maithili",
  // "maithili_devnagari",
  // "bangla",
  // "bhojpuri",
  // "bhojpuri_devnagari",
] as const;

export type Language = (typeof languages)[number];