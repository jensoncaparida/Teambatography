import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <p className={styles.title}>Contact Details</p>
        <div>
          <Image src="/email.svg" alt="email-icon" width={40} height={40} />
          <p>Teambatography@gmail.com</p>
        </div>
        <div>
          <Image src="/phone.svg" alt="phone-icon" width={40} height={40} />
          <p>489-9897</p>
        </div>
        <div>
          <Image
            src="/location.svg"
            alt="location-icon"
            width={40}
            height={40}
          />
          <p>Imus city, Cavite, Philippines</p>
        </div>
      </div>
      <div className={styles.socmed}>
        <p className={styles.title}>Follow Us On</p>
        <div>
          <Link href="https://www.facebook.com/" target="_blank">
            <Image
              src="/facebook.svg"
              alt="facebook-icon"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image
              src="/instagram.svg"
              alt="instagram-icon"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <Image
              src="/twitter.svg"
              alt="twitter-icon"
              width={40}
              height={40}
            />
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
