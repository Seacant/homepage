import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import stylisRTLPlugin from 'stylis-plugin-rtl'

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return <Html dir='ltr' lang='en'>
      <Head>
        <meta name="author" content="Seacant" />
        <meta name="description" content="Personal Homepage for Travis. Currently under construction" />
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}
