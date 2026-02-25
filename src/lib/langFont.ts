import {
  alegreyaSC,
  alegreyaSans,
  nithyaRanjana,
  notoSansDevanagari,
  notoSerifDevanagari,
  roboto,
  newaLipi,
  jomolhari,
  notoNastaliqUrdu,
  notoSansBengali,
  notoSansTirhuta,
  notoSansKaithi,
} from "@/ui/fonts";

// import { headers } from "next/headers";
import type { Language } from "@/ui/languages";

type FontConfig = {
  headerFont: string;
  bodyFont: string;
};

export const font: Record<Language, FontConfig> = {
  en: {
    headerFont: alegreyaSC.className,
    bodyFont: alegreyaSans.className,
  },
  ne: {
    headerFont: notoSerifDevanagari.className,
    bodyFont: notoSansDevanagari.className,
  },
  new: {
    headerFont: nithyaRanjana.className,
    bodyFont: newaLipi.className,
  },
  tib: {
    headerFont: jomolhari.className,
    bodyFont: jomolhari.className,
  },
  sherpa: {
    headerFont: jomolhari.className,
    bodyFont: jomolhari.className,
  },
  tamang: {
    headerFont: jomolhari.className,
    bodyFont: jomolhari.className,
  },
  tamang_devnagari: {
    headerFont: notoSerifDevanagari.className,
    bodyFont: notoSansDevanagari.className,
  },
  urdu: {
    headerFont: notoNastaliqUrdu.className,
    bodyFont: notoNastaliqUrdu.className,
  },
  maithili: {
    headerFont: notoSansTirhuta.className,
    bodyFont: notoSansTirhuta.className,
  },
  maithili_devnagari: {
    headerFont: notoSerifDevanagari.className,
    bodyFont: notoSansDevanagari.className,
},
  bangla: {
    headerFont: notoSansBengali.className,
    bodyFont: notoSansBengali.className,
  },
  bhojpuri: {
    headerFont: notoSansKaithi.className,
    bodyFont: notoSansKaithi.className,
  },
  bhojpuri_devnagari: {
    headerFont: notoSerifDevanagari.className,
    bodyFont: notoSansDevanagari.className,
  }
};