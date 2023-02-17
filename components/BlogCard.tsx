import Link from 'next/link'
import styles from './BlogCard.module.css'

type CardProps = {
  uri: string;
  title: string;
  description: string;
}
export const Card = ({uri, title, description}: CardProps) => 
  <article key={title} className={styles.blog_card}>
    <h2> 
      <Link href={`blog/${uri}`}>
        {title}
      </Link>
    </h2>
    <p>
      {description}
    </p>
  </article>

export default Card
