"use client";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import { HiOutlinePhone, HiOutlineChat } from "react-icons/hi";
import Button from "./Button";
import { motion } from "framer-motion";

const ContactUs = () => {
  const form = useRef();
  const [contact, setContact] = useState({
    user_name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Contact Information
  const contactInfo = {
    phone: "+233 59 802 5207",
    whatsapp: "+233 59 802 5207",
  };

  const resetter = () => {
    setContact({ user_name: "", email: "", message: "" });
  };

  const successToast = () => {
    toast.success("Message Successfully Sent", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      theme: "dark",
    });
  };

  const failedToast = (errorMessage = "Message Could Not Be Sent.") => {
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      theme: "dark",
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_P_KEY
      );
      console.log("Email sent successfully:", result);
      setIsLoading(false);
      successToast();
      resetter();
    } catch (error) {
      console.error("Email sending error:", error);
      setIsLoading(false);
      failedToast("Failed to send message. Try again later.");
    }
  };

  return (
    <motion.div id="contactUs" className="contact-section h-auto bg-[#f4f1eb] text-slate-900" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }}>
      {/* Toast Container (only one instance needed) */}
      <ToastContainer />

      <div className="relative layout md:p-20">
        {/* Background Image */}
        <div className=" hidden md:block md:absolute md:top-[10em] w-[40em] max-w-[400px] max-h-[500px] h-[60em] z-0">
          <Image
            alt="background"
            src="/brand/3.jpg"
            className="w-full h-full object-cover"
            fill={true}
          />
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative z-10 border-t-2 border-[#b59a69] w-full md:w-[80%] shadow-xl bg-white/95 p-8 md:p-10 max-w-[600px] mx-auto flex flex-col gap-5"
        >
          <h2 className="text-2xl md:text-3xl text-slate-900 mb-2">Send us a message</h2>

          <div className="flex flex-col gap-2">
            <p className="font-medium text-slate-700 text-sm">Name</p>
            <input
              value={contact.user_name}
              onChange={(e) =>
                setContact({ ...contact, user_name: e.target.value })
              }
              name="user_name"
              className="bg-white border border-slate-200 text-sm text-slate-900 p-3 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b59a69] transition-all"
              placeholder="Please Enter Your Name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium text-slate-700 text-sm">Email</p>
            <input
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
              name="email"
              type="email"
              className="bg-white border border-slate-200 text-sm text-slate-900 p-3 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b59a69] transition-all"
              placeholder="Please Enter Your Email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium text-slate-700 text-sm">Message</p>
            <textarea
              value={contact.message}
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
              name="message"
              rows="5"
              className="bg-white border border-slate-200 text-sm text-slate-900 p-3 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b59a69] transition-all"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <div className="w-2/3 lg:w-2/5 mx-auto">
            <Button
              variant="secondary"
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "SEND MESSAGE"
              )}
            </Button>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-white/20">
            <h3 className="text-slate-900 text-lg font-semibold mb-2">Get in touch</h3>
            
            <div className="flex flex-col gap-3">
              {/* Phone */}
              <Link 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-slate-700 hover:text-primary transition-colors"
              >
                <HiOutlinePhone className="w-5 h-5" />
                <p className="text-sm md:text-base">{contactInfo.phone}</p>
              </Link>

              {/* WhatsApp */}
              <Link 
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors"
              >
                <HiOutlineChat className="w-5 h-5" />
                <p className="text-sm md:text-base">WhatsApp: {contactInfo.whatsapp}</p>
              </Link>
            </div>

            {/* <Link href={`mailto:${contactInfo.email}?subject=Job Application&body=Please find my resume/CV attached.`}>
              <p className="text-white text-center text-sm mt-4 hover:text-orange-400 transition-colors">
                To Join Us, Send Your Resume/CV
              </p>
            </Link> */}
          </div>
        </form>
      </div>

      <div className="w-full bg-white h-[10px]"></div>
    </motion.div>
  );
};

export default ContactUs;
