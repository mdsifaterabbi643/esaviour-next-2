"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeTabContent } from "@/Data/HomeTabContent";
import OrderFormXSM from "../OrderForm/OrderFormXSM";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginRight: "35px",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginLeft: "35px",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const TabContextXSM = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getServiceData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_SERVICE_GET, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch service data");
      }
      // return console.log(res.json());
      const myJsonData = await res.json();
      setData(myJsonData);
    };

    getServiceData();
    setIsClient(true);
  }, []);

  // console.log("==============", data[0]?.amazonFBA[0]);
  // console.log("==============", data[0]?.amazonFBA[1]);

  return (
    <>
      <div className="pb-[25px] pt-[25px] mt-[12px] text-center w-[90vw] mx-auto">
        <span className="TabContextFontSpan text-[30px]">
          Our Best Selling B2B Digital Marketing{" "}
          <span className="text-[#40b0fd] font-extrabold text-[30px] tracking-tighter">
            Services
          </span>
        </span>
      </div>
      <dialog
        id="my_modal_xsm"
        className=""
        style={{ width: "500px", height: "750px" }}
      >
        <div className="">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <OrderFormXSM />
          </div>
        </div>
      </dialog>
      ;
      <Tabs>
        <TabList className=" pb-[10px] TabContextTabFont text-[18px] w-[50vw] mx-auto text-center">
          {[
            "Amazon FBA",
            "Digital Marketing",
            "Graphics Design",
            "Web Development",
          ].map((tabName, index) => (
            <Tab
              key={tabName}
              className={`px-[10px] border-b-[2px] border-b-sky-300 my-[15px] cursor-pointer ${
                selectedIndex === index
                  ? "bg-[#faf7f5] text-sky-500 font-bold border-b-[4px] border-b-sky-800"
                  : "border-b-[2px] border-b-sky-300"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tabName}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="slider-container pt-[20px] pb-[0px] bg-[#ffffff] w-[100vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.amazonFBA.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                      <figure>
                        <div className="w-[350px] h-[]">
                          <Image
                            className="w-[60vw] mx-auto my-[20px]"
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            width="233"
                            height="162"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                      <div className="card-body bg-sky-500 rounded-lg">
                        <h2 className="text-white text-[20px] pb-[10px]">
                          {item?.heading}
                        </h2>

                        <div className="spacegrotesk500 text-[15px] text-white">
                          {item?.description.length > 150
                            ? item?.description.slice(0, 150) + "..."
                            : item?.description}
                        </div>

                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_xsm").showModal()
                          }
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="absolute top-0 left-0 z-50 bg-gray-300 w-[100%] h-[100%] mx-auto">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </Slider>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="slider-container pt-[20px] bg-[#ffffff] w-[100vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.digitalMarketing.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                      <figure>
                        <div className="w-[350px] h-[]">
                          <Image
                            className="w-[60vw] mx-auto my-[20px]"
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            width="233"
                            height="162"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                      <div className="card-body bg-sky-500 rounded-lg">
                        <h2 className="text-white text-[20px] pb-[10px]">
                          {item?.heading}
                        </h2>

                        <div className="spacegrotesk500 text-[15px] text-white">
                          {item?.description.length > 150
                            ? item?.description.slice(0, 150) + "..."
                            : item?.description}
                        </div>

                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_xsm").showModal()
                          }
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="absolute top-0 left-0 z-50 bg-gray-300 w-[100%] h-[100%] mx-auto">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </Slider>
          </div>
        </TabPanel>
        {/* ============= 3rd panel for graphics design =============== */}
        <TabPanel>
          <div className="slider-container pt-[20px] bg-[#ffffff] w-[100vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.graphicsDesign.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                      <figure>
                        <div className="w-[350px] h-[]">
                          <Image
                            className="w-[60vw] mx-auto my-[20px]"
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            width="233"
                            height="162"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                      <div className="card-body bg-sky-500 rounded-lg">
                        <h2 className="text-white text-[20px] pb-[10px]">
                          {item?.heading}
                        </h2>

                        <div className="spacegrotesk500 text-[15px] text-white">
                          {item?.description.length > 150
                            ? item?.description.slice(0, 150) + "..."
                            : item?.description}
                        </div>

                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_xsm").showModal()
                          }
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="absolute top-0 left-0 z-50 bg-gray-300 w-[100%] h-[100%] mx-auto">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </Slider>
          </div>
        </TabPanel>
        {/* 4th Tap panel for web development */}
        <TabPanel>
          <div className="slider-container pt-[20px] bg-[#ffffff] w-[100vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.webDevelopment.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                      <figure>
                        <div className="w-[350px] h-[]">
                          <Image
                            className="w-[60vw] mx-auto my-[20px]"
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            width="233"
                            height="162"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                      <div className="card-body bg-sky-500 rounded-lg">
                        <h2 className="text-white text-[20px] pb-[10px]">
                          {item?.heading}
                        </h2>

                        <div className="spacegrotesk500 text-[15px] text-white">
                          {item?.description.length > 150
                            ? item?.description.slice(0, 150) + "..."
                            : item?.description}
                        </div>

                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_xsm").showModal()
                          }
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="absolute top-0 left-0 z-50 bg-gray-300 w-[100%] h-[100%] mx-auto">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </Slider>
          </div>
        </TabPanel>
        <div className="text-center bg-[#ffffff] pb-[25px] w-[100vw] mx-auto">
          <Link href="/service">
            <button className="btn btn-sm btn-neutral rounded-none my-[10px]">
              View All Services
            </button>
          </Link>
        </div>
      </Tabs>
    </>
  );
};

export default TabContextXSM;
