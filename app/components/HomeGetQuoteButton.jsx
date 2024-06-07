"use client";

import emailjs from "@emailjs/browser";
// import { useEmailJS } from "@/ContextAPI/EmailJSContextAPI";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const HomeGetQuoteButton = () => {
  const form = useRef();

  // const { emailData, setEmailData } = useEmailJS();
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

  const handleMyQuote = (data) => {
    console.log("Your name is: ", data.name);
    console.log("Your email is: ", data.email);
    console.log("Your phone is: ", data.phone);
    console.log("Your message is: ", data.message);

    setLocalData({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
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
          setEmailStatus(true);
        },
        (error) => {
          console.log(error.text, "didn't send");
          alert(error.text, "didn't send");
          setEmailStatus(false);
        }
      );

    //call the reset form based on the response from email js
    if (setEmailStatus) {
      reset();
    }
  };

  useEffect(() => {
    // Update emailData directly
    //setEmailData(localData);
  }, [localData]); // ========== setEmailData added as dependency array =========

  // useEffect(() => {
  //   //console.log("After form submission: ");
  //   //console.log(emailData);
  // }, [emailData]);

  //const senderNameFormatted = JSON.stringify(emailData.name);

  return (
    <div>
         {/* this is get quote modal*/}
      <dialog id="getQuoteModal" className="modal">
        <div className="modal-box bg-[#ffffff]">
          <form method="dialog">
            <button className="btn btn-sm rounded-none bg-black text-white text-[20px] absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <div className="mb-[10px] w-[204px]">
              <Image
                src="/HomePageLogos/Logo.png"
                alt="Logo"
                className="w-[150px] mx-auto"
                width="204"
                height="58"
                layout="responsive"
              ></Image>
            </div>
            <form ref={form} onSubmit={handleSubmit(handleMyQuote)}>
              <input
                {...register("name", { required: true })}
                placeholder="Name*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[200px] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.name && (
                <p className="text-red-500 font-semibold">Name is required.</p>
              )}
              <input
                {...register("email", { required: true })}
                placeholder="Email*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[200px] pl-[5px] inline getFreeQuote"
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
    </div>
  );
};

export default HomeGetQuoteButton;
