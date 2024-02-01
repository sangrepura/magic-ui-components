"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { cn } from "../../../../lib/utils";
import ShimmerButton from "../../magicui-components/shimmer-button";

const Beam = ({
  className,
  delay,
  duration,
  width = "500", // Default width
  height = "20", // Default height
  strokeWidth = 2.5, // Default strokeWidth
  orientation = "horizontal", // Default orientation
  customPath,
  gradientColors = {
    // Default gradient colors
    start: "#18CCFC",
    middle: "#6344F5",
    end: "#AE48FF",
  },
}: {
  className?: string;
  delay?: number;
  duration?: number;
  width?: string | number;
  height?: string | number;
  strokeWidth?: number;
  orientation?: "horizontal" | "vertical";
  customPath?: string;
  gradientColors?: {
    start: string;
    middle: string;
    end: string;
  };
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
    width = `${width}`; // Default width
    height = `${height}`; // Default height
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none stroke-[2.5]", className)}
    >
      {/* Background Line */}
      <path
        d={dPath}
        stroke="#ffffff"
        strokeOpacity="0.05"
        strokeLinecap="round"
      />

      {/* Animated Gradient Line */}
      <path
        d={dPath}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />

      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits={"userSpaceOnUse"}
          animate={{
            x1: orientation === "horizontal" ? ["14px", "107%"] : ["0%", "0%"],
            x2: orientation === "horizontal" ? ["0%", "100%"] : ["0%", "0%"],
            y1: orientation === "horizontal" ? ["0%", "0%"] : ["14px", "107%"],
            y2: orientation === "horizontal" ? ["0%", "0%"] : ["0%", "100%"],
          }}
          transition={{
            delay,
            duration: duration || Math.random() * 3 + 1,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: Math.random() * 2 + 1,
          }}
        >
          <stop stopColor={gradientColors.start} stopOpacity="0"></stop>
          <stop stopColor={gradientColors.start}></stop>
          <stop offset="32.5%" stopColor={gradientColors.middle}></stop>
          <stop
            offset="100%"
            stopColor={gradientColors.end}
            stopOpacity="0"
          ></stop>
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
        {/* 1st one */}
        <div className="flex flex-row relative items-center justify-center border h-[400px] max-w-[400px] w-full mx-auto border-blue-600">
          <div className="bg-white rounded-full h-10 w-10 absolute top-[6.5rem] left-0 z-10" />
          <div className="bg-white rounded-full h-10 w-10 absolute left-0 z-10" />
          <div className="bg-white rounded-full h-10 w-10 absolute bottom-[6.5rem] left-0 z-10" />

          <div className="z-10 bg-white rounded-full h-10 w-10 absolute inset-0 m-auto" />

          <div className="z-10 bg-white rounded-full h-10 w-10 absolute right-0" />

          <Beam
            className="absolute top-14 left-0 stroke-[4]"
            delay={0.4}
            width={200}
            height={200}
            customPath="M0 1C175.836 1 143.886 167 462 167"
            gradientColors={{
              start: "#E83914",
              middle: "#CBE814",
              end: "#1992E3",
            }}
          />

          <Beam
            className="absolute left-0 stroke-2"
            delay={0.4}
            height={50}
            width={200}
            gradientColors={{
              start: "#E83914",
              middle: "#19E3B5",
              end: "#E319DD",
            }}
          />

          <Beam
            customPath="M462 1C143.886 1 174.457 162 0 162"
            className="absolute bottom-14 left-0 stroke-[4]"
            delay={0.4}
            width={200}
            height={202}
          />

          <Beam
            className="absolute left-1/2 stroke-2"
            delay={0.4}
            height={50}
            width={200}
          />
        </div>

        {/* ================================================================================================= */}

        {/* 2nd one */}
        <div className="flex flex-row relative items-center justify-center border h-[400px] w-[600px] border-blue-600">
          <div className="bg-white rounded-full h-12 w-12 absolute top-0 left-0 z-10" />
          <div className="bg-white rounded-full h-12 w-12 absolute left-0 z-10" />
          <div className="bg-white rounded-full h-12 w-12 absolute bottom-0 left-0 z-10" />

          <div className="z-10 bg-white rounded-full h-12 w-12 absolute inset-0 m-auto" />

          <div className="z-10 bg-white rounded-full h-12 w-12 absolute right-0" />

          <Beam
            className="absolute top-0 left-0 origin-left rotate-[30deg] stroke-2"
            delay={0.4}
            width={360}
            gradientColors={{
              start: "#E83914",
              middle: "#CBE814",
              end: "#1992E3",
            }}
          />

          <Beam
            className="absolute left-0 stroke-2"
            delay={0.4}
            height={50}
            width={300}
            gradientColors={{
              start: "#E83914",
              middle: "#19E3B5",
              end: "#E319DD",
            }}
          />

          <Beam
            className="absolute bottom-0 left-0 origin-left -rotate-[30deg] stroke-2"
            delay={0.4}
            width={360}
          />

          <Beam
            className="absolute left-1/2 stroke-2"
            delay={0.4}
            height={50}
            width={300}
          />
        </div>

        {/* ================================================================================================= */}

        {/* 3rd one first */}

        <div className="flex flex-row relative items-center justify-center border h-[300px] max-w-[500px] mx-auto w-full border-transparent">
          {/* left circle */}
          <div className="bg-teal-500 shadow-[2px_2px_50px_-10px] shadow-teal-800 backdrop-blur-md rounded-full h-20 w-20 absolute left-0 z-10 flex items-center justify-center">
            <p className="text-lg text-center text-white">Client</p>
          </div>
          {/* right circle */}
          <div className="z-10 bg-blue-500 shadow-[2px_2px_50px_-10px] shadow-blue-800 backdrop-blur-md rounded-full h-20 w-20 absolute right-0 flex items-center justify-center">
            <p className="text-lg text-center text-white">Server</p>
          </div>

          <Beam
            className="absolute left-5 top-[150px] stroke-2 -z-10"
            delay={0.4}
            height={50}
            width={460}
            gradientColors={{
              start: "#E83914",
              middle: "#CBE814",
              end: "#1992E3",
            }}
          />

          <Beam
            className="absolute left-5 bottom-[150px] stroke-2 rotate-180 -z-10"
            delay={0.4}
            height={50}
            width={460}
            gradientColors={{
              start: "#E83914",
              middle: "#19E3B5",
              end: "#E319DD",
            }}
          />
        </div>

        {/* 3rd second first */}
        <div className="flex flex-row relative items-center justify-center border h-[300px] max-w-[500px] mx-auto w-full border-transparent">
          {/* left circle */}
          <div className="bg-teal-500 shadow-[2px_2px_50px_-10px] shadow-teal-800 backdrop-blur-md rounded-full h-20 w-20 absolute left-0 z-10 flex items-center justify-center">
            <ShimmerButton
              className="shadow-2xl w-full h-full rounded-full"
              shimmerSize="2px"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Client
              </span>
            </ShimmerButton>
          </div>
          {/* right circle */}
          <div className="z-10 bg-blue-500 shadow-[2px_2px_50px_-10px] shadow-blue-800 backdrop-blur-md rounded-full h-20 w-20 absolute right-0 flex items-center justify-center">
            <ShimmerButton
              className="shadow-2xl w-full h-full rounded-full"
              shimmerSize="2px"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Server
              </span>
            </ShimmerButton>
          </div>

          <Beam
            className="absolute left-5 top-[150px] stroke-2 -z-10"
            delay={0.4}
            height={50}
            width={460}
            gradientColors={{
              start: "#E83914",
              middle: "#CBE814",
              end: "#1992E3",
            }}
          />

          <Beam
            className="absolute left-5 bottom-[150px] stroke-2 rotate-180 -z-10"
            delay={0.4}
            height={50}
            width={460}
            gradientColors={{
              start: "#E83914",
              middle: "#19E3B5",
              end: "#E319DD",
            }}
          />
        </div>

        {/* ================================================================================================= */}

        {/* 4th one */}

        <div className="flex flex-row relative items-center justify-center border h-[400px] w-[600px] border-blue-600">
          <div className="bg-white rounded-full h-12 w-12 absolute top-0 left-0 z-10"></div>
          <div className="bg-white rounded-full h-12 w-12 absolute left-0 z-10" />
          <div className="bg-white rounded-full h-12 w-12 absolute bottom-0 left-0 z-10" />

          <div className="z-10 bg-white rounded-full h-12 w-12 absolute inset-0 m-auto" />

          <div className="bg-white rounded-full h-12 w-12 absolute top-0 right-0 z-10" />
          <div className="bg-white rounded-full h-12 w-12 absolute right-0 z-10" />
          <div className="bg-white rounded-full h-12 w-12 absolute bottom-0 right-0 z-10" />

          <Beam
            className="absolute top-0 left-0 origin-left rotate-[32deg] stroke-1"
            delay={0.4}
            width={350}
          />

          <Beam
            className="absolute left-0 stroke-1"
            delay={0.4}
            height={50}
            width={300}
          />

          <Beam
            className="absolute bottom-0 left-0 origin-left -rotate-[32deg] stroke-1"
            delay={0.4}
            width={350}
          />

          {/*    <Beam
            className="absolute left-1/2 stroke-1"
            delay={0.4}
            height={50}
            width={300}
          /> */}

          <Beam
            className="absolute top-0 right-0 origin-right -rotate-[32deg] stroke-1"
            delay={0.4}
            width={350}
          />

          <Beam
            className="absolute right-0 stroke-1 rotate-180"
            delay={0.4}
            height={50}
            width={300}
          />

          <Beam
            className="absolute bottom-0 right-0 origin-right rotate-[32deg] stroke-1"
            delay={0.4}
            width={360}
          />
        </div>
      </div>
    </div>
  );
};
