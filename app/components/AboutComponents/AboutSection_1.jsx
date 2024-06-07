// "use client";
// import Image from "next/image";
// import { About_Data } from "@/Data/About";
// import { useEffect, useState } from "react";

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const AboutSection_1 = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section1_Title1, setSection1Title1] = useState("");
  const [section1_Title2, setSection1Title2] = useState("");
  const [section1_Description, setSection1Description] = useState("");
  const [section1_Name, setSection1Name] = useState("");
  const [section1_Designation, setSection1Designation] = useState("");
  const [section1_ImageSource, setSection1ImageSource] = useState("");
  const [Section1_ImageAlt, setSection1ImageAlt] = useState("");

  useEffect(() => {
    const getSection1AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //adding default values to the form through state variable
      setSection1Title1(myJsonData[0]?.section1[0]?.section1_Title1);
      setSection1Title2(myJsonData[0]?.section1[0]?.section1_Title2);
      setSection1Description(myJsonData[0]?.section1[0]?.section1_Description);
      setSection1Name(myJsonData[0]?.section1[0]?.section1_Name);
      setSection1Designation(myJsonData[0]?.section1[0]?.section1_Designation);
      setSection1ImageSource(myJsonData[0]?.section1[0]?.section1_ImageSource);
      setSection1ImageAlt(myJsonData[0]?.section1[0]?.Section1_ImageAlt);
    };
    getSection1AboutData();
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="xl:w-[70vw] xl:mx-auto">
        <div className="flex flex-col xl:flex-row py-[50px]">
          <div className="basis-1/1 xl:basis-2/5 order-0">
            <div className="mx-auto w-[70%] sm:w-[40%] md:w-[45%] lg:w-[50%] xl:w-[70%]">
              {isClient ? (
                <Image
                  src={section1_ImageSource}
                  alt={Section1_ImageAlt}
                  width="367"
                  height="375"
                  layout="responsive"
                ></Image>
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
          <div className="basis-1/1 xl:basis-3/5 order-1">
            <h1 className="font-bold text-[20px] px-[10px] xl:font-bold xl:text-[34px] xl:px-[50px]">
              {/* How It All Started? */}
              {isClient ? (
                section1_Title1
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h1>
            <h1 className="font-bold text-[20px] px-[10px] xl:font-bold xl:text-[34px] text-[#40b0fd] xl:px-[50px]">
              {/* Let’s Hear It From The Boss */}
              {isClient ? (
                section1_Title2
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h1>
            <div className="spacegrotesk500 text-[13px] leading-[17px] px-[10px] pt-[20px] md:text-[15px] md:leading-[21px] xl:text-[17px] xl:leading-[22px] xl:px-[50px]  xl:pt-[20px] text-justify">
              {isClient ? (
                section1_Description
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </div>
            <div className="text-center xl:text-left pt-[20px]">
              <h3 className="text-[16px] ] font-bold px-[5px] mt-[10px] xl:font-extrabold xl:text-[17px] bg-[#def1fe] inline-block xl:px-[5px] xl:ml-[50px] xl:mt-[30px]">
                {isClient ? (
                  section1_Name
                ) : (
                  <div>
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                  </div>
                )}
              </h3>
              <h3 className="text-[14px]  px-[5px] xl:text-[18px] xl:font-semibold xl:ml-[50px]">
                {isClient ? (
                  section1_Designation
                ) : (
                  <div>
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                  </div>
                )}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_1;
