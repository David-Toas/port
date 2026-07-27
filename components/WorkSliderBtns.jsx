"use client";

import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous project"
      >
        <ChevronLeft className={iconsStyles} size={24} />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label="Next project"
      >
        <ChevronRight className={iconsStyles} size={24} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
