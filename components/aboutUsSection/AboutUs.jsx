import styles from "./AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h1>Learn About Us</h1>
        <div>
          <p>
            We work with a skilled photographer who is full of crazy and
            interesting ideas, while following ethical and client-focused
            business practices.
          </p>
          <p>
            We love to create something unique for your product using bright
            images, tilts, angles and positions.
          </p>
        </div>
      </div>
      <div className={styles.gif}>
        <Image
          src="/aboutUs.gif"
          alt="gif-about"
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
