/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  export default ReactComponent;
}

// Fix for https://github.com/vercel/styled-jsx/issues/698
declare module "styled-jsx/css" {
  declare const css: {
    global(chunks: TemplateStringsArray, ...args: any[]): JSX.Element;
    resolve(
      chunks: TemplateStringsArray,
      ...args: any[]
    ): { className: string; styles: JSX.Element };
  };
  export default css;
}
