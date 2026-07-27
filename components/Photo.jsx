import Image from "next/image";

/*
  Server component — the entrance and the ring rotation are both CSS, so
  nothing here is invisible while waiting for hydration and no JS ships.
  Reduced motion is handled by the global media query in globals.css.
*/
const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="relative animate-reveal">
        {/*
          Ring. The old version was a 20s rotating dashed circle — a template
          tell. Now: a static hairline ring plus one slow, low-opacity arc.
        */}
        <svg
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="253"
            cy="253"
            r="250"
            stroke="var(--border)"
            strokeWidth="2"
          />
          <circle
            className="animate-ring-spin"
            cx="253"
            cy="253"
            r="250"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="120 1450"
            opacity="0.45"
          />
        </svg>

        {/* Image */}
        <div
          className="absolute inset-0 flex items-center justify-center animate-reveal"
          style={{ animationDelay: "0.12s" }}
        >
          <Image
            src="/assets/Olabode.png"
            alt="Olabode Showole"
            width={350}
            height={350}
            priority
            sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1200px) 300px, 350px"
            className="object-cover rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
