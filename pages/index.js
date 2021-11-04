import styled from 'styled-components'

import { H1, Paragraph } from '../components/Typography'

const ContentLayout = styled.div`
  flex-basis: 70%;
  padding-top: 4em;
`

const Home = () => <ContentLayout>
  <H1> Under Construction </H1>
  <Paragraph>
    {"Welcome! You probably shouldn't be here yet."}
  </Paragraph>
</ContentLayout>

export default Home
