import styled from "styled-components";

export const Article = styled.article`
  text-align: justify;
  display: contents;

  &  > * {
    grid-column: 2;
  }
`

export const FullWidth = styled.div`
  width: 100%;
  grid-column: 1 / -1;

  display: flex;
  justify-content: center;
`