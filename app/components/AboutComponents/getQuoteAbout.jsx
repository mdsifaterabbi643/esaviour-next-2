"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//import { useEmailJS } from "../ContextAPI/EmailJSContextAPI";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { useRouter } from "next/navigation";

// email js service id: service_d2jkicu
//email js public key: cdQJMV8uBJzxi8V29
//email js private key: grt1gnZ0C2_7o__MtlImb
//email js template id: template_jcd7rrq

const GetQuoteAbout = () => {
     const form = useRef();

  //   const { emailData, setEmailData } = useEmailJS();
    const [localData, setLocalData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const [emailStatus, setEmailStatus] = useState(false);

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      formState: { isSubmitting }, // Access isSubmitting property
    } = useForm();

  //   const handleMyQuoteAbout = (data) => {
  //     console.log("Your name is: ", data.name);
  //     console.log("Your email is: ", data.email);
  //     console.log("Your phone is: ", data.phone);
  //     console.log("Your message is: ", data.message);

  //     setLocalData({
  //       name: data.name,
  //       email: data.email,
  //       phone: data.phone,
  //       message: data.message,
  //     });

  //implement email js here
  // emailjs
  //   .sendForm(
  //     "service_d2jkicu",
  //     "template_jcd7rrq",
  //     form.current,
  //     "cdQJMV8uBJzxi8V29"
  //   )
  //   .then(
  //     (result) => {
  //       console.log(result.text, "send successfully");
  //       alert(result.text, "send successfully");
  //       setEmailStatus(true);
  //     },
  //     (error) => {
  //       console.log(error.text, "didn't send");
  //       alert(error.text, "didn't send");
  //       setEmailStatus(false);
  //     }
  //   );

  //call the reset form based on the response from email js
  // if (setEmailStatus) {
  //   reset();
  // }
  //};

    useEffect(() => {
      // Update emailData directly
      //setEmailData(localData);
    }, [localData]);

  //   useEffect(() => {
  //     console.log("After form submission: ");
  //     console.log(emailData);
  //   }, [emailData]);

  //   const senderNameFormatted = JSON.stringify(emailData.name);

  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [hero_Title, setHeroTitle] = useState("");
  const [hero_Subtitle, setHeroSubtitle] = useState("");
  const [hero_ButtonText, setHeroButtonText] = useState("");
  const [hero_ImageSource, setHeroImageSource] = useState("");
  const [hero_ImageAlt, setHeroImageAlt] = useState("");

  useEffect(() => {
    const getAboutHeroData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //adding default values to the form through state variable
      setHeroTitle(myJsonData[0]?.hero[0]?.hero_Title);
      setHeroSubtitle(myJsonData[0]?.hero[0]?.hero_Subtitle);
      setHeroButtonText(myJsonData[0]?.hero[0]?.hero_ButtonText);
      setHeroImageSource(myJsonData[0]?.hero[0]?.hero_ImageSource);
      setHeroImageAlt(myJsonData[0]?.hero[0]?.hero_ImageAlt);
    };
    getAboutHeroData();
    setIsClient(true);
  }, []);

  return (
    <>
      {/* this is get quote modal for about hero*/}

      <dialog id="getQuoteModalAbout" className="modal">
        <div className="modal-box bg-[#ffffff]">
          <form method="dialog">
            <button className="btn btn-sm rounded-none bg-black text-white text-[20px] absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <div className="mb-[10px]">
              <Image
                //src="./HomePageLogos/Logo.png"
                src="/HomePageLogos/Logo.png"
                alt="Logo"
                className="w-[150px] mx-auto"
                width="150"
                height="100"
              ></Image>
            </div>
            <form ref={form}>
              <input
                {...register("name", { required: true })}
                placeholder="Name*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[48%] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.name && (
                <p className="text-red-500 font-semibold">Name is required.</p>
              )}
              <input
                {...register("email", { required: true })}
                placeholder="Email*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[45%] pl-[5px] inline getFreeQuote"
              />
              {errors.email && (
                <p className="text-red-500 font-semibold">Email is required.</p>
              )}
              <input
                {...register("phone", { required: true })}
                placeholder="Phone*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[92%] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.phone && (
                <p className="text-red-500 font-semibold">Phone is required.</p>
              )}
              <textarea
                {...register("message", { required: true })}
                placeholder="Message*"
                rows={5}
                cols={40}
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[92%] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.message && (
                <p className="text-red-500 font-semibold">
                  Message is required.
                </p>
              )}
              <button
                type="submit"
                className="btn btn-info rounded-md text-white py-[5px] px-[20px] ml-[5px]"
              >
                SEND
              </button>

              {isSubmitting || emailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
                emailStatus ? (
                  <p className="text-green-500 font-semibold">
                    Hello Robert, your email was sent
                    successfully!
                  </p>
                ) : (
                  <p className="text-red-500 font-semibold">
                    Hello Robert, there was an error sending your
                    email. Please try again.
                  </p>
                )
              ) : null}
            </form>
          </div>
        </div>
      </dialog>

      <button
        className="btn border-none rounded-none text-[12px] sm:text-[12px] xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear"
          onClick={() =>
            document.getElementById("getQuoteModalAbout").showModal()
          }
      >
        Get Free Quote
      </button>
    </>
  );
};

export default GetQuoteAbout;
