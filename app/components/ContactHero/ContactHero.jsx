"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContactHero = () => {
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const [contactHeroTitle, setContactHeroTitle] = useState("");
  const [contactHeroSubTitle, setContactHeroSubTitle] = useState("");
  const [contactHeroImgSrc, setContactHeroImgSrc] = useState("");
  const [contactHeroImgAlt, setContactHeroImgAlt] = useState("");

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
      setContactHeroTitle(myJsonData[0]?.contactHero[0]?.title);
      setContactHeroSubTitle(myJsonData[0]?.contactHero[0]?.subTitle);
      setContactHeroImgSrc(myJsonData[0]?.contactHero[0]?.imgSrc);
      setContactHeroImgAlt(myJsonData[0]?.contactHero[0]?.imgAlt);
    };

    getHeroData();

    setIsClient(true);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[150px] md:pb-[150px] md:pt-[0px] lg:pb-[150px]">
        {isClient ? (
          <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 lg:mt-[0px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
            <h1 className="text-left pt-[20px] sm:text-[26px] md:text-xl lg:text-2xl  md:pt-[50px] md:pl-[5%] md:font-extrabold sm:pl-[5%] xl:pt-[50px] font-bold xl:font-bold xl:pl-[20%] xl:text-[38px] xl:leading-[40px]">
              {contactHeroTitle}
            </h1>
            <h1
              className="text-[12px] sm:text-[16px] sm:pl-[5%] sm:pr-[5%] md:text-[14px] md:pl-[5%] mt-[20px] mb-[10px] xl:pl-[20%] xl:pr-[200px] xl:text-[18px] xl:leading-[25px]"
              style={{
                fontFamily: "Futura PT, sans-serif",
                fontStyle: "normal",
              }}
            >
              {contactHeroSubTitle}
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
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center items-center order-0 md:order-1 mt-[40px] pt-[20px] lg:mt-[50px] xl:text-center xl:pt-[0px]">
          <div className="w-[200px] xl:w-[30%]">
            {isClient ? (
              <Image
                src={contactHeroImgSrc}
                alt={contactHeroImgAlt}
                width="287"
                height="283"
                layout="responsive"
              ></Image>
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
    </>
  );
};

export default ContactHero;
