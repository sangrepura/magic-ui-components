"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "max-w-5xl mx-auto h-full w-full  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
        className
      )}
    >
      <svg
        className=" z-0 h-72 w-72 pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 462 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M462 1C143.886 1 174.457 162 0 162"
          stroke="#ffffff"
          strokeOpacity="0.05"
          strokeWidth="2"
        ></path>

        <motion.path
          d="M462 1C143.886 1 174.457 162 0 162"
          stroke={`url(#linearGradient)`}
          strokeOpacity="1"
          strokeWidth="2.5"
        ></motion.path>

        <defs>
          <motion.linearGradient
            id="linearGradient"
            x1="100%"
            x2="100%"
            y1="100%"
            y2="100%"
            key="linearGradient"
            initial={{
              x1: "7px",
              x2: "0%",
              y1: "0%",
              y2: `${93 + Math.random() * 8}%`,
            }}
            animate={{
              x1: ["7px", "100%"],
              x2: ["0%", "95%"],
              y1: ["0%", "100%"],
              y2: ["0%", `${93 + Math.random() * 8}%`],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              ease: "easeInOut",
              repeat: Infinity,
              /* delay: 2, */
            }}
          >
            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
            <stop stopColor="#18CCFC"></stop>
            <stop offset="32.5%" stopColor="#6344F5"></stop>
            <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  );
};
