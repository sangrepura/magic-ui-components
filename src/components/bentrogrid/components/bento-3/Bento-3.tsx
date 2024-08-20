import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect } from "react";

import slackIcon from "../../../../../src/assets/slackicon.svg";
import driveIcon from "../../../../../src/assets/driveicon.svg";
import youtubeIcon from "../../../../../src/assets/youtubeicon.svg";

const FeatureCard1 = () => {
  const firstBoxRef = useRef(null);
  const firstBoxInView = useInView(firstBoxRef, { amount: 0.55 });
  const firstBoxControls = useAnimation();

  useEffect(() => {
    if (firstBoxInView) {
      firstBoxControls.start("visible");
    } else {
      firstBoxControls.start("hidden");
    }
  }, [firstBoxInView, firstBoxControls]);

  return (
    <div
      ref={firstBoxRef}
      className="rounded-xl border grid cursor-pointer grid-rows-[1fr_auto] border-neutral-200 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-7 md:p-10 overflow-hidden"
    >
      <div className="flex flex-col gap-y-3.5">
        <h2 className="text-2xl font-bold">
          Maigcui is the best Animated Component Library for React
        </h2>
        <a
          href="#"
          className="text-blue-500 font-bold hover:underline transition-all underline-offset-4"
        >
          Buy Magicui PRO
        </a>
      </div>
      <AnimatePresence>
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.96, y: 25 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          initial="hidden"
          animate={firstBoxControls}
          exit={{
            opacity: 0,
            scale: 0,
            transition: {
              duration: 0.25,
              ease: "linear",
            },
          }}
          transition={{
            duration: 0.25,
            ease: "linear",
          }}
          className="mt-10 w-full object-cover aspect-square rounded-lg flex items-end justify-end"
          src="https://images.unsplash.com/photo-1476458438255-0ab285b38cb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </AnimatePresence>
    </div>
  );
};

const FeatureCard2 = () => {
  const secondBoxRef = useRef(null);
  const secondBoxInView = useInView(secondBoxRef, { amount: 0.55 });
  const secondBoxControls = useAnimation();

  useEffect(() => {
    if (secondBoxInView) {
      secondBoxControls.start("visible");
    } else {
      secondBoxControls.start("hidden");
    }
  }, [secondBoxInView, secondBoxControls]);

  return (
    <div
      ref={secondBoxRef}
      className="rounded-xl border grid cursor-pointer grid-rows-[1fr_auto] border-neutral-200 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-7 md:p-10 overflow-hidden"
    >
      <div className="flex flex-col gap-y-3.5">
        <h2 className="text-2xl font-bold">
          Maigcui is the best Open Source UI toolkit for React
        </h2>
        <a
          href="#"
          className="text-blue-500 font-bold hover:underline transition-all underline-offset-4"
        >
          Invest with Magicui sponsors
        </a>
      </div>

      <AnimatePresence>
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.96, x: 25 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={secondBoxControls}
          exit={{
            opacity: 0,
            scale: 0,
            transition: {
              duration: 0.25,
              ease: "linear",
            },
          }}
          transition={{
            duration: 0.25,
            ease: "linear",
          }}
          className="mt-10 w-full object-cover aspect-square rounded-lg flex items-end justify-end"
          src="https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </AnimatePresence>
    </div>
  );
};

const FeatureCard3 = () => {
  return (
    <div className="grid grid-cols-1 cursor-pointer lg:grid-cols-2 gap-x-10 gap-y-32 group border overflow-hidden min-h-60 h-full p-7 md:p-10 rounded-xl border-neutral-200 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold">Integration made simple</h2>
        <p className="w-full md:w-4/5 text-base leading-7 text-neutral-700 dark:text-neutral-400">
          Magic ui contents 50 + animted react components, and it's easy to use.
        </p>
      </div>
      <div className="flex items-end justify-end">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={231}
            height={153}
            fill="none"
            className="-mb-20 z-[10]"
            viewBox="0 0 154 102"
          >
            <path
              fill="#5B72F8"
              d="M35 0H1l57.5 75v26.5H75V73L35 0ZM118.459 1H152L95.277 74.892V101H79V72.921L118.459 1Z"
            />
            <path
              fill="#7384FF"
              d="M122 1H33l41.82 72.5V102h4.825V73.5L122 1Z"
            />
            <path stroke="#000" d="M58.5 101.5V75L1.5.5h151L95 75v26.5H58.5Z" />
          </svg>
          <div className="absolute -top-14 -right-24 -z-[3] h-72 w-72 rounded-full border border-neutral-200/70 dark:border-neutral-800"></div>
          <div className="absolute -top-10 -right-28 -z-[2] h-72 w-72 rounded-full border border-neutral-200/60 dark:border-neutral-800"></div>
          <div className="absolute -top-5 -right-32 -z-[1] h-72 w-72 rounded-full border border-neutral-200/50 dark:border-neutral-800"></div>
          <div className="absolute -top-10 left-0 flex items-center justify-center">
            <div className="bg-white border rounded-md h-12 w-14 m-auto flex items-center justify-center -translate-x-5 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-100 ease-in-out -rotate-6 group-hover:rotate-3">
              <img className="w-10 h-10" src={youtubeIcon} alt="chatgpt" />
            </div>
            <div className="bg-white border rotate-3 rounded-md h-12 w-14 m-auto flex items-center justify-center translate-x-10 -translate-y-16 group-hover:translate-x-5 group-hover:translate-y-0 transition-all duration-100 ease-in-out group-hover:-rotate-3">
              <img className="w-10 h-10" src={slackIcon} alt="chatgpt" />
            </div>
            <div className="bg-white -z-[1] border rotate-3 rounded-md h-12 w-14 m-auto flex items-center justify-center translate-x-10 translate-y-2 group-hover:translate-x-10 group-hover:-translate-y-7 transition-all duration-100 ease-in-out group-hover:rotate-6">
              <img className="w-10 h-10" src={driveIcon} alt="chatgpt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Bento3() {
  return (
    <section className="max-w-4xl mx-auto flex flex-col gap-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FeatureCard1 />
        <FeatureCard2 />
      </div>
      <FeatureCard3 />
    </section>
  );
}
