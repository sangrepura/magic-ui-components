"use client";

import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export default function FramerMaskGradient() {
  return (
    <div className="max-w-5xl mx-auto h-full w-full  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center">
      <svg
        className=" z-0 h-72 w-72 pointer-events-none rotate-180"
        width="100%"
        height="100%"
        viewBox="0 0 462 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1C175.836 1 143.886 167 462 167"
          stroke="#ffffff"
          strokeOpacity="0.05"
          strokeWidth="2"
        ></path>

        <motion.path
          d="M0 1C175.836 1 143.886 167 462 167" // Replace this path with the actual path you want to animate
          fill="transparent"
          strokeWidth={1}
          stroke="#ffffff30"
          strokeLinecap="round"
          initial={{
            strokeDasharray: "40 10000", // 10px dash, very long gap to ensure the rest of the line is hidden
          }}
          animate={{
            strokeDashoffset: [0, -10000], // Animate the offset from 0 to -10000px to move the dash along the path
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 100,
          }}
        />
      </svg>
    </div>
  );
}
