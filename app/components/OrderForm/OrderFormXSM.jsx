"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
//import { useEmailJS } from "@/ContextAPI/EmailJSContextAPI";

// email js service id: service_d2jkicu
//email js public key: cdQJMV8uBJzxi8V29
//email js private key: grt1gnZ0C2_7o__MtlImb
//email js template id: template_jcd7rrq

const OrderFormXSM = () => {
  const form = useRef();
  //const { emailData, setEmailData } = useEmailJS();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [localOrderData, setLocalOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [orderEmailStatus, setOrderEmailStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitting }, // Access isSubmitting property
  } = useForm();

  const submitOrder = (data) => {
    console.log("Clicked submitOrder function");
    console.log(data);
    console.log(emailData);

    setLocalOrderData({
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
    //setEmailData(localOrderData);
  }, [localOrderData,]); // ============== setEmailData added as a dependency array ================== 

  // useEffect(() => {
  //   // console.log("After form submission: ");
  //   // console.log(emailData);
  // }, [emailData]);

  //const senderNameFormatted = JSON.stringify(emailData.name);

  return (
    <>
      <div className="bg-[#40b0fd] h-[230px] pb-[50px] text-center">
        <div className="w-[200px] mx-auto">
          <Image
            src="/HomePageLogos/Logo-white.png"
            alt="Logo-white.png"
            className="inline mx-auto pt-[20px]"
            width="204"
            height="58"
            layout="responsive"
          ></Image>
        </div>
      </div>
      <div className="bg-[#ffffff] w-[95%] mx-auto h-[750px] mt-[-120px] px-[10px] overflow-hidden">
        <div className="w-[100%]">
          <h1 className="text-[12px] text-center font-thin pt-[10px] pb-[10px]">
            Place an order to start
          </h1>
        </div>
        <div className="flex flex-wrap justify-between overflow-hidden">
          <form ref={form} onSubmit={handleSubmit(submitOrder)}>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className={`bg-[#cee9ff] my-[5px] py-[5px] pl-[5px] mx-[2px] w-[100%] border mycontactPlaceholder ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className={`bg-[#cee9ff] my-[5px] py-[5px] pl-[5px] mx-[2px] w-[100%] border mycontactPlaceholder ${
                errors.email ? "border-red-500" : ""
              }`}
            />

            <input
              {...register("phone", { required: true })}
              placeholder="phone"
              className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[100%] border mycontactPlaceholder ${
                errors.phone ? "border-red-500" : ""
              }`}
            />

            <input
              {...register("productLink", { required: true })}
              placeholder="productLink"
              className={`bg-[#cee9ff] my-[5px] py-[5px] pl-[5px] mx-[2px] w-[100%] border mycontactPlaceholder ${
                errors.productLink ? "border-red-500" : ""
              }`}
            />

            <input
              {...register("serviceCategory", { required: true })}
              placeholder="serviceCategory"
              className={`bg-[#cee9ff] my-[5px] py-[5px]  pl-[5px] mx-[2px] w-[100%] border mycontactPlaceholder ${
                errors.serviceCategory ? "border-red-500" : ""
              }`}
            />

            <input
              {...register("selectedService", { required: true })}
              placeholder="selectedService"
              className={`bg-[#cee9ff] my-[5px] py-[5px]  pl-[5px] mx-[2px] w-[100%] border mycontactPlaceholder ${
                errors.selectedService ? "border-red-500" : ""
              }`}
            />

            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              className={`bg-[#cee9ff] my-[5px] py-[5px]  pl-[5px] w-[100%] border mycontactPlaceholder ${
                errors.message ? "border-red-500" : ""
              }`}
              style={{
                maxHeight: "250px",
                minHeight: "150px",
                marginBottom: "20px",
              }}
            />

            <div>
              <input
                type="checkbox"
                {...register("isChecked")} // Register for form validation
                onChange={handleCheckboxChange} // Update state on change
                checked={isChecked} // Set checked state based on state variable
              />
              <label htmlFor="isChecked">
                <span
                  style={{
                    color: "black",
                    paddingLeft: "5px",
                  }}
                >
                  I agree with our<br></br>
                </span>
                <span
                  style={{
                    color: "#40b0fd",
                    fontWeight: 800,
                    paddingLeft: "10px",
                    fontSize: "13px",
                  }}
                >
                  Privacy Policy, Terms & Conditions
                </span>
              </label>
            </div>

            <input
              type="submit"
              className={`block bg-[#000000] text-[12px] xl:text-[18px] lg:font-bold w-[90px] text-white py-[5px] xl:py-[10px] xl:tracking-[2px] mt-[20px] rounded-md ${
                isChecked ? "" : "hidden"
              }`}
              value="SEND"
              style={{
                cursor: "pointer",
              }}
            />

            {isSubmitting || orderEmailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
              orderEmailStatus ? (
                <p className="text-green-500 font-semibold">
                  Hello Robert, your email was sent successfully!
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
    </>
  );
};

export default OrderFormXSM;
