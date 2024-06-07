"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HomeIntro = () => {
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
      <div className="flex flex-col md:flex-row flex-wrap xl:w-[90vw] overflow-x-hidden">
        <div className="basis-1/1 md:basis-1/2 flex justify-center items-center">
          <div className="w-[300px] sm:w-[350px] md:w-[350px] lg:w-[450px]">
            {isClient ? (
              <Image
                src={data[0]?.introImgSource}
                alt={data[0]?.introImgAlt}
                width="500"
                height="373"
                layout="responsive"
              ></Image>
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
        <div className="basis-1/1 md:basis-1/2 text-left xl:py-[100px]">
          <span className="dmsans300 text-[70px] pr-[5px] pl-[5px] xl:text-[128px]">
            Who
          </span>
          <span className="text-sky-500 text-[34px] pr-[5px] xl:text-[70px] ">
            We
          </span>
          <span className="text-[20px] xl:text-[34px] font-bold">Are?</span>
          <div className="spacegrotesk400 text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[0.5px]">
            {isClient ? (
              data[0]?.introPara1
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
          </div>
          <div className="spacegrotesk400 text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[0.5px]">
            {isClient ? (
              data[0]?.introPara2
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
          </div>
          <div className="spacegrotesk400 text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[0.5px]">
            {isClient ? (
              data[0]?.introPara3
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
          </div>
          <Link href="/about">
            <button className="btn btn-sm btn-danger rounded-none my-[20px] bg-[#000000] text-white font-medium ml-[10px]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeIntro;
