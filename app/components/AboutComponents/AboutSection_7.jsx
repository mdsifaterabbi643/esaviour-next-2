import Image from "next/image";

const AboutSection_7 = ({ data }) => {
  const { section7_Title, section7_SubTitle } = data[0]?.section7?.[0] || {};
  const section7_7 = data[0]?.section7_7?.map((item) => item);

  console.log("=== ", section7_7);

  return (
    <>
      {/* ============== Only For Large and Extra large devices ================== */}
      <div className="lg:w-[90vw] xl:w-[80vw] mx-auto hidden lg:block xl:block mb-[20px]">
        <div className="flex lg:flex-col xl:flex-col flex-wrap w-[80vw] mx-auto">
          <div className="lg:basis-1/1 xl:basis-1/1 mx-auto">
            <h1 className="text-center lg:text-[32px] xl:text-[36px] font-bold text-[#40b0fd]">
              {section7_Title ? section7_Title : "Loading..."}
            </h1>
            <h2 className="text-center lg:text-[22px] xl:text-[24px] font-semibold lg:pb-[35px] xl:pb-[50px]">
              {section7_SubTitle ? section7_SubTitle : "Loading..."}
            </h2>
          </div>
          <div className="lg:basis-1/1 xl:basis-1/1">
            <div className="flex lg:flex-row xl:flex-row">
              {section7_7?.map((item, index) => (
                <div key={index} className="lg:basis-1/2 xl:basis-1/2">
                  <div className="inline-block w-[38%]">
                    <div className="w-[241px] lg:w-[150px] xl:w-[241px] h-auto mx-auto">
                      <Image
                        src={item.section7_ImgSource}
                        alt={item.section7_ImgAlt}
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
                        {item.section7_Name}
                      </h1>

                      <div className="lg:text-[20px] lg:pl-[10px] xl:text-[22px] font-thin bg-[#cee9ff] inline px-[10px] py-[5px]">
                        {item.section7_Designation}
                      </div>
                      <div className="spacegrotesk500 lg:text-[14px] lg:leading-[20px] lg:pl-[10px] lg:pr-[5px] lg:pt-[10px] xl:text-[18px] xl:leading-[23px] xl:pl-[10px] xl:pr-[35px] text-justify xl:pt-[20px]">
                        {item.section7_Description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ========================== Only for extra small, small and medium devices =========================*/}
      <div className="block lg:hidden">
        <div className="flex flex-col flex-wrap w-[95vw] mx-auto">
          <div className="basis-1/1">
            <h1 className="text-center text-[24px] font-bold text-[#40b0fd]">
              {section7_Title ? section7_Title : "Loading..."}
            </h1>
            <h2 className="text-center text-[17px] font-semibold">
              {section7_SubTitle ? section7_SubTitle : "Loading..."}
            </h2>
          </div>

          {section7_7?.map((item, index) => (
            <div key={index} className="basis-1/1">
              <div className="mt-[20px]">
                <div className="w-[241px] h-auto mx-auto">
                  <Image
                    src={item.section7_ImgSource}
                    alt={item.section7_ImgAlt}
                    className="mx-auto"
                    width="241"
                    height="275"
                    layout="responsive"
                  ></Image>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] mt-[10px] mb-[5px] text-center font-bold">
                  {item.section7_Name}
                </h1>

                <div className="text-center mb-[15px]">
                  <h1 className="text-[18px] font-thin bg-[#cee9ff] inline px-[10px] py-[5px]">
                    {item.section7_Designation}
                  </h1>
                </div>
                <h2 className="text-[16px] leading-[23px] spacegrotesk500 pl-[10px] pr-[10px] py-[15px] text-justify">
                  {item.section7_Description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutSection_7;
