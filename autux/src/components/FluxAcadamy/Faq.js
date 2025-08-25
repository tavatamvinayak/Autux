"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Description } from "@headlessui/react";

function Faq() {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleFAQ = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  const faq = [
    {
      title: `Can you help us grow our YouTube or Instagram channel?`,
      description:
        "Yes! Whether you're just starting or already have a channel, we look at what you're doing, find ways to improve, and help you grow with better content and strategy.",
    },
    {
      title: `What kind of results can we expect?`,
      description:
        "Results can be different for each person, but our goal is to help you reach more people, get more followers, and build a strong online presence all by posting the right content regularly.",
    },
    {
      title: `Do you promise any fixed results?`,
      description:
        "We don’t promise overnight success, but we do follow a clear plan that works. When you stay consistent and follow the process, you’ll start seeing results.",
    },
    {
      title: `Are your services right for my field or business?`,
      description: `Yes. We work with all kinds of people founders, creators, doctors, small business owners, and more. No matter your background, we’ll create content that fits you and your audience.
      `,
    },
    {
      title: `How do I get started?`,
      description: `Just book a call with us. We’ll understand your goals, answer your questions, and show you how we can help grow your content and brand.`,
    },
  ];

  return (
    <div>
      <div className="  text-white py-32 px-0">
        <div className="container mx-auto p-6 ">
          <div className="">
            <h3 className="text-center text-5xl">Frequently asked questions</h3>
            <p className="text-center text-md text-gray-500 pt-5">
              Everything you need to know about our bestsellig Framer course.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="space-y-4 pt-10 w-[750px]  ">
              {faq.map((e, index) => (
                <div key={index} className="flex items-start w-full  ">
                  <div className="pb-3 pt-4" style={{  border: "0px solid", borderBottom: "0.3px solid", borderColor: "#595959" }}>
                    <div
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center gap-3 cursor-pointer  "
                    >
                      <h3 className="text-md text-justify font-semibold w-[90%]">{e.title}</h3>{" "}
                      
                        <motion.img initial={{ rotate: 0 }}
                        animate={{ rotate: isOpen[index] ? 50 : 0 }}
                        transition={{ duration: 0.9 }}
                        className=" mr-4 cursor-pointer  text-end"
                        onClick={() => toggleFAQ(index)} src={'https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/6509040919651fc4e926c32b_dropdown-icon.svg'}></motion.img>
                     
                    </div>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isOpen[index] ? 1 : 0,
                        height: isOpen[index] ? "auto" : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className="pl-5 pt-5 text-sm w-[90%] overflow-hidden"
                    >
                      {e.description}{" "}
                    </motion.p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
