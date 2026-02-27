import EnContent from './mdx/en.mdx';
import NeContent from './mdx/ne.mdx';
import NBContent from './mdx/nb.mdx';
import NBDContent from './mdx/nb-dolakha.mdx';
import TibContent from './mdx/tib.mdx';

export const mdxContent = {
    intro: {
        en: EnContent,
        ne: NeContent,
        nb: NBContent,
        nbd: NBDContent,
        tib: TibContent, // lowercase key matching Language
    }
} as const; 

export type MdxSections = keyof typeof mdxContent; 