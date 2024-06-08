"use client";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

import Slider from "react-slick";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutCustom.css";

const AboutSectionSliderXL = ({ data }) => {
  const section5_slider1 = data[0]?.section5_slider1?.map((item) => item);
  const section5_slider2 = data[0]?.section5_slider2?.map((item) => item);

  // const router = useRouter();

  // const [data, setData] = useState([]);
  // const [isClient, setIsClient] = useState(false);
  // const [quantity, setQuantity] = useState([]); //for section5_slider1 in About model
  // const [heading, setHeading] = useState([]); //for section5_slider1 in About model
  // const [quantity2, setQuantity2] = useState([]); //for section5_slider2 in About model
  // const [heading2, setHeading2] = useState([]); //for section5_slider2 in About model
  // const [action, setAction] = useState("");
  // const [targetSection, setTargetSection] = useState("");
  // const [targetIndex, setTargetIndex] = useState();
  // const [updateStatus, setUpdateStatus] = useState(false);
  // const [deleteStatus, setDeleteStatus] = useState(false);
  // const [addStatus, setAddStatus] = useState(false);
  // const [addStatus2, setAddStatus2] = useState(false);
  // // state variables to add data
  // const [newHeading, setNewHeading] = useState(""); //for section5_slider1 in About model
  // const [newQuantity, setNewQuantity] = useState(""); //for section5_slider1 in About model
  // const [newHeading2, setNewHeading2] = useState(""); //for section5_slider2 in About model
  // const [newQuantity2, setNewQuantity2] = useState(""); //for section5_slider2 in About model

  // useEffect(() => {
  //   const getSection5AboutData = async () => {
  //     const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const myJsonData = await res.json();
  //     setData(myJsonData);
  //     //adding default values to the form through state variable
  //     setQuantity(
  //       myJsonData[0]?.section5_slider1?.map((item, index) => item.quantity)
  //     );
  //     setHeading(
  //       myJsonData[0]?.section5_slider1?.map((item, index) => item.heading)
  //     );
  //     setQuantity2(
  //       myJsonData[0]?.section5_slider2?.map((item, index) => item.quantity)
  //     );
  //     setHeading2(
  //       myJsonData[0]?.section5_slider2?.map((item, index) => item.heading)
  //     );
  //   };
  //   getSection5AboutData();
  //   setIsClient(true);
  // }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    //speed: 500,
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
    slidesToShow: 4,
    //speed: 500,
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
            <div key={index} className="w-[390px] h-[350px] mySliderHover">
              <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
                <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                    {item.quantity}
                  </h1>
                  <h1 className="font-bold text-[18px] text-center">
                    {item.heading}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* =========== Slider 2 ============= */}
      <div className="slider-container w-[80vw] mx-auto">
        <Slider {...settings_2}>
          {section5_slider2.map((item, index) => (
            <div key={index} className="w-[390px] h-[350px] mySliderHover">
              <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
                <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                    {item.quantity}
                  </h1>
                  <h1 className="font-bold text-[18px] text-center">
                    {item.heading}
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

export default AboutSectionSliderXL;
