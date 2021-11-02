import { html, render } from 'htm/preact'
import styled, { StyleSheetManager, css } from 'styled-components'

import { Github, Linkedin, Mail } from './components/Icons'
import { Text } from './components/Typography'
import { Homepage } from './components/Homepage'
import Router from 'preact-router'

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

const App = () => html`
  <${PageLayout} >
    <${Header} >
      <${PageNav} >
        <${NavItem} href='/' > Home <//>
        <${NavItem} href='/blog' > Blog <//>
        <${NavItem} href='/resume' > Résumé <//>
      <//>
      <${SocialNav} >
        <${NavItem} href='https://github.com/Seacant/'>
          <${Github} />
        <//>
        <${NavItem} href='https://www.linkedin.com/in/travis-fletcher-a13771173/'>
          <${Linkedin} />
        <//>
        <${NavItem} href='mailto:travis@tfletch.tech'>
          <${Mail} />
        <//>
      <//>
    <//>
    <${Main} fill=${false} direction="row" justify='center' background="background">
      <${Router}>
        <${Homepage} path="/" />
      <//>
    <//>
    <${Footer} justify="center">
      <${Text}> Made with ❤️ by Travis Fletcher <//>
    <//>
  <//>
`

export default App
