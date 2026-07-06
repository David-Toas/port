"use client";

import Link from "next/link";

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
import { FiDownload } from "react-icons/fi";

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
    "I am a versatile professional with over 5 years of experience combining full-stack development with customer service, client support, and problem-solving. I build responsive, scalable web applications using modern technologies while also bringing strong communication, empathy, and relationship management skills to every project. Whether I am developing software or supporting clients, I focus on delivering thoughtful, reliable, and user-centered solutions that create value for both businesses and people.",
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

const customerExperience = {
  title: "Customer experience",
  description:
    "My background in customer service has sharpened my ability to communicate clearly, solve problems quickly, and build trust with clients and users. I bring a service-first mindset to technical and non-technical work alike, making me effective in support, client-facing collaboration, and relationship management.",
  items: [
    {
      company: "Client Support",
      position: "Customer Service & Client Success",
      duration: "2023 - Present",
    },
    {
      company: "Freelance Clients",
      position: "Project Communication & Problem Resolution",
      duration: "2022 - Present",
    },
    {
      company: "Team Collaboration",
      position: "Supportive Relationship Building",
      duration: "2021 - Present",
    },
  ],
  strengths: [
    "Communication",
    "Empathy",
    "Issue Resolution",
    "Relationship Building",
    "Active Listening",
    "Customer Focus",
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
    "I bring together strong technical skills and customer-facing strengths. My experience includes building modern web applications and also supporting clients effectively through clear communication, empathy, and problem-solving. This blend allows me to contribute confidently in both development teams and service-oriented environments.",
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

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resumeOptions = [
  {
    title: "Full-Stack Developer Resume",
    description: "Best for software, web, and technical roles",
    file: "/Olabode-Showole-Full Stack.pdf",
  },
  {
    title: "Customer Service Resume",
    description: "Best for support, client success, and service-focused roles",
    file: "/Olabode-Showole-CSR.pdf",
  },
];

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
        {/* <div className="mb-8 rounded-2xl border border-white/10 bg-[#232329]/70 p-6">
          <div className="flex flex-col gap-2 text-center xl:text-left">
            <h2 className="text-2xl font-semibold">Download my resume</h2>
            <p className="max-w-[700px] text-white/70">
              I offer two versions of my resume so you can choose the one that
              best matches the role you are hiring for, whether it is technical
              or customer-facing.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            {resumeOptions.map((resume) => (
              <Link
                key={resume.title}
                href={resume.file}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  <span>{resume.title}</span>
                  <FiDownload className="text-lg" />
                </Button>
              </Link>
            ))}
          </div>
        </div> */}

        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="customer-experience">
              Customer experience
            </TabsTrigger>
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

            {/* customer experience */}
            <TabsContent value="customer-experience" className="w-full mb-6">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {customerExperience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {customerExperience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {customerExperience.items.map((item, index) => {
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
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>

                <div className="rounded-xl border border-white/10 bg-[#232329]/80 p-6">
                  <h4 className="text-xl font-semibold">Key strengths</h4>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {customerExperience.strengths.map((strength, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-accent/40 bg-accent/10 px-3 py-2 text-sm text-accent"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
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
