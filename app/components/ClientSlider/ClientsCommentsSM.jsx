"use client";
import Image from "next/image";
import Slider from "react-slick";
import "./ClientShadow.css";
import { useEffect, useState } from "react";

const ClientsCommentsSM = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div className="text-center border w-[98vw] mx-auto bg-[#40b0fd] relative top-0 left-0">
        <h1 className="text-white text-[30px] pt-[30px] pb-[60px]">
          Clients Love Us
        </h1>
        <div className="absolute left-[-20px] top-[-20px] w-[100px] h-[100px]">
          <Image
            src="/HomePageLogos/client.png"
            alt="client"
            width="100"
            height="100"
            layout="responsive"
          ></Image>
        </div>
      </div>
      <div className="mt-[-50px]">
        <Slider {...settings} className="pt-[-150px]">
          {isClient ? (
            data[0]?.clientCard.map((c) => (
              <div key={c.id} className="mb-[30px]">
                <div className="card card-side w-[80%] bg-white glass mx-auto">
                  <figure className="pt-[20px] px-[50px]">
                    <div className="w-auto h-auto">
                      <Image
                        src={c.imgSource}
                        alt={c.imgAlt}
                        width="400"
                        height="400"
                        layout="responsive"
                        className="w-[50%]"
                      />
                    </div>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title px-[0px]">{c.name}</h2>
                    <span className="pl-[0px] text-[12px] text-slate-900 font-bold">
                      {c.company}
                    </span>
                    <p className="spacegrotesk400 pl-[0px] text-[15px] text-black leading-[16px]">
                      {c.paragraph}
                    </p>
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

export default ClientsCommentsSM;
