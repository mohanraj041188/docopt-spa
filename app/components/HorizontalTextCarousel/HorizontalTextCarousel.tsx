import { useState, useEffect } from "react";
import "./HorizontalTextCarousel.scss";

const HorizontalTextCarousel = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className="horizontal-text-carousel__container">
      <div
        className="horizontal-text-carousel__track"
        style={{ transform: `translateY(-${currentIndex * 64}px)` }}
      >
        {items.map((item, index) => (
          <div className="horizontal-text-carousel__item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTextCarousel;
