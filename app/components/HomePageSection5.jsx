"use client";

import { useEffect, useState, useRef } from "react";
import { ServiceCard } from "./ServiceCard/ServiceCard";

const HomePageSection5 = () => {
  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_HOME_SERVICE_CARD_GET, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      // return console.log(res.json());
      const myJsonData = await res.json();
      setData(myJsonData);
    };

    getHeroData();
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="my-[25px] text-center w-[98vw] mx-auto">
        <span className="dmsans200 text-[24px] xl:text-[40px]">
          Why Choose Esaviour Limited to
          <span className=" text-sky-500 TabContextFontSpan2 font-bold">
            <br></br> Builds Your Brand?
          </span>
        </span>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row w-[90vw] xl:w-[80%] xl:mx-auto md:w-[90vw] md:mx-auto mx-auto overflow-x-hidden">
        {isClient ? (
          data[0]?.cardContents.map((c) => (
            <div key={c.id} className="basis-1/1 sm:basis-1/2">
              <ServiceCard props={c} />
            </div>
          ))
        ) : (
          <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageSection5;
