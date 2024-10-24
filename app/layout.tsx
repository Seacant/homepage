import React from "react";
import { Header } from "../components/Header";

import "../styles.css";

import { Inconsolata } from "next/font/google";
import { Metadata } from "next";

const monospace = Inconsolata({ subsets: ["latin"], variable: "--mono-font" });

export const metadata: Metadata = {
  authors: [
    {
      name: "Travis Fletcher",
    },
  ],
  description: "Personal Homepage for Travis. Currently under construction",
};

type Props = { children?: React.ReactNode };
const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html>
      <body>
        {/* todo: remove this wrapper div */}
        <div>
          <Header />
          <main className={monospace.variable}>{children}</main>
          <footer>Made with ❤️ by Travis Fletcher</footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
