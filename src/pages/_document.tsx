import { DocumentInitialProps } from "next/dist/next-server/lib/utils";
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import flushToReact from "styled-jsx/server";

class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const props = await NextDocument.getInitialProps(ctx);
    // This is required to avoid flashes of unstyled content on first load
    const extraStyles = flushToReact();
    return {
      ...props,
      styles: (
        <>
          {props.styles}
          {extraStyles}
        </>
      ),
    };
  }

  render() {
    // TODO: more meta tags and whatnot
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
