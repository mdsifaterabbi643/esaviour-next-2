"use client";

import styles from "./Footer1.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import { useEmailJS } from "@/ContextAPI/EmailJSContextAPI";

// email js service id: service_d2jkicu
//email js public key: cdQJMV8uBJzxi8V29
//email js private key: grt1gnZ0C2_7o__MtlImb
//email js template id: template_jcd7rrq

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Footer1 = () => {
  const form = useRef();

  // const { emailData, setEmailData } = useEmailJS();
  const [isChecked, setIsChecked] = useState(false);
  const [localOrderData, setLocalOrderData] = useState({
    email: "",
  });
  const [orderEmailStatus, setOrderEmailStatus] = useState(false);

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
  const [legalLink, setLegalLink] = useState([]);
  const [socialImgSrc, setSocialImgSrc] = useState([]);
  const [socialImgAlt, setSocialImgAlt] = useState([]);
  const [socialLink, setSocialLink] = useState([]);
  const [paymentImgSrc, setPaymentImgSrc] = useState([]);
  const [paymentImgAlt, setPaymentImgAlt] = useState([]);
  const [paymentLink, setPaymentLink] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitting }, // Access isSubmitting property
  } = useForm();

  const submitOrder = (data) => {
    // console.log("Clicked submitOrder function xl");
    // console.log(data);
    // console.log(emailData);
    // console.log(data?.email);

    setLocalOrderData({
      email: data.email,
    });

    //implement email js here
    emailjs
      .sendForm(
        "service_d2jkicu",
        "template_jcd7rrq",
        form.current,
        "cdQJMV8uBJzxi8V29"
      )
      .then(
        (result) => {
          console.log(result.text, "send successfully");
          alert(result.text, "send successfully");
          setOrderEmailStatus(true);
        },
        (error) => {
          console.log(error.text, "didn't send");
          alert(error.text, "didn't send");
          setOrderEmailStatus(false);
        }
      );

    //call the reset form based on the response from email js
    if (setOrderEmailStatus) {
      reset();
    }
  };

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

      setLegalLink(
        myJsonData[0]?.footer2Legal.map((item, index) => item.legalLink)
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

  useEffect(() => {
    //setEmailData(localOrderData);
  }, [localOrderData]); // ========= setEmailData added as dependency array ============

  // useEffect(() => {
  //   //console.log("After form submission: ");
  //   //console.log(emailData);
  // }, [emailData]);

  //const senderNameFormatted = JSON.stringify(emailData.name);

  return (
    <>
      <Slider
        {...settings}
        className="lg:w-[50vw] xl:w-[50vw] mx-auto"
        autoplay={true} // Enables autoplay
        autoplaySpeed={3000} // Sets the autoplay speed in milliseconds (optional)
      >
        {data[0]?.footer1Upper?.map((item, index) => (
          <div key={index} className="mb-[30px]">
            <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] sm:min-h-[120px] xl:min-h-[200px]">
              <Image
                src={item.imgSrc}
                alt={item.imgAlt}
                width="120"
                height="60"
                className="w-[80px] mx-auto xl:w-[150px] mt-[15px] xl:mt-[35px] xl:mx-auto sm:w-[100px] sm:mx-auto"
              ></Image>
            </div>
          </div>
        ))}
      </Slider>
      {/* ========== only for extra small device ============= */}
      <div className="w-[95vw] sm:hidden mx-auto overflow-x-hidden">
        <div className="flex flex-col sm:hidden mb-[30px]">
          <div className="basis-1/1 bg-[##EEF7FF] border">
            {isClient ? (
              <h1 className="text-center spacegrotesk500 text-[15px] leading-[16px] px-[5px] py-[10px]">
                {paragraph}
              </h1>
            ) : (
              <div>Loading...</div>
            )}
            <div className="pt-[10px] pb-[20px] text-center">
              <Link
                href="#"
                className="py-[5px] px-[10px] bg-black text-white rounded-sm"
              >
                {isClient ? buttonText : <div>Loading...</div>}
              </Link>
            </div>
          </div>
          <div className="basis-1/1">
            <div className="flex flex-row">
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <h1 className="font-bold text-sm section_3_span">Or Direct</h1>
                <h1 className="font-light text-xl text-[white] tracking-widest pr-[10px] section_3_span">
                  Message
                </h1>
              </div>
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/WHatsapp.png"
                    alt="WHatsapp"
                    width="30"
                    height="30"
                    className="w-[30px] inline"
                  ></Image>
                </Link>
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/Facebook.png"
                    alt="Facebook.png"
                    width="30"
                    height="30"
                    className="w-[30px] inline"
                  ></Image>
                </Link>
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/LinkedIn.png"
                    alt="LinkedIn.png"
                    width="30"
                    height="30"
                    className="w-[35px] inline "
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-1/1 bg-[#ddf1ff] py-[10px]">
            <label className="input input-bordered flex items-center border-none rounded-none w-[90%] mx-auto">
              <input
                type="text"
                className="grow placeholder-slate-600 "
                placeholder="Your email address"
              />
              <button className="btn bg-[#40b0fd] btn-sm rounded-sm section_3_span text-white relative left-[-70px]">
                Submit
              </button>
            </label>
          </div>
        </div>
      </div>

      {/* ============ For small, medium and large devices ============ */}
      <div className="hidden sm:block xl:hidden w-[95vw] mx-auto overflow-x-hidden">
        <div className="flex flex-col mb-[30px]">
          <div className="basis-1/1 bg-[#EEF7FF]">
            {isClient ? (
              <h1 className="spacegrotesk500 text-center text-[15px] px-[5px] py-[10px]">
                {paragraph}
              </h1>
            ) : (
              <div>
                {" "}
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
            <div className="pt-[10px] pb-[20px] text-center">
              <Link href="#" className="py-[5px] px-[10px] bg-black text-white">
                {isClient ? buttonText : <div>Loading...</div>}
              </Link>
            </div>
          </div>
          <div className="basis-1/1">
            <div className="flex flex-row">
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <h1 className="font-bold text-sm section_3_span">Or Direct</h1>
                <h1 className="font-light text-xl text-[white] tracking-widest pr-[10px] section_3_span">
                  Message
                </h1>
              </div>
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/WHatsapp.png"
                    alt="WHatsapp"
                    width="30"
                    height="30"
                    className="w-[30px] inline"
                  ></Image>
                </Link>
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/Facebook.png"
                    alt="Facebook.png"
                    width="30"
                    height="30"
                    className="w-[30px] inline"
                  ></Image>
                </Link>
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/LinkedIn.png"
                    alt="LinkedIn.png"
                    width="30"
                    height="35"
                    className="w-[35px] inline"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-1/1 bg-[#ddf1ff] py-[10px]">
            <form>
              <label className="input input-bordered flex items-center border-none rounded-none w-[90%] mx-auto">
                <input
                  placeholder="Add your Email address"
                  className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[90%] border mycontactPlaceholder`}
                />
                <button className="btn bg-[#40b0fd] btn-sm rounded-sm text-white">
                  Submit
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* ============ only for extra large device ============= */}
      <div className="hidden xl:block xl:w-[70vw] xl:mx-auto overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-row">
          <div className="basis-3/5 bg-[#eef7ff]">
            {isClient ? (
              <h1 className="dmsans500 text-center text-[12px] pt-[35px] px-[100px] pb-[30px] xl:text-[22px]">
                {paragraph}
              </h1>
            ) : (
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
            <div className="pt-[5px] pb-[5px] text-center relative top-[-10px]">
              <Link href="#" className="py-[5px] px-[10px] bg-black text-white">
                {isClient ? buttonText : <div>Loading...</div>}
              </Link>
            </div>
          </div>
          <div className="basis-2/5">
            <div className="flex flex-col">
              <div className="basis-1/1 bg-[#40b0fd] text-center w-[80%] mx-auto xl:w-[90%]">
                <div className="flex flex-row">
                  <div className="basis-1/2 py-[20px]">
                    <h1 className="font-bold text-md section_3_span">
                      <span className="text-[#40b0fd]">........</span>Or Direct
                    </h1>
                    <h1 className="font-light text-2xl text-[white] tracking-widest pr-[10px] section_3_span">
                      Message
                    </h1>
                  </div>
                  <div className="basis-1/2 py-[20px] text-center">
                    <Link href="#" className="mx-[5px]">
                      <Image
                        src="/footer/WHatsapp.png"
                        alt="WHatsapp"
                        width="60"
                        height="60"
                        className="w-[60px] inline"
                      ></Image>
                    </Link>
                    <Link href="#" className="mx-[5px]">
                      <Image
                        src="/footer/Facebook.png"
                        alt="Facebook.png"
                        width="60"
                        height="60"
                        className="w-[60px] inline"
                      ></Image>
                    </Link>
                    <Link href="#" className="mx-[5px]">
                      <Image
                        src="/footer/LinkedIn.png"
                        alt="LinkedIn.png"
                        width="60"
                        height="60"
                        className="w-[60px] inline "
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="basis-1/1 mt-[0px] w-[80%] mx-auto xl:w-[90%]">
                <div className="bg-[#eef7ff] relative top-[20px] left-[0px] h-[80px]">
                  <div className="bg-[#eef7ff] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <form ref={form} onSubmit={handleSubmit(submitOrder)}>
                      <label className="input flex items-center rounded-none">
                        <input
                          {...register("email", { required: true })}
                          placeholder="Add your Email address"
                          className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] xl:w-[350px] border mycontactPlaceholder ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        <button className="btn bg-[#40b0fd] btn-sm rounded-sm text-white">
                          Submit
                        </button>
                      </label>
                      {isSubmitting || orderEmailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
                        orderEmailStatus ? (
                          <p className="text-green-500 font-semibold">
                            Hello Robert, your email was sent successfully!
                          </p>
                        ) : (
                          <p className="text-red-500 font-semibold">
                            Hello Robert, there was an error sending your email.
                            Please try again.
                          </p>
                        )
                      ) : null}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
