"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const PortfolioHero = () => {
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const [portfolioHeroTitle, setPortfolioHeroTitle] = useState("");
  const [portfolioHeroSubTitle, setPortfolioHeroSubTitle] = useState("");
  const [portfolioHeroImgSrc, setPortfolioHeroImgSrc] = useState("");
  const [portfolioHeroImgAlt, setPortfolioHeroImgAlt] = useState("");

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
      setPortfolioHeroTitle(myJsonData[0]?.portfolioHero[0]?.title);
      setPortfolioHeroSubTitle(myJsonData[0]?.portfolioHero[0]?.subTitle);
      setPortfolioHeroImgSrc(myJsonData[0]?.portfolioHero[0]?.imgSrc);
      setPortfolioHeroImgAlt(myJsonData[0]?.portfolioHero[0]?.imgAlt);
    };

    getHeroData();

    setIsClient(true);
  }, []);

  // Split the string by spaces
  const wordsArray = portfolioHeroTitle.split(" ");

  // Get the first 6 words
  const firstSixWords = wordsArray.slice(0, 6).join(" ");

  // Get the rest of the words
  const restOfTheWords = wordsArray.slice(6).join(" ");

  return (
    <>
      <div className="flex flex-col md:flex-col bg-[#b3d9f8] pb-[50px]">
        <div className="basis-1/1 md:basis-1/1 md:mx-[100px] lg:mt-[50px] xl:basis-2/3 order-1 md:order-0 px-[10px] xl:mt-[0px]">
          {isClient ? (
            <div>
              <h1 className="text-[25px] leading-[28px] spacegrotesk700 text-left pt-[20px] lg:text-[30px] xl:pl-[15%] xl:text-[34px] xl:leading-[50px] md:pt-[50px]">
                {firstSixWords}
              </h1>
              <h1 className="text-[25px] leading-[28px] spacegrotesk700 text-left lg:text-[28px] xl:pl-[15%] xl:text-[32px] xl:leading-[50px]">
                {restOfTheWords}
              </h1>

              <h1 className="text-[14px] xl:text-[17px] leading-[18px] xl:leading-[22px] spacegrotesk500  mt-[20px] xl:mt-[30px] mb-[10px] xl:pl-[15%] xl:pr-[15%]">
                {portfolioHeroSubTitle}
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
        <div className="basis-1/1 md:basis-1/1 xl:basis-1/3 flex justify-center items-center order-0 md:order-1 pt-[20px] md:mr-[50px] lg:mr-[150px] lg:mt-[50px] xl:text-center xl:pt-[10px] xl:mr-[200px]">
          {/* <img src="../Speech_Bubble.png" alt="GSpeech_Bubble"></img> */}
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
