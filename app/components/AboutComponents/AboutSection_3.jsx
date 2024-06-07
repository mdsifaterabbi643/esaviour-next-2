// "use client";
// import Link from "next/link";
// import { About_Data } from "@/Data/About";
// import { useEffect, useState } from "react";

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { About_Data } from "@/Data/About";

const AboutSection_3 = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section3_Heading, setHeading] = useState("");
  const [section3_Subtitle, setSubtitle] = useState("");
  const [section3_Description1, setDescription1] = useState("");
  const [section3_Description2, setDescription2] = useState("");

  useEffect(() => {
    const getSection3AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setHeading(myJsonData[0]?.section3[0]?.section3_Heading);
      setSubtitle(myJsonData[0]?.section3[0]?.section3_Subtitle);
      setDescription1(myJsonData[0]?.section3[0]?.section3_Description1);
      setDescription2(myJsonData[0]?.section3[0]?.section3_Description2);
    };
    getSection3AboutData();
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="xl:w-[70vw] mx-auto">
        <h1 className="text-center text-[34px] py-[30px] xl:text-[72px]">
          {isClient ? (
            section3_Heading
          ) : (
            <div>
              <span className="loading loading-ball loading-xs"></span>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>
          )}
        </h1>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="basis-1/1 xl:basis-2/3 bg-[#eaf6ff] order-0 pb-[150px] xl:pb-[0px]">
            <h1 className="spacegrotesk700 text-[#40b0fd] text-[20px] font-bold pl-[10px] pt-[10px] sm:text-[22px] sm:pt-[20px] sm:px-[30px] xl:text-[34px] xl:font-semibold xl:pl-[30px] xl:pr-[100px] xl:pt-[30px]">
              {isClient ? (
                section3_Subtitle
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h1>
            <div
              style={{ whiteSpace: "pre-wrap" }}
              className="spacegrotesk500 text-justify text-[14px] leading-[20px] md:text-[14px] pl-[10px] pr-[5px] pt-[10px] sm:px-[30px] xl:text-[15px] xl:leading-[20px] xl:pl-[30px] xl:pr-[30px] xl:py-[20px]"
            >
              {isClient ? (
                section3_Description1
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
          <div className="basis-1/1 pb-[40px] xl:basis-1/3 bg-[#2f9de8] text-center xl:pt-[50px] order-1 w-[95vw] mx-auto relative top-[-100px] left-0 xl:top-[0px] xl:left-[0px]">
            <div
              style={{ whiteSpace: "pre-wrap" }}
              className="spacegrotesk500 text-[20px] px-[5px] py-[10px] mb-[15px] xl:mb-[30px] text-center md:text-[16px] md:leading-[22px] xl:text-[23px] xl:leading-[32px] text-[#ffffff] xl:px-[30px] xl:pt-[20px]"
            >
              {isClient ? (
                section3_Description2
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </div>

            <Link
              href="#"
              className="text-white bg-[#263238] text-sm px-[15px] py-[5px] xl:inline-block xl:font-bold xl:rounded-lg"
            >
              Get a proposal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_3;
