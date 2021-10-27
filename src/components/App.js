import { html } from 'htm/preact'
import { render } from 'preact'
import { Grommet, Box, Text, Paragraph, Heading, Main, Header, Footer, Button } from 'grommet'
import { Home } from 'grommet-icons'
import { StyleSheetManager, css } from 'styled-components'

const theme = {
  grommet: {
    extend: css`
      display: flex;
      flex-direction: column
    `
  }
};

export const App = ({children}) => html`
  <${StyleSheetManager} disableVendorPrefixes >
    <${Grommet} plain theme=${theme} full="min">
      <${Header} background="brand" >
        <${Button} icon=${html`<${Home} />`} hoverIndicator />
      <//>
      <${Main} fill=${false} pad="large">
        ${children}
      <//>
      <${Footer} justify="center">
        <${Text} > Copyright ©2021 <//>
      <//>
    <//>
  <//>
`
