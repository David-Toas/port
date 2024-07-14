import { animate, motion } from "framer-motion";

// components
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 9; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render a motion.div divs, each representing a step of the starirs 
    Each div will have the same amination defined by the stairsAnimation object.
    The delay for each div is calculated sinamically/dynamically based on it's reversed index,creating a staggered effect with decreasing delay for each subsequent step.
    */}
      {[...Array(9)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1, // delay is calculated as a fraction of total duration, multiplied by the index to create a staggered effect
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
