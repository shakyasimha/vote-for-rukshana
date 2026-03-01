// Main Languages
import EnContent from './mdx/en.mdx';
import NeContent from './mdx/ne.mdx';
import NBContent from './mdx/nb.mdx';
import NBDContent from './mdx/nb_dolakha.mdx';
import BoContent from './mdx/bo.mdx';

// Dialects/Scripts
import HiContent from './mdx/hi.mdx';
import BnContent from './mdx/bn.mdx';
import UrContent from './mdx/ur.mdx';
import BhjContent from './mdx/bhojpuri.mdx';
import MaiContent from './mdx/maithili.mdx';
import XsrContent from './mdx/sherpa.mdx';
import TmgContent from './mdx/tamang.mdx';
import TmgdContent from './mdx/tamang-dev.mdx';
import BhjdContent from './mdx/bhojpuri-dev.mdx';
import MaidContent from './mdx/maithili-dev.mdx';
import AcchamiContent from './mdx/acchami.mdx';
import AngikaContent from './mdx/angika.mdx';
import AwadhiContent from './mdx/awadhi.mdx';
import BahingContent from './mdx/bahing.mdx';
import BaitadeliContent from './mdx/baitadeli.mdx';
import BajhangiContent from './mdx/bajhangi.mdx';
import BajjikaContent from './mdx/bajjika.mdx';
import BantawaContent from './mdx/bantawa.mdx';
import ChamlingContent from './mdx/chamling.mdx';
import ChhantyalContent from './mdx/chhantyal.mdx';
import ChhepangContent from './mdx/chhepang.mdx';
import DadeldhuriContent from './mdx/dadeldhuri.mdx';
import DoteliContent from './mdx/doteli.mdx';
import DungmaliContent from './mdx/dungmali.mdx';
import HaryanviContent from './mdx/haryanvi.mdx';
import JirelContent from './mdx/jirel.mdx';
import KumalContent from './mdx/kumal.mdx';
import LhomiContent from './mdx/lhomi.mdx';
import LohorongContent from './mdx/lohorong.mdx';
import MgrkhamContent from './mdx/magar-kham.mdx';
import SonahaContent from './mdx/sonaha.mdx';
import TajpuriyaContent from './mdx/tajpuriya.mdx';


import type { Language } from "@/ui/languages";

/**
 * NOTE: If you haven't created the .mdx files for the "other" languages yet, 
 * they are mapped to NeContent (Nepali) as a fallback below to prevent build errors.
 */

export const mdxContent = {
    intro: {
        // Main
        en: EnContent,
        ne: NeContent,
        nb: NBContent,
        nbd: NBDContent,
        bo: BoContent,
        hi: HiContent,
        bn: BnContent,
        ur: UrContent,
        bhj: BhjContent,
        bhjd: BhjdContent, // Bhojpuri (Devanagari fallback)
        mai: MaiContent,
        maid: MaidContent, // Maithili (Devanagari fallback)
        xsr: XsrContent,
        tmg: TmgContent,
        tmgd: TmgdContent, // Tamang (Devanagari fallback)

        // Other languages (Mapped to NeContent until specific MDX is ready)
        acchami: AcchamiContent,
        angika: AngikaContent,
        awadhi: AwadhiContent,
        bahing: BahingContent,
        baitadeli: BaitadeliContent,
        bajhangi: BajhangiContent,
        bajjika: BajjikaContent,
        bantawa: BantawaContent,
        chamling: ChamlingContent,
        chhantyal: ChhantyalContent,
        chhepang: ChhepangContent,
        dadeldhuri: DadeldhuriContent,
        doteli: DoteliContent,
        dungmali: DungmaliContent,
        haryanvi: HaryanviContent,
        jirel: JirelContent,
        kumal: KumalContent,
        lhomi: LhomiContent,
        lohorong: LohorongContent,
        mgrkham: MgrkhamContent,
        sonaha: SonahaContent,
        tajpuriya: TajpuriyaContent,
    } satisfies Record<Language, any>
} as const;

export type MdxSections = keyof typeof mdxContent;