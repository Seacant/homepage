import Link from "next/link";
import styled from "./BlogCard.module.css";

type CardProps = {
  uri: string;
  title: string;
  description: string;
  key: React.Key;
};

export const Card = ({ uri, title, description, key }: CardProps) => (
  <div className={styled["blog-card"]} key={key}>
    <h2>
      <Link href={`blog/${uri}`}>{title}</Link>
    </h2>
    <p>{description}</p>
  </div>
);

export default Card;
