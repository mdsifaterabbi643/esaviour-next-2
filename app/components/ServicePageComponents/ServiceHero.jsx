"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ServiceHero = () => {
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const [servicePageHeroTitle, setServicePageHeroTitle] = useState("");
  const [servicePageHeroSubTitle, setServicePageHeroSubTitle] = useState("");
  const [servicePageHeroImgSrc, setServicePageHeroImgSrc] = useState("");
  const [servicePageHeroImgAlt, setServicePageHeroImgAlt] = useState("");

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_HERO_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error in fetching Heros data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //setting up state variables for default values for form
      setServicePageHeroTitle(myJsonData[0]?.servicePageHero[0]?.title);
      setServicePageHeroSubTitle(myJsonData[0]?.servicePageHero[0]?.subTitle);
      setServicePageHeroImgSrc(myJsonData[0]?.servicePageHero[0]?.imgSrc);
      setServicePageHeroImgAlt(myJsonData[0]?.servicePageHero[0]?.imgAlt);
    };

    getHeroData();

    setIsClient(true);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[150px] md:pb-[150px] md:pt-[50px]">
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 lg:mt-[50px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
          {isClient ? (
            <div>
              <h1 className="text-[#000000] dmsans900 leading-[30ox] xl:dmsans900 xl:leading-[41px] text-[25px] sm:text-[26px] md:text-xl lg:text-2xl xl:pl-[20%] xl:text-[34px]  md:pt-[50px] md:pl-[5%] sm:pl-[5%] lg:pt-[0px] xl:pt-[50px] text-left pt-[20px]">
                {servicePageHeroTitle}
              </h1>
              <h1 className="spacegrotesk500 text-[16px] leading-[20px] sm:text-[16px] md:text-[14px] xl:text-[18px] sm:pl-[5%] sm:pr-[5%]  md:pl-[5%] mt-[20px] mb-[10px] xl:pl-[20%] xl:pr-[200px] xl:leading-[25px]">
                {servicePageHeroSubTitle}
              </h1>
            </div>
          ) : (
            <div>
              <span className="loading loading-spinner text-primary"></span>
              <span className="loading loading-spinner text-secondary"></span>
              <span className="loading loading-spinner text-accent"></span>
              <span className="loading loading-spinner text-neutral"></span>
              <span className="loading loading-spinner text-info"></span>
              <span className="loading loading-spinner text-success"></span>
              <span className="loading loading-spinner text-warning"></span>
              <span className="loading loading-spinner text-error"></span>
            </div>
          )}
        </div>
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center items-center order-0 md:order-1 pt-[20px] lg:mt-[50px] xl:text-center xl:pt-[0px]">
          <div className="w-[200px] sm:w-[300px] lg:w-[300px]">
            {isClient ? (
              <Image
                src={servicePageHeroImgSrc}
                alt={servicePageHeroImgAlt}
                layout="responsive"
                width={300}
                height={200}
              />
            ) : (
              <div>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}

      <div className="flex flex-col md:flex-col bg-[#ffffff] py-[10px] w-[90vw] mt-[-100px] md:w-[80vw] mx-auto md:mt-[-70px] sm:mt-[-80px] xl:mt-[-100px] xl:w-[80vw] relative">
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
        <div className="hidden sm:block lg:hidden bg-purple-400]">
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
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto w-[60%]">
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

        <div className="absolute inset-0 bg-transparent z-0"></div>
        <div className="absolute inset-0 bg-transparent z-10 shadow-lg shadow-black/20"></div>
      </div>
    </>
  );
};

export default ServiceHero;
