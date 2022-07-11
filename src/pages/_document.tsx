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
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: accessibeScript,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-86N002ZC1J"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: gtagScript,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

const gtagScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-86N002ZC1J');
`;

const accessibeScript = `
(function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; 
s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; 
s.onload = function(){ acsbJS.init({ statementLink : "", footerHtml : "", hideMobile : false, hideTrigger : false, disableBgProcess : false, language : 'en', position : 'right', leadColor : '#146FF8', triggerColor : '#146FF8', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'bottom', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerOffsetX : 20, triggerOffsetY : 20, triggerRadius : '20' } }); }; h.appendChild(s); })();
`;
