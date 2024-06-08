"use client";
import Image from "next/image";

import Slider from "react-slick";
import "./AboutCustom.css";

const AboutSection_8 = ({ data }) => {
  const section8 = data[0]?.section8?.map((item, index) => item);

  var settings = {
    //dots: false,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centeredItem: true,

    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };
  var settings_2 = {
    //fro extra small device
    dots: true,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centeredItem: true,

    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };
  var settings_3 = {
    //for small devices
    dots: true,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centeredItem: true,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };

  var settings_5 = {
    // for medium device and large device

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centeredItem: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };

  return (
    <>
      {/* For Extra large Devices */}
      <div className="xl:w-[80vw] mx-auto xl:mt-[100px] hidden xl:block">
        <div>
          <Slider {...settings}>
            {section8?.map((item, index) => (
              <div key={index} className="">
                <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                  <figure>
                    <div className="w-[175px]">
                      <Image
                        src={item.section8_ImgSource}
                        alt={item.section8_ImgAlt}
                        className="pt-[30px]"
                        width="175"
                        height="175"
                        layout="responsive"
                      />
                    </div>
                  </figure>
                  <div className="card-body relative top-0 left-0">
                    <h2 className="text-center text-white xl:text-[22px] xl:font-bold">
                      {item.section8_Name}
                    </h2>
                    <h3 className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]">
                      {item.section8_Designation}
                    </h3>
                    <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                      <Image
                        src="/AboutPageLogos/AboutPageWaterMark.png"
                        alt="AboutPageWaterMark"
                        width="179"
                        height="133"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* For extra small Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] block sm:hidden">
        <div>
          <Slider {...settings_2}>
            {section8?.map((item, index) => (
              <div key={index} className="">
                <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                  <figure>
                    <div className="w-[175px]">
                      <Image
                        src={item.section8_ImgSource}
                        alt={item.section8_ImgAlt}
                        className="pt-[30px]"
                        width="175"
                        height="175"
                        layout="responsive"
                      />
                    </div>
                  </figure>
                  <div className="card-body relative top-0 left-0">
                    <h2 className="text-center text-white xl:text-[22px] xl:font-bold">
                      {item.section8_Name}
                    </h2>
                    <h3 className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]">
                      {item.section8_Designation}
                    </h3>
                    <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                      <Image
                        src="/AboutPageLogos/AboutPageWaterMark.png"
                        alt="AboutPageWaterMark"
                        width="179"
                        height="133"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* For small Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] hidden sm:block md:hidden">
        <div>
          <Slider {...settings_3}>
            {section8?.map((item, index) => (
              <div key={index} className="">
                <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                  <figure>
                    <div className="w-[175px]">
                      <Image
                        src={item.section8_ImgSource}
                        alt={item.section8_ImgAlt}
                        className="pt-[30px]"
                        width="175"
                        height="175"
                        layout="responsive"
                      />
                    </div>
                  </figure>
                  <div className="card-body relative top-0 left-0">
                    <h2 className="text-center text-white xl:text-[22px] xl:font-bold">
                      {item.section8_Name}
                    </h2>
                    <p className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]">
                      {item.section8_Designation}
                    </p>
                    <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                      <Image
                        src="/AboutPageLogos/AboutPageWaterMark.png"
                        alt="AboutPageWaterMark"
                        width="179"
                        height="133"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* For medium Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] hidden md:block lg:hidden">
        <div>
          <Slider {...settings_5}>
            {section8?.map((item, index) => (
              <div key={index} className="">
                <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                  <figure>
                    <div className="w-[175px]">
                      <Image
                        src={item.section8_ImgSource}
                        alt={item.section8_ImgAlt}
                        className="pt-[30px]"
                        width="175"
                        height="175"
                        layout="responsive"
                      />
                    </div>
                  </figure>
                  <div className="card-body relative top-0 left-0">
                    <h2 className="text-center text-white text-[22px] font-bold">
                      {item.section8_Name}
                    </h2>
                    <p className="text-center text-white text-[14px] font-light mt-[-10px]">
                      {item.section8_Designation}
                    </p>
                    <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                      <Image
                        src="/AboutPageLogos/AboutPageWaterMark.png"
                        alt="AboutPageWaterMark"
                        width="179"
                        height="133"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* For large Devices */}
      <div className={`w-[80vw] mx-auto mt-[100px] hidden lg:block xl:hidden`}>
        <div>
          <Slider {...settings_5}>
            {section8?.map((item, index) => (
              <div key={index} className="">
                <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                  <figure>
                    <div className="w-[175px]">
                      <Image
                        src={item.section8_ImgSource}
                        alt={item.section8_ImgAlt}
                        className="pt-[30px]"
                        width="175"
                        height="175"
                        layout="responsive"
                      />
                    </div>
                  </figure>
                  <div className="card-body relative top-0 left-0">
                    <h2 className="text-center text-white text-[22px] font-bold">
                      {item.section8_Name}
                    </h2>
                    <h3 className="text-center text-white text-[17px] font-light mt-[-10px]">
                      {item.section8_Designation}
                    </h3>
                    <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                      <Image
                        src="/AboutPageLogos/AboutPageWaterMark.png"
                        alt="AboutPageWaterMark"
                        width="179"
                        height="133"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AboutSection_8;
