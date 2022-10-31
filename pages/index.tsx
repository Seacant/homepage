import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import profilePic from '../public/me.png'

import styles from './index.module.css'

type proseLinkProps = {
  href: string
  children: React.ReactNode
}
const ProseLink: React.FC<proseLinkProps> = ({href, children}) => <Link 
  href={href} prefetch={false}
>
  {children}
</Link>

const Home = () => <>
  <Head>
    <title>Travis' Homepage</title>
  </Head>

  <Image className={styles.avatar} src={profilePic} height="128" width="128" alt="Picture of the author"></Image>

  <section>
    <h2>Intro</h2>
    <p> 
      Welcome! My name is Fletch, and I am a Software Engineer working in Ed-Tech.

      I'm not currently looking for work, but feel free to check out my&nbsp;
      <ProseLink href="/resume">Résumé</ProseLink> or even reach out (top right)
      if you think you can convince me otherwise.
    </p>
  </section>

  <section>
    <h2>Active Projects</h2>
    <ul>
      <li>
        <h3>My Homepage</h3>
        <p>
          The site you're reading right now has serves a dual purpose as my place
          for experimenting with new web technologies. It has been written and
          re-written in every hot tech JavaScript Framework I had time to look at.
          Check out its current iteration on <ProseLink 
            href="https://github.com/Seacant/homepage"
          >GitHub</ProseLink>.
        </p>
      </li>
      <li>
        <h3>Blueprints</h3>
        <p>
          Create and share your Minecraft creations and contraptions through the
          use of its built-in Schematic (.nbt) files! Browse popular creators and
          download tutorial builds without having to pull their entire world with 
          it. 
        </p>
        <p>(Coming soon™)</p>
      </li>
    </ul>
  </section>
</>
export default Home
