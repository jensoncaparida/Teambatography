import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <p className={styles.title}>Contact Details</p>
        <div>
          <img src="email.svg" />
          <p>Teambatography@gmail.com</p>
        </div>
        <div>
          <img src="phone.svg" />
          <p>489-9897</p>
        </div>
        <div>
          <img src="location.svg" />
          <p>Imus city, Cavite, Philippines</p>
        </div>
      </div>
      <div className={styles.socmed}>
        <p className={styles.title}>Follow Us On</p>
        <div>
          <Link href="https://www.facebook.com/" target="_blank">
            <img src="facebook.svg" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <img src="instagram.svg" />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <img src="twitter.svg" />
          </Link>
        </div>
      </div>
      <div className={styles.trademark}>
        <p>
          ©Teambatography | Terms & Conditions | Privacy Policy | Website by
          TEAMBA
        </p>
      </div>
    </div>
  );
}
