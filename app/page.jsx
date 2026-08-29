"use client";

/* eslint-disable react/no-unescaped-entities */
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

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* masked line reveal — 70ms stagger between lines */}
            <Line delay={0.05}>
              <span className="font-mono text-sm uppercase tracking-[2px] text-content-muted">
                Senior Full-Stack Engineer <span className="text-line">/</span>{" "}
                React · Next.js · TypeScript · Node.js
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
              I'm a full-stack engineer with 8+ years of combined IT and
              software development experience, building production web
              applications with React, Next.js, TypeScript, and Node.js.
              I've shipped e-commerce platforms, mentored developers, and
              bring a client-facing background that makes me effective in
              remote, cross-functional teams.
            </p>
            {/* btn and socails */}
            <div
              className="flex flex-col xl:flex-row items-center gap-8 animate-reveal"
              style={{ animationDelay: "0.38s" }}
            >
              <Link
                href="/Olabode-Showole-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
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
    </section>
  );
};

export default Home;
