import firstGridImg from "../../../src/assets/dark-grid-1.jpg";
import secondGridImg from "../../../src/assets/dark-grid-2.jpg";
import thirdGridImg from "../../../src/assets/dark-grid-3.jpg";
import { Image as FallbackImage, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GridComponent6() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#fafbfc] rounded-lg border border-slate-400/40 h-fit">
          <div className="flex flex-col gap-y-5 items-start justify-between h-fit w-full ">
            <div className="w-full h-full bg-white flex items-center justify-center rounded-t-lg group border-b border-slate-500/50">
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
            <div className="px-5 pb-4 flex flex-col gap-y-1 items-start">
              <h2 className="font-semibold text-xl">
                Write & schedule, effortlessly
              </h2>
              <p className="text-slate-500 font-normal text-base">
                Craft and publish engaging content in an app built for creators.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-[#fafbfc] rounded-lg border border-slate-400/40 h-fit">
          <div className="flex flex-col gap-y-5 items-start justify-between h-fit w-full ">
            <div className="w-full h-full bg-white flex items-center justify-center rounded-t-lg group border-b border-slate-500/50">
              <motion.div className="flex flex-col items-end justify-center gap-y-2 p-10 cursor-pointer">
                <motion.div className="card1 w-full h-fit bg-slate-200 border border-neutral-400/20 rounded-full p-1 px-1.5 group-hover:rotate-[5deg] z-[1] group-hover:translate-x-[10px] flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear">
                  <div className="w-8 h-8 bg-red-300 rounded-full"></div>
                  <div className="w-48 h-6 bg-slate-400/50 rounded-full"></div>
                </motion.div>
                <div className="card2 w-fit h-fit bg-slate-200 border border-neutral-400/20 rounded-full p-1 px-1.5 group-hover:-rotate-[5deg] z-[2] group-hover:translate-x-[10px] flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear">
                  <div className="w-32 h-6 bg-slate-400/50 rounded-full"></div>
                  <div className="w-8 h-8 bg-red-300 rounded-full"></div>
                </div>
                <div className="card3 w-full h-fit bg-slate-200 border border-neutral-400/20 rounded-full p-1 px-1.5 group-hover:rotate-[5deg] z-[3] group-hover:translate-x-[10px] flex items-center justify-between gap-x-2 transition-all duration-100 ease-linear">
                  <div className="w-8 h-8 bg-red-300 rounded-full"></div>
                  <div className="w-48 h-6 bg-slate-400/50 rounded-full"></div>
                </div>
              </motion.div>
            </div>
            <div className="px-5 pb-4 flex flex-col gap-y-1 items-start">
              <h2 className="font-semibold text-xl">
                Write & schedule, effortlessly
              </h2>
              <p className="text-slate-500 font-normal text-base">
                Craft and publish engaging content in an app built for creators.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-1 h-fit">
          <div className="flex flex-col gap-y-5 items-start justify-between h-fit w-full">
            {/*  <img className="rounded-xl" src={firstGridImg} alt="Bentrogrid" /> */}
            <div className="w-full h-full bg-slate-800/50 flex items-center justify-center">
              <FallbackImage className="text-neutral-200/80 w-3/5 h-full" />
            </div>
            <div className="px-5 pb-4 flex flex-col gap-y-1 items-start">
              <h2 className="font-semibold text-xl text-slate-200">
                No more rehydration or cold storage
              </h2>
              <p className="text-slate-500 font-normal text-base">
                Customize retention per source to retain and query everything
                you want. No need to archive your logs to S3 anymore. Search all
                your logs anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-1 h-fit col-span-1 md:col-span-2">
          <div className="flex flex-col md:flex-row-reverse gap-y-5 items-center justify-between h-fit w-full">
            {/*  <img className="rounded-xl" src={thirdGridImg} alt="Bentrogrid" /> */}
            <div className="w-full md:w-1/2 h-full bg-slate-800/50 flex items-center justify-center rounded-lg">
              <FallbackImage className="text-neutral-200/80 w-3/5 h-full" />
            </div>
            <div className="w-full md:w-1/2 md:px-10 px-5 pb-4 md:pb-0 flex flex-col gap-y-1 items-start">
              <h2 className="font-semibold text-xl text-slate-200">
                Beautiful pre-built dashboards
              </h2>
              <p className="text-slate-500 font-normal text-base">
                Start in minutes with dashboard templates for the most popular
                services. Customise with intuitive drag & drop widgets. Get
                actionable insights minutes after sending your first data.
              </p>
              <a
                href="#"
                className="text-indigo-500 group font-normal text-base pt-2 hover:underline underline-offset-8 underline-indigo-500"
              >
                Explore Dashboards
                <ChevronRight className="inline-block w-4 h-4 group-hover:translate-x-1 transition-all duration-150 ease-linear" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-1 h-fit">
          <div className="flex flex-col gap-y-5 items-start justify-between h-fit w-full">
            {/*  <img className="rounded-xl" src={firstGridImg} alt="Bentrogrid" /> */}
            <div className="w-full h-full bg-slate-800/50 flex items-center justify-center">
              <FallbackImage className="text-neutral-200/80 w-3/5 h-full" />
            </div>
            <div className="px-5 pb-4 flex flex-col gap-y-1 items-start">
              <h2 className="font-semibold text-xl text-slate-200">
                No more rehydration or cold storage
              </h2>
              <p className="text-slate-500 font-normal text-base">
                Customize retention per source to retain and query everything
                you want. No need to archive your logs to S3 anymore. Search all
                your logs anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
