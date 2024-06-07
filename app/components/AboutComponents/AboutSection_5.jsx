"use client";

import AboutSectionSlider from "./AboutSectionSlider";
import AboutSectionSliderSM from "./AboutSectionSliderSM";
import AboutSectionSliderXL from "./AboutSectionSliderXL";

const AboutSection_5 = () => {
  return ( 
    <>
      <div>
        <h1
          className="text-[20px] font-semibold py-[20px] xl:text-[70px] text-center"
          
        >
          When Numbers Speak for Us
        </h1>
      </div>
      {/* ============== Slider only for extra small devices =================== */}
      <div className="sm:hidden">
        <AboutSectionSlider />
      </div>
      {/* ================== Slider only for Small, medium and large devices ================== */}
      <div className="hidden sm:block xl:hidden">
        <AboutSectionSliderSM />
      </div>
      {/* ============== Slider only for XL devices =================== */}
      <div className="hidden xl:block">
        <AboutSectionSliderXL />
      </div>
    </>
  );
};

export default AboutSection_5;
