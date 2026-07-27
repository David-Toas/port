"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Social from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

// One heading line, clipped so the inner span can ride up from behind it.
const Line = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden pb-1">
    <span
      className="block animate-line"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  </span>
);

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

const Home = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* masked line reveal — 70ms stagger between lines */}
            <Line delay={0.05}>
              <span className="font-mono text-sm uppercase tracking-[2px] text-content-muted">
                Full-Stack Developer <span className="text-line">/</span>{" "}
                Customer Support & Client Success
              </span>
            </Line>
            <h1 className="mt-4 text-[48px] xl:text-[70px] leading-[1.1] font-semibold mb-6">
              <Line delay={0.12}>Hello I&apos;m</Line>
              <Line delay={0.19}>
                <span className="text-accent">Olabode Showole</span>
              </Line>
            </h1>
            <p
              className="max-w-[500px] mb-9 text-content-muted animate-reveal"
              style={{ animationDelay: "0.3s" }}
            >
              I combine full-stack development expertise with a strong customer
              service background to deliver digital solutions that are both
              technically solid and user-focused. With experience building
              modern web applications and supporting clients with clarity,
              empathy, and problem-solving, I bridge the gap between product
              development and customer satisfaction.
            </p>
            {/* btn and socails */}
            <div
              className="flex flex-col xl:flex-row items-center gap-8 animate-reveal"
              style={{ animationDelay: "0.38s" }}
            >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => setIsResumeModalOpen(true)}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-line rounded-full flex justify-center items-center text-content-muted text-base transition-colors duration-200 hover:border-accent hover:bg-accent-soft hover:text-accent"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

      {isResumeModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-line bg-surface p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Choose a resume</h3>
                <p className="mt-2 text-sm text-content-muted">
                  Open or download the resume version that best matches the role
                  you are exploring.
                </p>
              </div>
              <button
                className="text-2xl text-content-muted transition-colors duration-200 hover:text-content"
                onClick={() => setIsResumeModalOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {resumeOptions.map((resume) => (
                <div
                  key={resume.title}
                  className="rounded-xl border border-line bg-surface-2 p-4"
                >
                  <h4 className="font-semibold">{resume.title}</h4>
                  <p className="mt-2 text-sm text-content-muted">
                    {resume.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={resume.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Button
                        variant="outline"
                        size="md"
                        className="flex items-center gap-2"
                      >
                        Download
                      </Button>
                    </Link>
                    <Link
                      href={resume.file}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="md"
                        className="flex items-center gap-2"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
