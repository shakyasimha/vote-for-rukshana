import EnContent from './mdx/en.mdx';
import NeContent from './mdx/ne.mdx';
import NewContent from './mdx/new.mdx';

export const mdxContent = {
    intro: {
        en: EnContent,
        ne: NeContent,
        new: NewContent,
    }
} as const; 

export type MdxSections = keyof typeof mdxContent; 