// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

const description = 'Track all transactions on Dexifier Exchange';
const socialTitle = 'Dexifier Exchange Explorer';
const BASE_URL = 'https://dexifier-explorer.vercel.app';
const APP_NAME = 'Dexifeir Exchange Explorer';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
          <link
            rel="preload"
            href="/fonts/Roboto-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Italic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Thin.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-ThinItalic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-LightItalic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-MediumItalic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-BoldItalic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Black.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto-BlackItalic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <meta name="Description" content={description} />
          <meta
            name="keywords"
            content="Dexifier Exchange, Dexifier dApp, Multi-chain DEX aggregator, Cross-Chain Swap, binance bridge, 1inch, crypto API, Metamask"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dexifierexchange" />
          <meta name="twitter:title" content={socialTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:creator" content="@dexifierexchange" />
          <meta
            name="twitter:image"
            content="https://dexifier-explorer.vercel.app/preview.jpg"
          />

          <meta property="og:title" content={socialTitle} />
          <meta property="og:type" content="site" />
          <meta property="og:url" content={`${BASE_URL}/`} />
          <meta
            property="og:image"
            content="https://dexifier-explorer.vercel.app/preview.jpg"
          />
          <meta property="og:image:alt" content="Dexifier Exchange Explorer" />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={APP_NAME} />
        </Head>
        <body className="bg-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
