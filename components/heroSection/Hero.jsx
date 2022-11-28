import styles from "./Hero.module.css";
import Button from "../headerSection/NavButton";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Image
        src="/hero-section-bg.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.info}>
        <h1>TEAMBA</h1>
        <p>
          We capture your memorable moments with our professional photographers
        </p>
        <Link href="/gallery">
          <Button variant="primary">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
}
