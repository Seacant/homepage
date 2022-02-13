import type {AppProps} from 'next/app'
import Link from 'next/link'

import {Github, Linkedin, Mail} from '../components/Icons'
import '../styles.css'

type NavItemProps = {
  title: string
  href: string
  children: React.ReactNode
}
const NavItem: React.FC<NavItemProps> = ({title, href, children}) => <a
  title={title}
  href={href}
  className="inline-block leading-8 p-2 align-middle text-inherit hover:text-white"
>
  {children}
</a>

type NavLinkProps = {
  href: string
  children: React.ReactNode
}
const NavLink: React.FC<NavLinkProps> = ({href, children}) => <Link href={href} passHref >
  <a className="inline-block leading-8 px-2 text-inherit hover:text-white">{children}</a>
</Link>

function MyApp({Component, pageProps}: AppProps) {
  return <div className="h-screen flex flex-col bg-zinc-800">
    <header className="flex flex-none justify-between font-serif text-lg tracking-wide py-px bg-cyan-700" >
      <nav className="order-1 px-2">
        <NavLink href="/" > Home </NavLink>
        <NavLink href="/blog" > Blog </NavLink>
        <NavLink href="/resume" > Résumé </NavLink>
      </nav>
      <nav className="order-2">
        <NavItem href="https://github.com/Seacant/" title="GitHub">
          <Github />
        </NavItem>
        <NavItem href="https://www.linkedin.com/in/travis-fletcher-a13771173/" title="LinkedIn">
          <Linkedin />
        </NavItem>
        <NavItem href="mailto:travis@tfletch.tech" title="Email">
          <Mail />
        </NavItem>
      </nav>
    </header>
    <main className="flex flex-1 justify-center text-lg text-zinc-200 leading-relaxed py-4">
      <Component {...pageProps} />
    </main>
    <footer className="flex justify-center text-zinc-200 leading-7">
      <p> Made with ❤️ by Travis Fletcher </p>
    </footer>
  </div>
}
export default MyApp
