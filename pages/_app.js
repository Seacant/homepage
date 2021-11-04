import App from 'next/app'
import styled from 'styled-components'
import Link from 'next/link'

import { Text } from '../components/Typography'
import { Github, Linkedin, Mail } from '../components/Icons'
import '../styles.css'

const PageLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: var(--bg-color);
`

const Header = styled.header`
  display: flex;
  flex: 0 0 auto;
  background-color: var(--brand-color);
  justify-content: space-between;
  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07)
  ;

  /* padding for focus indicator */
  padding-top: 2px;
`

const PageNav = styled.nav`
  order: 1;
`

const SocialNav = styled.nav`
  order: 2;
`

const Main = styled.main`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  
  /* Pull the letter descents above the page */
  line-height: 1.5em;
`

const NavItem = styled.a`
  display: inline-block;
  padding: 12px;
  color: inherit;
  text-decoration: inherit;

  &:hover {
    color: white;
  }
`

const NavLink = ({href, children}) => <Link href={href} passHref > 
  <NavItem>{children}</NavItem>
</Link>

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return <PageLayout >
      <Header >
        <PageNav >
          <NavLink href='/' > Home </NavLink>
          <NavLink href='/blog' > Blog </NavLink>
          <NavLink href='/resume' > Résumé </NavLink>
        </PageNav>
        <SocialNav >
          <NavItem href='https://github.com/Seacant/' title='GitHub'>
            <Github />
          </NavItem>
          <NavItem href='https://www.linkedin.com/in/travis-fletcher-a13771173/' title="LinkedIn">
            <Linkedin />
          </NavItem>
          <NavItem href='mailto:travis@tfletch.tech' title="Email">
            <Mail />
          </NavItem>
        </SocialNav>
      </Header>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer justify="center">
        <Text> Made with ❤️ by Travis Fletcher </Text>
      </Footer>
    </PageLayout>
  }
}
