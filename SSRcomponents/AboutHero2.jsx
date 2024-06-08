import Image from "next/image";

const AboutHero2 = ({ data }) => {
  const {
    hero_Title,
    hero_Subtitle,
    hero_ButtonText,
    hero_ImageSource,
    hero_ImageAlt,
  } = data[0]?.hero?.[0] || {};

  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[50px] md:pb-[150px] md:pt-[50px] lg:pb-[50px]">
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 lg:mt-[0px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left dmsans900 pt-[20px] text-[20px] leading-[24px] sm:text-[24px] md:text-[26px] lg:text-[30px] lg:leading-[40px] md:pt-[50px] lg:pt-[20px] md:pl-[5%] sm:pl-[5%] xl:pt-[50px] xl:pl-[20%] xl:text-[34px] xl:leading-[44px]">
            {hero_Title}
          </h1>

          <h3 className="spacegrotesk300 text-[13px] sm:text-[16px] sm:pl-[5%] sm:pr-[5%] md:text-[14px] md:pl-[5%] mt-[20px] mb-[10px] xl:pl-[20%] xl:pr-[200px] xl:text-[16px] xl:leading-[22px] spacegrotesk600">
            {hero_Subtitle}
          </h3>

          {/* ============== Only For XL devices ============= */}
          <div className="basis-1/1 hidden xl:block xl:w-[798px] xl:ml-[100px]">
            <div className="flex flex-row gap-3">
              <div className="basis-1/4 h-[100px] xl:text-end mt-[15px]">
                <button className="btn rounded-none xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear">
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4 h-[100px] mt-[25px]">
                <h3 className="relative xl:text-[15px] xl:top-[20px] dmsans500">
                  {hero_ButtonText}
                </h3>
              </div>
            </div>
          </div>
          {/* =================== Only For XSM ,SM, MD, lg devices =================== */}
          <div className="basis-1/1 block xl:hidden mt-[30px]">
            <div className="flex flex-row gap-1">
              <div
                className="basis-1/4 bg-black text-white text-center hover:text-black hover:bg-orange-500 cursor-pointer relative
              top-0 left-0 transition duration-300 ease-linear"
              >
                <button className="btn border-none w-full rounded-none text-[12px] sm:text-[12px] xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear">
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4">
                <div>
                  <h3 className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[5px] lg:px-[50px] md:hidden">
                    {hero_ButtonText}
                  </h3>
                  <h3 className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[10px] lg:px-[50px] hidden md:block">
                    {hero_ButtonText}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center items-center order-0 md:order-1 mt-[40px] pt-[20px] lg:mt-[50px] xl:text-center xl:pt-[0px]">
          <div className="w-[280px] sm:w-[300px] md:w-[350px] xl:w-[50%]">
            <Image
              src={hero_ImageSource}
              alt={hero_ImageAlt}
              className="w-[280px] xl:w-[50%]"
              width="478"
              height="321"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero2;
