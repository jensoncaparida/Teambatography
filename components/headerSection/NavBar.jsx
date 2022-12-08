import Button from "./NavButton";
import styles from "./NavBar.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isClicked, setisClicked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="logo.svg" alt="" />
        <h1>TEAMBA</h1>
        {/* <p>Photography</p> */}
      </div>
      <button
        className={isClicked ? styles.active : styles.hamburger}
        onClick={() => {
          setisClicked(!isClicked);
        }}
      >
        <div className={styles.bar}></div>
      </button>
      <div className={isClicked ? styles.navMobile : styles.navDesktop}>
        <ul className={styles.nav}>
          <li>
            <Button variant="secondary">
              <Link href="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button variant="secondary">
              <Link href="/gallery">Gallery</Link>
            </Button>
          </li>
          <li>
            <Button variant="secondary">
              <Link href="/pricing">Pricing</Link>
            </Button>
          </li>
          <li>
            <Button variant="secondary">
              <Link href="/aboutUs">About Us</Link>
            </Button>
          </li>
          <li>
            <Button variant="secondary">
              <Link href="/contactUs">Contact Us</Link>
            </Button>
          </li>
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
