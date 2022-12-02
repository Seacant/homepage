import type { AppProps } from 'next/app'
import { Header } from '../components/Header'

import '../styles.css'
import '../highlight.css'

import { Inconsolata } from '@next/font/google'

const monospace = Inconsolata({ subsets: ['latin'], variable: '--mono-font' })

function MyApp({Component, pageProps}: AppProps) {
  return <>
    <Header />
    <main className={monospace.variable}>
      <Component {...pageProps} />
    </main>
    <footer>
      Made with ❤️ by Travis Fletcher 
    </footer>
  </>
}
export default MyApp
