"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";
import OrderFormSM from "../OrderForm/OrderFormSM";
import Link from "next/link";
import { HomeTabContent } from "@/Data/HomeTabContent";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginRight: "38px",
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
        marginLeft: "38px",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const TabContextSM = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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
      <div className="mt-[12px] text-center bg-[#faf7f5] w-[100vw] mx-auto pt-[20px] pb-[20px]">
        <span className="font-thin text-2xl">
          Our Best Selling B2B Digital Marketing{" "}
          <span className="text-[#40b0fd] font-extrabold text-[22px]">
            Services
          </span>
        </span>
      </div>

      <dialog
        id="my_modal_SM"
        className=""
        style={{ width: "600px", height: "550px" }}
      >
        <div className="">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <OrderFormSM />
          </div>
        </div>
      </dialog>

      <Tabs>
        <TabList className="flex justify-center bg-[#f4faff] py-[30px] TabContextTabFont text-[12px] w-[90vw] mx-auto">
          {[
            "Amazon FBA",
            "Digital Marketing",
            "Graphics Design",
            "Web Development",
          ].map((tabName, index) => (
            <Tab
              key={tabName}
              className={`px-[10px] border-b-[2px] border-b-sky-300 cursor-pointer ${
                selectedIndex === index
                  ? "bg-[#cee9ff] text-black font-bold border-b-[4px] border-b-sky-800"
                  : "border-b-[2px] border-b-sky-300"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tabName}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="slider-container pb-[0px] bg-[#f4faff] w-[90vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.amazonFBA.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[40vw] h-[550px] bg-[#ffffff] shadow-xl mx-auto">
                      <figure>
                        <div className="w-[70%] h-[]">
                          <Image
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            className="w-[200px] mx-auto my-[20px]"
                            width="233"
                            height="162"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                      <div className="card-body bg-sky-500 rounded-lg">
                        <h2 className="font-bold text-white text-xl">
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
                            document.getElementById("my_modal_SM").showModal()
                          }
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="absolute top-0 left-0 z-50 bg-orange-500 w-[100%] h-[100%] mx-auto">
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
          <div className="slider-container p-0 bg-[#f4faff] w-[90vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.digitalMarketing.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[40vw] h-[550px] bg-[#ffffff] shadow-xl mx-auto">
                      <figure>
                        <div className="w-[70%] h-[]">
                          <Image
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            className="w-[200px] mx-auto my-[20px]"
                            width="233"
                            height="162"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                      <div className="card-body bg-sky-500 rounded-lg">
                        <h2 className="font-bold text-white text-xl">
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
                            document.getElementById("my_modal_SM").showModal()
                          }
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="absolute top-0 left-0 z-50 bg-orange-500 w-[100%] h-[100%] mx-auto">
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
          <div className="slider-container p-0  bg-[#f4faff] w-[90vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.graphicsDesign.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[40vw] h-[550px] bg-[#ffffff] shadow-xl mx-auto">
                      <figure>
                        <div className="w-[70%] h-[]">
                          <Image
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            className="w-[200px] mx-auto my-[20px]"
                            width="233"
                            height="162"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                      <div className="card-body bg-sky-500 rounded-lg">
                        <h2 className="font-bold text-white text-xl">
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
                            document.getElementById("my_modal_SM").showModal()
                          }
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="absolute top-0 left-0 z-50 bg-orange-500 w-[100%] h-[100%] mx-auto">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </Slider>
          </div>
        </TabPanel>
        {/* 4th Tabpanel for Web Development */}
        <TabPanel>
          <div className="slider-container p-0  bg-[#f4faff] w-[90vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.webDevelopment.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[40vw] h-[550px] bg-[#ffffff] shadow-xl mx-auto">
                      <figure>
                        <div className="w-[70%] h-[]">
                          <Image
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            className="w-[200px] mx-auto my-[20px]"
                            width="233"
                            height="162"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                      <div className="card-body bg-sky-500 rounded-lg">
                        <h2 className="font-bold text-white text-xl">
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
                            document.getElementById("my_modal_SM").showModal()
                          }
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="absolute top-0 left-0 z-50 bg-orange-500 w-[100%] h-[100%] mx-auto">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </Slider>
          </div>
        </TabPanel>
        <div className="text-center bg-[#f4faff] w-[90vw] mx-auto">
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

export default TabContextSM;
