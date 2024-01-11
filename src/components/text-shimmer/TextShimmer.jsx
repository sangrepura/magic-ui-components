import React from "react";

export default function TextShimmer() {
  return (
    <div className="h-[50vh] bg-neutral-900">
      <div className=" flex items-center h-[50vh] justify-center">
        <p className="shimmer font-normal text-neutral-500/20 ">
          Press D to get the shimmer effect
        </p>
      </div>
    </div>
  );
}
