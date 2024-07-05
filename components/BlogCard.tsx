import Link from "next/link";
import styled from "styled-components";

const StyledCard = styled.article`
  padding: 2ch;

  > h2 {
    margin: 0;
  }

  > p {
    padding-left: 2ch;
  }
`;

type CardProps = {
  uri: string;
  title: string;
  description: string;
  key: React.Key;
};

export const Card = ({ uri, title, description, key }: CardProps) => (
  <StyledCard key={key}>
    <h2>
      <Link href={`blog/${uri}`}>{title}</Link>
    </h2>
    <p>{description}</p>
  </StyledCard>
);

export default Card;
