import styles from "./NavButton.module.css";

export default function Button({ children, variant }) {
  return (
    <div className={styles.container}>
      {variant === "primary" ? (
        <button className={styles.primary}>{children}</button>
      ) : (
        <button className={styles.secondary}>{children}</button>
      )}
    </div>
  );
}
