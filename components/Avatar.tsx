import Image from "next/image";
import styles from "./Avatar.module.css";

export const Avatar = (
  props: React.ComponentProps<typeof Image> & { alt: string }
) => <Image {...props} alt={props.alt} className={styles.avatar} />;
