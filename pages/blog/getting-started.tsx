import Link from 'next/link'
import Head from 'next/head'
import styles from './blog.module.css'
import { stripIndent, html } from 'common-tags'

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ArticleInfo } from '../../components/ArticleInfo'
import styled from 'styled-components';
import { Article as Styled, FullWidth } from '../../components/Article';

const FullWidthSyntaxHighlighter = styled(FullWidth).attrs({
  as: SyntaxHighlighter,
})``

const Article = () => <>
  <Head>
    <title> Learning to &lt;code/&gt; </title>
  </Head>
  <Styled>
    <h1> Learning to &lt;code/&gt; </h1>
    <ArticleInfo date={new Date(
      Date.UTC(2022, 9, 31, 20, 54, 54)
    )} />

    <p>
      This is a coding blog, so it makes sense to start out by making sure we
      can represent code. My <code>site:developer.mozilla.org</code>-enhanced
      googling skills tell me that <code>{ html`<pre /> + <code />` }</code> is
      all the rage, so let's give that a try.
    </p>

    <h2> The Basics </h2>
    <pre>
      <code>{ stripIndent`
        if ( window.navigator ) {
          console.log("Hello, user!")
        } else {
          console.error("There's nobody to read me :(")
        }
      `}</code>
    </pre>

    <p>
      That looks good for vanilla Javascript, but what about JSX? The block
      above actually looks like
    </p>

    <pre>
      <code>{ html`
        <pre>
          <code>{ stripIndent\`
            if ( window.navigator ) {
              console.log("Hello, user!")
            } else {
              console.error("There's nobody to read me :(")
            }
          \`}</code>
        </pre>
      `}</code>
    </pre>

    <p>
      <code>stripIndent`...`</code> is a <Link
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
      >Tagged Template Literal</Link> and allows us to write our code at the
      current indent level without the spacing making it into the final doc,
      while still maintaining its internal indentation. Super neat!
    </p>

    <p>
      In a similar vein, <em>that</em> block actually looks like
    </p>


    <pre>
      <code>{ html`
        <pre>
          <code>{ html\`
            ...
          \`}</code>
        </pre>
      `}</code>
    </pre>

    <p>
      Where <code>html`...`</code> is a similar tagged template which helps us
      automatically encode our alligators into their html-escaped equivalent.
      Looking alright so far...
    </p>

    <h2> Syntax Highlighting </h2>
    <p>
      I'm a strong believer in good web fundamentals, so any feature
      enhancement we add must have reasonable fallback behavior for people
      who choose to turn off Javascript or even who use browsers (such as
      links) who don't even support the notion. But I also can't stand reading
      un-highlighted code, and I'm sure you all would appreciate some color in
      your life as well. Let's see what we can do about that.
    </p>

    <p>
      The first result for "react syntax highlighter" is,
      unsurprisingly, <code>react-syntax-highlighter</code>, which seems to
      support progressively highlighting if the client has JS enabled.
    </p>

    <SyntaxHighlighter language="javascript" useInlineStyles={false}>{ stripIndent`
        if ( window.navigator ) {
          console.log("Hello, user!")
        } else {
          console.error("There's nobody to read me :(")
        }
    `}</SyntaxHighlighter>

    <p>
      Not bad! In JSX, the above looks like
    </p>

    <SyntaxHighlighter language="javascript" useInlineStyles={false}>{ stripIndent`
      /* Contains our 2 styles behind a @media prefers-color-scheme selector */
      import '../highlight.css'

      // Then, anywhere
      import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';

      <SyntaxHighlighter language="javascript" useInlineStyles={false}>{ stripIndent\`
          if ( window.navigator ) {
            console.log("Hello, user!")
          } else {
            console.error("There's nobody to read me :(")
          }
      \`}</SyntaxHighlighter>
    `}</SyntaxHighlighter>

    <p>
      Both of which render from the server as completely valid {
        html`<pre><code>`
      } blocks with JS only being required to tag and color them.
    </p>

    <h2> Thinking outside the box </h2>

    <p>
       That scrollbar doesn't looks very good, considering how much free
       real estate we're wasting in our gutters. Let's see if we can't get
       something akin to 'full-bleed' working.
    </p>

    <FullWidthSyntaxHighlighter language="javascript" useInlineStyles={false}>{ stripIndent`
      import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';

      <SyntaxHighlighter language="javascript" useInlineStyles={false}>{ stripIndent\`
          if ( window.navigator ) {
            console.log("Hello, user!")
          } else {
            console.error("There's nobody to read me :(")
          }
      \`}</SyntaxHighlighter>
    `}</FullWidthSyntaxHighlighter>

    <p>
      And, just to test, if our content is <em>really</em> long...
    </p>

    <FullWidthSyntaxHighlighter language="javascript" useInlineStyles={false}>{ stripIndent`
    if(you_use_really_long_variable_names_and_hate_newlines_because_youre_a_l33t_hacker_man){console.log("what a cool guy")}
    `}</FullWidthSyntaxHighlighter>


    <p>
      This all works because of the amazing CSS Grid, which is nice enough to
      let us break out of the column we're constrained to as will. In its
      entirety, the code that allows all of this to work is as follows
    </p>

    <SyntaxHighlighter language="css" useInlineStyles={false}>{ stripIndent`
      // styles.css
      main {
        display: grid;
        grid-template-columns:
          1fr
          min(65ch, 100%)
          1fr;
      }

      main > * {
        grid-column: 2;
      }

      // blog.module.css
      .article {
        text-align: justify;
        display: contents;
      }
      .article > * {
        grid-column: 2;
      }

      .full_bleed {
        width: 100%;
        grid-column: 1 / -1;

        display: flex;
        justify-content: center;
      }
    `}</SyntaxHighlighter>

    <p>
      This is almost entirely inspired by <Link
        href="https://css-tricks.com/full-bleed/"
      >CSS Tricks's Full Bleed article</Link> with the tricky bit being that we
      want to declare our layout at the <code>main</code> tag but our semantic
      HTML-ness means we are surrounded by an <code>article</code> before we get
      to the actual content. By declaring the article as <code>display: contents</code>,
      we are able to hide the article tag from the DOM and promote its children
      to be in the grid instead.
    </p>
  </Styled>
</>
export default Article