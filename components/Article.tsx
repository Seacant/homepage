import styles from "./Article.module.css";

type ArticleProps = React.ComponentProps<"article"> & {
  children: React.ReactNode;
};
export const Article = ({ children, ...props }: ArticleProps) => (
  <article {...props} className={[styles.article, props.className].join(" ")}>
    {children}
  </article>
);
