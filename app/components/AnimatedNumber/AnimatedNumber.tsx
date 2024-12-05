import { useEffect, useState } from "react";

const AnimatedNumber = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1); // Clamp progress between 0 and 1
      const updatedNumber = Math.floor(progress * targetNumber);

      setCurrentNumber(updatedNumber);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNumber]);

  return (
    <span className="animated-number">{currentNumber.toLocaleString()}</span>
  );
};

export default AnimatedNumber;
