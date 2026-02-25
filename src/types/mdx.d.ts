// mdx.d.ts
declare module "*.mdx" {
    import {componentType} from "react";
    const component: componentType;
    export default component;
}