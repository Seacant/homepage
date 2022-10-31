import Head from 'next/head'
import Link from 'next/link'

import styles from './blog.module.css'

import { GettingStartedCard } from './getting-started'

const Blog = () => <>
  <Head>
    <title> {"Travis' Blog"} </title>
  </Head>
  
  <GettingStartedCard />
</>
export default Blog;
