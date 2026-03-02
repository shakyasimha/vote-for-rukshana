import AcchamiContent from './mdx/acchami.mdx';
import AngikaContent from './mdx/angika.mdx';
import AwadhiContent from './mdx/awadhi.mdx';
import BahingContent from './mdx/bahing.mdx';
import BaitadeliContent from './mdx/baitadeli.mdx';
import BajhangiContent from './mdx/bajhangi.mdx';
import BajjikaContent from './mdx/bajjika.mdx';
import BajureliContent from './mdx/bajureli.mdx';
import BambuleContent from './mdx/bambule.mdx';
import BantawaContent from './mdx/bantawa.mdx';
import BhjdContent from './mdx/bhojpuri-dev.mdx';
import BhjContent from './mdx/bhojpuri.mdx';
import BnContent from './mdx/bn.mdx';
import BoContent from './mdx/bo.mdx';
import ChamlingContent from './mdx/chamling.mdx';
import ChhantyalContent from './mdx/chhantyal.mdx';
import ChhepangContent from './mdx/chhepang.mdx';
import ChhintangContent from './mdx/chhintang.mdx';
import DadeldhuriContent from './mdx/dadeldhuri.mdx';
import DhimalContent from './mdx/dhimal.mdx';
import DolpoContent from './mdx/dolpo.mdx';
import DanuwarContent from './mdx/danuwar.mdx';
import DoteliContent from './mdx/doteli.mdx';
import DumiContent from './mdx/dumi.mdx';
import DungmaliContent from './mdx/dungmali.mdx';
import EnContent from './mdx/en.mdx';
import HaryanviContent from './mdx/haryanvi.mdx';
import HiContent from './mdx/hi.mdx';
import JirelContent from './mdx/jirel.mdx';
import KhasContent from './mdx/khas.mdx';
import KisanContent from './mdx/kisan.mdx';
import KochContent from './mdx/koch.mdx';
import KoichContent from './mdx/koich.mdx';
import KumalContent from './mdx/kumal.mdx';
import LhomiContent from './mdx/lhomi.mdx';
import LimbuContent from './mdx/limbu.mdx';
import LohorongContent from './mdx/lohorong.mdx';
import MagahiContent from './mdx/magahi.mdx';
import MagarDhutContent from './mdx/magar-dhut.mdx';
import MgrkhamContent from './mdx/magar-kham.mdx';
import MaidContent from './mdx/maithili-dev.mdx';
import MaiContent from './mdx/maithili.mdx';
import MajhiContent from './mdx/majhi.mdx';
import MarwadiContent from './mdx/marwadi.mdx';
import NBContent from './mdx/nb.mdx';
import NBBalamiContent from './mdx/nb-balami.mdx';
import NBKhwopaContent from './mdx/nb-khwopa.mdx';
import NBDolakhaContent from './mdx/nb-dolakha.mdx';
import NBGopaliContent from './mdx/nb-gopali.mdx';
import NeContent from './mdx/ne.mdx';
import PaliContent from './mdx/pali.mdx';
import PaliDevaContent from './mdx/palideva.mdx';
import PaliNewaContent from './mdx/palinewa.mdx';
import PumaContent from './mdx/puma.mdx';
import PunjabiContent from './mdx/punjabi.mdx';
import RajbanshiContent from './mdx/rajbanshi.mdx';
import XsrContent from './mdx/sherpa.mdx';
import SanthaliContent from './mdx/santhali.mdx';
import SindhiContent from './mdx/sindhi.mdx';
import SktContent from './mdx/skt.mdx';
import SktNewaContent from './mdx/sktnewa.mdx';
import SonahaContent from './mdx/sonaha.mdx';
import SyubaContent from './mdx/syuba.mdx';
import TajpuriyaContent from './mdx/tajpuriya.mdx';
import TmgdContent from './mdx/tamang-dev.mdx';
import TmgContent from './mdx/tamang.mdx';
import TamuContent from './mdx/tamu.mdx';
import ThamiContent from './mdx/thami.mdx';
import TharuKochilaContent from './mdx/tharu-kochila.mdx';
import TharuLampuchwaContent from './mdx/tharu-lampuchwa.mdx';
import TharuRanaContent from './mdx/tharu-rana.mdx';
import TharuSaptariyaContent from './mdx/tharu-saptariya.mdx';
import ThulungContent from './mdx/thulung.mdx';
import UrContent from './mdx/ur.mdx';
import UravContent from './mdx/urav.mdx';
import YakkhaContent from './mdx/yakkha.mdx';
import YakthungContent from './mdx/yakthung.mdx';

import type { Language } from "@/ui/languages";

export const mdxContent = {
  intro: {
    acchami: AcchamiContent,
    angika: AngikaContent,
    awadhi: AwadhiContent,
    bahing: BahingContent,
    baitadeli: BaitadeliContent,
    bajhangi: BajhangiContent,
    bajjika: BajjikaContent,
    bajureli: BajureliContent,
    bambule: BambuleContent,
    bantawa: BantawaContent,
    bhojpuri: BhjContent,
    bhojpuri_deva: BhjdContent,
    bn: BnContent,
    bo: BoContent,
    chamling: ChamlingContent,
    chhantyal: ChhantyalContent,
    chhepang: ChhepangContent,
    chhintang: ChhintangContent,
    dadeldhuri: DadeldhuriContent,
    dhimal: DhimalContent,
    danuwar: DanuwarContent,
    dolpo: DolpoContent,
    doteli: DoteliContent,
    dumi: DumiContent,
    dungmali: DungmaliContent,
    en: EnContent,
    haryanvi: HaryanviContent,
    hi: HiContent,
    jirel: JirelContent,
    khas: KhasContent,
    kisan: KisanContent,
    koch: KochContent,
    koich: KoichContent,
    kumal: KumalContent,
    lhomi: LhomiContent,
    limbu: LimbuContent,
    lohorong: LohorongContent,
    magahi: MagahiContent,
    "magar-dhut": MagarDhutContent,
    "magar-kham": MgrkhamContent,
    maithili: MaiContent,
    maithili_deva: MaidContent,
    majhi: MajhiContent,
    marwadi: MarwadiContent,
    nb: NBContent,
    "nb-balami": NBBalamiContent,
    "nb-dolakha": NBDolakhaContent,
    "nb-gopali": NBGopaliContent,
    "nb-khwopa": NBKhwopaContent,
    ne: NeContent,
    nsl: NeContent, // Fallback for Sign Language until content is ready
    pali: PaliContent,
    palideva: PaliDevaContent,
    palinewa: PaliNewaContent,
    puma: PumaContent,
    punjabi: PunjabiContent,
    rajbanshi: RajbanshiContent,
    santhali: SanthaliContent,
    sindhi: SindhiContent,
    skt: SktContent,
    sktnewa: SktNewaContent,
    sonaha: SonahaContent,
    syuba: SyubaContent,
    tajpuriya: TajpuriyaContent,
    tmg: TmgContent,
    tmgd: TmgdContent,
    tamu: TamuContent,
    thami: ThamiContent,
    "tharu-kochila": TharuKochilaContent,
    "tharu-lampuchwa": TharuLampuchwaContent,
    "tharu-rana": TharuRanaContent,
    "tharu-saptariya": TharuSaptariyaContent,
    thulung: ThulungContent,
    ur: UrContent,
    urav: UravContent,
    xsr: XsrContent,
    yakkha: YakkhaContent,
    yakthung: YakthungContent,
  } satisfies Record<Language, any>
} as const;