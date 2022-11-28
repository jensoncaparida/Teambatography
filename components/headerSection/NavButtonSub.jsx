import styles from "./NavButtonSub.module.css";
import { useEffect, useState } from "react";

export default function Button({ children, variant }) {
  return (
    <div>
      {variant === "primary" ? (
        <div>
          <button className={styles.primary}>{children}</button>
        </div>
      ) : (
        <li className={styles.secondary}>{children}</li>
      )}
    </div>
  );
}
