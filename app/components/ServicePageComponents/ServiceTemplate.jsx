"use client";
import Image from "next/image";
import Link from "next/link";

import ServiceData from "@/Data/ServiceData";
import "./ServiceShadow.css";
import { useEffect, useState } from "react";

const ServiceTemplate = () => {
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [serviceName, setServiceName] = useState([]);
  const [serviceHeading, setServiceHeading] = useState([]);
  const [serviceImageSource, setServiceImageSource] = useState([]);
  const [serviceImageAlt, setServiceImageAlt] = useState([]);
  const [conclusion, setConclusion] = useState([]);

  useEffect(() => {
    const getServicePageData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_SERVICE_PAGE_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error in fetching ServicePage model data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setServiceName(
        myJsonData[0]?.serviceInfo.map((item, index) => item.serviceName)
      );
      setServiceHeading(
        myJsonData[0]?.serviceInfo.map((item, index) => item.serviceHeading)
      );
      setServiceImageSource(
        myJsonData[0]?.serviceInfo.map((item, index) => item.serviceImageSource)
      );
      setServiceImageAlt(
        myJsonData[0]?.serviceInfo.map((item, index) => item.serviceImageAlt)
      );
      setConclusion(
        myJsonData[0]?.serviceInfo.map((item, index) => item.conclusion)
      );
    };

    getServicePageData();

    setIsClient(true);
  }, []);

  return (
    <>
      {/* {isClient ? (
        ServiceData.map((item, index) => (
          <div
            className="w-[90vw] mx-auto xl:w-[80vw] bg-[#f4faff] xl:mx-auto mb-[35px] myShadowDiv"
            key="index"
          >
            <div className="relative top-0 left-0">
              <h1 className="text-[20px] font-bold text-center py-[10px] xl:text-[40px] xl:font-bold xl:text-center xl:py-[20px] text-[#40b0fd]">
                {item.serviceTitle}
              </h1>
              <p className="text-[14px] leading-[18px] md:text-[16px] xl:text-[20px] xl:leading-[24px] text-[#000000] spacegrotesk500 px-[1%] text-justify xl:text-center xl:px-[25%] xl:pb-[20px]">
                {item.serviceMetaDescription}
              </p>
              <div className="absolute top-0 right-0 w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]">
                <Image
                  src="/ServicePage/Service_Watermark.png"
                  alt="Service_Watermark.png"
                  width="190"
                  height="163"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row flex-wrap">
              <div className="basis-1/1 py-[20px] xl:basis-2/5 xl:py-[20px] overflow-hidden">
                <div className="w-[250px] sm:w-[300px] md:w-[350px] mx-auto">
                  {
                    <Image
                      src={item.imageInfo[0].imageSource}
                      alt={item.imageInfo[0].imageAlt}
                      className="max-w-full h-auto mx-auto xl:w-[70%] xl:h-[70%] xl:mx-auto"
                      width={item.imageInfo[0].width}
                      height={item.imageInfo[0].height}
                      layout="responsive"
                    ></Image>
                  }
                </div>
              </div>
              <div className="basis-1/1 xl:basis-3/5">
                <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
                  {item.serviceDescription.map((sd, index) => (
                    <div
                      key={index}
                      className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px] border-b-[1px] border-b-[#40b0fd]"
                    >
                      <span className="font-bold md:text-[16px] xl:font-bold xl:text-[20px]">
                        {sd.pointName}
                      </span>{" "}
                      <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                        {sd.pointDetails}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
                  <div className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                    {item.finalStatement}
                  </div>
                </div>
                <Link href="/service-FBA">
                  <div className="relative top-0 left-0 h-[50px]">
                    <div className="absolute right-0 bottom-0">
                      <Image
                        src="/ServicePage/Right_Down_Arrow.png"
                        alt="Right_Down_Arrow"
                        className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                        width="105"
                        height="103"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-[50vw] mx-auto py-[100px]">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )} */}

      {isClient ? (
        data[0]?.serviceInfo.map((item, index) => (
          <div
            className="w-[90vw] mx-auto xl:w-[80vw] bg-[#f4faff] xl:mx-auto mb-[35px] myShadowDiv"
            key="index"
          >
            <div className="relative top-0 left-0">
              <h1 className="text-[20px] font-bold text-center py-[10px] xl:text-[40px] xl:font-bold xl:text-center xl:py-[20px] text-[#40b0fd]">
                {item.serviceName}
              </h1>
              <p className="text-[14px] leading-[18px] md:text-[16px] xl:text-[20px] xl:leading-[24px] text-[#000000] spacegrotesk500 px-[1%] text-justify xl:text-center xl:px-[25%] xl:pb-[20px]">
                {item.serviceHeading}
              </p>
              <div className="absolute top-0 right-0 w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]">
                <Image
                  src="/ServicePage/Service_Watermark.png"
                  alt="Service_Watermark.png"
                  width="190"
                  height="163"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row flex-wrap">
              <div className="basis-1/1 py-[20px] xl:basis-2/5 xl:py-[20px] overflow-hidden">
                <div className="w-[250px] sm:w-[300px] md:w-[350px] mx-auto">
                  {
                    <Image
                      src={item.serviceImageSource}
                      alt={item.serviceImageAlt}
                      className="max-w-full h-auto mx-auto xl:w-[70%] xl:h-[70%] xl:mx-auto"
                      width={200}
                      height={200}
                      layout="responsive"
                    ></Image>
                  }
                </div>
              </div>

              <div className="basis-1/1 xl:basis-3/5">
                <div className="w-[95%] mx-auto xl:pt-[10px] border-b-[1px] border-b-[#40b0fd] xl:w-[85%] overflow-hidden">
                  {item.bullet.map((sd, index) => (
                    <div
                      key={index}
                      className="px-[10px] py-[5px] xl:pr-[30px] xl:pb-[5px] border-b-[1px] border-b-[#40b0fd]"
                    >
                      <span className="font-bold md:text-[16px] xl:font-bold xl:text-[20px]">
                        {sd.bulletPoint}
                      </span>{" "}
                      <span className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                        {sd.bulletDescription}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-[95%] mx-auto xl:pt-[10px] xl:w-[85%] overflow-hidden">
                  <div className="text-[15px] leading-[18px] md:text-[16px] spacegrotesk500 xl:text-[16px] xl:leading-[27px]">
                    {item.conclusion}
                  </div>
                </div>
                <Link href="/service-FBA">
                  <div className="relative top-0 left-0 h-[50px]">
                    <div className="absolute right-0 bottom-0">
                      <Image
                        src="/ServicePage/Right_Down_Arrow.png"
                        alt="Right_Down_Arrow"
                        className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                        width="105"
                        height="103"
                        layout="responsive"
                      ></Image>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-[50vw] mx-auto py-[100px]">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default ServiceTemplate;
