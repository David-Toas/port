import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Website Developer</span>
            <h1 className="h1 mb-6">
              Hello I`m <br />
              <span className="text-accent">Olabode Showole</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at developing elegant websites designs and I am proficient
              in various programming languages and technologies.
            </p>
            {/* btn and socails */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-8">
                <Socials />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
