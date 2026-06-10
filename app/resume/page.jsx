"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaGit,
} from "react-icons/fa";

import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I am a passionate Full-Stack Developer with over 5 years of experience building responsive, scalable, and high-performance web applications using modern technologies. With expertise in both frontend and backend development, I create seamless digital experiences using React, Next.js, TypeScript, JavaScript, Node.js, and related technologies. As a freelancer, I enjoy collaborating with clients and teams to transform ideas into reliable, user-centered solutions that balance functionality, performance, and design. Fluent in English, I am committed to delivering clean, maintainable code and innovative web solutions that drive user engagement and support business growth.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Olabode Showole",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 814 031 3381",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "showoleolabode.6@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Full Time Job",
      fieldValue: "Available",
    },
    {
      fieldName: "Contract / Part Time",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, French (Basic)",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "With over 5 years of experience in web development, I specialize in building responsive, user-focused web applications and optimizing digital experiences for performance and engagement. As a Full-Stack Developer, I have successfully designed and developed scalable websites and applications using React, Next.js, TypeScript, JavaScript, Node.js, and Tailwind CSS, delivering seamless functionality across both frontend and backend systems. I am committed to creating clean, maintainable code, intuitive user interfaces, and robust solutions that drive business growth and enhance user satisfaction.",
  items: [
    {
      company: "E-Tech Hub",
      position: "Front-End Developer Intern",
      duration: "2023 - 2024",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Freelancing",
      position: "Junior Web Developer",
      duration: "2022 - 2025",
    },
    {
      company: "E-Tech Hub",
      position: "Frontend Development Tutor/Trainer",
      duration: "2025 - Present",
    },
    {
      company: "TOTUM LLC",
      position: "Senior Web Developer",
      duration: "2025 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have a Bachelor’s degree in Computer Science from Estam Formation University, which provided me with a strong foundation in software development, programming, and problem-solving. To further enhance my skills, I pursued additional certifications in Front-End and Back-End Development, gaining hands-on experience in modern web technologies. My training includes Python programming from New Horizon Nigeria, Back-End Development from E-Tech Hub, and Front-End Development from Side Hustle. These certifications have equipped me with the knowledge and practical expertise to build efficient, scalable, and user-friendly web applications.",
  items: [
    {
      institution: "TS Academy",
      degree: "Certificate of Completion (Backend Programming)",
      duration: "2026",
    },
    {
      institution: "New Horizon Nigeria",
      degree: "Certificate of Completion (Python Programming)",
      duration: "2024",
    },
    {
      institution: "E-Tech Hub",
      degree: "Certificate Back-End Development",
      duration: "2024",
    },
    {
      institution: "Side Hustle",
      degree: "Certified Front-End Development",
      duration: "2022",
    },
    {
      institution: "Estam Formation University",
      degree: "Bachelor Degree in Computer Science",
      duration: "2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I have a strong technical foundation in web development, specializing in both front-end and back-end technologies. My expertise includes HTML5, CSS3, and JavaScript, allowing me to create structured, responsive, and interactive user interfaces. I am proficient in modern frameworks like React.js and Next.js, ensuring high-performance web applications with seamless user experiences. For styling, I utilize Tailwind CSS to build efficient and scalable designs and leverage Figma for UI/UX prototyping. On the backend, I have experience working with Node.js for developing dynamic applications and use Python for scripting and backend logic. My diverse skill set enables me to build fully functional, optimized, and visually appealing web solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgresql",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full mb-6">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full mb-6">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full mb-6">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skills.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left mb-6"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-col-2 gap-y-6 max-w-[628px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
