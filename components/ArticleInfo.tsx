import Image from "next/image";
import React from "react";
import styled from "styled-components";

import profilePic from "../public/me.png"
import { LocalDate } from "./LocalDate";

const Styled = styled.div`
  display: flex;
  gap: 1ch;
  line-height: 32px;

  address {
    display: inline;
  }
`;

const Avatar = styled(Image)`
  vertical-align: bottom;
  border-radius: 16px;
`;

type ArticleInfoProps = {
  date: Date;
};
export const ArticleInfo = ({date}: ArticleInfoProps) => {
  return (
    <Styled>
      <Avatar
        src={profilePic}
        height="32"
        width="32"
        alt="Picture of the author" />
      <address> By Travis Fletcher </address>
      on
      <LocalDate date={date} />
    </Styled>
  );
};
