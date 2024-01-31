"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { cn } from "../../../../lib/utils";

const Beam = ({
  className,
  delay,
  width = "500", // Default width
  height = "20", // Default height
  strokeWidth = 2.5, // Default strokeWidth
  orientation = "horizontal", // Default orientation
  customPath,
  angle = 0,
  transformOrigin = "left",
}: {
  className?: string;
  delay?: number;
  width?: string | number;
  height?: string | number;
  strokeWidth?: number;
  orientation?: "horizontal" | "vertical";
  customPath?: string;
  angle?: number;
  transformOrigin?: "left" | "right" | "center";
}) => {
  const id = useId();

  // Adjust viewBox and path based on orientation
  const viewBox = customPath
    ? `0 0 462 167`
    : orientation === "horizontal"
    ? `0 0 ${width} 3`
    : `0 0 3 ${height}`;
  const dPath =
    customPath ||
    (orientation === "horizontal" ? `M${width} 1H0` : `M1 ${height}V0`);

  console.log(viewBox);
  console.log(dPath);

  if (customPath) {
    width = "100%";
    height = "100%";
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
      style={{
        transform: `rotate(${angle}deg)`,
        transformOrigin: transformOrigin,
      }}
    >
      {/* Background Line */}
      <path
        d={dPath}
        stroke="#ffffff"
        strokeOpacity="0.05"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Animated Gradient Line */}
      <path
        d={dPath}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits={"userSpaceOnUse"}
          animate={{
            x1: orientation === "horizontal" ? ["7%", "107%"] : ["0%", "0%"],
            x2: orientation === "horizontal" ? ["0%", "100%"] : ["0%", "0%"],
            y1: orientation === "horizontal" ? ["0%", "0%"] : ["7%", "107%"],
            y2: orientation === "horizontal" ? ["0%", "0%"] : ["0%", "100%"],
          }}
          transition={{
            delay,
            duration: Math.random() * 2 + 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: Math.random() * 2 + 1,
          }}
        >
          <stop stopColor="#18CCFC" stopOpacity="0"></stop>
          <stop stopColor="#18CCFC"></stop>
          <stop offset="32.5%" stopColor="#6344F5"></stop>
          <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const SvgLineAnimation = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "max-w-5xl mx-auto h-full w-full [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center flex-col py-20",
        className
      )}
    >
      <div className="flex flex-col gap-20">
        <div className="flex flex-row relative items-center justify-center border border-red-600 w-auto md:h-[300px] md:w-[300px]">
          <div className="bg-white rounded-full h-12 w-12 absolute left-0 top-0" />
          <Beam
            delay={1}
            strokeWidth={1}
            customPath="M0 1C175.836 1 143.886 167 462 167"
          />
          <div className="bg-white rounded-full h-12 w-12 absolute right-0 botom-0" />
        </div>
        <div className="flex flex-row relative items-center justify-center  h-[300px] w-[300px]">
          <div className="bg-white rounded-full h-12 w-12 absolute top-0 z-10" />
          <Beam
            delay={0.4}
            orientation="vertical"
            strokeWidth={1}
            height={300}
            width={"100%"}
          />
          <div className="bg-white rounded-full h-12 w-12 absolute bottom-0" />
        </div>
        <div className="flex flex-row relative items-center justify-center border h-[600px] w-[300px]">
          <div className="w-full mx-auto flex items-center justify-center">
            <div className="bg-white rounded-full h-12 w-12 absolute left-0 z-10"></div>
            <Beam
              className="absolute left-0 top-0 m-auto -z-10"
              delay={0.4}
              orientation="vertical"
              angle={45}
              transformOrigin="left"
              strokeWidth={1}
              height={180}
              width={300}
            />
            <div className="bg-white rounded-full h-12 w-12 absolute left-auto right-auto z-10" />
            <Beam
              className=""
              delay={0.4}
              orientation="horizontal"
              strokeWidth={1}
              height={50}
              width={300}
            />

            <div className="bg-white rounded-full h-12 w-12 absolute right-0 z-10" />
            <Beam
              className="absolute right-0 top-0 m-auto -z-10"
              delay={0.4}
              orientation="vertical"
              angle={-45}
              transformOrigin="right"
              strokeWidth={1}
              height={180}
              width={300}
            />
          </div>

          {/*  <div className="flex items-center gap-x-0 justify-center">
            <Beam
              delay={0.4}
              transformOrigin="left"
              angle={-45}
              strokeWidth={1}
              height={350}
              width={150}
            />
            <Beam
              delay={0.4}
              transformOrigin="right"
              angle={45}
              strokeWidth={1}
              height={350}
              width={150}
            />
          </div> */}
          {/*   <div className="bg-white rounded-full h-12 w-12 absolute right-0" /> */}
        </div>
        <div className="flex flex-row relative items-center justify-center border border-red-600 h-[300px] w-[300px]">
          <div className="bg-white rounded-full h-12 w-12 absolute left-0" />
          <Beam delay={0.1} strokeWidth={1} />
          <div className="py-10">
            <Beam
              delay={0.1}
              strokeWidth={1}
              angle={180}
              className="absolute right-0 top-0 -z-10"
            />
          </div>
          <div className="bg-white rounded-full h-12 w-12 absolute right-0" />
        </div>
      </div>
    </div>
  );
};
