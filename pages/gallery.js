import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/headerSection/NavBar";
import Gallery from "../components/gallerySection/Gallery";
import Footer from "../components/footerSection/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teambatography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo.svg" />
      </Head>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}
