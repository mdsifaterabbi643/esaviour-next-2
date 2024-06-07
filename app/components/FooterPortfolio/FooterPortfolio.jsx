"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

const FooterPortfolio = () => {
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [imgSrc, setImgSrc] = useState([]);
  const [imgAlt, setImgAlt] = useState([]);
  const [paragraph, setParagraph] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [stat, setStat] = useState([]);
  const [heading, setHeading] = useState([]);
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState("");
  const [qlink, setQLink] = useState([]);
  const [qHref, setQhref] = useState([]);
  const [legalLink, setLegalLink] = useState([]);
  const [legalHref, setLegalHref] = useState([]);
  const [socialImgSrc, setSocialImgSrc] = useState([]);
  const [socialImgAlt, setSocialImgAlt] = useState([]);
  const [socialLink, setSocialLink] = useState([]);
  const [paymentImgSrc, setPaymentImgSrc] = useState([]);
  const [paymentImgAlt, setPaymentImgAlt] = useState([]);
  const [paymentLink, setPaymentLink] = useState([]);

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_FOOTER_1, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error in fetching Heros data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //setting up state variables for default values for form
      setImgSrc(myJsonData[0]?.footer1Upper.map((item, index) => item.imgSrc));
      setImgAlt(myJsonData[0]?.footer1Upper.map((item, index) => item.imgAlt));

      setParagraph(myJsonData[0]?.footer1Lower[0]?.paragraph);
      setButtonText(myJsonData[0]?.footer1Lower[0]?.buttonText);

      setStat(myJsonData[0]?.footer2Upper.map((item, index) => item.stat));
      setHeading(
        myJsonData[0]?.footer2Upper.map((item, index) => item.heading)
      );

      setLogo(myJsonData[0]?.footer2LowerLeft[0]?.logo);
      setDescription(myJsonData[0]?.footer2LowerLeft[0]?.description);

      setQLink(
        myJsonData[0]?.footer2QuickLink.map((item, index) => item.qlink)
      );
      setQhref(
        myJsonData[0]?.footer2QuickLink.map((item, index) => item.qHref)
      );

      setLegalLink(
        myJsonData[0]?.footer2Legal.map((item, index) => item.legalLink)
      );
      setLegalHref(
        myJsonData[0]?.footer2Legal.map((item, index) => item.legalHref)
      );

      setSocialImgSrc(
        myJsonData[0]?.footer2SocialIcons.map(
          (item, index) => item.socialImgSrc
        )
      );
      setSocialImgAlt(
        myJsonData[0]?.footer2SocialIcons.map(
          (item, index) => item.socialImgAlt
        )
      );
      setSocialLink(
        myJsonData[0]?.footer2SocialIcons.map((item, index) => item.socialLink)
      );

      setPaymentImgSrc(
        myJsonData[0]?.footer2PaymentIcons.map(
          (item, index) => item.paymentImgSrc
        )
      );

      setPaymentImgAlt(
        myJsonData[0]?.footer2PaymentIcons.map(
          (item, index) => item.paymentImgAlt
        )
      );

      setPaymentLink(
        myJsonData[0]?.footer2PaymentIcons.map(
          (item, index) => item.paymentLink
        )
      );
    };

    getHeroData();

    setIsClient(true);
  }, []);

  return (
    <>
      {/* Footer2 for extra small and small devices */}
      <div className="flex flex-col flex-wrap md:hidden bg-[#ffffff]">
        <div className="basis-1/1 pt-[50px] bg-[#ddf1ff] w-[98vw] mx-auto mt-[-70px]">
          <div className="flex flex-col">
            <div className="basis-1/1 bg-[#ddf1ff]">
              {isClient ? (
                <Image
                  src={logo}
                  alt="Logo"
                  width="140"
                  height="140"
                  className="mx-auto w-[140px] py-[30px]"
                ></Image>
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              {isClient ? (
                <h1 className="dmsans500 text-[15px] text-justify px-[5px] py-[5px] section_3_span">
                  {description}
                </h1>
              ) : (
                <div>
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </div>
            <div className="basis-1/1 py-[10px] bg-[#ddf1ff] w-[98vw] mx-auto">
              <div className="flex flex-row sm:w-[60%] sm:mx-auto">
                <div className="basis-1/2 pl-[30px]">
                  <h1 className="font-book text-[20px]">Quick Link</h1>

                  {isClient ? (
                    <ul>
                      {data[0]?.footer2QuickLink?.map((item, index) => (
                        <li key={index} className="text-[16px] my-[3px]">
                          <Link href={qHref[index]} target="_blank">
                            {qlink[index]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      <span className="loading loading-bars loading-xs"></span>
                      <span className="loading loading-bars loading-sm"></span>
                      <span className="loading loading-bars loading-md"></span>
                      <span className="loading loading-bars loading-lg"></span>
                    </div>
                  )}
                </div>
                <div className="basis-1/2 pl-[30px]">
                  <h1 className="font-book text-[20px]">Legal</h1>

                  {isClient ? (
                    <ul>
                      {data[0]?.footer2Legal?.map((item, index) => (
                        <li key={index} className="text-[16px] my-[3px]">
                          <Link href={legalHref[index]} target="_blank">
                            {legalLink[index]}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
            </div>
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              <h5 className="text-center py-[10px] text-[20px]">
                Lets Get Social
              </h5>
              <div className="flex justify-center">
                {isClient ? (
                  data[0]?.footer2SocialIcons?.map((item, index) => (
                    <Link
                      key={index}
                      className="inline mx-[5px]"
                      href={socialLink[index]}
                      target="_blank"
                    >
                      <Image
                        src={socialImgSrc[index]}
                        width="30"
                        height="30"
                        alt={socialImgAlt[index]}
                      ></Image>
                    </Link>
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
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              <h5 className="text-center py-[10px] text-[20px]">
                Payment method
              </h5>
              <div className="flex justify-center">
                {isClient ? (
                  data[0]?.footer2PaymentIcons?.map((item, index) => (
                    <Link
                      key={index}
                      className="inline mx-[3px]"
                      href={paymentLink[index]}
                    >
                      <Image
                        src={paymentImgSrc[index]}
                        alt={paymentImgAlt[index]}
                        width="40"
                        height="30"
                        className=""
                      ></Image>
                    </Link>
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
            <div className="basis-1/1 border bg-[#000000] text-center pb-[5px]">
              <span className="text-white text-[11px] font-semibold">
                Copyright © 2024 eSaviour Limited | All Right Reserved
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============== Only for medium and large devices =================== */}
      <div className="hidden md:block xl:hidden">
        <div className="flex flex-row mt-[-40px]">
          <div className="basis-2/5">
            <div className="flex flex-col">
              <div className="basis-1/1 bg-[#ddf1ff] pt-[50px]">
                {isClient ? (
                  <Image
                    src={logo}
                    alt="Logo"
                    width="120"
                    height="120"
                    className="mx-auto w-[120px] py-[10px]"
                  ></Image>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              <div className="basis-1/1 bg-[#ddf1ff]">
                {isClient ? (
                  <h1 className="text-[11px] text-left px-[20px] py-[30px] section_3_span">
                    {description}
                  </h1>
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
          </div>
          <div className="basis-1/5 pt-[70px] pb-[30px] pl-[30px] bg-[#ddf1ff]">
            <h1 className="font-book text-xl">Quick Link</h1>

            {isClient ? (
              <ul>
                {data[0]?.footer2QuickLink?.map((item, index) => (
                  <li key={index} className="font-thin text-[13px] my-[3px]">
                    <Link
                      href={qHref[index]}
                      className="font-semibold"
                      target="_blank"
                    >
                      {qlink[index]}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
          </div>
          <div className="basis-1/5 pt-[70px] pb-[30px] pl-[0px] bg-[#ddf1ff]">
            <h1 className="font-book text-xl">Legal</h1>

            {isClient ? (
              <ul>
                {data[0]?.footer2Legal?.map((item, index) => (
                  <li key={index} className="text-[13px] my-[3px]">
                    <Link
                      href={legalHref[index]}
                      className="font-semibold"
                      target="_blank"
                    >
                      {legalLink[index]}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
          </div>
          <div className="basis-1/5 pt-[70px] pb-[10px] bg-[#ddf1ff]">
            <h5 className="text-left font-book text-md">Lets Get Social</h5>
            <div className="flex justify-left">
              {isClient ? (
                data[0]?.footer2SocialIcons?.map((item, index) => (
                  <Link
                    key={index}
                    className="inline mx-[2px]"
                    href={socialLink[index]}
                    target="_blank"
                  >
                    <Image
                      src={socialImgSrc[index]}
                      width="40"
                      height="40"
                      alt={socialImgAlt[index]}
                    ></Image>
                  </Link>
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
            <h5 className="text-left pt-[20px] pb-[10px] font-book text-md">
              Payment method
            </h5>
            <div className="flex justify-start flex-wrap">
              {isClient ? (
                data[0]?.footer2PaymentIcons?.map((item, index) => (
                  <Link
                    key={index}
                    className="inline mr-[2px]"
                    href={paymentLink[index]}
                  >
                    <Image
                      src={paymentImgSrc[index]}
                      alt={paymentImgAlt[index]}
                      width="40"
                      height="40"
                      className=""
                    ></Image>
                  </Link>
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
        </div>
        <div className="flex flex-col">
          <div className="basis-1/1 bg-[#000000] pb-[10px] text-center xl:w-[70vw] xl:mx-auto">
            <span className="text-white text-[11px] font-semibold ">
              Copyright © 2024 eSaviour Limited | All Right Reserved
            </span>
          </div>
        </div>
      </div>

      {/* ====================== Only for extra large devices ========================= bg-[#ddf1ff] */}
      <div className="hidden xl:block xl:w-[98vw] mx-auto bg-[#ddf1ff] relative top-0 left-0">
        {/*  ================= Water mark ===================== */}
        <div className="absolute top-0 left-0 w-[50vw] h-[100%] hidden lg:block xl:block overflow-hidden">
          <Image
            src="/footer/xl_home_water_1.png"
            width="600"
            height="400"
            alt="xl_home_water_1"
            className=""
          ></Image>
        </div>
        <div className="hidden xl:block xl:w-[70vw] xl:mx-auto">
          <div className="flex flex-row mt-[-50px]">
            <div className="basis-2/5">
              <div className="flex flex-col">
                <div className="basis-1/1 bg-[#ddf1ff] pt-[30px] mt-[40px]">
                  {isClient ? (
                    <Image
                      src={logo}
                      alt="Logo"
                      width="120"
                      height="80"
                      className="mx-auto w-[120px] py-[10px]"
                    ></Image>
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
                <div className="basis-1/1 bg-[#ddf1ff]">
                  {isClient ? (
                    <h1 className="text-[11px] text-left px-[0px] xl:pr-[50px] pt-[20px] xl:text-[16px] xl:font-bold xl:pb-[20px]">
                      {description}
                    </h1>
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
            </div>
            <div className="basis-1/5 pt-[70px] pb-[30px] pl-[30px] xl:pt-[85px] bg-[#ddf1ff] relative">
              <h1 className="font-book text-xl block pb-[15px] font-bold">
                Quick Link
              </h1>

              {isClient ? (
                <ul>
                  {data[0]?.footer2QuickLink?.map((item, index) => (
                    <li
                      key={index}
                      className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                    >
                      <Link
                        href={qHref[index]}
                        className="font-semibold"
                        target="_blank"
                      >
                        {qlink[index]}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </div>
            <div className="basis-1/5 pt-[70px] pb-[30px] pl-[0px] xl:pt-[85px] bg-[#ddf1ff]">
              <h1 className="font-book text-xl block pb-[15px] font-bold">
                Legal
              </h1>

              {isClient ? (
                <ul>
                  {data[0]?.footer2Legal?.map((item, index) => (
                    <li
                      key={index}
                      className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                    >
                      <Link
                        href={legalHref[index]}
                        className="font-semibold"
                        target="_blank"
                      >
                        {legalLink[index]}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              )}
            </div>
            <div className="basis-1/5 pt-[70px] pb-[10px] xl:pt-[85px] bg-[#ddf1ff]">
              <h1 className="font-book text-xl block pb-[15px] font-bold">
                Lets Get Social
              </h1>
              <div className="flex justify-start">
                {isClient ? (
                  data[0]?.footer2SocialIcons?.map((item, index) => (
                    <Link
                      key={index}
                      className="inline mx-[3px]"
                      href={socialLink[index]}
                      target="_blank"
                    >
                      <Image
                        src={socialImgSrc[index]}
                        width="30"
                        height="30"
                        alt={socialImgAlt[index]}
                      ></Image>
                    </Link>
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
              <span className="font-book text-xl block py-[15px] font-bold">
                Payment method
              </span>

              <div className="flex justify-start w-[90%]">
                {isClient ? (
                  data[0]?.footer2PaymentIcons?.map((item, index) => (
                    <Link
                      key={index}
                      className="inline mx-[3px] pt-[3px]"
                      href={paymentLink[index]}
                    >
                      <Image
                        src={paymentImgSrc[index]}
                        alt={paymentImgAlt[index]}
                        width="35"
                        height="35"
                        className=""
                      ></Image>
                    </Link>
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
          </div>
        </div>
        <div className="w-[98vw] mx-auto border bg-[#000000] text-center pb-[5px]">
          <span className="text-white py-[5px] text-[14px] font-semibold">
            Copyright © 2024 eSaviour Limited | All Right Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterPortfolio;
