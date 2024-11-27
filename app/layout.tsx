import React from "react";
import { Header } from "../components/Header";

// import "../styles.css";
import inlinedCss from "../styles.css.inline"

import { Metadata } from "next";

function minimizeData( _content: string ) {
    let content = _content;
    content = content.replace( /\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '' );

    // now all comments, newlines and tabs have been removed
    content = content.replace( / {2,}/g, ' ' );

    // now there are no more than single adjacent spaces left
    // now unnecessary: content = content.replace( /(\s)+\./g, ' .' );
    content = content.replace( / ([{:}]) /g, '$1' );
    content = content.replace( /([;,]) /g, '$1' );
    content = content.replace( / !/g, '!' );

    return content;
}
export const metadata: Metadata = {
  authors: [
    {
      name: "Travis Fletcher",
    },
  ],
  title: "Travis Fletcher",
  description: "Personal Homepage for Travis.",
};

type Props = { children?: React.ReactNode };
const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <style>{minimizeData(inlinedCss)}</style>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer>Made with ❤️ by Travis Fletcher</footer>
      </body>
    </html>
  );
};

export default RootLayout;
