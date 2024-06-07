"use client";
import Image from "next/image";
import Slider from "react-slick";
import "./ClientShadow.css";
import { useEffect, useState } from "react";

const ClientsComments = () => {
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
      <div className="mb-[50px]">
        <div className="text-center border w-[98vw] mx-auto bg-[#40b0fd] relative top-0 left-0">
          <h1 className="text-white text-[30px] pt-[10px] pb-[50px]">
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
          <Slider {...settings}>
            {isClient ? (
              data[0]?.clientCard.map((c) => (
                <div key={c.id}>
                  <div className="card lg:card-side bg-white shadow-xl w-[80vw] mx-auto rounded-none relative top-0 left-0">
                    <div className="absolute bottom-[0px] left-0 w-[80%] h-[30%] pt-[50px]">
                      <Image
                        src="/HomePageLogos/client2.png"
                        alt="client2 logo"
                        width="40"
                        height="40"
                        layout="responsive"
                      ></Image>
                    </div>
                    <div className="absolute top-[60%] left-[10%] w-[100px] h-[100px]">
                      <Image
                        src="/HomePageLogos/client3.png"
                        alt="client3"
                        width="40"
                        height="40"
                        layout="responsive"
                      ></Image>
                    </div>
                    <figure className="mt-[10px]">
                      <div className="w-[150px] h-[]">
                        <Image
                          src={c.imgSource}
                          alt={c.imgAlt}
                          width="100"
                          height="100"
                          layout="responsive"
                          className="w-[50%]"
                        />
                      </div>
                    </figure>
                    <div className="card-body py-[10px] relative">
                      <h2 className="text-[20px] px-[5px] text-sky-500 font-bold">
                        {c.name}
                      </h2>
                      <span className="px-[5px] text-[18px] text-slate-900 font-bold">
                        {c.company}
                      </span>
                      <p className="spacegrotesk700 px-[5px] text-[15px] text-justify leading-[20px]">
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
      </div>
    </>
  );
};

export default ClientsComments;
