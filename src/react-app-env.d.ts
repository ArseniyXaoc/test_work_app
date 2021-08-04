/// <reference types="react-scripts" />
declare module "*.svg" {
    import {ReactElement, SVGProps } from 'react';
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export {content};
}

declare module '*.css' {
    export const content: { [className: string]: string };
    export default content;
}