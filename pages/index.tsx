import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import profilePic from '../public/me.png'

type proseLinkProps = {
  href: string
  children: React.ReactNode
}
const ProseLink: React.FC<proseLinkProps> = ({href, children}) => <Link href={href} passHref prefetch={false}>
  <a className="underline hover:text-slate-400 hover:decoration-cyan-800">{children}</a>
</Link>

const Home = () => <div className="container basis-3/4 pt-4em flex flex-col space-y-2">
  <Head>
    <title> {"Travis' Homepage"} </title>
  </Head>

  <span className="text-center">
    <Image className="rounded-full" src={profilePic} height="128" width="128" alt="Picture of the author"></Image>
  </span>

  <h2 className="text-2xl leading-8">Intro</h2>
  <p className="indent-8">{` 
    Welcome! My name is Fletch, and I am a Software Engineer working in Ed-Tech.

    I'm not currently looking for work, but feel free to check out my `}
    <ProseLink href="/resume">Résumé</ProseLink>
    {`
    or even reach out (top right) if you think you can convince me otherwise.
  `}
  </p>

  <h2 className="text-2xl leading-8 py-4">Active Projects</h2>
  <ul className="space-y-8">
    <li>
      <h3 className="text-xl">My Homepage</h3>
      <p className="indent-8">{`
        The site you're reading right now has serves a dual purpose as my place
        for experimenting with new web technologies. It has been written and
        re-written in every hot tech JavaScript Framework I had time to look at.
        Check out its current iteration on `}
        <ProseLink href="https://github.com/Seacant/homepage">GitHub</ProseLink>.
      </p>
    </li>
    <li>
      <h3 className="text-xl">Blueprints</h3>
      <p className="indent-8">{`
        Create and share your Minecraft creations and contraptions through the
        use of its built-in Schematic (.nbt) files! Browse popular creators and
        download tutorial builds without having to pull their entire world with 
        it. 
      `}</p>
      <p className="text-sm text-center">(Coming soon™)</p>
    </li>
  </ul>
</div>
export default Home
