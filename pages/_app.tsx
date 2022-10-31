import type { AppProps } from 'next/app'
import { Header } from '../components/Header'

import '../styles.css'
import '../highlight.css'

function MyApp({Component, pageProps}: AppProps) {
  return <>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <footer>
      Made with ❤️ by Travis Fletcher 
    </footer>
  </>
}
export default MyApp
