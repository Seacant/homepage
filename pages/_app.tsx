import type {AppProps} from 'next/app'
import { Header } from '../components/Header'

import '../styles.css'

function MyApp({Component, pageProps}: AppProps) {
  return <div className="h-screen flex flex-col bg-zinc-800">
    <Header />
    <main className="flex flex-1 justify-center text-lg text-zinc-200 leading-relaxed py-4">
      <Component {...pageProps} />
    </main>
    <footer className="flex justify-center text-zinc-200 leading-7">
      <p> Made with ❤️ by Travis Fletcher </p>
    </footer>
  </div>
}
export default MyApp
