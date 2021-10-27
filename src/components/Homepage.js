import { App } from '../components/App'
import { Heading } from 'grommet'
import { render } from 'preact'
import { html } from 'htm/preact'

render(html`
  <${App} >
    <${Heading} level=1> Under Construction <//>
  <//>
`, document.body)
