import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbGps } from "react-icons/tb";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import Circlefinal from "./Circlefinal";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = (type, content) => {
    messageApi.open({
      key,
      type: type,
      content: content,
      duration: 2,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      email,
      phone,
      type,
      message: formMessage,
    } = form.current;

    if (
      !firstname.value ||
      !lastname.value ||
      !email.value ||
      !phone.value ||
      !type.value ||
      !formMessage.value
    ) {
      openMessage("error", "Please fill in all fields");
      return;
    }

    openMessage("loading", "Sending...");

    emailjs
      .sendForm(
        "service_5h7h30a",
        "template_nbzca0g",
        form.current,
        "48SJfYOogLd6b9zY-"
      )
      .then(
        () => {
          openMessage("success", "Message sent successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          openMessage("error", "Failed to send message");
          console.log("FAILED...", error.text);
        }
      );
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#F9F9FB]   h-[250vh]  lg:h-auto  dark:rounded-lg   dark:border-solid pb-5 dark:bg-dark">
      <div className="flex flex-col items-center justify-center mb-20     ">
        <motion.h1
          className="font-playfair font-bold text-3xl mb-4 dark:border-solid   dark:text-white    "
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-[#a1a1aa]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Any questions or remarks? Just write us a message.
        </motion.p>
      </div>
      {contextHolder}
      <motion.div
        className=" md:flex-col-reverse lg:flex gap-20    lg:flex-row lg:h-[80vh] bg-white dark:border-[#f9c389] dark:border-solid dark:border-2 rounded-xl  dark:bg-dark  dark:text-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="bg-[#3E2093] lg:w-1/2 lg:h-auto     w-screen  border rounded-2xl pl-8 overflow-hidden dark:bg-dark   dark:border-[#f9c389]">
          <div>
            <h1 className="font-semibold text-3xl text-white pt-8 mb-3">
              Contact Information
            </h1>
            <p className="text-[#9D9EA8] dark:text-[#ffd9b0] lg:w-96   ">
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
          </div>
          <div className="mt-20">
            <div className="flex items-center my-10">
              <FaPhoneAlt className="mr-4 text-2xl text-[#FA949D] dark:text-[#f9c389]" />
              <h1 className="text-xl text-white">+213672491906</h1>
            </div>
            <div className="flex items-center my-10">
              <MdOutlineMail className="mr-4 text-3xl text-[#FA949D] dark:text-[#f9c389]" />
              <h1 className="text-xl text-white">youneszergine@gmail.com</h1>
            </div>
            <div className="flex items-center my-10">
              <TbGps className="mr-4 text-3xl text-[#FA949D] dark:text-[#f9c389]" />
              <h1 className="text-xl text-white">Algeria, Sétif, Cité 1014</h1>
            </div>
          </div>
          <div className="flex relative -bottom-24">
            <TiSocialFacebook className="text-white text-2xl mx-2 hover:rounded-full hover:bg-[#FA949D] dark:hover:bg-[#f9c389] transition-all hover:scale-150  " />
            <CiTwitter className="text-white text-2xl mx-2 hover:rounded-full hover:bg-[#FA949D] dark:hover:bg-[#f9c389] transition-all hover:scale-150" />
            <FaInstagram className="text-white text-2xl mx-2 hover:rounded-full hover:bg-[#FA949D] dark:hover:bg-[#f9c389] transition-all hover:scale-150" />
            <CiLinkedin className="text-white text-2xl mx-2 hover:rounded-full hover:bg-[#FA949D] dark:hover:bg-[#f9c389] transition-all hover:scale-150" />
          </div>
          <div className=" hidden lg:block lg:relative  bottom-[120px] left-52">
            <Circlefinal />
          </div>
          <div className="w-48 h-48 rounded-full bg-[#7E53F9] relative bottom-[620px] left-60 opacity-50 lg:block z-10   hidden"></div>
        </div>
        <form
          ref={form}
          className="flex flex-wrap lg:w-[750px] px-10 pt-8 gap-9  w-screen "
          onSubmit={sendEmail}
        >
          <div className="flex-1 flex flex-col">
            <label
              htmlFor="firstname"
              className="text-[#9D9EA8] dark:text-[#ffd9b0] mb-4"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              id="firstname"
              className="bg-white border-b-2 dark:bg-dark  border-[#9D9EA8] pb-3 focus:outline-none"
              value={formData.firstname}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label
              htmlFor="lastname"
              className="text-[#9D9EA8] dark:text-[#ffd9b0] mb-4"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              id="lastname"
              className="bg-white border-b-2 dark:bg-dark  border-[#9D9EA8] pb-3 focus:outline-none"
              value={formData.lastname}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label
              htmlFor="email"
              className="text-[#9D9EA8] dark:text-[#ffd9b0] mb-4"
            >
              Mail
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              id="email"
              className="bg-white border-b-2 dark:bg-dark  border-[#9D9EA8] pb-3 focus:outline-none"
              value={formData.email}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label
              htmlFor="phone"
              className="text-[#9D9EA8] dark:text-[#ffd9b0] mb-4"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              id="phone"
              className="bg-white dark:bg-dark border-b-2  border-[#9D9EA8] pb-3 focus:outline-none"
              value={formData.phone}
            />
          </div>
          <div className="w-full">
            <h1 className="text-lg font-semibold">
              What type of website do you need?
            </h1>
            <div className="flex gap-10">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="custom-style1"
                >
                  <input
                    name="type"
                    type="radio"
                    onChange={handleChange}
                    value="web design"
                    className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border dark:bg-white border-gray-900/10  bg-gray-900/5 p-0 text-gray-900 transition-all checked:border-gray-900"
                    id="custom-style1"
                    checked={formData.type === "web design"}
                  />
                  <span className="absolute text-gray-900 dark:text-[#f9c389]  opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full scale-105"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px font-light text-gray-700 cursor-pointer select-none"
                  htmlFor="custom-style1"
                >
                  <p className="lg:text-base antialiased text-xs font-normal leading-relaxed text-blue-gray-400 dark:text-[#ffd9b0] ">
                    Web Design
                  </p>
                </label>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="custom-style2"
                >
                  <input
                    name="type"
                    type="radio"
                    onChange={handleChange}
                    value="web development"
                    className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border dark:bg-white border-gray-900/10 bg-gray-900/5 p-0 text-gray-900 transition-all checked:border-gray-900"
                    id="custom-style2"
                    checked={formData.type === "web development"}
                  />
                  <span className="absolute text-gray-900 opacity-0 pointer-events-none dark:text-[#f9c389] top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full scale-105"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px font-light text-gray-700 cursor-pointer select-none"
                  htmlFor="custom-style2"
                >
                  <p className="lg:text-base antialiased font-normal leading-relaxed text-blue-gray-400 text-xs   dark:text-[#ffd9b0]">
                    Web Development
                  </p>
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h1>Message</h1>
            <label
              htmlFor="message"
              className="text-xl text-[#9D9EA8] dark:text-[#ffd9b0] mb-2"
            >
              Write the message
            </label>
            <input
              type="text"
              name="message"
              onChange={handleChange}
              id="message"
              className="bg-white border-b-2 border-[#9D9EA8] pb-3 dark:bg-dark  focus:outline-none"
              value={formData.message}
            />
          </div>

          <button
            type="submit"
            className="lg:relative    lg:left-[75%] bottom-8 text-white lg:mt-5 bg-[#3E2093]   py-3 px-5 rounded-2xl hover:bg-white hover:text-black transition-all duration-100 hover:shadow-xl shadow-black border hover:border-black"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
