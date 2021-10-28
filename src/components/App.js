import { html } from 'htm/preact'
import { Home } from 'grommet-icons'
import styled, { StyleSheetManager, css } from 'styled-components'

import { Text } from './Typography'

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

  /* padding for focus indicator */
  padding-top: 2px;
`

const PageNav = styled.nav`
  order: 1;
`

const SocialNav = styled.nav`
  order: 2;
`

const SocialLogo = styled.img`
  width: 16px;
  height: 16px;
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

export const App = ({children}) => html`
  <${PageLayout} >
    <${Header} >
      <${PageNav} >
        <${NavItem} href='/' > Home <//>
        <${NavItem} href='/blog' > Blog <//>
        <${NavItem} href='/resume' > Résumé <//>
      <//>
      <${SocialNav} >
        <${NavItem} href='https://github.com/Seacant/'>
          <${SocialLogo} src="https://github.com/favicon.ico" alt="GitHub" />
        <//>
        <${NavItem} href='https://www.linkedin.com/in/travis-fletcher-a13771173/'>
          <${SocialLogo} src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" />
        <//>
      <//>
    <//>
    <${Main} fill=${false} direction="row" justify='center' background="background">
      ${children}
    <//>
    <${Footer} justify="center">
      <${Text}> Made with ❤️ by Travis Fletcher <//>
    <//>
  <//>
`
