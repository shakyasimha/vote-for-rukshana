// The languages used in the main content of the website

export const languages = [
  "ne",
  "en",
  "nb",       // Nepal Bhasa
  "nbd",      // Dolakha dialect of Nepal Bhasa
  "nsl",      // Nepali Sign Language
  "bo",       // Tibetan
  "hi",       // Hindi
  "bn",       // Bengali
  "ur",       // Urdu
  "bhj",      // Bhojpuri
  "bhjd", // Bhojpuri in Devanagari script
  "mai",      // Maithili
  "maid", // Maithili in Devanagari script
  "xsr",      // Sherpa
  "tmg",      // Tamang
  "tmgd", // Tamang in Devanagari script
  
  // Other langauges
  "acchami",
  "angika",
  "awadhi",
  "bahing",
  "baitadeli",
  "bajhangi",
  "bajjika",
  "bantawa",
  "chamling",
  "chhantyal",
  "chhepang",
  "dadeldhuri",
  "doteli",
  "dungmali",
  "haryanvi",
  "jirel",
  "kumal",
  "lhomi",
  "lohorong",
  "mgrkham",
  "sonaha",
  "tajpuriya",
  "dumi",
] as const;

export type Language = (typeof languages)[number];