import Image from "next/image";
import React from "react";

import profilePic from "../public/me.png";
import { LocalDate } from "./LocalDate";
import styles from "./ArticleInfo.module.css";

type ArticleInfoProps = {
  date: Date;
};
export const ArticleInfo = ({ date }: ArticleInfoProps) => {
  return (
    <div className={styles["article-info"]}>
      <Image
        className={styles.avatar}
        src={profilePic}
        height="32"
        width="32"
        alt="Picture of the author"
      />
      <address> By Travis Fletcher </address>
      on <LocalDate date={date} />
    </div>
  );
};
