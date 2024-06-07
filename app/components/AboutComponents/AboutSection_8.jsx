"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// "use client";
import Slider from "react-slick";
import "./AboutCustom.css";

import { About_Data } from "@/Data/About";

const AboutSection_8 = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section8_Name, setName] = useState([]);
  const [section8_Designation, setDesignation] = useState([]);
  const [section8_ImgSource, setImgSource] = useState([]);
  const [section8_ImgAlt, setImgAlt] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");
  const [additionStatus, setAdditionStatus] = useState("false");
  const [deletionStatus, setDeletionStatus] = useState("falce");
  const [modelID, setModelID] = useState("");
  const [action, setAction] = useState("");
  // =====adding employee state variables
  const [employeeName, setEmployeeName] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [employeeImgSrc, setEmployeeImgSrc] = useState("");
  const [employeeImgAlt, setEmployeeImgAlt] = useState("");

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

  useEffect(() => {
    const getSection8AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      setModelID(myJsonData[0]?._id);

      //adding default values to the form through state variable
      setName(myJsonData[0]?.section8?.map((item) => item.section8_Name));
      setDesignation(
        myJsonData[0]?.section8?.map((item) => item.section8_Designation)
      );
      setImgSource(
        myJsonData[0]?.section8?.map((item) => item.section8_ImgSource)
      );
      setImgAlt(myJsonData[0]?.section8?.map((item) => item.section8_ImgAlt));
    };
    getSection8AboutData();
    setIsClient(true);
  }, []);

  return (
    <>
      {/* For Extra large Devices */}
      <div className="xl:w-[80vw] mx-auto xl:mt-[100px] hidden xl:block">
        <div>
          <Slider {...settings}>
            {isClient ? (
              data[0]?.section8?.map((item, index) => (
                <div key={index} className="">
                  <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                    <figure>
                      <div className="w-[175px]">
                        <Image
                          src={section8_ImgSource[index]}
                          alt={section8_ImgAlt[index]}
                          className="pt-[30px]"
                          width="175"
                          height="175"
                          layout="responsive"
                        />
                      </div>
                    </figure>
                    <div className="card-body relative top-0 left-0">
                      <h2 className="text-center text-white xl:text-[22px] xl:font-bold">
                        {section8_Name[index]}
                      </h2>
                      <h3 className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]">
                        {section8_Designation[index]}
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
              ))
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </Slider>
        </div>
      </div>
      {/* For extra small Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] block sm:hidden">
        <div>
          <Slider {...settings_2}>
            {isClient ? (
              data[0]?.section8?.map((item, index) => (
                <div key={index} className="">
                  <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                    <figure>
                      <div className="w-[175px]">
                        <Image
                          src={section8_ImgSource[index]}
                          alt={section8_ImgAlt[index]}
                          className="pt-[30px]"
                          width="175"
                          height="175"
                          layout="responsive"
                        />
                      </div>
                    </figure>
                    <div className="card-body relative top-0 left-0">
                      <h2 className="text-center text-white xl:text-[22px] xl:font-bold">
                        {section8_Name[index]}
                      </h2>
                      <h3 className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]">
                        {section8_Designation[index]}
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
              ))
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </Slider>
        </div>
      </div>

      {/* For small Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] hidden sm:block md:hidden">
        <div>
          <Slider {...settings_3}>
            {isClient ? (
              data[0]?.section8?.map((item, index) => (
                <div key={index} className="">
                  <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                    <figure>
                      <div className="w-[175px]">
                        <Image
                          src={section8_ImgSource[index]}
                          alt={section8_ImgAlt[index]}
                          className="pt-[30px]"
                          width="175"
                          height="175"
                          layout="responsive"
                        />
                      </div>
                    </figure>
                    <div className="card-body relative top-0 left-0">
                      <h2 className="text-center text-white xl:text-[22px] xl:font-bold">
                        {section8_Name[index]}
                      </h2>
                      <p className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]">
                        {section8_Designation[index]}
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
              ))
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </Slider>
        </div>
      </div>

      {/* For medium Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] hidden md:block lg:hidden">
        <div>
          <Slider {...settings_5}>
            {isClient ? (
              data[0]?.section8?.map((item, index) => (
                <div key={index} className="">
                  <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                    <figure>
                      <div className="w-[175px]">
                        <Image
                          src={section8_ImgSource[index]}
                          alt={section8_ImgAlt[index]}
                          className="pt-[30px]"
                          width="175"
                          height="175"
                          layout="responsive"
                        />
                      </div>
                    </figure>
                    <div className="card-body relative top-0 left-0">
                      <h2 className="text-center text-white text-[22px] font-bold">
                        {section8_Name[index]}
                      </h2>
                      <p className="text-center text-white text-[14px] font-light mt-[-10px]">
                        {section8_Designation[index]}
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
              ))
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </Slider>
        </div>
      </div>

      {/* For large Devices */}
      <div className={`w-[80vw] mx-auto mt-[100px] hidden lg:block xl:hidden`}>
        <div>
          <Slider {...settings_5}>
            {isClient ? (
              data[0]?.section8?.map((item, index) => (
                <div key={index} className="">
                  <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                    <figure>
                      <div className="w-[175px]">
                        <Image
                          src={section8_ImgSource[index]}
                          alt={section8_ImgAlt[index]}
                          className="pt-[30px]"
                          width="175"
                          height="175"
                          layout="responsive"
                        />
                      </div>
                    </figure>
                    <div className="card-body relative top-0 left-0">
                      <h2 className="text-center text-white text-[22px] font-bold">
                        {section8_Name[index]}
                      </h2>
                      <h3 className="text-center text-white text-[17px] font-light mt-[-10px]">
                        {section8_Designation[index]}
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
              ))
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AboutSection_8;
