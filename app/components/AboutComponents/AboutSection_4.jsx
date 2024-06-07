// "use client";
// import Image from "next/image";
// import "./AboutShadow.css";
// import { About_Data } from "@/Data/About";
// import { useEffect, useState } from "react";

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./AboutShadow.css";

const AboutSection_4 = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [targetIndex4Section4, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");
  const [section4_Title, setTitle] = useState([]);
  const [section4_Description, setDescription] = useState([]);
  const [section4_Image, setImage] = useState([]);
  const [section4_ImgAlt, setImgAlt] = useState([]);

  useEffect(() => {
    const getSection4AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setTitle(
        myJsonData[0]?.section4?.map((item, index) => item.section4_Title)
      );
      setDescription(
        myJsonData[0]?.section4?.map((item, index) => item.section4_Description)
      );
      setImage(
        myJsonData[0]?.section4?.map((item, index) => item.section4_Image)
      );
      setImgAlt(
        myJsonData[0]?.section4?.map((item, index) => item.section4_ImgAlt)
      );
    };
    getSection4AboutData();
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="w-[90vw] mt-[-50px] sm:w-[95vw] lg:w-[95vw] lg:mt-[-50px] xl:mt-[50px] xl:w-[70vw] mx-auto lg:my-[25px]">
        <div className="flex flex-col lg:flex-row xl:flex-row gap-5">
          {isClient ? (
            data[0]?.section4.map((item, index) => (
              <div
                key={index}
                className="basis-1/2 lg:basis-1/2 xl:basis-1/2 relative top-0 left-0 myShadowDiv  mx-auto"
              >
                <h1 className="bg-[#40b0fd] text-[22px] w-[90%] sm:w-[95%] ml-[10px] pl-[5px] sm:pl-[15px] mt-[10px] xl:w-[90%] xl:ml-[20px] text-white xl:text-[35px] xl:pl-[10px] xl:mt-[20px]">
                  {section4_Title[index]}
                </h1>
                <div className="spacegrotesk500 text-justify text-[14px] leading-[20px] pr-[15px] pb-[15px] md:text-[14px] pl-[10px] pt-[10px] sm:px-[30px] xl:text-[15px] xl:leading-[20px] xl:pl-[20px] xl:pr-[45px] xl:py-[20px]">
                  {section4_Description[index]}
                </div>
                <div className="absolute xl:bottom-0 xl:right-0 xl:w-[250px] xl:h-[250px]">
                  <div className="absolute xl:bottom-0">
                    <Image
                      src={section4_Image[index]}
                      alt={section4_ImgAlt[index]}s
                      width="325"
                      height="268"
                      layout="responsive"
                    ></Image>
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
    </>
  );
};

export default AboutSection_4;
