import styles from "./Pricing.module.css";
import Image from "next/image";

export default function Pricing() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.img}
          src="/pricing.png"
          width={1400}
          height={600}
          objectFit="cover"
          quality={100}
        />
      </div>
      <div>
        <h1>PRICING</h1>
      </div>
      <div className={styles.panels}>
        <div className={styles.panel1}>
          <p className={styles.p}>
            Basic Wedding Package <br /> Starting at <br />
            <span className={styles.price}> 20,000 PHP</span>
          </p>
          <ul>
            <li>6 Hours of wedding coverage</li>
            <li>USB drive of edited images</li>
          </ul>
        </div>
        <div className={styles.panel2}>
          <p className={styles.p}>
            Basic Portrait Session <br /> Starting at <br />
            <span className={styles.price}>10,000 PHP</span>
          </p>
          <ul>
            <li>
              5 Hours per Session
              <ul>
                <li>3 - 4 Outfits</li>
                <li>4 Locations</li>
              </ul>
            </li>
            <li>Disc of edited images</li>
          </ul>
        </div>
      </div>
      <div className={styles.details}>
        <p>
          Custom options are available and their pricing is figured for each
          individual session with variables including; distance from Summit
          County, CO and type of event.
        </p>
        <p>
          Please contact us for your inquiry or pricing. Thank you and we look
          forward to hearing from you!
        </p>
        <p>
          Sincerely, <br /> &nbsp;&nbsp; TEAMBATOGRAPHY
        </p>
      </div>
    </div>
  );
}
