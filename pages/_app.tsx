import App from 'next/app'
import Link from 'next/link'

import { Github, Linkedin, Mail } from '../components/Icons'
import '../styles.css'

const NavItem = ({children}) => <a
  className='inline-block py-4 px-3 align-middle text-inherit hover:text-white'
>
  {children}
</a>

const NavLink = ({href, children}) => <Link href={href} passHref > 
  <a className='inline p-4 text-inherit hover:text-white'>{children}</a>
</Link>

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return <div className='h-screen flex flex-col bg-zinc-800'>
      <div className='flex flex-none justify-between font-serif text-lg tracking-wide py-px bg-cyan-700' >
        <nav className='order-1 p-2'>
          <NavLink href='/' > Home </NavLink>
          <NavLink href='/blog' > Blog </NavLink>
          <NavLink href='/resume' > Résumé </NavLink>
        </nav>
        <nav className='order-2'>
          <NavItem href='https://github.com/Seacant/' title='GitHub'>
            <Github />
          </NavItem>
          <NavItem href='https://www.linkedin.com/in/travis-fletcher-a13771173/' title="LinkedIn">
            <Linkedin />
          </NavItem>
          <NavItem href='mailto:travis@tfletch.tech' title="Email">
            <Mail />
          </NavItem>
        </nav>
      </div>
      <div className='flex flex-1 justify-center text-lg text-zinc-200 leading-relaxed py-4'>
        <Component {...pageProps} />
      </div>
      <div className='flex justify-center text-zinc-200 leading-7'>
        <p> Made with ❤️ by Travis Fletcher </p>
      </div>
    </div>
  }
}
