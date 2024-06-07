"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";

import "./MyTabOverlay.css";
import OrderFormXL from "../OrderForm/OrderFormXL";
import Link from "next/link";
import { HomeTabContent } from "@/Data/HomeTabContent";

const TabContextXL = () => {
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
      <div className="tab-container bg-[#f4faff] px-4 py-8 xl:w-[80vw] xl:mx-auto">
        <h2 className="font-normal xl:text-[32px] xl:font-thin text-center mb-4">
          Our Best Selling B2B Digital Marketing{" "}
          <span className="text-[#40b0fd] font-extrabold xl:text-[32px]">
            Services
          </span>
        </h2>

        <dialog
          id="my_modal_2"
          className="bg-sky-500"
          style={{ width: "800px" }}
        >
          <div className="" style={{ width: "800px", height: "700px" }}>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div>
              {/* <OrderForm /> */}
              <OrderFormXL />
            </div>
          </div>
        </dialog>

        {/* Tab list container */}
        <div className="tab-list bg-[#f4faff] pb-4">
          <Tabs>
            <TabList className="flex justify-center mb-[50px]">
              {[
                "Amazon FBA",
                "Digital Marketing",
                "Graphics Design",
                "Web Development",
              ].map((tabName, index) => (
                <Tab
                  key={tabName}
                  className={`lg:px-[50px] border-b-[2px] border-b-sky-300 cursor-pointer ${
                    selectedIndex === index
                      ? "bg-[#f4faff] text-black font-bold border-b-[4px] border-b-sky-800"
                      : "border-b-[2px] border-b-sky-300"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tabName}
                </Tab>
              ))}
            </TabList>
            <TabPanel className="xl:bg-[#f4faff] py-[25px]">
              <div className="slider-container pb-[0px] bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  {isClient ? (
                    data[0]?.amazonFBA.map((item, index) => (
                      <div key={index}>
                        <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[450px]">
                          <figure className="bg-[#ffffff] py-[30px]">
                            <div className="w-[200px] h-auto">
                              <Image
                                src={item?.imgSrc}
                                alt={item?.imgAlt}
                                className="w-[50%]"
                                width="233"
                                height="162"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                          <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                            <h2
                              className="text-black text-[25px] pb-[10px] font-extrabold"
                              style={{
                                fontFamily: "Futura PT, sans-serif",
                              }}
                            >
                              {item?.heading}
                            </h2>

                            <div className="spacegrotesk500 text-[16px] font-semibold text-justify text-black xl:text-[14px]">
                              {item?.description.length > 150
                                ? item?.description.slice(0, 150) + "..."
                                : item?.description}
                            </div>

                            <button
                              className="btn btn-neutral btn-sm z-50 w-[100px] mb-[20px] rounded-none mx-auto"
                              onClick={() =>
                                document
                                  .getElementById("my_modal_2")
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
            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0 bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  {isClient ? (
                    data[0]?.digitalMarketing.map((item, index) => (
                      <div key={index}>
                        <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[450px]">
                          <figure className="bg-[#ffffff] py-[30px]">
                            <div className="w-[200px] h-auto">
                              <Image
                                src={item?.imgSrc}
                                alt={item?.imgAlt}
                                className="w-[50%]"
                                width="233"
                                height="162"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                          <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                            <h2
                              className="text-black text-[25px] pb-[10px] font-extrabold"
                              style={{
                                fontFamily: "Futura PT, sans-serif",
                              }}
                            >
                              {item?.heading}
                            </h2>

                            <div className="spacegrotesk500 text-[16px] font-semibold text-justify text-black xl:text-[14px]">
                              {item?.description.length > 150
                                ? item?.description.slice(0, 150) + "..."
                                : item?.description}
                            </div>

                            <button
                              className="btn btn-neutral btn-sm z-50 w-[100px] mb-[20px] rounded-none mx-auto"
                              onClick={() =>
                                document
                                  .getElementById("my_modal_2")
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
            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0  bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  {isClient ? (
                    data[0]?.graphicsDesign.map((item, index) => (
                      <div key={index}>
                        <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[450px]">
                          <figure className="bg-[#ffffff] py-[30px]">
                            <div className="w-[200px] h-auto">
                              <Image
                                src={item?.imgSrc}
                                alt={item?.imgAlt}
                                className="w-[50%]"
                                width="233"
                                height="162"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                          <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                            <h2
                              className="text-black text-[25px] pb-[10px] font-extrabold"
                              style={{
                                fontFamily: "Futura PT, sans-serif",
                              }}
                            >
                              {item?.heading}
                            </h2>

                            <div className="spacegrotesk500 text-[16px] font-semibold text-justify text-black xl:text-[14px]">
                              {item?.description.length > 150
                                ? item?.description.slice(0, 150) + "..."
                                : item?.description}
                            </div>

                            <button
                              className="btn btn-neutral btn-sm z-50 w-[100px] mb-[20px] rounded-none mx-auto"
                              onClick={() =>
                                document
                                  .getElementById("my_modal_2")
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
            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0  bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  {isClient ? (
                    data[0]?.webDevelopment.map((item, index) => (
                      <div key={index}>
                        <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[450px]">
                          <figure className="bg-[#ffffff] py-[30px]">
                            <div className="w-[200px] h-auto">
                              <Image
                                src={item?.imgSrc}
                                alt={item?.imgAlt}
                                className="w-[50%]"
                                width="233"
                                height="162"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                          <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                            <h2
                              className="text-black text-[25px] pb-[10px] font-extrabold"
                              style={{
                                fontFamily: "Futura PT, sans-serif",
                              }}
                            >
                              {item?.heading}
                            </h2>

                            <div className="spacegrotesk500 text-[16px] font-semibold text-justify text-black xl:text-[14px]">
                              {item?.description.length > 150
                                ? item?.description.slice(0, 150) + "..."
                                : item?.description}
                            </div>

                            <button
                              className="btn btn-neutral btn-sm z-50 w-[100px] mb-[20px] rounded-none mx-auto"
                              onClick={() =>
                                document
                                  .getElementById("my_modal_2")
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
        </div>
      </div>
      <div className="text-center bg-[#f4faff] xl:w-[80vw] xl:mx-auto">
        <Link href="/service">
          <button className="btn btn-sm btn-neutral rounded-none my-[50px]">
            View All Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default TabContextXL;
