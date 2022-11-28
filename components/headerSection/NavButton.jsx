import styles from "./NavButton.module.css";
import { useEffect, useState } from "react";

export default function Button({ children, variant }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {variant === "primary" ? (
        <div>
          <button className={styles.primary}>{children}</button>
        </div>
      ) : (
        <li className={isScrolled ? styles.scrolled : styles.secondary}>
          {children}
        </li>
      )}
    </div>
  );
}
