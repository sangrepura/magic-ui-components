"use client";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect } from "react";

gsap.registerPlugin(MotionPathPlugin);

export default function GsapMask() {
  useEffect(() => {
    gsap.to(".maskcircle", {
      motionPath: {
        path: ".pathsvg",
        align: ".pathsvg",
        alignOrigin: [0.5, 0.5],
      },
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: 5,
    });
  }, []);
  return (
    <section>
      <div className="">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 462 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" overflow-visible"
        >
          <path
            d="M0 1C175.836 1 143.886 167 462 167"
            stroke="black"
            strokeOpacity="0.5"
            strokeWidth="2"
            className="pathsvg"
          />
          <g>
            <circle
              className="maskcircle "
              cx="231"
              cy="84"
              r="10"
              stroke="black"
              fill="red"
              strokeOpacity="0.5"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
