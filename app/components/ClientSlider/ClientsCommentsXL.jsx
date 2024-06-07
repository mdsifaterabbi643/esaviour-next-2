"use client";

import Slider from "react-slick";
import "./ClientShadow.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const ClientsCommentsXL = () => { 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getClientData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_HOME_CLIENT_GET, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch client data");
      }
      // return console.log(res.json());
      const myJsonData = await res.json();
      setData(myJsonData);
    };

    getClientData();
    setIsClient(true);
  }, []);

  //console.log(data[0]?.clientCard[0]);

  return (
    <>
      <div className="text-center border w-[60vw] mx-auto bg-[#40b0fd] relative top-0 left-0">
        <h1 className="text-white text-[22px] xl:text-[64px] xl:pt-[50px] xl:pb-[160px]">
          Clients Love Us
        </h1>
        <div className="absolute left-[-20px] top-[-20px] xl:w-[200px] xl:h-[200px]">
          <Image
            src="/HomePageLogos/client.png"
            alt="client"
            width="100"
            height="100"
            layout="responsive"
          ></Image>
        </div>
      </div>
      <div className="mb-[0px] w-[70vw] mx-auto relative xl:top-[-150px] xl:left-0 z-50">
        <Slider
          {...settings}
          className="pt-[0px]"
          autoplay={true} // Enables autoplay
          autoplaySpeed={3000} // Sets the autoplay speed in milliseconds (optional)
        >
          {isClient ? (
            data[0]?.clientCard.map((c) => (
              <div key={c.id} className="mb-[30px] xl:w-[100%]">
                <div className="card card-side bg-white xl:w-[70%] xl:mx-auto myShadowDiv xl:relative xl:top-0 xl:left-0">
                  <div className="absolute xl:bottom-[20px] xl:left-0 xl:w-[40%] xl:h-[30%]">
                    <Image
                      src="/HomePageLogos/client2.png"
                      alt="client2"
                      width="100"
                      height="100"
                      layout="responsive"
                    ></Image>
                  </div>
                  <div className="absolute xl:top-[20%] xl:left-[35%] xl:w-[80px] xl:h-[200px]">
                    <Image
                      src="/HomePageLogos/client3.png"
                      alt="client3"
                      width="100"
                      height="100"
                      layout="responsive"
                    ></Image>
                  </div>
                  <figure className="px-[50px]">
                    <div className="w-[200px] h-auto relative top-0 left-0">
                      <Image
                        src={c.imgSource}
                        alt={c.imgAlt}
                        width="200"
                        height="200"
                        layout="responsive"
                      />
                    </div>
                  </figure>
                  <div className="card-body xl:max-w-[500px] relative">
                    <p className="spacegrotesk600 pt-[80px] xl:text-[17px] leading-[26px]">
                      {c.paragraph}
                    </p>
                    <h2
                      className="relative font-bold left-[0px] top-[0px] xl:text-[25px] text-sky-500"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                        fontStyle: "normal",
                      }}
                    >
                      {c.name}
                    </h2>
                    <span
                      className="relative left-[0px] top-[0px] xl:text-[16px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      {c.company}
                    </span>
                  </div>
                </div>
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
        </Slider>
      </div>
    </>
  );
};

export default ClientsCommentsXL;
