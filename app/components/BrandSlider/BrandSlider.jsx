"use client";

import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "../MyShadow.css";
import "./brand-slider.css";
import Image from "next/image";

const BrandSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      {/* relative top-0 left-0 w-[98vw] overflow-x-hidden overflow-y-hidden */}
      <div className="">
        <Slider
          {...settings}
          className="myShadowDiv py-[15px] border-[rgba(82, 83, 86,0.5)] w-[98vw] md:w-[95vw] mx-auto xl:w-[98vw] bg-[#ffffff]"
          autoplay={true}
          autoplaySpeed={2000}
        >
          <div>
            {/* className="text-center w-[50px] sm:w-[80px] xl:w-[150px] xl:pt-[10px] h-auto" */}
            <div className="text-center w-[80%] lg:w-[50%]">
              <Image
                src="/home/t3r-logo.png"
                alt="t3r-logo"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[100px] xl:pt-[10px]"
                width="104"
                height="30"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div>
            <div className="text-center w-[80%] lg:w-[50%]">
              <Image
                src="/home/virtusale-logo.png"
                alt="virtusale-logo.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px] xl:pt-[10px]"
                width="141"
                height="29"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div>
            <div className="text-center w-[80%] lg:w-[50%]">
              <Image
                src="/home/bugwomp-logo.png"
                alt="bugwomp-logo"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px] xl:pt-[10px]"
                width="277"
                height="54"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div>
            <div className="text-center w-[80%] lg:w-[50%]">
              <Image
                src="/home/Victor.png"
                alt="Victor.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
                width="385"
                height="135"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div>
            <div className="text-center w-[80%] lg:w-[50%]">
              <Image
                src="/home/Noor.png"
                alt="Noor.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
                width="385"
                height="135"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div>
            <div className="text-center w-[80%] lg:w-[50%]">
              <Image
                src="/home/Austin.png"
                alt="Austin.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
                width="385"
                height="135"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div>
            <div className="text-center w-[80%] lg:w-[50%]">
              <Image
                src="/home/Import.png"
                alt="Import.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
                width="385"
                height="135"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div>
            <div className="text-center w-[80%] lg:w-[50%]">
              <Image
                src="/home/Agro.png"
                alt="Agro.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
                width="385"
                height="135"
                layout="responsive"
              ></Image>
            </div>
          </div>
        </Slider>
        {/* <div className="absolute left-[0px] top-[0px] bg-[#28acf8] xl:w-[300px] xl:h-[100px] transform rotate-45"></div>
        <div className="absolute right-[0px] top-[0px] bg-[#28acf8] xl:w-[300px] xl:h-[100px] transform rotate-45"></div> */}
      </div>
    </>
  );
};

export default BrandSlider;
