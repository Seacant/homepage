import Link from 'next/link'

import {Github, Linkedin, Mail} from '../components/Icons'

import {useRouter} from 'next/router'

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

export const Header = () => {
  const router = useRouter()

  return (
    <header className="flex flex-none justify-between font-serif text-xl tracking-wide py-px bg-cyan-700" >
      <nav className="order-1 px-2">
        {
          [
            ["/", "Home"],
            ["/blog", "Blog"],
            ["/resume", "Résumé"]
          ].map(
            ([path, name]) => <NavLink href={path} key={path}>
              {
                router.pathname === path
                  ? <h1>{name}</h1>
                  : name
              }
            </NavLink>
          )
        }
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
  )
}
