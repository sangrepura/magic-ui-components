import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

const texts = [
  {
    id: 1,
    header: "Activity channels.",
    subheader: "Stay in the know. On the go.",
  },
  {
    id: 2,
    header: "Team Updates.",
    subheader: "Collaborate effectively, wherever you are.",
  },
  {
    id: 3,
    header: "Project Progress.",
    subheader: "Track milestones and progress seamlessly.",
  },
  {
    id: 4,
    header: "Daily Digests.",
    subheader: "Get your daily dose of updates.",
  },
];

const HoverAnimationComponent = () => {
  const itemVariants = {
    initial: (index: number) => ({
      y: 0,
      scale: index === 3 ? 0.85 : 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    }),
    whileHover: (index: number) => ({
      y: -100,
      opacity: 1,
      scale: index === 0 ? 0.85 : index === 3 ? 1 : 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    }),
  };

  const containerVariants = {
    initial: {},
    whileHover: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="max-w-full min-[500px]:max-w-md md:max-w-lg w-full relative rounded-lg border border-neutral-200 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <motion.div
        className="p-5 rounded-t-md cursor-pointer overflow-hidden h-[320px] flex flex-col gap-y-3.5"
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
      >
        {texts.map((text, index) => (
          <motion.div
            key={text.id}
            className="p-4 bg-transparent backdrop-blur-md  shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border-[0.17em] border-orange-300 dark:border-neutral-500/50 origin-right w-[500px] rounded-md"
            custom={index}
            variants={itemVariants}
          >
            <p className="text-black dark:text-white">{text.header}</p>
            <p className="text-gray-400 dark:text-gray-400">{text.subheader}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="p-4 rounded-b-lg backdrop-blur-sm">
        <p className="text-black dark:text-white">Activity channels.</p>
        <p className="text-gray-400 dark:text-gray-400">
          Stay in the know. On the go.
        </p>
      </div>
    </div>
  );
};

export default HoverAnimationComponent;
