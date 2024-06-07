"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";
import PortfolioGallery from "./PortfolioGallery";
import PortfolioGalleryXSMSM from "./PortfolioGalleryXSMSM";
import Image from "next/image";

// import "../../MyTabOverlay.css";
// import OrderForm from "../OrderForm";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioTabContents = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settings_third_panel = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const settings_fourth_panel = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const settings_web_panel = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="w-[100vw] bg-[#ffffff]">
        <div className="tab-container bg-[#ffffff] px-4 py-8 xl:w-[80vw] xl:mx-auto mb-[50px]">
          {/* Tab list container */}
          <div className="tab-list bg-[#ffffff] pb-4">
            <Tabs>
              <div className="block sm:hidden">
                <TabList className="mb-[50px] w-[50vw] mx-auto">
                  {[
                    "Branding Design",
                    "Social Media Design",
                    "Listing Images Design",
                    "Amazon A+ Content",
                    "Product Package Design",
                    "Web Development",
                  ].map((tabName, index) => (
                    <Tab
                      key={tabName}
                      className={`text-[13px] font-bold rounded-md py-[5px] my-[5px] text-center cursor-pointer ${
                        selectedIndex === index
                          ? "font-bold border-none bg-sky-500 text-white"
                          : "border-[1px] border-black"
                      }`}
                      onClick={() => handleTabClick(index)}
                    >
                      {tabName}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <div className="hidden sm:block md:block lg:block xl:hidden">
                <div className="sm:w-[80vw] md:w-[70vw] lg:w-[80vw] text-center mx-auto overflow-hidden">
                  <TabList className="mb-[5px]">
                    {[
                      "Branding Design",
                      "Social Media Design",
                      "Listing Images Design",
                      "Amazon A+ Content",
                      "Product Package Design",
                      "Web Development",
                    ].map((tabName, index) => (
                      <Tab
                        key={tabName}
                        className={`my-[10px] lg:px-[15px] lg:mx-[5px] rounded-md cursor-pointer md:text-[13px] md:mx-[5px] md:text-center text-[16px] sm:text-[16px] lg:text-[16px] sm:text-center sm:mx-[5px] inline-block  ${
                          selectedIndex === index
                            ? "font-bold border-none bg-sky-500 text-white"
                            : "border-[1px] border-black"
                        }`}
                        onClick={() => handleTabClick(index)}
                      >
                        {tabName}
                      </Tab>
                    ))}
                  </TabList>
                </div>
              </div>
              {/* ######################################################################################################### */}
              <div className="hidden xl:block">
                <div className="w-[1000px] lg:w-[1200px] xl:w-[1200px] mx-auto overflow-hidden">
                  <TabList className="mb-[5px]">
                    {[
                      "Branding Design",
                      "Social Media Design",
                      "Listing Images Design",
                      "Amazon A+ Content",
                      "Product Package Design",
                      "Web Development",
                    ].map((tabName, index) => (
                      <Tab
                        key={tabName}
                        className={`lg:px-[15px] lg:mx-[5px] rounded-md cursor-pointer md:text-[13px] md:mx-[5px] md:text-center text-[16px] sm:text-[16px] lg:text-[16px] sm:text-center sm:mx-[5px] inline-block  ${
                          selectedIndex === index
                            ? "font-bold border-none bg-sky-500 text-white"
                            : "border-[1px] border-black"
                        }`}
                        onClick={() => handleTabClick(index)}
                      >
                        {tabName}
                      </Tab>
                    ))}
                  </TabList>
                </div>
              </div>
              {/* ######################################################################################################### */}

              {/* ============ First Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff] py-[25px]">
                <div>
                  <h1 className="text-center text-[#31b3fb] text-[20px] font-semibold sm:text-[20px] sm:font-semibold md:text-[24px] md:font-semibold lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    BRANDING DESIGN
                  </h1>
                  <p className="text-center text-[11px] px-[2px] pt-[5px] pb-[30px] font-bold  sm:text-[12px] sm:px-[50px] sm:pt-[10px] sm:pb-[15px] sm:font-semibold md:px-[100px] md:pt-[10px] md:pb-[20px] md:font-semibold md:text-[13px] lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    Crafting compelling and distinctive brand identities that
                    resonate with your audience. Our branding designs seamlessly
                    blend creativity andstrategy to visually communicate your
                    brand’s essence, fostering recognition, trust, and lasting
                    connections.
                  </p>
                </div>
                {/* ================= For extra small and small devices ======================*/}
                <div className="pb-[0px] xl:w-[70vw] xl:mx-auto block md:hidden">
                  <PortfolioGalleryXSMSM />
                </div>

                {/* ====================== For md,lg and extra large devices =================*/}
                <div className="pb-[0px] xl:w-[70vw] xl:mx-auto hidden md:block lg:block xl:block">
                  <PortfolioGallery />
                </div>
              </TabPanel>

              {/* ============ Social Media Design Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] text-[20px] font-semibold sm:text-[20px] sm:font-semibold md:text-[24px] md:font-semibold lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Social Media Design
                  </h1>
                  <p className="text-center text-[11px] px-[2px] pt-[5px] pb-[30px] font-bold  sm:text-[12px] sm:px-[50px] sm:pt-[10px] sm:pb-[15px] sm:font-semibold md:px-[100px] md:pt-[10px] md:pb-[20px] md:font-semibold md:text-[13px] lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamiclandscape of e-commerce and digital
                    presence. With a commitment to excellence and innovation, we
                    offer a suite of services that empowerbusinesses to thrive
                    in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0 bg-[#ffffff] sm:w-[80vw] md:w-[80vw] lg:w-[90vw] xl:w-[70vw] mx-auto">
                  {/* ============= For extra small and small devices ===================== */}
                  <div className="block md:hidden">
                    <Slider {...settings_third_panel}>
                      <div>
                        <div className="card card-compact w-[80vw] sm:w-[70vw] md:w-[18vw] lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto h-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[280px] h-[280px] mx-auto">
                              <Image
                                src="/PortfolioImages/merry_christmas.png"
                                alt="merry_christmas"
                                className="w-[280px] h-[280px] mx-auto"
                                width="281"
                                height="279"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact w-[80vw] sm:w-[70vw] md:w-[18vw] lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto h-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[280px] h-[280px] mx-auto">
                              <Image
                                src="/PortfolioImages/happy_new_year.png"
                                alt="happy_new_year.png"
                                className="w-[280px] h-[280px] mx-auto"
                                width="281"
                                height="279"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact w-[80vw] sm:w-[70vw] md:w-[18vw] lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto h-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[280px] h-[280px] mx-auto">
                              <Image
                                src="/PortfolioImages/digital_marketing.png"
                                alt="digital_marketing"
                                className="w-[280px] h-[280px] mx-auto"
                                width="281"
                                height="279"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact w-[80vw] sm:w-[70vw] md:w-[18vw] lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto h-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[280px] h-[280px] mx-auto">
                              <Image
                                src="/PortfolioImages/build_your_brand.png"
                                alt="build_your_brand.png"
                                className="w-[280px] h-[280px] mx-auto"
                                width="281"
                                height="279"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </Slider>
                  </div>

                  {/* ============= For md,lg and extra large devices ===================== */}
                  <div className="hidden md:block">
                    <Slider {...settings}>
                      <div>
                        <div className="card card-compact sm:w-[16vw] md:w-[18vw] lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[100%] h-[]">
                              <Image
                                src="/PortfolioImages/merry_christmas.png"
                                alt="merry_christmas"
                                className="w-[100%]"
                                width="281"
                                height="279"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact sm:w-[16vw] md:w-[18vw] lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[100%] h-[]">
                              <Image
                                src="/PortfolioImages/happy_new_year.png"
                                alt="happy_new_year.png"
                                className="w-[100%]"
                                width="281"
                                height="279"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact sm:w-[16vw] md:w-[18vw] lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[100%] h-[]">
                              <Image
                                src="/PortfolioImages/digital_marketing.png"
                                alt="digital_marketing"
                                className="w-[100%]"
                                width="281"
                                height="279"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact sm:w-[16vw] md:w-[18vw] lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[100%] h-[]">
                              <Image
                                src="/PortfolioImages/build_your_brand.png"
                                alt="build_your_brand.png"
                                className="w-[100%]"
                                width="281"
                                height="279"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </TabPanel>
              {/* ============ Listing Images Design Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] text-[20px] font-semibold sm:text-[20px] sm:font-semibold md:text-[24px] md:font-semibold lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Amazon Listing Image Design
                  </h1>
                  <p className="text-center text-[11px] px-[2px] pt-[5px] pb-[30px] font-bold  sm:text-[12px] sm:px-[50px] sm:pt-[10px] sm:pb-[15px] sm:font-semibold md:px-[100px] md:pt-[10px] md:pb-[20px] md:font-semibold md:text-[13px] lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamiclandscape of e-commerce and digital
                    presence. With a commitment to excellence and innovation, we
                    offer a suite of services that empowerbusinesses to thrive
                    in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0  bg-[#ffffff] w-[100vw] md:w-[95vw] xl:w-[50vw] mx-auto">
                  <Slider {...settings_third_panel}>
                    <div className="">
                      <div className="card card-compact w-[90vw] md:w-[95vw] xl:w-[50vw] lg:w-[90vw] bg-base-100 mx-auto shadow-xl lg:h-[450px] xl:h-[500px] relative left-[-25px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <div className="xl:w-[90%] lg:w-[90%] md:w-[90%] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                            <Image
                              src="/PortfolioImages/Amazon_1.jpeg"
                              alt="Amazon_1"
                              className="xl:w-[100%] lg:w-[100%] md:w-[100%] md:h-[400px] lg:h-[450px] xl:h-[500px]"
                              width="1238"
                              height="611"
                              layout="responsive"
                            ></Image>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[90vw] md:w-[95vw] xl:w-[50vw] lg:w-[90vw] bg-base-100 mx-auto shadow-xl lg:h-[450px] xl:h-[500px] relative left-[-25px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <div className="xl:w-[90%] lg:w-[90%] md:w-[90%] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                            <Image
                              src="/PortfolioImages/Amazon_2.jpeg"
                              alt="Amazon_2"
                              className="xl:w-[100%] lg:w-[100%] md:w-[100%] md:h-[400px] lg:h-[450px] xl:h-[500px]"
                              width="1215"
                              height="611"
                              layout="responsive"
                            ></Image>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[90vw] md:w-[95vw] xl:w-[50vw] lg:w-[90vw] bg-base-100 mx-auto shadow-xl lg:h-[450px] xl:h-[500px] relative left-[-25px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <div className="xl:w-[90%] lg:w-[90%] md:w-[90%] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                            <Image
                              src="/PortfolioImages/Amazon_3.jpeg"
                              alt="Amazon_3"
                              className="xl:w-[100%] lg:w-[100%] md:w-[100%] md:h-[400px] lg:h-[450px] xl:h-[500px]"
                              width="908"
                              height="611"
                              layout="responsive"
                            ></Image>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[90vw] md:w-[95vw] xl:w-[50vw] lg:w-[90vw] bg-base-100 mx-auto shadow-xl lg:h-[450px] xl:h-[500px] relative left-[-25px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <div className="xl:w-[90%] lg:w-[90%] md:w-[90%] md:h-[400px] lg:h-[450px] xl:h-[500px">
                            <Image
                              src="/PortfolioImages/Amazon_4.jpeg"
                              alt="Amazon_4"
                              className="xl:w-[100%] lg:w-[100%] md:w-[100%] md:h-[400px] lg:h-[450px] xl:h-[500px]"
                              width="895"
                              height="608"
                              layout="responsive"
                            ></Image>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </Slider>
                </div>
              </TabPanel>
              {/* ============ Amazon A+ Content Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] text-[20px] font-semibold sm:text-[20px] sm:font-semibold md:text-[24px] md:font-semibold lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Amazon EBC Design
                  </h1>
                  <p className="text-center text-[11px] px-[2px] pt-[5px] pb-[30px] font-bold  sm:text-[12px] sm:px-[50px] sm:pt-[10px] sm:pb-[15px] sm:font-semibold md:px-[100px] md:pt-[10px] md:pb-[20px] md:font-semibold md:text-[13px] lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamic landscape of e-commerce and
                    digitalpresence. With a commitment to excellence and
                    innovation, we offer a suite of services that empower
                    businesses to thrive in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0  bg-[#ffffff] w-[100vw] mx-auto md:w-[70vw] md:mx-auto lg:w-[70vw] lg:mx-auto xl:w-[40vw] xl:mx-auto">
                  {/* ======================= For extra small and small devices =============== */}
                  <div className="block md:hidden p-0">
                    <Slider {...settings_third_panel}>
                      <div>
                        <div className="card card-compact w-[100vw] bg-base-100">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[80%] h-[800px] sm:w-[60%] mx-auto">
                              <Image
                                src="/PortfolioImages/amazon_ap_1.png"
                                alt="amazon_ap_1"
                                className="w-[80%] h-[800px] sm:w-[60%] mx-auto"
                                width="315"
                                height="939"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact  w-[100vw] bg-base-100">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[80%] h-[800px] sm:w-[60%] mx-auto">
                              <Image
                                src="/PortfolioImages/amazon_ap_2.png"
                                alt="amazon_ap_2"
                                className="w-[80%] h-[800px] sm:w-[60%] mx-auto"
                                width="252"
                                height="934"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact w-[100vw] bg-base-100">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[80%] h-[800px] sm:w-[60%] mx-auto">
                              <Image
                                src="/PortfolioImages/amazon_ap_3.png"
                                alt="/PortfolioImages/amazon_ap_3"
                                className="w-[80%] h-[800px] sm:w-[60%] mx-auto"
                                width="270"
                                height="950"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </Slider>
                  </div>
                  {/* ============== For md, lg and extra large devices ================ */}
                  <div className="hidden md:block">
                    <Slider {...settings_fourth_panel}>
                      <div>
                        <div className="card card-compact md:w-[40vw] lg:w-[35vw] xl:w-[20vw] bg-base-100 mx-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[80%] h-[900px]">
                              <Image
                                src="/PortfolioImages/amazon_ap_1.png"
                                alt="amazon_ap_1"
                                className="w-[80%] h-[900px]"
                                width="315"
                                height="939"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact md:w-[40vw] lg:w-[35vw] xl:w-[20vw] bg-base-100 mx-auto ">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[80%] h-[900px]">
                              <Image
                                src="/PortfolioImages/amazon_ap_2.png"
                                alt="amazon_ap_2"
                                className="w-[80%] h-[900px]"
                                width="252"
                                height="934"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact md:w-[40vw] lg:w-[35vw] xl:w-[20vw] bg-base-100 mx-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[80%] h-[900px]">
                              <Image
                                src="/PortfolioImages/amazon_ap_3.png"
                                alt="/PortfolioImages/amazon_ap_3"
                                className="w-[80%] h-[900px]"
                                width="270"
                                height="950"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </TabPanel>
              {/* ============ Product Package Design Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] text-[20px] font-semibold sm:text-[20px] sm:font-semibold md:text-[24px] md:font-semibold lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Product packaging Design
                  </h1>
                  <p className="text-center text-[12px] px-[5px] pt-[10px] pb-[15px] font-bold sm:text-[12px] sm:px-[50px] sm:pt-[10px] sm:pb-[15px] sm:font-semibold md:px-[100px] md:pt-[10px] md:pb-[20px] md:font-semibold md:text-[13px] lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamic landscape of e-commerce and digital
                    presence. With acommitment to excellence and innovation, we
                    offer a suite of services that empower businesses to thrive
                    in the digital era.
                  </p>
                </div>
                <div className="p-0 w-[95vw] lg:w-[95vw] lg:mx-auto xl:w-[70vw] xl:mx-auto bg-[#ffffff]">
                  <div>
                    <div className="card card-compact w-[95vw] md:w-[95vw] lg:w-[95vw] xl:w-[70vw] bg-base-100 mx-auto">
                      <figure className="bg-[#ffffff] py-[0px]">
                        <div className="w-[80%] md:w-[80%] lg:w-[80%] xl:w-[70%] mx-auto">
                          <Image
                            src="/PortfolioImages/product_package_design.png"
                            alt="product_package_design.png"
                            className="w-[80%] md:w-[80%] lg:w-[80%] xl:w-[70%] mx-auto"
                            width="1214"
                            height="786"
                            layout="responsive"
                          ></Image>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* ============ web development Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] text-[20px] font-semibold sm:text-[20px] sm:font-semibold md:text-[24px] md:font-semibold lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Web Development
                  </h1>
                  <p className="text-center text-[12px] px-[5px] pt-[10px] pb-[15px] font-bold sm:text-[12px] sm:px-[50px] sm:pt-[10px] sm:pb-[15px] sm:font-semibold md:px-[100px] md:pt-[10px] md:pb-[20px] md:font-semibold md:text-[13px] lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamic landscape of e-commerce and
                    digitalpresence. With a commitment to excellence and
                    innovation, we offer a suite of services that empower
                    businesses to thrive in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0  bg-[#ffffff] sm:w-[90vw] md:w-[90vw] xl:w-[40vw] mx-auto">
                  {/* ================= For extra small and small devices =================*/}
                  <div className="block md:hidden">
                    <Slider {...settings_third_panel}>
                      <div>
                        <div className="card card-compact sm:w-[90vw] sm:border bg-base-100 mx-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[90%]">
                              <Image
                                src="/PortfolioImages/web1.png"
                                alt="web1.png"
                                className="w-[90%] h-[640px]"
                                width="594"
                                height="700"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact sm:w-[90vw] mx-auto bg-base-100">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[90%]">
                              <Image
                                src="/PortfolioImages/web2.png"
                                alt="web2.png"
                                className="w-[90%] h-[640px]"
                                width="594"
                                height="700"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact sm:w-[90vw] mx-auto bg-base-100">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[90%] border">
                              <Image
                                src="/PortfolioImages/web3.png"
                                alt="web3.png"
                                className="w-[90%] h-[640px] border"
                                width="594"
                                height="700"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </Slider>
                  </div>
                  {/* ================= For medium, large and extra large devices =================*/}
                  <div className="hidden md:block">
                    <Slider {...settings_web_panel}>
                      <div>
                        <div className="card card-compact sm:border md:w-[40vw] lg:w-[40vw] xl:w-[20vw] bg-base-100 mx-auto">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[90%]">
                              <Image
                                src="/PortfolioImages/web1.png"
                                alt="web1"
                                className="w-[90%] md:h-[450px] lg:h-[500px] xl:h-[550px]"
                                width="594"
                                height="700"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact md:w-[40vw] lg:w-[40vw] xl:w-[20vw] mx-auto bg-base-100">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[90%]">
                              <Image
                                src="/PortfolioImages/web2.png"
                                alt="web2"
                                className="w-[90%] md:h-[450px] lg:h-[500px] xl:h-[550px]"
                                width="594"
                                height="700"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div>
                        <div className="card card-compact md:w-[40vw] md:border lg:border lg:w-[40vw] xl:w-[20vw] mx-auto bg-base-100">
                          <figure className="bg-[#ffffff] py-[0px]">
                            <div className="w-[90%]">
                              <Image
                                src="/PortfolioImages/web3.png"
                                alt="/PortfolioImages/web3"
                                className="w-[90%] md:h-[450px] lg:h-[500px] xl:h-[550px]"
                                width="594"
                                height="700"
                                layout="responsive"
                              ></Image>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioTabContents;
