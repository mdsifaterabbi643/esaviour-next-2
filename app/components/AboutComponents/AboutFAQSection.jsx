"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { About_Data } from "@/Data/About";

const AboutFAQSection = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [FAQ_ImgSource, setImgSource] = useState("");
  const [FAQ_ImgAlt, setImgAlt] = useState("");
  const [FAQ_SubTitle, setSubtitle] = useState("");
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  // state variables for adding FAQ
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  //==========
  const [addFaqStatus, setAddFaqStatus] = useState(false);
  const [deletionStatus, setDeletionStatus] = useState(false);

  useEffect(() => {
    const getFAQAboutAdminData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setImgSource(myJsonData[0]?.AboutFAQSection[0]?.FAQ_ImgSource);
      setImgAlt(myJsonData[0]?.AboutFAQSection[0]?.FAQ_ImgAlt);
      setSubtitle(myJsonData[0]?.AboutFAQSection[0]?.FAQ_SubTitle);
      setQuestion(myJsonData[0]?.FAQLoop.map((item, i) => item.question));
      setAnswer(myJsonData[0]?.FAQLoop.map((item, i) => item.answer));
    };
    getFAQAboutAdminData();
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="mt-[40px] mb-[40px]">
        <h1 className="text-center text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] xl:text-[36px] xl:leading-[46px] spacegrotesk700 font-bold xl:pt-[20px]">
          Frequently Asked Questions{" "}
          <span className="text-[#40b0fd]">(FAQs)</span>
        </h1>
        <h2 className="text-center text-[14px] leading-[16px] sm:text-[16px] sm:leading-[20px] sm:px-[10%] xl:text-[24px] xl:leading-[30px] spacegrotesk700 xl:px-[30%] pt-[30px]">
          {FAQ_SubTitle}
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row flwx-wrap w-[80vw] mx-auto">
        <div className="basis-1/1 xl:basis-2/5">
          <div className="w-[60%] sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[90%] mx-auto lg:my-[60px]">
            {isClient ? (
              <Image
                src={FAQ_ImgSource}
                alt={FAQ_ImgAlt}
                width="429"
                height="383"
              ></Image>
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </div>
        </div>
        <div className="basis-1/1 xl:basis-3/5">
          <div className="w-[90%] mx-auto mt-[20px]">
            {isClient ? (
              data[0]?.FAQLoop?.map((item, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow bg-[#ffffff] mt-[-10px]"
                >
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-[13px] font-medium bg-[#40b0fd] text-[#ffffff]">
                    <span className="font-bold xl:text-2xl">Q.</span>
                    {question[index]}
                  </div>
                  <div className="collapse-content bg-[#edf7fe] rounded-lg my-[10px]">
                    <div className=" text-[13px] xl:text-[16px] xl:font-medium">
                      {answer[index]}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFAQSection;
