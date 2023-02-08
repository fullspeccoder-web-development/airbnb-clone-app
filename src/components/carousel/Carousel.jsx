import { v4 } from "uuid";
import { useEffect, useState } from "react";

import "./Carousel.scss";

import { ReactComponent as ChevronRightSVG } from "../../assets/chevron-right.svg";

import { ReactComponent as ChevronLeftSVG } from "../../assets/chevron-left.svg";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Right button -> Element One
  // Left button -> Element Two
  const [displayButtons, setDisplayButtons] = useState([false, false]);
  const [mouseIn, setMouseIn] = useState(false);

  const indexChecker = () => {
    if (activeIndex === 0) setDisplayButtons([false, true]);
    if (activeIndex === images.length - 1) setDisplayButtons([true, false]);

    if (activeIndex < images.length - 1 && activeIndex > 0)
      setDisplayButtons([true, true]);
  };

  useEffect(() => {
    mouseIn ? indexChecker() : setDisplayButtons([false, false]);
  }, [activeIndex]);

  useEffect(() => {
    indexChecker();

    if (!mouseIn) setDisplayButtons([false, false]);
  }, [mouseIn]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="Carousel">
      <div
        className="Inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image) => (
          <img key={v4()} src={image} alt={"some title"} />
        ))}
      </div>
      <div
        className="indicators"
        onMouseEnter={() => {
          setMouseIn(true);
        }}
        onMouseLeave={() => {
          setMouseIn(false);
        }}
      >
        <button
          className={`${displayButtons[0] ? "show" : "hide"}`}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <ChevronLeftSVG />
        </button>
        <div className="image-dots">
          {images.map((image, index) => {
            const activeNode =
              index === activeIndex ? <span key={v4()}>•</span> : "•";
            return activeNode;
          })}
        </div>
        <button
          className={`${displayButtons[1] ? "show" : "hide"}`}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <ChevronRightSVG />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
