import Image from "next/image";

const PortfolioGallery = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="basis-1/2">
          <div className="flex flex-col">
            <div className="basis-1/1">
              <div className="border mx-auto w-[80%]">
                <Image
                  src="/PortfolioImages/Noor_Co.png"
                  alt="Noor_Co"
                  className="border mx-auto w-[80%]"
                  width="583"
                  height="564"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/1 mt-[20px]">
              <div className="mx-auto border w-[80%]">
                <Image
                  src="/PortfolioImages/Noor_Co_2.png"
                  alt="Noor_Co_2.png"
                  className="mx-auto border w-[80%]"
                  width="583"
                  height="500"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col">
            <div className="basis-1/1 border-red-500 mb-[10px]">
              <div className="border w-[80%]">
                <Image
                  src="/PortfolioImages/Noor_Co_3.png"
                  alt="Noor_Co_3"
                  className="border w-[80%]"
                  width="555"
                  height="408"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/1 my-[10px]">
              <div className="border w-[80%]">
                <Image
                  src="/PortfolioImages/Noor_Co_4.png"
                  alt="Noor_Co_4"
                  className="border w-[80%]"
                  width="563"
                  height="420"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="basis-1/1 my-[10px]">
              <div className="border w-[80%]">
                <Image
                  src="/PortfolioImages/Noor_Co_5.png"
                  alt="Noor_Co_5"
                  className="border w-[80%]"
                  width="563"
                  height="421"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioGallery;
