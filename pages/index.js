import styled from 'styled-components'

import { H1, Paragraph, Code } from '../components/Typography'
import Head from 'next/head'

const ContentLayout = styled.div`
  flex-basis: 70%;
  padding-top: 4em;
`

const Home = () => <ContentLayout>
  <Head>
    <title> {"Travis' Homepage"} </title>
  </Head>
  <H1> Under Construction </H1>
  <Paragraph>
    {"Welcome! You probably shouldn't be here yet."}
  </Paragraph>
</ContentLayout>

export default Home
