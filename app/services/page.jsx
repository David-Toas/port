"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating modern, responsive, and efficient websites that provide a seamless user experience. Whether it’s a personal portfolio, business website, or web application, I ensure that every project is built with clean code, fast performance, and mobile-friendly design, helping you establish a strong online presence.",
    href: "/work",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design intuitive and visually appealing interfaces that make websites and applications easy to use. My focus is on creating a smooth user journey, ensuring that every element is both functional and aesthetically pleasing. Through wireframing, prototyping, and user research, I bring ideas to life in a way that keeps users engaged.",
    href: "/work",
  },
  {
    num: "03",
    title: "Bug Fixing",
    description:
      "Encountering errors, glitches, or performance issues in your website or application? I specialize in debugging and troubleshooting to ensure your system runs smoothly. From fixing broken features to optimizing performance, I carefully analyze and resolve issues, preventing future problems and improving overall functionality.",
    href: "/work",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Having a website is not enough; it needs to be visible to the right audience. I implement proven SEO strategies to improve search rankings, increase organic traffic, and enhance website performance. From keyword optimization to technical SEO, I help your site get discovered by those who need your services the most.",
    href: "/work",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
