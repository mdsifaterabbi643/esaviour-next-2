"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";

//import { useMyContactObj } from "@/ContextAPI/EmailJSContextAPIContact";
import { useEffect, useRef, useState } from "react";
import ContactHero from "../ContactHero/ContactHero";
import emailjs from "@emailjs/browser";
import ContactData from "@/Data/ContactData"
import { ContactFormHeading } from "@/Data/ContactData";
import { SocialConnectionData } from "@/Data/ContactData";
import Link from "next/link";

import { useRouter } from "next/navigation";

const ContactFormAddress = () => {
  const form = useRef();
  //const { contactEmail, setContactEmail } = useMyContactObj();
  const [localContactData, setLocalContactData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });
  const [contactEmailStatus, setContactEmailStatus] = useState(false);

  const router = useRouter();
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitting }, // Access isSubmitting property
  } = useForm();
  const submitContact = (data) => {
    // console.log("Your name is: ", data.name);
    // console.log("Your email is: ", data.email);
    // console.log("Your whatsapp is: ", data.whatsapp);
    // console.log("Your subject line is: ", data.subject);
    // console.log("Your message is: ", data.message);
    // console.log(contactEmail);
    setLocalContactData({
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      subject: data.subject,
      message: data.message,
    });
    //implement email js here
    emailjs
      .sendForm(
        "service_d2jkicu",
        "template_kyadm6c",
        form.current,
        "cdQJMV8uBJzxi8V29"
      )
      .then(
        (result) => {
          console.log(result.text, "send successfully");
          alert(result.text, "send successfully");
          setContactEmailStatus(true);
        },
        (error) => {
          console.log(error.text, "didn't send");
          alert(error.text, "didn't send");
          setContactEmailStatus(false);
        }
      );
    //call the reset form based on the response from email js
    if (setContactEmailStatus) {
      reset();
    }
  };

  //   useEffect(() => {
  //     setContactEmail(localContactData);
  //   }, [localContactData, setContactEmail]); // ======setContactEmail added with the dependency array
  //   useEffect(() => {
  //     //console.log("After form submission: ");
  //     //console.log(contactEmail);
  //   }, [contactEmail]);
  //   const senderNameFormatted = JSON.stringify(contactEmail.name);

  useEffect(() => {
    const getContactData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch Contact data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
    };
    getContactData();
    setIsClient(true);
  }, []);

  //console.log("Hello bangladesh: ", data[0]?.contactInfo);

  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-col xl:flex-col flex-wrap w-[90%] lg:w-[80%] xl:w-[80%] mx-auto myShadowDiv bg-[#ffffff] mt-[-100px] mb-[50px]">
          <div className="basis-1/1 lg:basis-1/1 xl:basis-1/1 pt-[50px] pb-[20px]">
            <h1 className="text-[#40b0fd] font-bold text-[20px] lg:text-[30px] xl:text-[36px] text-center">
              Reach Out to Us
            </h1>
            <div className="spacegrotesk700 text-center text-[#000000] px-[20px] text-[14px] lg:text-[18px] xl:text-[20px]">
              {isClient ? (
                ContactFormHeading[0]?.contactFormHeading
              ) : (
                <div>
                  <div className="text-center">
                    <span className="loading loading-spinner text-primary"></span>
                    <span className="loading loading-spinner text-secondary"></span>
                    <span className="loading loading-spinner text-accent"></span>
                    <span className="loading loading-spinner text-neutral"></span>
                    <span className="loading loading-spinner text-info"></span>
                    <span className="loading loading-spinner text-success"></span>
                    <span className="loading loading-spinner text-warning"></span>
                    <span className="loading loading-spinner text-error"></span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="basis-1/1 lg:basis-1/1 xl:basis-1/1">
            <div className="flex flex-col lg:flex-row xl:flex-row flex-wrap">
              <div className="basis-1/2 lg:basis-1/2 xl:basis-1/2">
                <div className="w-[90%] mt-[0px] mb-[25px] xl:mb-[50px] mx-auto">
                  <form ref={form} onSubmit={handleSubmit(submitContact)}>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Name"
                      className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                    />
                    {errors.name && <p>Name is required.</p>}
                    <input
                      {...register("email", { required: true })}
                      placeholder="Email"
                      className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                    />
                    {errors.email && <p>Email is required.</p>}
                    <input
                      {...register("whatsapp", { required: true })}
                      placeholder="WhatsApp"
                      className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                    />
                    {errors.whatsapp && <p>Please enter whatsapp number.</p>}
                    <input
                      {...register("subject", { required: true })}
                      placeholder="Subject"
                      className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                    />
                    {errors.subject && <p>Please enter subject.</p>}
                    <textarea
                      {...register("message", { required: true })}
                      placeholder="Tell us About Your Business"
                      className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                      style={{ maxHeight: "250px", minHeight: "150px" }}
                    />
                    {errors.message && <p>Tell us About Your Business.</p>}
                    <input
                      type="submit"
                      className="block bg-[#40b0fd] font-semibold text-[12px] xl:text-[18px] lg:font-bold xl:font-bold w-[100%] text-white py-[5px] xl:py-[10px] xl:tracking-[2px]"
                      value="SEND MY FREE PROPOSAL"
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </form>
                  {isSubmitting || contactEmailStatus ? ( // Show notification only when isSubmitting or contactEmailStatus is set
                    contactEmailStatus ? (
                      <h1 className="text-green-500 font-semibold">
                        Hello Robert, your email was sent successfully!
                      </h1>
                    ) : (
                      <h1 className="text-red-500 font-semibold">
                        Hello Robert, there was an error sending your email.
                        Please try again.
                      </h1>
                    )
                  ) : null}
                </div>
              </div>
              <div className="basis-1/2 lg:basis-1/2 xl:basis-1/2 pt-[0px] xl:pt-[10px]">
                {isClient ? (
                  data[0]?.contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="w-[90%] mx-auto lg:w-[80%] xl:w-[80%] bg-[#f5fbff] my-[10px] xl:my-[10px] myShadowDiv "
                    >
                      <h1 className="bg-[#40b0fd] text-white font-extrabold pl-[10px] text-[14px] xl:text-[18px]">
                        {item?.country}
                      </h1>
                      <div className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex">
                        <div className="mt-[5px] w-[25px]">
                          <Image
                            src="/ContactIcons/myLocation2.jpg"
                            alt="myLocation2"
                            className="inline-block"
                            width="500"
                            height="500"
                            layout="responsive"
                          ></Image>
                        </div>
                        <div className="mt-[5px] pl-[5px]">
                          <h1>{item?.address}</h1>
                        </div>
                      </div>

                      <div className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex">
                        {item?.phone?.length > 3 ? (
                          <>
                            <div className="mt-[5px] w-[25px]">
                              <Image
                                src="/ContactIcons/phone2.jpg"
                                alt="phone2"
                                className="inline-block"
                                width="500"
                                height="500"
                                layout="responsive"
                              ></Image>
                            </div>
                            <div className="mt-[5px] pl-[5px]">
                              <h1>
                                {item?.phone?.length > 3 ? item?.phone : ""}
                              </h1>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex">
                        {item?.email?.length > 3 ? (
                          <>
                            <div className="mt-[5px] w-[25px]">
                              <Image
                                src="/ContactIcons/email2.jpg"
                                alt="email2"
                                className="inline-block"
                                width="500"
                                height="500"
                                layout="responsive"
                              ></Image>
                            </div>
                            <div className="mt-[5px] pl-[5px]">
                              <h1>
                                {item?.email?.length > 3 ? item?.email : ""}
                              </h1>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <div className="text-center">
                      <span className="loading loading-spinner text-primary"></span>
                      <span className="loading loading-spinner text-secondary"></span>
                      <span className="loading loading-spinner text-accent"></span>
                      <span className="loading loading-spinner text-neutral"></span>
                      <span className="loading loading-spinner text-info"></span>
                      <span className="loading loading-spinner text-success"></span>
                      <span className="loading loading-spinner text-warning"></span>
                      <span className="loading loading-spinner text-error"></span>
                    </div>
                  </div>
                )}

                <div className="w-[90%] xl:w-[80%] mx-auto">
                  <p
                    className="text-[14px] lg:text-[16px] xl:text-[18px] text-[#40b0fd] text-center"
                    style={{
                      fontWeight: 500,
                    }}
                  >
                    Connect with us
                  </p>
                </div>

                <div className="flex justify-center">
                  {isClient ? (
                    SocialConnectionData.map((item) => (
                      <div key={item.socialId}>
                        <div className="w-[25px]">
                          <Link href={`${item.socialLink}`} target="_blank">
                            <Image
                              src={item.imageSource}
                              alt={item.imgAlt}
                              className="inline-block mx-[5px] cursor-pointer"
                              width={item.width}
                              height={item.height}
                              layout="responsive"
                            ></Image>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>
                      <div className="text-center">
                        <span className="loading loading-spinner text-primary"></span>
                        <span className="loading loading-spinner text-secondary"></span>
                        <span className="loading loading-spinner text-accent"></span>
                        <span className="loading loading-spinner text-neutral"></span>
                        <span className="loading loading-spinner text-info"></span>
                        <span className="loading loading-spinner text-success"></span>
                        <span className="loading loading-spinner text-warning"></span>
                        <span className="loading loading-spinner text-error"></span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormAddress;
