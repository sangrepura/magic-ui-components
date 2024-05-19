import React from "react";

export default function Cta4() {
  return (
    <section className="rounded-md max-w-4xl mx-auto py-14 px-5 lg:px-0">
      <div className=" bg-neutral-50 dark:bg-neutral-900 p-10 rounded-2xl flex flex-col gap-y-5 shadow-inner justify-center items-center border border-slate-500/20">
        <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto font-bold text-primarydark text-center">
          Be the first to know about new features, special offers, and more.
        </h3>
        <p className="mx-auto text-center text-balance md:text-lg">
          Gain access to the best animated Library Components
        </p>
        <button className="w-48 h-10 bg-neutral-900 shadow-small transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none rounded-full gap-2.5 flex items-center justify-center active:scale-95 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)] border border-neutral-300/30">
          <span className="text-center  text-white text-base ">Buy now</span>
        </button>
      </div>
    </section>
  );
}
