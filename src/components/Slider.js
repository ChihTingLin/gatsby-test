import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";

export default function Slider({ children = [], wrapperStyle = {} }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveIndex((activeIndex) =>
        activeIndex === children.length - 1 ? 0 : activeIndex + 1
      );
    }, 3000);
    return () => clearInterval(timerId);
  }, [children.length]);

  return (
    <div className={styles.container} style={wrapperStyle}>
      {children.map((slide, i) => (
        <div
          key={`slide-${i}`}
          className={`${styles.slide} ${
            i === activeIndex ? styles.active : ""
          }`}
        >
          {slide}
        </div>
      ))}
      <div className={styles.dots}>
        {Array(children.length)
          .fill("")
          .map((d, i) => (
            <div
              className={`${styles.dot} ${
                i === activeIndex ? styles.active : ""
              }`}
              key={`dot-${i}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
      </div>
    </div>
  );
}
