// "use client";
// import "./AboutShadow.css";
// import Image from "next/image";
// import { About_Data } from "@/Data/About";
// import { useEffect, useState } from "react";

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./AboutShadow.css";

import { About_Data } from "@/Data/About";

const AboutSection_2 = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");
  const [section2_Title, setSection2Title] = useState("");
  const [section2_Subtitle, setSection2Subtitle] = useState("");
  const [section2_Heading, setSection2Heading] = useState([]);
  const [section2_ImgSource, setSection2ImgSource] = useState([]);
  const [section2_ImgAlt, setSection2ImgAlt] = useState([]);
  const [modelID, setModelID] = useState("");
  const [additionStatus, setAdditionStatus] = useState(false);
  const [deletionStatus, setDeletionStatus] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  // ========== state variables for adding data in section2 through modal dialogue form
  const [addHeading, setHeading] = useState("");
  const [addImgSource, setImgSource] = useState("");
  const [addImgAlt, setImgAlt] = useState("");

  useEffect(() => {
    const getSection2AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      setModelID(myJsonData[0]?._id);

      //adding default values to the form through state variable
      setSection2Title(myJsonData[0]?.section2[0]?.section2_Title);
      setSection2Subtitle(myJsonData[0]?.section2[0]?.section2_Subtitle);
      setSection2Heading(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_Heading)
      );
      setSection2ImgSource(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_ImgSource)
      );
      setSection2ImgAlt(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_ImgAlt)
      );
    };
    getSection2AboutData();
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getSection2AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      setModelID(myJsonData[0]?._id);

      //adding default values to the form through state variable
      setSection2Title(myJsonData[0]?.section2[0]?.section2_Title);
      setSection2Subtitle(myJsonData[0]?.section2[0]?.section2_Subtitle);
      setSection2Heading(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_Heading)
      );
      setSection2ImgSource(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_ImgSource)
      );
      setSection2ImgAlt(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_ImgAlt)
      );
    };
    getSection2AboutData();
    setIsClient(true);
  }, [additionStatus, deletionStatus]);

  return (
    <>
      <div className="xl:w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-[24px] xl:text-[40px] text-[#57bafd]">
            {isClient ? (
              section2_Title
            ) : (
              <div>
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </h1>
          <div className="text-[14px] pb-[30px] xl:text-[22px] text-[#000000]">
            {isClient ? (
              section2_Subtitle
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
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 xl:py-[50px]">
          {isClient ? (
            data[0]?.section2_2?.map((item, index) => (
              <div
                key={index}
                className="basis-1/3 lg:basis-1/4 sm:py-[30px] lg:py-[50px] py-[10px] xl:basis-1/5 xl:h-[250px]  xl:rounded-3xl myShadowDiv"
              >
                <div className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]">
                  <Image
                    src={section2_ImgSource[index]}
                    alt={section2_ImgAlt[index]}
                    width="55"
                    height="59"
                    layout="responsive"
                  ></Image>
                </div>
                <h5 className="text-center text-[12px] xl:text-[16px] xl:py-[30px] font-semibold">
                  {section2_Heading[index]}
                </h5>
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

export default AboutSection_2;
