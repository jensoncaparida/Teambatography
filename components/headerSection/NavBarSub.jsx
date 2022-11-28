import Button from "./NavButtonSub";
import styles from "./NavBarSub.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="logo.svg" alt="" />
        <h1>TEAMBA</h1>
        {/* <p>Photography</p> */}
      </div>
      <div className={styles.actions}>
        <ul>
          <Button variant="secondary">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/gallery">Gallery</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/pricing">Pricing</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/aboutUs">About Us</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/contactUs">Contact Us</Link>
          </Button>
        </ul>
        {/*
        <div className={styles.toggle}>
          <img src="moon.svg" alt="" />
        </div>
  */}
      </div>
    </div>
  );
}
