"use client";

import Image from "next/image";

const AboutFAQSection = ({ data }) => {
  const { FAQ_ImgSource, FAQ_ImgAlt, FAQ_SubTitle } =
    data[0]?.AboutFAQSection?.[0] || {};
  const FAQLoop = data[0]?.FAQLoop?.map((item) => item);

  return (
    <>
      <div className="mt-[40px] mb-[40px]">
        <h1 className="text-center text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] xl:text-[36px] xl:leading-[46px] spacegrotesk700 font-bold xl:pt-[20px]">
          Frequently Asked Questions{" "}
          <span className="text-[#40b0fd]">(FAQs)</span>
        </h1>
        <h2 className="text-center text-[14px] leading-[16px] sm:text-[16px] sm:leading-[20px] sm:px-[10%] xl:text-[24px] xl:leading-[30px] spacegrotesk700 xl:px-[30%] pt-[30px]">
          {FAQ_SubTitle ? FAQ_SubTitle : "Heading"}
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row flwx-wrap w-[80vw] mx-auto">
        <div className="basis-1/1 xl:basis-2/5">
          <div className="w-[60%] sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[90%] mx-auto lg:my-[60px]">
            {
              <Image
                src={FAQ_ImgSource}
                alt={FAQ_ImgAlt}
                width="429"
                height="383"
              ></Image>
            }
          </div>
        </div>
        <div className="basis-1/1 xl:basis-3/5">
          <div className="w-[90%] mx-auto mt-[20px]">
            {FAQLoop?.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-arrow bg-[#ffffff] mt-[-10px]"
              >
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-[13px] font-medium bg-[#40b0fd] text-[#ffffff]">
                  <span className="font-bold xl:text-2xl">Q.</span>
                  {item.question}
                </div>
                <div className="collapse-content bg-[#edf7fe] rounded-lg my-[10px]">
                  <div className=" text-[13px] xl:text-[16px] xl:font-medium">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFAQSection;
