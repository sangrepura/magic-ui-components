import { motion, AnimatePresence } from "framer-motion";

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
  // Define the hover state for the animation for each item
  const itemVariants = {
    initial: (index: number) => ({
      y: 0,
      scale: index === 3 ? 0.85 : 1, // Initial scale for the last item is 0.8
      transition: {
        delay: 0.075, // Delay each item's animation
        type: "spring", // Apply a spring animation
        duration: 0.3,
      },
    }),
    whileHover: (index: number) => ({
      y: -100, // Move up a bit
      opacity: 1, // Fully opaque
      scale: index === 0 ? 0.85 : index === 3 ? 1 : 1, // Scale down to 0.8 for the first item, scale to 1 for the last item
      transition: {
        delay: 0.075, // Delay each item's animation
        type: "spring", // Apply a spring animation
        duration: 0.3,
      },
    }),
  };

  // Define the container variants to include staggerChildren
  const containerVariants = {
    initial: {},
    whileHover: {
      transition: {
        staggerChildren: 0.1, // Stagger the animation of children
      },
    },
  };

  return (
    <div className="max-w-lg w-full relative rounded-lg border border-transparent shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)]">
      <motion.div
        className="p-5 bg-gray-50 border rounded-t-md cursor-pointer overflow-hidden h-[320px] flex flex-col gap-y-3.5"
        variants={containerVariants} // Apply the container variants here
        initial="initial"
        whileHover="whileHover"
      >
        {texts.map((text, index) => (
          <motion.div
            key={text.id}
            className="p-4  bg-white shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border-[0.17em] border-orange-300 origin-right w-[500px] rounded-md"
            custom={index} // Pass the index as a custom prop
            variants={itemVariants} // Apply the item variants here
          >
            <p className="text-black">{text.header}</p>
            <p className="text-gray-400">{text.subheader}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="p-4 border rounded-b-lg bg-white">
        <p className="text-black">Activity channels.</p>
        <p className="text-gray-400">Stay in the know. On the go.</p>
      </div>
    </div>
  );
};

export default HoverAnimationComponent;
