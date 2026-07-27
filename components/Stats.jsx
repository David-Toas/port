"use client";

import CountUp from "react-countup";

import { stagger } from "@/lib/motion";
import { useInView, usePrefersReducedMotion } from "@/lib/hooks";

const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 37,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 243,
    text: "Codes commits",
  },
];

const Stats = () => {
  const [ref, inView] = useInView();
  const reduce = usePrefersReducedMotion();

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start animate-reveal"
                key={item.text}
                style={{ animationDelay: `${index * stagger}s` }}
              >
                <span className="font-mono text-4xl xl:text-6xl font-extrabold tabular-nums">
                  {inView && !reduce ? (
                    <CountUp end={item.num} duration={1.6} delay={0.2} />
                  ) : (
                    item.num
                  )}
                </span>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-content-muted`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
