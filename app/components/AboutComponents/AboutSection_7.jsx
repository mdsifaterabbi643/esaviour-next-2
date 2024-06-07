// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { About_Data } from "@/Data/About";

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { About_Data } from "@/Data/About";

const AboutSection_7 = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section7_Title, setTitle] = useState("");
  const [section7_SubTitle, setSubtitle] = useState("");
  const [section7_Name, setName] = useState([]);
  const [section7_Designation, setDesignation] = useState([]);
  const [section7_Description, setDescription] = useState([]);
  const [section7_ImgSource, setImgSource] = useState([]);
  const [section7_ImgAlt, setImgAlt] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");

  useEffect(() => {
    const getSection7AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //adding default values to the form through state variable
      setTitle(myJsonData[0]?.section7[0]?.section7_Title);
      setSubtitle(myJsonData[0]?.section7[0]?.section7_SubTitle);
      setName(myJsonData[0]?.section7_7.map((item) => item.section7_Name));
      setDesignation(
        myJsonData[0]?.section7_7.map((item) => item.section7_Designation)
      );
      setDescription(
        myJsonData[0]?.section7_7.map((item) => item.section7_Description)
      );
      setImgSource(
        myJsonData[0]?.section7_7.map((item) => item.section7_ImgSource)
      );
      setImgAlt(myJsonData[0]?.section7_7.map((item) => item.section7_ImgAlt));
    };
    getSection7AboutData();
    setIsClient(true);
  }, []);

  return (
    <>
      {/* ============== Only For Large and Extra large devices ================== */}
      <div className="lg:w-[90vw] xl:w-[80vw] mx-auto hidden lg:block xl:block mb-[20px]">
        <div className="flex lg:flex-col xl:flex-col flex-wrap w-[80vw] mx-auto">
          <div className="lg:basis-1/1 xl:basis-1/1 mx-auto">
            <h1 className="text-center lg:text-[32px] xl:text-[36px] font-bold text-[#40b0fd]">
              {isClient ? (
                section7_Title
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h1>
            <h2 className="text-center lg:text-[22px] xl:text-[24px] font-semibold lg:pb-[35px] xl:pb-[50px]">
              {isClient ? (
                section7_SubTitle
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h2>
          </div>
          <div className="lg:basis-1/1 xl:basis-1/1">
            <div className="flex lg:flex-row xl:flex-row">
              {isClient ? (
                data[0]?.section7_7?.map((item, index) => (
                  <div key={index} className="lg:basis-1/2 xl:basis-1/2">
                    <div className="inline-block w-[38%]">
                      <div className="w-[241px] lg:w-[150px] xl:w-[241px] h-auto mx-auto">
                        <Image
                          src={section7_ImgSource[index]}
                          alt={section7_ImgAlt[index]}
                          className="lg:h-auto"
                          width="241"
                          height="275"
                          layout="responsive"
                        ></Image>
                      </div>
                    </div>
                    <div className="inline-block w-[58%] relative top-0 left-0">
                      <div className="absolute top-[0px] lg:top-[-170px] xl:top-[-250px]">
                        <h1 className="lg:text-[20px] lg:font-bold lg:pl-[10px] xl:text-[22px] xl:font-bold xl:pl-[10px]">
                          {" "}
                          {section7_Name[index]}
                        </h1>

                        <div className="lg:text-[20px] lg:pl-[10px] xl:text-[22px] font-thin bg-[#cee9ff] inline px-[10px] py-[5px]">
                          {section7_Designation[index]}
                        </div>
                        <div className="spacegrotesk500 lg:text-[14px] lg:leading-[20px] lg:pl-[10px] lg:pr-[5px] lg:pt-[10px] xl:text-[18px] xl:leading-[23px] xl:pl-[10px] xl:pr-[35px] text-justify xl:pt-[20px]">
                          {section7_Description[index]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ========================== Only for extra small, small and medium devices =========================*/}
      <div className="block lg:hidden">
        <div className="flex flex-col flex-wrap w-[95vw] mx-auto">
          <div className="basis-1/1">
            <h1 className="text-center text-[24px] font-bold text-[#40b0fd]">
              {isClient ? (
                section7_Title
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h1>
            <h2 className="text-center text-[17px] font-semibold">
              {isClient ? (
                section7_SubTitle
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h2>
          </div>

          {isClient ? (
            data[0]?.section7_7?.map((item, index) => (
              <div key={index} className="basis-1/1">
                <div className="mt-[20px]">
                  <div className="w-[241px] h-auto mx-auto">
                    <Image
                      src={section7_ImgSource[index]}
                      alt={section7_ImgAlt[index]}
                      className="mx-auto"
                      width="241"
                      height="275"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
                <div>
                  <h1 className="text-[18px] mt-[10px] mb-[5px] text-center font-bold">
                    {" "}
                    {section7_Name[index]}
                  </h1>

                  <div className="text-center mb-[15px]">
                    <h1 className="text-[18px] font-thin bg-[#cee9ff] inline px-[10px] py-[5px]">
                      {section7_Designation[index]}
                    </h1>
                  </div>
                  <h2 className="text-[16px] leading-[23px] spacegrotesk500 pl-[10px] pr-[10px] py-[15px] text-justify">
                    {section7_Description[index]}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <div>
              <span className="loading loading-ball loading-xs"></span>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutSection_7;
