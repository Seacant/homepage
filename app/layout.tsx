import React from "react";
import { Header } from "../components/Header";

import "../styles.css";

import { Metadata } from "next";

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
      <body>
        <Header />
        <main>{children}</main>
        <footer>Made with ❤️ by Travis Fletcher</footer>
      </body>
    </html>
  );
};

export default RootLayout;
