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
    "I'm a full-stack engineer with 8+ years of combined IT and software development experience, currently focused on React, Next.js, and TypeScript on the frontend, and Node.js on the backend. I've architected production SaaS and e-commerce platforms, mentored developers, and bring a client-facing background from IT support and vendor management that makes me effective in remote, cross-functional teams.",
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
      fieldValue: "8+ Years",
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
    "Senior full-stack engineer with 8+ years of combined IT and software development experience. I've architected and delivered a production e-commerce SaaS platform using React, Next.js, TypeScript, and Node.js, mentored developers, and worked in AWS/Docker production environments. Earlier in my career I worked in data management and IT support — experience that still shows up in how I think about security, systems, and working with non-technical stakeholders.",
  items: [
    {
      company: "TOTUM LLC",
      position: "Senior Full-Stack Engineer",
      duration: "Oct 2025 - Present",
    },
    {
      company: "TOTUM LLC",
      position: "Freelance Frontend Developer (Contract)",
      duration: "Apr 2025 - Sep 2025",
    },
    {
      company: "E-Tech Hub",
      position: "Web Developer and Technical Trainer",
      duration: "Apr 2023 - Sep 2025",
    },
    {
      company: "Self-Employed",
      position: "Freelance Web Developer",
      duration: "Feb 2021 - Present",
    },
    {
      company: "Strategic Outsourcing Ltd (Polaris Bank)",
      position: "Data Management Specialist",
      duration: "2022 - 2023",
    },
    {
      company: "One Touch Computer Center",
      position: "IT Technician",
      duration: "2017 - 2018",
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
    "I work across the full stack — React, Next.js, and TypeScript on the frontend, Node.js on the backend, and PostgreSQL or MongoDB for data. I care about clean architecture, performance, and shipping features that hold up in production.",
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


const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
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
                <p className="max-w-[600px] text-content-muted mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-surface border border-line h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-content-muted">{item.company}</p>
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
                <p className="max-w-[600px] text-content-muted mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-surface border border-line h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-content-muted">{item.institution}</p>
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
                  <p className="max-w-[600px] text-content-muted mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-surface border border-line rounded-xl flex justify-center items-center group">
                              <div className="text-6xl transition-colors duration-200 group-hover:text-accent">
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
                <p className="max-w-[600px] text-content-muted mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-col-2 gap-y-6 max-w-[628px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-content-muted">{item.fieldName}:</span>
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
    </div>
  );
};

export default Resume;
