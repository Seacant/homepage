import Head from 'next/head'
import Image from 'next/image'

import profilePic from '../public/me.png'

const Home = () => <div className="basis-1/2 pt-4em flex flex-col">
  <Head>
    <title> {"Travis' Homepage"} </title>
  </Head>

  <span className="text-center">
    <Image className="rounded-full" src={profilePic} height="128" width="128" alt="Picture of the author" placeholder="blur"></Image>
  </span>

  <h1 className="text-4xl leading-relaxed"> Home </h1>

  <h2 className="text-2xl leading-8">Intro</h2>
  <p className="indent-8">{` 
    Welcome! My name is Fletch, and I am a Software Engineer working in EdTech.

    I'm not currently looking for work, but feel free to check out my `}
    <a href="/resume" className="underline hover:text-slate-400 hover:decoration-cyan-800">Resume</a>
    {`
    or even reach out (top right) if you think you can convince me otherwise.
  `}
  </p>
</div>
export default Home
