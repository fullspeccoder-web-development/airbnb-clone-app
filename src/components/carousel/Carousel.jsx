import { v4 } from "uuid";
import { useEffect, useState } from "react";

import "./Carousel.scss";

import { ReactComponent as ChevronRightSVG } from "../../assets/chevron-right.svg";

import { ReactComponent as ChevronLeftSVG } from "../../assets/chevron-left.svg";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayRightButton, setDisplayRightButton] = useState(false);
  const [displayLeftButton, setDisplayLeftButton] = useState(false);
  const [mouseIn, setMouseIn] = useState(false);

  const indexChecker = () => {
    if (activeIndex === 0) {
      setDisplayLeftButton(false);
      setDisplayRightButton(true);
    }
    if (activeIndex === images.length - 1) {
      setDisplayLeftButton(true);
      setDisplayRightButton(false);
    }

    if (activeIndex < images.length - 1 && activeIndex > 0) {
      setDisplayLeftButton(true);
      setDisplayRightButton(true);
    }
  };

  useEffect(() => {
    if (mouseIn) {
      indexChecker();
    } else {
      setDisplayLeftButton(false);
      setDisplayRightButton(false);
    }
  }, [activeIndex]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setDisplayLeftButton(false);
      newIndex = 0;
    } else if (newIndex >= images.length) {
      setDisplayRightButton(false);
      newIndex = images.length - 1;
    }

    if (newIndex < images.length - 1) {
      setDisplayRightButton(true);
    }
    if (newIndex > 0) {
      setDisplayLeftButton(true);
    }

    setActiveIndex(newIndex);
  };

  const mouseEnterHandler = () => {
    setMouseIn(true);
    indexChecker();
  };

  const mouseLeaveHandler = () => {
    setMouseIn(false);
    setDisplayLeftButton(false);
    setDisplayRightButton(false);
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
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <button
          className={`${displayLeftButton ? "show" : "hide"}`}
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
          className={`${displayRightButton ? "show" : "hide"}`}
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
