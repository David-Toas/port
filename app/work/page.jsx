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
    category: "Fullstack",
    title: "Media-Buyer",
    description:
      "Built a high-converting media buying platform that streamlines the process of obtaining professional advertising strategies and campaign plans. The application features a modern, conversion-focused landing page, service showcase, lead-capture workflows, and responsive user experience designed to help businesses connect with expert media buyers efficiently. Developed with a strong emphasis on performance, clean UI/UX, and scalable frontend architecture, delivering a seamless experience across desktop and mobile devices. The project demonstrates expertise in modern web development, responsive design, and marketing-focused product implementation.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "React.js" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/media.png",
    live: "https://www.media-buyer.net/",
    github: "https://github.com/David-Toas/second-copy-clone",
  },
  // {
  //   num: "01",
  //   category: "Frontend",
  //   title: "Roomfit",
  //   description:
  //     "RoomFit is a modern fitness and wellness platform designed to help users stay active and achieve their fitness goals from the comfort of their homes. The application provides access to a curated library of bodyweight workouts and exercise routines that require little to no equipment, making fitness more accessible regardless of location or experience level. Built with a clean, responsive interface, RoomFit enables users to easily discover exercises, follow guided workout plans, and maintain a consistent training routine. The platform promotes convenient, flexible, and effective home-based fitness for individuals seeking a healthier lifestyle.",
  //   stack: [
  //     { name: "Next.js" },
  //     { name: "Tailwind.css" },
  //     { name: "React.js" },
  //   ],
  //   image: "/assets/work/room.png",
  //   live: "https://hoobank-ebon-seven.vercel.app/",
  //   github: "https://github.com/David-Toas/Hoobank",
  // },
  // {
  //   num: "02",
  //   category: "Backend",
  //   title: "Roomfit-Backend",
  //   description:
  //     "RoomFit is a fitness and wellness platform designed to help users stay active by providing personalized workout routines and exercise plans that can be performed from the comfort of their homes. The backend powers user authentication, workout management, progress tracking, and personalized fitness recommendations, ensuring a seamless and engaging fitness experience. Built with a scalable API architecture and integrated cloud services, the platform efficiently manages user data, exercise content, and fitness progress across devices. This project showcases expertise in backend development, database design, authentication systems, and building reliable APIs for health and fitness applications.",
  //   stack: [
  //     { name: "Node.js" },
  //     { name: "Express.js" },
  //     { name: "JavaScript" },
  //     { name: "MongoDB" },
  //     { name: "Swagger" },
  //   ],
  //   image: "/assets/work/roomfit-backend.png",
  //   live: "https://roomfit-backend.vercel.app/",
  //   github: "https://github.com/David-Toas/Roomfit-Backend",
  // },
  {
    num: "02",
    category: "Backend",
    title: "Phoenix NGO",
    description:
      "Phoenix NGO is a full-stack NGO management platform designed to streamline nonprofit operations by centralizing donor management, fundraising campaigns, volunteer coordination, and impact tracking within a single digital ecosystem. The application enables organizations to manage donations, monitor campaign progress, engage supporters, and maintain transparent records through an intuitive and responsive user interface. Built with a modern web architecture, it emphasizes operational efficiency, accountability, and data-driven decision-making for nonprofit organizations. The platform helps NGOs strengthen donor relationships, improve resource management, and amplify their social impact through scalable digital tools.",
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "JavaScript" },
      { name: "MongoDB" },
      { name: "Swagger" },
    ],
    image: "/assets/work/Phoenix.png",
    live: "https://phoenix-ngo.vercel.app/",
    github: "https://github.com/David-Toas/NGO-Management-System",
  },
  {
    num: "03",
    category: "Frontend",
    title: "GemCommerce",
    description:
      "GemCommerce is a modern full-stack e-commerce platform built to deliver a fast, scalable, and seamless online shopping experience. The application features product discovery, dynamic product pages, shopping cart functionality, and a streamlined checkout flow, all wrapped in a responsive and user-friendly interface. Developed with a modern web stack, it leverages server-side rendering and optimized data fetching to ensure excellent performance, SEO, and accessibility across devices. The project demonstrates expertise in building production-ready e-commerce solutions, combining intuitive UI/UX design with robust frontend architecture and scalable development practices.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "React.js" },
    ],
    image: "/assets/work/Gemcommerce.png",
    live: "https://gem-commerce-ashen.vercel.app/",
    github: "https://github.com/David-Toas/GemCommerce",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Hoobank",
    description:
      "💳 Next-generation banking interface with intuitive design and seamless transactions. Built with React and modern fintech principles, featuring secure authentication, real-time notifications, and user-friendly dashboard that improves customer satisfaction by 45%.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "React.js" },
    ],
    image: "/assets/work/thumb5.png",
    live: "https://hoobank-ebon-seven.vercel.app/",
    github: "https://github.com/David-Toas/Hoobank",
  },
  {
    num: "05",
    category: "FullStack",
    title: "Tinkteq",
    description:
      "🚀 Real-time collaboration platform powering seamless team communication. Developed with Next.js, WebSocket technology, and modern UI/UX principles. Features instant messaging, file sharing, and synchronized workspaces that boost team productivity by 60%.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "WebSocket" },
      { name: "React.js" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://tinkteq.vercel.app/",
    github: "https://github.com/David-Toas/Tinkteq",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Toas Shop",
    description:
      "🛒 High-performance e-commerce platform with lightning-fast loading and smooth checkout experience. Built with Next.js and Tailwind CSS, featuring optimized product discovery, secure payment integration, and mobile-first design that converts 25% better than average.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "React.js" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://toas-e-commerce-website.vercel.app/",
    github: "https://github.com/David-Toas/e_commerce_website",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Elevault",
    description:
      "Elevault is a fintech platform redefining personal savings through intelligent vault-based money management. The platform enables users to create dedicated financial vaults for budgeting, expenses, and savings goals while earning daily compounded interest in a secure, mobile-first ecosystem. By combining automation, financial organization, and user-friendly design, Elevault delivers a smarter and more personalized digital banking experience.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/homepage.png",
    live: "https://elevault.vercel.app/",
    github: "https://github.com/David-Toas/Elevault",
  },
  {
    num: "08",
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
    num: "09",
    category: "Frontend",
    title: "Homeland",
    description:
      "🏠 Premium real estate platform with advanced property search and virtual tours. Features intelligent filtering, interactive maps, and mobile-optimized browsing that helps users find their dream homes 3x faster than traditional property sites.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb4.png",
    live: "https://real-estate-toas.vercel.app/",
    github: "https://github.com/David-Toas/Real-Estate",
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
