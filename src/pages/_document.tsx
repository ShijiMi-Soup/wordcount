import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>文字数カウンタ</title>
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="description" content="シンプルで美しい文字数カウンター" />
          {/* <meta property="og:url" content=" ページの URL" /> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="文字数カウンタ" />
          <meta
            property="og:description"
            content="シンプルで美しい文字数カウンタ"
          />
          <meta property="og:site_name" content="shijimi.dev" />
          <meta
            property="og:image"
            content="https://wordcount.shijimi.dev/images/og.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/icon512_maskable.png" />
          <meta name="theme-color" content="#1a202c" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
