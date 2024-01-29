"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "../../../lib/utils";

export const GradientGsapMask = ({
  className,
  pathData,
}: {
  className?: string;
  pathData: string;
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(pathRef.current, {
      stroke: "url(#linearGradient)",
      strokeOpacity: 1,
      strokeWidth: 2,
      duration: Math.random() * 5 + 5,
      ease: "power1.inOut",
    });

    tl.to(gradientRef.current, {
      attr: {
        x1: "100%",
        x2: "93%",
        y1: "100%",
        y2: `${93 + Math.random() * 8}%`,
      },
      duration: Math.random() * 5 + 5,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

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
          ref={pathRef}
          d={pathData}
          stroke="url(#linearGradient)"
          strokeOpacity="0.5"
          strokeWidth="2"
        ></path>

        <linearGradient
          ref={gradientRef}
          id="linearGradient"
          x1="100%"
          x2="100%"
          y1="100%"
          y2="100%"
        >
          <stop stopColor="#18CCFC" stopOpacity="0"></stop>
          <stop stopColor="#18CCFC"></stop>
          <stop offset="32.5%" stopColor="#6344F5"></stop>
          <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
        </linearGradient>
      </svg>
    </div>
  );
};

export default GradientGsapMask;
