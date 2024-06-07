import Image from "next/image";

const PortfolioGalleryXSMSM = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <div className="basis-1/1 py-[20px] sm:my-[15px]">
          <div className="border mx-auto w-[95%] sm:w-[70%] sm:h-[400px] rounded-md">
            <Image
              src="/PortfolioImages/Noor_Co.png"
              alt="Noor_Co"
              className="border mx-auto w-[95%] sm:w-[70%] sm:h-[400px] rounded-md"
              width="583"
              height="564"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="basis-1/1 py-[20px] sm:my-[15px]">
          <div className="mx-auto border w-[95%] sm:w-[70%] sm:h-[400px] rounded-md">
            <Image
              src="/PortfolioImages/Noor_Co_2.png"
              alt="Noor_Co_2.png"
              className="mx-auto border w-[95%] sm:w-[70%] sm:h-[400px] rounded-md"
              width="583"
              height="500"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="basis-1/1 py-[20px] sm:my-[15px]">
          <div className="mx-auto border w-[95%] sm:w-[70%] sm:h-[400px] rounded-md">
            <Image
              src="/PortfolioImages/Noor_Co_3.png"
              alt="Noor_Co_3.png"
              className="mx-auto border w-[95%] sm:w-[70%] sm:h-[400px] rounded-md"
              width="555"
              height="408"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="basis-1/1 py-[20px] sm:my-[15px]">
          <div className="mx-auto border w-[95%] sm:w-[70%] sm:h-[400px] rounded-md">
            <Image
              src="/PortfolioImages/Noor_Co_4.png"
              alt="Noor_Co_4"
              className="mx-auto border w-[95%] sm:w-[70%] sm:h-[400px] rounded-md"
              width="563"
              height="420"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="basis-1/1 py-[20px] sm:my-[15px]">
          <div className="mx-auto border w-[95%] sm:w-[70%] sm:h-[400px] rounded-md">
            <Image
              src="/PortfolioImages/Noor_Co_5.png"
              alt="Noor_Co_5"
              className="mx-auto border w-[95%] sm:w-[70%] sm:h-[400px] rounded-md"
              width="563"
              height="421"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioGalleryXSMSM;
