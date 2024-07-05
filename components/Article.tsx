import styled from "styled-components";

export const Article = styled.article`
  text-align: justify;
  display: contents;

  & > * {
    grid-column: 2;
  }
`;
