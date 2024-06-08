import Link from "next/link";

const AboutSection_3 = ({ data }) => {
  const {
    section3_Heading,
    section3_Subtitle,
    section3_Description1,
    section3_Description2,
  } = data[0]?.section3?.[0] || {};

  return (
    <>
      <div className="xl:w-[70vw] mx-auto">
        <h1 className="text-center text-[34px] py-[30px] xl:text-[72px]">
          {section3_Heading ? section3_Heading : "Loading..."}
        </h1>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="basis-1/1 xl:basis-2/3 bg-[#eaf6ff] order-0 pb-[150px] xl:pb-[0px]">
            <h1 className="spacegrotesk700 text-[#40b0fd] text-[20px] font-bold pl-[10px] pt-[10px] sm:text-[22px] sm:pt-[20px] sm:px-[30px] xl:text-[34px] xl:font-semibold xl:pl-[30px] xl:pr-[100px] xl:pt-[30px]">
              {section3_Subtitle ? section3_Subtitle : "Loading..."}
            </h1>
            <div
              style={{ whiteSpace: "pre-wrap" }}
              className="spacegrotesk500 text-justify text-[14px] leading-[20px] md:text-[14px] pl-[10px] pr-[5px] pt-[10px] sm:px-[30px] xl:text-[15px] xl:leading-[20px] xl:pl-[30px] xl:pr-[30px] xl:py-[20px]"
            >
              {section3_Description1 ? section3_Description1 : "Loading..."}
            </div>
          </div>
          <div className="basis-1/1 pb-[40px] xl:basis-1/3 bg-[#2f9de8] text-center xl:pt-[50px] order-1 w-[95vw] mx-auto relative top-[-100px] left-0 xl:top-[0px] xl:left-[0px]">
            <div
              style={{ whiteSpace: "pre-wrap" }}
              className="spacegrotesk500 text-[20px] px-[5px] py-[10px] mb-[15px] xl:mb-[30px] text-center md:text-[16px] md:leading-[22px] xl:text-[23px] xl:leading-[32px] text-[#ffffff] xl:px-[30px] xl:pt-[20px]"
            >
              {section3_Description2 ? section3_Description2 : "Loading..."}
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
