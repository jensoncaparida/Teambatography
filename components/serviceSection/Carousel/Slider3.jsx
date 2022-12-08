import styles from "./Slider.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Silder3() {
  const [slideIndex, setSlideIndex] = useState(0);
  const array = ["/set3/img1.png", "/set3/img2.png", "/set3/img3.png"];

  const indicators = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const loop = (count) => {
    if (count == array.length) {
      return (count = 0);
    }
    if (count < 0) {
      return (count = array.length - 1);
    }
    return count;
  };

  useEffect(() => {
    const interval = setInterval(
      () => setSlideIndex((count) => loop(count + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const nextDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <button
          className={styles.prev}
          onClick={() => setSlideIndex((count) => loop(count - 1))}
        >
          <img src="/prev.svg" alt="" />
        </button>
        <button
          className={styles.next}
          onClick={() => setSlideIndex((count) => loop(count + 1))}
        >
          <img src="/next.svg" alt="" />
        </button>
        <Image
          className={styles.img}
          src={array[slideIndex]}
          width={460}
          height={460}
          alt="slider image"
        />
        <div className={styles.dots}>
          {Array.from(indicators).map((indicator, index) => (
            <div
              key={indicator.id}
              onClick={() => nextDot(index)}
              className={slideIndex === index ? styles.active : styles.dot}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
