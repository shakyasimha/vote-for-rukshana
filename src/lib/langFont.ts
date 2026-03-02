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
  brahmiLipi,
  newaLipi,
  gurmukhi,
  arabic,
  limbu, 
  santhali
} from "@/ui/fonts";
import type { Language } from "@/ui/languages";

type FontConfig = {
  headerFont: string;
  bodyFont: string;
};

const englishDefault: FontConfig = {
  headerFont: alegreyaSC.className,
  bodyFont: alegreyaSans.className,
};

const devanagariDefault: FontConfig = {
  headerFont: notoSerifDevanagari.className,
  bodyFont: notoSansDevanagari.className,
};

const nepalBhasaDefault: FontConfig = {
  headerFont: nithyaRanjana.className,
  bodyFont: roboto.className,
}

const tibetanDefault: FontConfig = {
  headerFont: jomolhari.className,
  bodyFont: jomolhari.className,
};

const paliDefault: FontConfig = {
  headerFont: brahmiLipi.className,
  bodyFont: brahmiLipi.className,
};

const urduDefault: FontConfig = {
  headerFont: notoNastaliqUrdu.className,
  bodyFont: notoNastaliqUrdu.className,
};

const punjabiDefault: FontConfig = {
  headerFont: gurmukhi.className,
  bodyFont: gurmukhi.className,
};

const banglaDefault: FontConfig = {
  headerFont: notoSansBengali.className,
  bodyFont: notoSansBengali.className,
};

const bhojpuriKaithi: FontConfig = {
  headerFont: notoSansKaithi.className,
  bodyFont: notoSansKaithi.className,
};

const maithiliTirhuta: FontConfig = {
  headerFont: notoSansTirhuta.className,
  bodyFont: notoSansTirhuta.className,
};

const arabicDefault: FontConfig = {
  headerFont: arabic.className,
  bodyFont: arabic.className,
};

const limbuDefault: FontConfig = {
  headerFont: limbu.className,
  bodyFont: limbu.className,
};

const santhaliDefault: FontConfig = {
  headerFont: santhali.className,
  bodyFont: santhali.className,
};

export const font: Record<Language, FontConfig> = {
  acchami: devanagariDefault,
  angika: devanagariDefault,
  awadhi: devanagariDefault,
  bahing: devanagariDefault,
  baitadeli: devanagariDefault,
  bajhangi: devanagariDefault,
  bajjika: devanagariDefault,
  bajureli: devanagariDefault,
  bambule: devanagariDefault,
  bantawa: devanagariDefault,
  bhojpuri: bhojpuriKaithi,
  bhojpuri_deva: devanagariDefault,
  bn: banglaDefault,
  bo: tibetanDefault,
  chamling: devanagariDefault,
  chhantyal: devanagariDefault,
  chhepang: devanagariDefault,
  chhintang: devanagariDefault,
  dadeldhuri: devanagariDefault,
  danuwar: devanagariDefault,
  dhimal: devanagariDefault,
  dolpo: tibetanDefault,
  doteli: devanagariDefault,
  dumi: devanagariDefault,
  dungmali: devanagariDefault,
  en: englishDefault,
  haryanvi: devanagariDefault,
  hi: devanagariDefault,
  jirel: devanagariDefault,
  khas: devanagariDefault,
  kisan: devanagariDefault,
  koch: devanagariDefault,
  koich: devanagariDefault,
  kumal: devanagariDefault,
  lhomi: devanagariDefault,
  limbu: limbuDefault,
  lohorong: devanagariDefault,
  magahi: devanagariDefault,
  maithili: maithiliTirhuta,
  maithili_deva: devanagariDefault,
  majhi: devanagariDefault,
  marwadi: devanagariDefault,
  "magar-dhut": devanagariDefault,
  "magar-kham": devanagariDefault,
  nb: nepalBhasaDefault,
  "nb-balami": devanagariDefault,
  "nb-dolakha": devanagariDefault,
  "nb-gopali": devanagariDefault,
  "nb-khwopa": nepalBhasaDefault,
  ne: devanagariDefault,
  nsl: devanagariDefault,
  pali: paliDefault,
  palideva: devanagariDefault,
  palinewa: nepalBhasaDefault,
  puma: devanagariDefault,
  punjabi: punjabiDefault,
  rajbanshi: devanagariDefault,
  santhali: santhaliDefault,
  sindhi: arabicDefault,
  skt: devanagariDefault,
  sktnewa: nepalBhasaDefault,
  sonaha: devanagariDefault,
  syuba: devanagariDefault,
  tajpuriya: devanagariDefault,
  tamu: devanagariDefault,
  thami: devanagariDefault,
  "tharu-kochila": devanagariDefault,
  "tharu-lampuchwa": devanagariDefault,
  "tharu-rana": devanagariDefault,
  "tharu-saptariya": devanagariDefault,
  thulung: devanagariDefault,
  tmg: tibetanDefault,
  tmgd: devanagariDefault,
  ur: urduDefault,
  urav: devanagariDefault,
  xsr: tibetanDefault,
  yakkha: devanagariDefault,
  yakthung: devanagariDefault
};