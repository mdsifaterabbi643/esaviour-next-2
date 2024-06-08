import Image from "next/image";

import "./AboutShadow.css";

const AboutSection_2 = ({ data }) => {
  const { section2_Title, section2_Subtitle } = data[0]?.section2?.[0] || {};

  const section2_2 = data[0]?.section2_2?.map((item, index) => item);

  return (
    <>
      <div className="xl:w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-[24px] xl:text-[40px] text-[#57bafd]">
            {section2_Title ? section2_Title : "Loading..."}
          </h1>
          <div className="text-[14px] pb-[30px] xl:text-[22px] text-[#000000]">
            {section2_Subtitle ? section2_Subtitle : "Loading..."}
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 xl:py-[50px]">
          {section2_2.map((item, index) => (
            <div
              key={index}
              className="basis-1/3 lg:basis-1/4 sm:py-[30px] lg:py-[50px] py-[10px] xl:basis-1/5 xl:h-[250px]  xl:rounded-3xl myShadowDiv"
            >
              <div className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]">
                <Image
                  src={item.section2_ImgSource}
                  alt={item.section2_ImgAlt}
                  width="55"
                  height="59"
                  layout="responsive"
                ></Image>
              </div>
              <h5 className="text-center text-[12px] xl:text-[16px] xl:py-[30px] font-semibold">
                {item.section2_Heading}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutSection_2;
