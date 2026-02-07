"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Edusity",
    description:
      "🎓 Modern educational platform with interactive learning features and seamless user experience. Built with vanilla JavaScript for optimal performance, featuring responsive design that increased student engagement by 40% and improved learning outcomes through intuitive navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://toas-uni.vercel.app/",
    github: "https://github.com/David-Toas/Toas-Uni",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Toas Shop",
    description:
      "🛒 High-performance e-commerce platform with lightning-fast loading and smooth checkout experience. Built with Next.js and Tailwind CSS, featuring optimized product discovery, secure payment integration, and mobile-first design that converts 25% better than average.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb2.png",
    live: "https://toas-e-commerce-website.vercel.app/",
    github: "https://github.com/David-Toas/e_commerce_website",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Tinkteq",
    description:
      "🚀 Real-time collaboration platform powering seamless team communication. Developed with Next.js, WebSocket technology, and modern UI/UX principles. Features instant messaging, file sharing, and synchronized workspaces that boost team productivity by 60%.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "WebSocket" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://tinkteq.vercel.app/",
    github: "https://github.com/David-Toas/Tinkteq",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Homeland",
    description:
      "🏠 Premium real estate platform with advanced property search and virtual tours. Features intelligent filtering, interactive maps, and mobile-optimized browsing that helps users find their dream homes 3x faster than traditional property sites.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb4.png",
    live: "https://real-estate-toas.vercel.app/",
    github: "https://github.com/David-Toas/Real-Estate",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Hoobank",
    description:
      "💳 Next-generation banking interface with intuitive design and seamless transactions. Built with React and modern fintech principles, featuring secure authentication, real-time notifications, and user-friendly dashboard that improves customer satisfaction by 45%.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb5.png",
    live: "https://hoobank-ebon-seven.vercel.app/",
    github: "https://github.com/David-Toas/Hoobank",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto mb-3">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[468px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline non */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project categpry */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[420px] mb-12 rounded-lg"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[468px] relative group flex justify-center items-center bg-pink-50/25">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain "
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-[480px] absolute right-0 bottom-[calc(50%_-_22px)] xl:buttom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
