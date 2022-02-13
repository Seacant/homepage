import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

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
