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

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
      </div>
    </figure>
  );
};

export default function GridComponent6() {
  const secondVariants = {
    initial: (index: number) => ({
      y: 10,
      scale: index === 2 ? 0.85 : 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    }),
    whileHover: (index: number) => ({
      y: -10,
      opacity: 1,
      scale: index === 0 ? 0.85 : index === 2 ? 1 : 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    }),
  };

  const containerVariants = {
    initial: {},
    whileHover: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const thirdfirstsecondVariants = {
    initial: (index: number) => ({
      y: 2,
      opacity: 0,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
    whileHover: (index: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
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
      y: 10,
      opacity: 1,
      scale: 1.05,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="max-w-6xl mx-auto flex items-center justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
        {/* 1 */}
        <BentoGridContainer className="p-0 bg-slate-50 h-full rounded-xl">
          <BendroGridLayout className="h-full rounded-xl">
            <BentoGridImage className="rounded-xl">
              <div className="w-full h-full bg-white flex items-center justify-center rounded-t-xl group border-b border-slate-500/50">
                <div className="flex flex-col items-end justify-center gap-y-2 p-10 cursor-pointer">
                  <div className="w-full h-fit bg-slate-200 border border-neutral-400/20 rounded-full p-1 px-1.5 group-hover:rotate-[5deg] z-[1] group-hover:translate-x-[10px] flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear">
                    <div className="w-8 h-8 bg-red-300 rounded-full"></div>
                    <div className="w-48 h-6 bg-slate-400/50 rounded-full"></div>
                  </div>
                  <div className="w-fit h-fit bg-slate-200 border border-neutral-400/20 rounded-full p-1 px-1.5 group-hover:-rotate-[5deg] z-[2] group-hover:translate-x-[10px] flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear">
                    <div className="w-32 h-6 bg-slate-400/50 rounded-full"></div>
                    <div className="w-8 h-8 bg-red-300 rounded-full"></div>
                  </div>
                  <div className="w-full h-fit bg-slate-200 border border-neutral-400/20 rounded-full p-1 px-1.5 group-hover:rotate-[5deg] z-[3] group-hover:translate-x-[10px] flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear">
                    <div className="w-8 h-8 bg-red-300 rounded-full"></div>
                    <div className="w-48 h-6 bg-slate-400/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </BentoGridImage>
            <BentoGridContent>
              <div className="flex flex-col gap-y-1 items-start">
                <h2 className="font-semibold text-xl">
                  Write & schedule, effortlessly
                </h2>
                <p className="text-slate-500 font-normal text-base">
                  Craft and publish engaging content in an app built for
                  creators.
                </p>
              </div>
            </BentoGridContent>
          </BendroGridLayout>
        </BentoGridContainer>
        {/* 2 */}
        <BentoGridContainer className="bg-slate-50 p-0">
          <BendroGridLayout className="rounded-lg">
            <BentoGridImage className="border-b border-neutral-500/50 bg-white pl-10 rounded-t-xl h-4/5">
              <motion.div
                className="overflow-hidden flex flex-col gap-y-3.5"
                variants={containerVariants}
                initial="initial"
                whileHover="whileHover"
              >
                {texts.map((text, index) => (
                  <motion.div
                    key={text.id}
                    className="p-4 bg-white  border-[0.17em] border-orange-300 origin-right w-[500px] rounded-md"
                    custom={index}
                    variants={secondVariants}
                  >
                    <p className="text-black">{text.header}</p>
                    <p className="text-gray-400">{text.subheader}</p>
                  </motion.div>
                ))}
              </motion.div>
            </BentoGridImage>
            <BentoGridContent>
              <div className="flex flex-col gap-y-1 items-start">
                <h2 className="font-semibold text-xl">
                  Write & schedule, effortlessly
                </h2>
                <p className="text-slate-500 font-normal text-base">
                  Craft and publish engaging content in an app built for
                  creators.
                </p>
              </div>
            </BentoGridContent>
          </BendroGridLayout>
        </BentoGridContainer>
        {/* 3 */}
        <BentoGridContainer className="p-0 bg-slate-50 h-full rounded-xl">
          <BendroGridLayout className="h-full rounded-xl">
            <BentoGridImage className="rounded-xl">
              <motion.div
                variants={containerVariants}
                initial="initial"
                whileHover="whileHover"
                className="w-full h-full bg-white cursor-pointer flex flex-col items-center justify-center gap-y-1 overflow-hidden rounded-t-xl group border-b border-slate-500/50 group"
              >
                <div className="pb-10 px-10 pt-1 flex flex-col gap-y-2 items-center justify-center">
                  <motion.p
                    variants={thirdfirstsecondVariants}
                    className="highlighted text-[15px] w-fit border rounded-full px-2 border-pink-500 text-purple-400"
                  >
                    Make it Punchier
                  </motion.p>
                  <motion.div
                    variants={thirdsecondsecondVariants}
                    className="maincard flex gap-x-1 items-start border p-2 rounded-lg shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] "
                  >
                    <div className=" w-8">
                      <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-3rem)]">
                      <h3 className="text-base font-semibold">
                        Design and Development
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Craft and publish engaging content in an app built for
                        creators.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </BentoGridImage>
            <BentoGridContent>
              <div className="flex flex-col gap-y-1 items-start">
                <h2 className="font-semibold text-xl">
                  Write & schedule, effortlessly
                </h2>
                <p className="text-slate-500 font-normal text-base">
                  Craft and publish engaging content in an app built for
                  creators.
                </p>
              </div>
            </BentoGridContent>
          </BendroGridLayout>
        </BentoGridContainer>
        {/* 4 */}
        <BentoGridContainer className="lg:col-span-2 p-0 bg-slate-50 h-full rounded-xl">
          <BendroGridLayout className="h-full ">
            <BentoGridImage className="w-full rounded-t-xl bg-white border-b border-neutral-500/50">
              <FallbackImage className="text-neutral-200/80 w-3/5 h-full" />
            </BentoGridImage>
            <BentoGridContent className="w-full px-5 md:px-10 flex flex-col gap-y-1 items-start justify-center">
              <h2 className="font-semibold text-xl text-slate-200">
                No more rehydration or cold storage
              </h2>
              <p className="text-slate-500 font-normal text-base">
                Customize retention per source to retain and query everything
                you want. No need to archive your logs to S3 anymore. Search all
                your logs anytime
              </p>
              <a
                href="#"
                className="text-indigo-500 group font-normal text-base pt-2 hover:underline underline-offset-8 underline-indigo-500"
              >
                Explore Dashboards
                <ChevronRight className="inline-block w-4 h-4 group-hover:translate-x-1 transition-all duration-150 ease-linear" />
              </a>
            </BentoGridContent>
          </BendroGridLayout>
        </BentoGridContainer>
      </div>
    </section>
  );
}
