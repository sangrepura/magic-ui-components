import { motion, AnimatePresence } from "framer-motion";

const HoverAnimationComponent = () => {
  // Define the hover state for the animation for each item
  const itemVariants = {
    initial: (index: number) => ({
      y: 0,
      scale: index === 3 ? 0.8 : 1, // Initial scale for the last item is 0.8
      transition: {
        delay: 0.05, // Delay each item's animation
        duration: 0.2,
      },
    }),
    whileHover: (index: number) => ({
      y: -100, // Move up a bit
      opacity: 1, // Fully opaque
      scale: index === 0 ? 0.92 : index === 3 ? 1 : 1, // Scale down to 0.8 for the first item, scale to 1 for the last item
      transition: {
        delay: 0.05, // Delay each item's animation
        duration: 0.2,
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
    <AnimatePresence>
      <div className="max-w-md w-full relative group bg-gray-500 p-4 rounded-lg">
        <motion.div
          className="p-4 bg-gray-800 rounded-md cursor-pointer overflow-hidden h-[304px] group flex flex-col gap-y-3.5"
          variants={containerVariants} // Apply the container variants here
          initial="initial"
          whileHover="whileHover"
        >
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="p-4 bg-dark border origin-right"
              custom={index} // Pass the index as a custom prop
              variants={itemVariants} // Apply the item variants here
            >
              <p className="text-white">Activity channels.</p>
              <p className="text-gray-400">Stay in the know. On the go.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default HoverAnimationComponent;
