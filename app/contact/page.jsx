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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const email = formData.get('email');
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const phone = formData.get('phone');
    const message = formData.get('message');

    if (!firstName?.trim()) errors.firstName = 'First name is required';
    if (!lastName?.trim()) errors.lastName = 'Last name is required';
    if (!email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!phone?.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]+$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!message?.trim()) errors.message = 'Message is required';

    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});

    const formData = new FormData(event.target);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      toast.error('Please fix the form errors');
      return;
    }

    toast.loading("Sending message...");
    formData.append("access_key", "a1bf641e-88bd-44bd-accf-b8e09650a484");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.dismiss();
        toast.success("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
        setFormErrors({});
      } else {
        console.log("Error", data);
        toast.dismiss();
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss();
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:flex-row gap-[30px]">
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-2 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] border border-line bg-surface-2 text-accent rounded-md flex items-center justify-center">
                      <div className="xl:text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-content-muted">{item.title}</h3>
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
              className="flex flex-col gap-6 p-10 border border-line bg-surface rounded-xl"
              onSubmit={onSubmit}
            >
              <h3 className="text-4xl font-semibold">Let's work together</h3>
              <p className="text-content-muted">
                Every project deserves attention to detail and expert execution.
                From design to development, I ensure quality, performance, and a
                seamless user experience. Let’s work together to create
                something that truly makes an impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  aria-label="First name"
                  required
                />
                <Input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  aria-label="Last name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  aria-label="Phone number"
                  required
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
              <div>
                <Textarea
                  name="message"
                  className={`h-[200px] ${
                    formErrors.message ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  required
                  aria-label="Project message"
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1" role="alert">{formErrors.message}</p>
                )}
              </div>
              {/* Button */}
              <Button 
                size="md" 
                type="submit" 
                className="max-w-40 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
