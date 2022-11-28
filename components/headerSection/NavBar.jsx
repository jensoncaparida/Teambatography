import Button from "./NavButton";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handeScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handeScroll);

    return () => {
      window.removeEventListener("scroll", handeScroll);
    };
  }, []);
  return (
    <div className={isScrolled ? styles.scrolled : styles.container}>
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
