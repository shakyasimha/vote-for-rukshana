import {
  alegreyaSC,
  alegreyaSans,
  nithyaRanjana,
  notoSansDevanagari,
  notoSerifDevanagari,
  roboto,
  jomolhari,
  notoNastaliqUrdu,
  notoSansBengali,
  notoSansTirhuta,
  notoSansKaithi,
} from "@/ui/fonts";
import type { Language } from "@/ui/languages";

type FontConfig = {
  headerFont: string;
  bodyFont: string;
};

const devanagariDefault: FontConfig = {
  headerFont: notoSerifDevanagari.className,
  bodyFont: notoSansDevanagari.className,
};

const tibetanDefault: FontConfig = {
  headerFont: jomolhari.className,
  bodyFont: jomolhari.className,
};

export const font: Record<Language, FontConfig> = {
  en: { headerFont: alegreyaSC.className, bodyFont: alegreyaSans.className },
  ne: devanagariDefault,
  nb: { headerFont: nithyaRanjana.className, bodyFont: roboto.className },
  nbd: devanagariDefault,
  bo: tibetanDefault,
  xsr: tibetanDefault,
  tmg: tibetanDefault,
  tmgd: devanagariDefault,
  ur: { headerFont: notoNastaliqUrdu.className, bodyFont: notoNastaliqUrdu.className },
  bn: { headerFont: notoSansBengali.className, bodyFont: notoSansBengali.className },
  hi: devanagariDefault,
  bhj: { headerFont: notoSansKaithi.className, bodyFont: notoSansKaithi.className },
  bhjd: devanagariDefault,
  mai: { headerFont: notoSansTirhuta.className, bodyFont: notoSansTirhuta.className },
  maid: devanagariDefault,

  // Mapping all "Other Languages" to Devanagari
  acchami: devanagariDefault,
  angika: devanagariDefault,
  awadhi: devanagariDefault,
  bahing: devanagariDefault,
  baitadeli: devanagariDefault,
  bajhangi: devanagariDefault,
  bajjika: devanagariDefault,
  bantawa: devanagariDefault,
  chamling: devanagariDefault,
  chhantyal: devanagariDefault,
  chhepang: devanagariDefault,
  dadeldhuri: devanagariDefault,
  doteli: devanagariDefault,
  dungmali: devanagariDefault,
  haryanvi: devanagariDefault,
  jirel: devanagariDefault,
  kumal: devanagariDefault,
  lhomi: devanagariDefault,
  lohorong: devanagariDefault,
  mgrkham: devanagariDefault,
  sonaha: devanagariDefault,
  tajpuriya: devanagariDefault,
};