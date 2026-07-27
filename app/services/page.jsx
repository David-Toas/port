import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { stagger } from "@/lib/motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in developing modern, responsive, and scalable web applications that deliver exceptional user experiences across all devices. Whether it's a business platform, SaaS product, e-commerce solution, or custom web application, I build robust frontend interfaces and reliable backend systems with a strong focus on performance, security, and maintainability. By leveraging modern technologies and best development practices, I create high-quality digital solutions that help businesses streamline operations, engage users, and achieve their goals.",
    href: "/work",
  },
  {
    num: "02",
    title: "Customer Support & Client Success",
    description:
      "I bring a strong customer-focused approach to every project by listening carefully, solving problems quickly, and creating positive experiences for clients and users. My background in customer service helps me communicate clearly, manage expectations, and build trust while delivering technical solutions that meet real needs.",
    href: "/work",
  },
  {
    num: "03",
    title: "Debugging & Optimization",
    description:
      "I specialize in diagnosing and resolving bugs, errors, and performance issues across web applications to ensure smooth and reliable system behavior. From fixing broken features and debugging complex issues to optimizing performance and improving code efficiency, I take a systematic approach to identifying root causes and delivering lasting solutions. My goal is to enhance application stability, prevent recurring issues, and ensure optimal functionality across both frontend and backend systems.",
    href: "/work",
  },
  {
    num: "04",
    title: "Collaboration & Product Improvement",
    description:
      "I work well with teams, clients, and stakeholders to turn ideas into practical digital products. By combining technical knowledge with strong communication and feedback handling, I help improve products continuously and ensure they align with user expectations and business goals.",
    href: "/work",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div
                key={service.num}
                className="flex flex-1 flex-col justify-center gap-6 group animate-reveal"
                style={{ animationDelay: `${index * stagger}s` }}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="font-mono text-5xl font-extrabold text-outline text-transparent transition-all duration-300 group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    aria-label={`View work related to ${service.title}`}
                    className="w-[70px] h-[70px] rounded-full bg-surface-2 border border-line flex justify-center items-center transition-colors duration-300 group-hover:border-accent group-hover:bg-accent"
                  >
                    <BsArrowDownRight className="text-content text-3xl transition-colors duration-300 group-hover:text-primary" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-content transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-content-muted">{service.description}</p>
                {/* border */}
                <div className="border-b border-line w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
