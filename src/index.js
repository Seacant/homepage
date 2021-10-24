import { html } from 'htm/preact'
import { render } from 'preact'
import { Grommet, Box, Text, Paragraph, Heading, Main, Header, Footer, Button } from 'grommet'
import { Home } from 'grommet-icons'
import { css } from 'styled-components'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  grommet: {
    extend: css`
      display: flex;
      flex-direction: column
    `
  }
};

const App = props => html`
  <${Grommet}  theme=${theme} full="min">
    <${Header} background="brand" >
      <${Button} icon=${html`<${Home} />`} hoverIndicator />
    <//>
    <${Main} fill=${false} pad="large">
      <${Heading} level=1 > Under Construction <//>
    <//>
    <${Footer} justify="center">
      <${Text} > Copyright ©2021 <//>
    <//>
  <//>
`

render(html`<${App} />`, document.body)
