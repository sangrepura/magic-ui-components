import React from "react";

export default function TextShimmer() {
  return (
    <div className="h-[50vh] bg-neutral-900">
      <h1 className="shimmer font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] text-neutral-500/20 justify-center">
        Press D to get the shimmer effect
      </h1>
    </div>
  );
}
