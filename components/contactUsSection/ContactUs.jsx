import styles from "./ContactUs.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.title1}>Get In Touch</p>
        <div className={styles.panel}>
          <div className={styles.contacts}>
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
            <p className={styles.title2}>Follow Us On:</p>
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
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.name}>
          <div>
            <label htmlFor="fname">First Name</label>
            <br />
            <input
              className={styles.text}
              type="text"
              id="fname"
              name="fname"
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <br />
            <input
              className={styles.text}
              type="text"
              id="lname"
              name="lname"
            />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input className={styles.text} type="text" id="email" name="email" />
        <label htmlFor="subject">Subject</label>
        <input className={styles.text} id="subject" name="subject" />
        <label htmlFor="message">Message</label>
        <textarea className={styles.message} id="message" name="message" />
        <input className={styles.submit} type="submit" value="Submit"></input>
      </div>
    </div>
  );
}
