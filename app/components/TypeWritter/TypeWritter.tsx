import { useState, useEffect } from "react";

import "./TypeWritter.scss";

const Typewriter = ({ texts, delay, infinite, cursor }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return;

    let timeout;
    if (charIndex < texts[currentIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, delay);
    } else if (currentIndex < texts.length - 1) {
      timeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentIndex((prev) => prev + 1);
      }, delay * 20); // Delay before switching to the next word
    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentIndex(0);
      }, delay * 3);
    }

    return () => clearTimeout(timeout);
  }, [texts, currentIndex, charIndex, delay, infinite]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="typewriter__cursor">{cursor}</span>
    </span>
  );
};

export default Typewriter;
