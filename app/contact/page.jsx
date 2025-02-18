/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { toast } from "sonner";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    content: "(+234) 814 0313 381",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "showoleolabode.6@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    content: "Yaba, Lagos, Nigeria",
  },
];

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    toast.loading("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "a1bf641e-88bd-44bd-accf-b8e09650a484");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.dismiss();
        toast.success("Email Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.dismiss();
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss();
      toast.error("Failed to send email");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:flex-row gap-[30px]">
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-2 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="xl:text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white/60">{item.title}</h3>
                      <p className="text-xl">{item.content}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-1">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={onSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Every project deserves attention to detail and expert execution.
                From design to development, I ensure quality, performance, and a
                seamless user experience. Let’s work together to create
                something that truly makes an impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent bg-primary font-light px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent bg-primary font-light px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent bg-primary font-light px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent bg-primary font-light px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
              </div>
              {/* Select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="bug-fixing">Bug Fixing</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                required
              />
              {/* Button */}
              <Button size="md" type="submit" className="max-w-40">
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
