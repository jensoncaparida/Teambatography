import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/headerSection/NavBar";
import ContactUs from "../components/contactUsSection/ContactUs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teambatography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo.svg" />
      </Head>
      <Navbar />
      <ContactUs />
    </div>
  );
}
