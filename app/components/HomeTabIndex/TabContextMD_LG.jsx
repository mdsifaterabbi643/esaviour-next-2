"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";
import OrderFormMD_LG from "../OrderForm/OrderFormMD_LG";
import Link from "next/link";
import { HomeTabContent } from "@/Data/HomeTabContent";

const TabContextMD_LG = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <div className="pt-[20px] mt-[12px] text-center bg-[#faf7f5] w-[100vw] mx-auto">
        <span className="font-thin text-2xl">
          Our Best Selling B2B Digital Marketing{" "}
          <span className="text-[#40b0fd] font-extrabold text-[26px]">
            Services
          </span>
        </span>
      </div>

      <dialog
        id="my_modal_MD_LG"
        className=""
        style={{ width: "700px", height: "550px" }}
      >
        <div className="">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <OrderFormMD_LG />
          </div>
        </div>
      </dialog>

      <Tabs>
        <TabList className="flex justify-center bg-[#faf7f5] py-[50px] TabContextTabFont text-[14px] w-[90vw] md:w-[100vw] mx-auto">
          {[
            "Amazon FBA",
            "Digital Marketing",
            "Graphics Design",
            "Website Development",
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
          <div className="slider-container pb-[0px] bg-[#faf7f5] w-[90vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.amazonFBA.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[27vw] h-[500px]  bg-[#ffffff] shadow-xl mx-auto">
                      <figure className="bg-[#ffffff]">
                        <div className="w-[70%] h-[]">
                          <Image
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            className="w-[90%] mx-auto my-[10px] lg:w-[60%] lg:my-[40px]"
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

                        <div className="spacegrotesk500 text-[14px] text-white">
                          {item?.description.length > 150
                            ? item?.description.slice(0, 150) + "..."
                            : item?.description}
                        </div>
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                          onClick={() =>
                            document
                              .getElementById("my_modal_MD_LG")
                              .showModal()
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
          <div className="slider-container p-0 bg-[#faf7f5] w-[90vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.digitalMarketing.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[27vw] h-[500px]  bg-[#ffffff] shadow-xl mx-auto">
                      <figure className="bg-[#ffffff]">
                        <div className="w-[70%] h-[]">
                          <Image
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            className="w-[90%] mx-auto my-[10px] lg:w-[60%] lg:my-[40px]"
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

                        <div className="spacegrotesk500 text-[14px] text-white">
                          {item?.description.length > 150
                            ? item?.description.slice(0, 150) + "..."
                            : item?.description}
                        </div>
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                          onClick={() =>
                            document
                              .getElementById("my_modal_MD_LG")
                              .showModal()
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
          <div className="slider-container p-0  bg-[#faf7f5] w-[90vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.graphicsDesign.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[27vw] h-[500px]  bg-[#ffffff] shadow-xl mx-auto">
                      <figure className="bg-[#ffffff]">
                        <div className="w-[70%] h-[]">
                          <Image
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            className="w-[90%] mx-auto my-[10px] lg:w-[60%] lg:my-[40px]"
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

                        <div className="spacegrotesk500 text-[14px] text-white">
                          {item?.description.length > 150
                            ? item?.description.slice(0, 150) + "..."
                            : item?.description}
                        </div>
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                          onClick={() =>
                            document
                              .getElementById("my_modal_MD_LG")
                              .showModal()
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
        {/* ============ Tab panel for website development ================== */}
        <TabPanel>
          <div className="slider-container p-0  bg-[#faf7f5] w-[90vw] mx-auto">
            <Slider {...settings}>
              {isClient ? (
                data[0]?.webDevelopment.map((item, index) => (
                  <div key={index}>
                    <div className="card card-compact w-[27vw] h-[500px]  bg-[#ffffff] shadow-xl mx-auto">
                      <figure className="bg-[#ffffff]">
                        <div className="w-[70%] h-[]">
                          <Image
                            src={item?.imgSrc}
                            alt={item?.imgAlt}
                            className="w-[90%] mx-auto my-[10px] lg:w-[60%] lg:my-[40px]"
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

                        <div className="spacegrotesk500 text-[14px] text-white">
                          {item?.description.length > 150
                            ? item?.description.slice(0, 150) + "..."
                            : item?.description}
                        </div>
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                          onClick={() =>
                            document
                              .getElementById("my_modal_MD_LG")
                              .showModal()
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
      </Tabs>
      <div className="text-center bg-[#faf7f5] w-[90vw] mx-auto">
        <Link href="/service">
          <button className="btn btn-sm btn-neutral rounded-none my-[50px]">
            View All Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default TabContextMD_LG;
