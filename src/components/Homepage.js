import { render, html } from 'htm/preact'
import styled from 'styled-components'

import { App } from './App'
import { H1, Paragraph } from './Typography'

const ContentLayout = styled.div`
  flex-basis: 70%;
  padding-top: 4em;
`

render(html`
  <${App} >
    <${ContentLayout}>
      <${H1}> Under Construction <//>
      <${Paragraph}>
        Welcome! You probably shouldn't be here yet.
      <//>
    <//>
  <//>
`, document.body)
