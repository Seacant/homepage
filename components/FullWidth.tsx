import styles from "./FullWidth.module.css";

type Props = React.ComponentProps<"div">;
export const FullWidth = (props: Props) => (
  <div {...props} className={[styles.full_bleed, props.className].join(" ")} />
);
