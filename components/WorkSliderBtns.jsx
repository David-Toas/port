"use client";

import { useSwiper } from "swiper/react";
import { CaretLeft, CaretRight } from "phosphor-react";
// import { PiCaretleftBold, PiCaretRightBold } from "react-icons/pi";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        {/* <ChevronLeft className={iconsStyles} /> */}
        <CaretLeft size={24} className={iconsStyles}/>
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        {/* <ChevronRight className={iconsStyles} /> */}
        <CaretRight size={24}  className={iconsStyles}/>
      </button>
    </div>
  );
};

export default WorkSliderBtns;
