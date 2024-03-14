import firstGridImg from "../../../src/assets/dark-grid-1.jpg";
import secondGridImg from "../../../src/assets/dark-grid-2.jpg";
import thirdGridImg from "../../../src/assets/dark-grid-3.jpg";
import { Image as FallbackImage, ChevronRight } from "lucide-react";
import { motion, cubicBezier } from "framer-motion";
import Marquee from "./marquee";
import { cn } from "../../../lib/utils";
import {
  BentoGridContainer,
  BendroGridLayout,
  BentoGridContent,
  BentoGridImage,
} from "./gridcomponent5";
import { useEffect, useState } from "react";
import { useTheme } from "../theme-provider";

const reviews = [
  {
    id: 1,
    img: "../../../src/assets/chatgpticon.svg",
  },
  {
    id: 2,
    img: "../../../src/assets/docsicon.svg",
  },
  {
    id: 3,
    img: "../../../src/assets/slackicon.svg",
  },
  {
    id: 4,
    img: "../../../src/assets/slackicon.svg",
  },
  {
    id: 5,
    img: "../../../src/assets/slackicon.svg",
  },
  {
    id: 6,
    img: "../../../src/assets/slackicon.svg",
  },
  {
    id: 7,
    img: "../../../src/assets/slackicon.svg",
  },
  {
    id: 8,
    img: "../../../src/assets/slackicon.svg",
  },
];

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

const containerVariants = {
  initial: {},
  whileHover: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FeatureCard1 = () => {
  const { theme } = useTheme();

  const firstBentoItemOneVariants = {
    initial: {
      scale: 0.87,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      scale: 0.8,
      boxShadow:
        "rgba(245,40,145,0.35) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const firstBentoItemTwoVariants = {
    initial: {
      y: -27,
      scale: 0.95,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: -55,
      scale: 0.87,
      boxShadow:
        "rgba(39,127,245,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const firstBentoItemThreeVariants = {
    initial: {
      y: -25,
      opacity: 0,
      scale: 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: -45,
      opacity: 1,
      scale: 1,
      boxShadow:
        "rgba(39,245,76,0.15) 10px 20px 70px -20px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="p-0 h-full bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="w-full border-b border-slate-200/50 dark:border-neutral-800 bg-transparent h-full flex items-center justify-center rounded-t-xl">
          <div className="flex flex-col items-center justify-center gap-y-2 p-10 relative">
            <motion.div
              variants={firstBentoItemOneVariants}
              className="w-full h-full border z-[1] bg-white dark:bg-neutral-800 border-neutral-400/20 rounded-md p-5 px-2.5 flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear"
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-32 h-2 bg-neutral-800/50 dark:bg-neutral-200/80 rounded-full"></div>

                <div className="w-48 h-2 bg-slate-400/50 rounded-full"></div>
              </div>
            </motion.div>
            <motion.div
              variants={firstBentoItemTwoVariants}
              className="w-full h-full z-[2] border bg-white dark:bg-neutral-800 border-neutral-400/20 rounded-md p-5 px-2.5 flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear"
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-32 h-2 bg-neutral-800/50 dark:bg-neutral-200/80 rounded-full"></div>
                <div className="w-48 h-2 bg-slate-400/50 rounded-full"></div>
                <div className="w-20 h-2 bg-slate-400/50 rounded-full"></div>
              </div>
            </motion.div>
            <motion.div
              variants={firstBentoItemThreeVariants}
              className="w-fit h-fit border bg-white dark:bg-neutral-800 absolute m-auto bottom-0 z-[3] border-neutral-400/20 rounded-md p-5 px-2.5 flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear"
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-32 h-2 bg-neutral-800/50 dark:bg-neutral-200/80 rounded-full"></div>
                <div className="w-48 h-2 bg-slate-400/50 rounded-full"></div>
                <div className="w-20 h-2 bg-slate-400/50 rounded-full"></div>
                <div className="w-48 h-2 bg-slate-400/50 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start">
          <h2 className="font-semibold text-xl">
            Write & schedule, effortlessly
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
            Craft and publish engaging content in an app built for creators.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard2 = () => {
  const { theme } = useTheme();

  const secondBentoItemOneVariants = {
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
  return (
    <div className="p-0 h-full bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="border-b border-slate-200/50 dark:border-neutral-800 items-center justify-center overflow-hidden bg-transparent rounded-t-xl h-4/5 w-full flex ">
          <motion.div className="p-5 rounded-t-md cursor-pointer overflow-hidden h-[310px] flex flex-col gap-y-3.5 w-full">
            {texts.map((text, index) => (
              <motion.div
                key={text.id}
                className="p-4 bg-transparent backdrop-blur-md  shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border border-slate-300/50 dark:border-neutral-400/30 origin-right w-full rounded-md"
                custom={index}
                variants={secondBentoItemOneVariants}
                transition={{
                  type: "spring",
                  damping: 40,
                  stiffness: 600,
                }}
              >
                <p className="text-black dark:text-white">{text.header}</p>
                <p className="text-gray-400 dark:text-gray-400">
                  {text.subheader}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start">
          <h2 className="font-semibold text-xl">
            Write & schedule, effortlessly
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
            Craft and publish engaging content in an app built for creators.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard3 = () => {
  const { theme } = useTheme();

  const thirdfirstsecondVariants = {
    initial: (index: number) => ({
      y: 4,
      scale: 0.5,
      opacity: 0,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    }),
    whileHover: (index: number) => ({
      y: -2,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    }),
  };
  const thirdsecondsecondVariants = {
    initial: (index: number) => ({
      y: -2,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
    whileHover: (index: number) => ({
      y: 8,
      opacity: 1,
      scale: 1.05,
      boxShadow:
        "rgba(39,245,76,0.15) 10px 20px 70px -20px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="p-0 h-full bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="border-b border-slate-200/50 dark:border-neutral-800 items-center justify-center overflow-hidden bg-transparent rounded-t-xl h-4/5 w-full flex ">
          <motion.div className="w-full h-full cursor-pointer flex  flex-col items-center justify-center gap-y-1 overflow-hidden rounded-t-xl border-b border-slate-200/50 dark:border-neutral-800">
            <div className="p-8 flex flex-col gap-y-2 items-center justify-center">
              <motion.p
                variants={thirdfirstsecondVariants}
                className="highlighted text-[15px] w-fit border rounded-full px-2 border-pink-500 text-purple-400"
              >
                Make it Punchier
              </motion.p>
              <motion.div
                variants={thirdsecondsecondVariants}
                className=" bg-white dark:bg-neutral-800 flex gap-x-2 items-start border p-4 rounded-lg shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border-slate-300/50 dark:border-neutral-400/30"
              >
                <div className="w-8 ">
                  <div className="h-6 w-6 bg-blue-500 rounded-full">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[calc(100%-3rem)]">
                  <h3 className="text-base font-semibold">Design</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    Craft and publish engaging content in an app built for
                    creators.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start">
          <h2 className="font-semibold text-xl">
            Write & schedule, effortlessly
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
            Craft and publish engaging content in an app built for creators.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard4 = () => {
  const { theme } = useTheme();

  const fourthBentoItemOneVariants = {
    initial: {
      x: 35,
      y: 5,
      scale: 0.9,
      rotate: -3,
      zIndex: 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      boxShadow:
        "rgba(39,245,76,0.15) 10px 20px 70px -20px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  const fourthBentoItemTwoVariants = {
    initial: {
      scale: 1.1,
      zIndex: 2,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      scale: 1,
      boxShadow:
        "rgba(39,127,245,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  const fourthBentoItemThreeVariants = {
    initial: {
      x: -35,
      y: 5,
      scale: 0.9,
      rotate: 3,
      zIndex: 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      boxShadow:
        "rgba(245,40,145,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-[1170px]:col-span-2 p-0 h-full bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="w-full p-10 rounded-t-xl border-b border-slate-200/50 dark:border-neutral-800 bg-transparent h-full flex items-center justify-center ">
          <motion.div className="flex items-center justify-between w-full gap-x-4 ">
            <motion.div
              variants={fourthBentoItemOneVariants}
              className="w-full h-fit flex-col gap-y-2  border bg-white dark:bg-neutral-800  z-[3] border-neutral-400/20 rounded-md p-5 px-2.5 flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear"
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="w-14 h-2 bg-neutral-800/50 dark:bg-neutral-200/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-400/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-300/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-600/80 rounded-full"></div>
              </div>
            </motion.div>
            <motion.div
              variants={fourthBentoItemTwoVariants}
              className="w-full h-fit flex-col gap-y-2  border bg-white dark:bg-neutral-800  z-[3] border-neutral-400/20 rounded-md p-5 px-2.5 flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear"
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="w-14 h-2 bg-neutral-800/50 dark:bg-neutral-200/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-400/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-300/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-600/80 rounded-full"></div>
              </div>
            </motion.div>
            <motion.div
              variants={fourthBentoItemThreeVariants}
              className="w-full hidden h-fit flex-col gap-y-2  border bg-white dark:bg-neutral-800  z-[3] border-neutral-400/20 rounded-md p-5 px-2.5 min-[1170px]:flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear"
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="w-14 h-2 bg-neutral-800/50 dark:bg-neutral-200/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-400/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-300/80 rounded-full"></div>
                <div className="w-14 h-2 bg-neutral-600/80 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start">
          <h2 className="font-semibold text-xl">
            No more rehydration or cold storage
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
            Customize retention per source to retain and query everything you
            want. No need to archive your logs to S3 anymore. Search all your
            logs anytime
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard5 = () => {
  const { theme } = useTheme();

  const fifthBentoItemOneVariants = {
    initial: {
      viewBox: "0 -950 366 1408",
      filter: "saturate(0.3)",
      opacity: 0.5,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      viewBox: "0 -60 366 310",
      filter: "saturate(1)",
      opacity: 1,
      boxShadow:
        "rgba(245,40,145,0.35) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const fifthBentoItemTwoVariants = {
    initial: {
      y: 0,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: 0,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
  };

  return (
    <div className="p-0 h-full bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="w-full h-full bg-transparent flex items-center justify-center ">
          <div className="border-b border-slate-200/50 dark:border-neutral-800 relative w-full h-full p-10 cursor-pointer overflow-hidden rounded-t-xl">
            <div className="relative w-full h-[150px] md:h-full cursor-pointer overflow-hidden rounded-xl border border-slate-200/50 dark:border-neutral-700/50 bg-white dark:bg-neutral-800">
              <motion.p
                variants={fifthBentoItemTwoVariants}
                className=" text-[15px] absolute top-5 left-5 z-[9] w-fit"
              >
                +14
              </motion.p>
              <motion.svg
                variants={fifthBentoItemOneVariants}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: "100%",
                  width: "100%",
                }}
                viewBox="0 -950 366 1408"
              >
                <path
                  fill="url(#a)"
                  d="M0 193c109.5 0 260.5-52.5 366-192.5v907H0V193Z"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1={183}
                    x2={183}
                    y1={0.5}
                    y2={262}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#797EFF" />
                    <stop offset={1} stopColor="#79AFFF" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start">
          <h2 className="font-semibold text-xl">
            Write & schedule, effortlessly
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
            Craft and publish engaging content in an app built for creators.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard6 = () => {
  const { theme } = useTheme();

  const sixthBentoItemOneVariants = {
    initial: {
      y: 0,
      scale: 0.95,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: 25,
      x: 10,
      scale: 1,
      rotate: 2,
      boxShadow:
        "rgba(39,127,245,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const sixthBentoItemTwoVariants = {
    initial: {
      y: 0,
      scale: 0.95,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: -25,
      x: -10,
      scale: 1,
      rotate: -3,
      boxShadow:
        "rgba(39,245,76,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  return (
    <div className="p-0 h-full bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="w-full border-b border-slate-200/50 dark:border-neutral-800 bg-transparent h-full flex items-center justify-center rounded-t-xl">
          <div className="flex flex-col items-center justify-center gap-y-2 p-14 cursor-pointer relative">
            <motion.div
              variants={sixthBentoItemOneVariants}
              className="w-full h-full z-[3] border bg-white dark:bg-neutral-800 border-neutral-400/20 rounded-md p-5 px-2.5 flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear"
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-32 h-2 bg-neutral-800/50 dark:bg-neutral-200/80 rounded-full"></div>
                <div className="w-48 h-2 bg-slate-400/50 rounded-full"></div>
                <div className="w-20 h-2 bg-slate-400/50 rounded-full"></div>
                <div className="w-48 h-2 bg-slate-400/50 rounded-full"></div>
              </div>
            </motion.div>
            <motion.div
              variants={sixthBentoItemTwoVariants}
              className="w-fit h-fit border bg-white dark:bg-neutral-800 absolute m-auto bottom-14 z-[2] border-neutral-400/20 rounded-md p-5 px-2.5 flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear"
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-32 h-2 bg-neutral-800/50 dark:bg-neutral-200/80 rounded-full"></div>
                <div className="w-48 h-2 bg-slate-400/50 rounded-full"></div>
                <div className="w-20 h-2 bg-slate-400/50 rounded-full"></div>
                <div className="w-48 h-2 bg-slate-400/50 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start">
          <h2 className="font-semibold text-xl">
            Write & schedule, effortlessly
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
            Craft and publish engaging content in an app built for creators.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard7 = () => {
  const seventhBentoItemOneVariants = {
    initial: {
      y: 0,
      scale: 0.95,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: -10,
      scale: 1,
      boxShadow:
        "rgba(39,127,245,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const seventhBentoItemTwoVariants = {
    initial: {
      y: 15,
      x: 2,
      display: "none",
      opacity: 0,
      scale: 0.95,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: 10,
      x: -3,
      display: "flex",
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.25,
        ease: "linear",
      },
    },
  };
  return (
    <div className="p-0 h-full bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="w-full border-b border-slate-200/50 dark:border-neutral-800 bg-transparent h-full flex items-center justify-center rounded-t-xl">
          <div className="w-full h-full cursor-pointer flex group flex-col items-center justify-center gap-y-1 overflow-hidden rounded-t-xl border-b border-slate-200/50 dark:border-neutral-800 p-4 relative">
            <div className="py-20 lg:py-0 px-10 flex flex-col gap-y-2 items-center justify-center relative">
              <motion.div
                variants={seventhBentoItemOneVariants}
                className="group-hover:bg-white group-hover:dark:bg-neutral-800 w-full h-full p-4 rounded-xl border shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border-slate-300/50 dark:border-neutral-400/30"
              >
                <motion.div className=" flex gap-x-2 items-start justify-center">
                  <div className="w-8 ">
                    <div className="h-6 w-6 bg-blue-500 rounded-full">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full flex-1">
                    <h3 className="text-base font-semibold">Design</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      I think the design can be improved
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={seventhBentoItemTwoVariants}
                  className="flex gap-x-2 items-start justify-center"
                >
                  <div className="w-8 ">
                    <div className="h-6 w-6 bg-blue-500 rounded-full">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-[calc(100%-3rem)]">
                    <h3 className="text-base font-semibold">Design</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      On it 🔥
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start">
          <h2 className="font-semibold text-xl">
            Write & schedule, effortlessly
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
            Craft and publish engaging content in an app built for creators.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard8 = () => {
  const eightBentoItemOneVariants = {
    initial: {
      y: 0,
      scale: 0.97,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: -45,
      scale: 1,
      boxShadow:
        "rgba(39,127,245,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const eightBentoItemTwoVariants = {
    initial: {
      y: 30,
      opacity: 0,
      scale: 0.97,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: 10,
      opacity: 1,
      scale: 1,
      boxShadow:
        "rgba(245,40,145,0.05) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const eightBentoItemThreeVariants = {
    initial: {
      x: 30,
      y: 20,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      x: 5,
      y: 5,
      opacity: 1,
      boxShadow:
        "rgba(39,245,76,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  return (
    <div className="p-0 h-full bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl border border-slate-200/50">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="w-full border-b border-slate-200/50 dark:border-neutral-800 bg-transparent h-full flex items-center justify-center rounded-t-xl">
          <div className="w-full h-full cursor-pointer flex  flex-col items-center justify-center gap-y-1 overflow-hidden rounded-t-xl border-b border-slate-200/50 dark:border-neutral-800 bg-transparent">
            <div className="py-20 px-10 flex flex-col gap-y-2 items-center justify-center relative">
              <motion.div
                variants={eightBentoItemOneVariants}
                className=" bg-white dark:bg-neutral-800 flex gap-x-2 items-start border p-4 rounded-lg shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border-slate-300/50 dark:border-neutral-400/30 relative"
              >
                <div className="w-8 ">
                  <div className="h-6 w-6 bg-blue-500 rounded-full">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[calc(100%-3rem)]">
                  <h3 className="text-base font-semibold">Design</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    Craft and publish engaging content in an app built for
                    creators.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={eightBentoItemTwoVariants}
                className=" bg-white dark:bg-neutral-800 flex gap-x-2 items-start absolute m-auto -bottom-14 z-[3] border h-fit inset-10 p-4 rounded-lg shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border-slate-300/50 dark:border-neutral-400/30"
              >
                <div className="w-8 ">
                  <div className="h-6 w-6 bg-blue-500 rounded-full">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[calc(100%-3rem)]">
                  <h3 className="text-base font-semibold">Design</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    Hello 🤞
                  </p>
                </div>
                <motion.p
                  variants={eightBentoItemThreeVariants}
                  className="highlighted text-xs border rounded-full px-2 py-0.5 text-white bg-green-500 absolute w-fit -bottom-2 right-2"
                >
                  DM Sent
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start">
          <h2 className="font-semibold text-xl">
            Write & schedule, effortlessly
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
            Craft and publish engaging content in an app built for creators.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default function GridComponent6() {
  return (
    <section className="max-w-6xl mx-auto flex items-center justify-center">
      <div className="grid md:grid-cols-2 min-[1170px]:grid-cols-3 gap-6 h-full">
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
        <FeatureCard4 />
        <FeatureCard5 />
        <FeatureCard6 />
        <FeatureCard7 />
        <FeatureCard8 />
      </div>
    </section>
  );
}
