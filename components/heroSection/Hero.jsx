import styles from "./Hero.module.css";
import Button from "../headerSection/NavButton";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.heroImage}
        src="/hero-section-bg.png"
        alt="Hero Background"
        fill
      />
      <div className={styles.info}>
        <h1>TEAMBA</h1>
        <p>
          We capture your memorable moments with our professional photographers
        </p>
        <Link href="/contactUs">
          <button className={styles.button}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}
