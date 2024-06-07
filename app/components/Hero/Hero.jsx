"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./MyShadow.module.css";

const Hero = () => {
  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_HOME_GET, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      // return console.log(res.json());
      const myJsonData = await res.json();
      setData(myJsonData);
    };

    getHeroData();
    setIsClient(true);
  }, []);

  //console.log("==============", data[0]?.subtitle);

  return (
    <>
      <div className="flex flex-col md:flex-col xl:flex-row pb-[200px] sm:pb-[100px] md:pb-[100px] bg-[#b3d9f8] relative top-0 left-0">
        {/* Watermark of hero section */}
        <div className="absolute bottom-[-50px] left-0 text-white md:w-[100vw] md:h-[100%] xl:w-[50vw] hidden md:block">
          <Image
            src="/hero/xl_home_water_1.png"
            alt="xl_home_water_1"
            width="900"
            height="800"
          ></Image>
        </div>
        <div className="absolute bottom-[40px] left-0 md:w-[200px] md:h-[150px] xl:w-[200px] xl:h-[150px] hidden md:block">
          <Image
            src="/hero/xl_home_water_2.png"
            alt="xl_home_water_2"
            width="200"
            height="200"
          ></Image>
        </div>
        <div className="basis-1/1 md:basis-1/1 xl:basis-1/2 md:mx-[100px] lg:mt-[100px] order-1 md:order-1 xl:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left font-extrabold pt-[20px] text-[25px] lg:text-[34px] xl:pl-[12%] xl:text-[38px] xl:leading-[50px] md:pt-[50px]">
            {isClient ? (
              data[0]?.title
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
            <br></br>
            <span className="text-sky-500">
              {isClient ? (
                data[0]?.subtitle
              ) : (
                <div>
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </span>
          </h1>
          <div className="spacegrotesk700 text-[13px] sm:text-[15px] font-bold md:text-[14px] mt-[20px] mb-[10px] xl:pl-[12%] xl:text-[16px] tracking-[0.1px] md:text-justify">
            {isClient ? (
              data[0]?.description
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
          </div>

          {/* ============== Only For XL devices ============= */}
          <div className="basis-1/1 hidden xl:block">
            <div className="flex flex-row gap-3">
              <div className="basis-1/4 h-[100px] xl:text-end mt-[15px]">
                <button
                  className="btn rounded-none xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear"
                  onClick={() =>
                    document.getElementById("getQuoteModal").showModal()
                  }
                >
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4 h-[100px] mt-[25px]">
                <div className="relative xl:text-[16px] xl:top-[20px]">
                  {isClient ? (
                    data[0]?.buttonText
                  ) : (
                    <div>
                      <span className="loading loading-bars loading-xs"></span>
                      <span className="loading loading-bars loading-sm"></span>
                      <span className="loading loading-bars loading-md"></span>
                      <span className="loading loading-bars loading-lg"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* =================== Only For XSM ,SM, MD, lg devices =================== */}
          <div className="basis-1/1 block xl:hidden mt-[30px]">
            <div className="flex flex-row gap-1">
              <div
                className="basis-1/4 bg-black text-white text-center hover:text-black hover:bg-orange-500 cursor-pointer relative
              top-0 left-0 transition duration-300 ease-linear"
              >
                <button
                  className="btn border-none w-full rounded-none text-[12px] sm:text-[12px] xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear"
                  onClick={() =>
                    document.getElementById("getQuoteModal").showModal()
                  }
                >
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4">
                <div className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[5px] lg:px-[50px] md:hidden">
                  {isClient ? (
                    data[0]?.buttonText
                  ) : (
                    <div>
                      <span className="loading loading-bars loading-xs"></span>
                      <span className="loading loading-bars loading-sm"></span>
                      <span className="loading loading-bars loading-md"></span>
                      <span className="loading loading-bars loading-lg"></span>
                    </div>
                  )}
                </div>
                <div className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[10px] lg:px-[50px] hidden md:block">
                  {isClient ? (
                    data[0]?.buttonText
                  ) : (
                    <div>
                      <span className="loading loading-bars loading-xs"></span>
                      <span className="loading loading-bars loading-sm"></span>
                      <span className="loading loading-bars loading-md"></span>
                      <span className="loading loading-bars loading-lg"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/1 md:basis-1/1 xl:basis-1/2 flex justify-center items-center order-0 md:order-0 xl:order-1 pt-[20px] md:mr-[50px] lg:mt-[50px] lg:mb-[-100px] xl:text-center xl:pt-[10px] xl:mb-[50px]">
          <div className="w-[300px] sm:w-[300px] lg:w-[300px]">
            {isClient ? (
              <Image
                src={data[0]?.imgSource}
                alt={data[0]?.imgAlt}
                layout="responsive"
                width={300}
                height={200}
              />
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ========================================================= */}

      <div
        className={`flex flex-col md:flex-col bg-[#ffffff] py-[20px] w-[95vw] md:w-[80vw] mx-auto mt-[-150px] sm:mt-[-80px] xl:mt-[-80px] xl:w-[80vw] relative ${styles.myShadowDiv}`}
      >
        <div className="basis-1/1 md:basis-1/1 text-center text-black px-[5px] section_3_span">
          {isClient ? (
            <div className="spacegrotesk300 text-[14px] sm:text-[16px] text-black xl:text-[32px] tracking-tighter">
              {" "}
              {data[0]?.bannerText}
            </div>
          ) : (
            <div>
              <span className="loading loading-bars loading-xs"></span>
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>
              <span className="loading loading-bars loading-lg"></span>
            </div>
          )}
        </div>

        {/* ===================For extra small devices only====================== */}
        <div className="basis-1/1 sm:hidden flex flex-wrap items-center justify-center mx-auto">
          <div className="basis-1/2">
            <div className="w-[80px] h-[80px] mx-auto pt-[25px]">
              <Image
                src="/hero/meta.png"
                alt="meta.png"
                width="80"
                height="40"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="w-[120px] h-[80px] mx-auto pt-[10px]">
              <Image
                src="/hero/Amazon-Ads 1.png"
                alt="Amazon-Ads 1.png"
                width="100"
                height="80"
                layout="responsive"
              ></Image>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="w-[40px] h-[80px] mx-auto pt-[20px]">
              <Image
                src="/hero/Google_Ads_logo.png"
                alt="Google_Ads_logo.png"
                width="40"
                height="40"
                layout="responsive"
              ></Image>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="w-[80px] h-[80px] mx-auto pt-[25px]">
              <Image
                src="/hero/Group 210.png"
                alt="Group 210.png"
                width="80"
                height="40"
                layout="responsive"
              ></Image>
            </div>
          </div>
        </div>

        {/* =============For small and medium devices only============ */}
        <div className="hidden sm:block lg:hidden">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto">
            <div className="basis-1/4">
              <div className="w-[80px] h-[100px] mx-auto pt-[25px]">
                <Image
                  src="/hero/meta.png"
                  alt="meta.png"
                  width="80"
                  height="100"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="w-[150px] h-[100px] mx-auto">
                <Image
                  src="/hero/Amazon-Ads 1.png"
                  alt="Amazon-Ads 1.png"
                  width="150"
                  height="100"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4 w-[50px]">
              <div className="w-[50px] h-[100px] mx-auto pt-[20px]">
                <Image
                  src="/hero/Google_Ads_logo.png"
                  alt="Google_Ads_logo.png"
                  width="50"
                  height="100"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="w-[80px] h-[100px] mx-auto pt-[30px]">
                <Image
                  src="/hero/Group 210.png"
                  alt="Group 210.png"
                  width="80"
                  height="60"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* =============For large devices only============ */}
        <div className="hidden lg:block xl:hidden">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto w-[75%]">
            <div className="basis-1/4">
              <div className="w-[80px] h-[100px] mx-auto pt-[25px]">
                <Image
                  src="/hero/meta.png"
                  alt="meta.png"
                  width="80"
                  height="100"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="w-[150px] h-[100px] mx-auto">
                <Image
                  src="/hero/Amazon-Ads 1.png"
                  alt="Amazon-Ads 1.png"
                  width="150"
                  height="150"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="w-[50px] h-[100px] mx-auto pt-[20px]">
                <Image
                  src="/hero/Google_Ads_logo.png"
                  alt="Google_Ads_logo.png"
                  width="50"
                  height="40"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="w-[80px] h-[100px] mx-auto pt-[30px]">
                <Image
                  src="/hero/Group 210.png"
                  alt="Group 210.png"
                  width="80"
                  height="50"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* =============For Extra large devices only============ */}
        <div className="hidden xl:block">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto mt-[0px]">
            <div className="basis-1/4">
              <div className="w-[200px] h-[100px] mx-auto">
                <Image
                  src="/hero/meta.png"
                  alt="meta.png"
                  width="200"
                  height="100"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="w-[300px] h-[150px] mx-auto">
                <Image
                  src="/hero/Amazon-Ads 1.png"
                  alt="Amazon-Ads 1.png"
                  width="300"
                  height="150"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="w-[80px] h-auto mx-auto">
                <Image
                  src="/hero/Google_Ads_logo.png"
                  alt="Google_Ads_logo.png"
                  width="80"
                  height="60"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/4">
              <div className="w-[150px] h-[50px] mx-auto">
                <Image
                  src="/hero/Group 210.png"
                  alt="Group 210.png"
                  width="150"
                  height="50"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
