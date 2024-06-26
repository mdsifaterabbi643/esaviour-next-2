"use client";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

import Slider from "react-slick";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutCustom.css";

const AboutSectionSliderSM = ({ data }) => {
  const section5_slider1 = data[0]?.section5_slider1?.map((item) => item);
  const section5_slider2 = data[0]?.section5_slider2?.map((item) => item);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToScroll: 1,
  };
  const settings_2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToScroll: 1,
    rtl: true,
  };

  return (
    <>
      <div className="slider-container w-[100vw] mx-auto">
        <Slider {...settings}>
          {section5_slider1.map((item, index) => (
            <div
              key={index}
              className="w-[25vw] h-[160px] md:h-[200px] mySliderHover"
            >
              <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
                <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                    {item.quantity}
                  </h1>
                  <h1 className="font-bold text-[14px] text-center">
                    {item.heading}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* ========== Slider 2 starts from here ======== */}
      <div className="slider-container w-[90vw] mx-auto md:mt-[25px]">
        <Slider {...settings_2}>
          {section5_slider2.map((item, index) => (
            <div
              key={index}
              className="w-[25vw] h-[160px] md:h-[200px] mySliderHover"
            >
              <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
                <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                    {item.quantity}
                  </h1>
                  <h1 className="font-bold text-[14px] text-center">
                    {item.heading2}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default AboutSectionSliderSM;
