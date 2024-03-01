import React, { FC } from "react";
import { cn } from "../../../lib/utils";

interface TextShimmerProps {
  text: string;
  className?: string;
}

const TextShimmer: FC<TextShimmerProps> = ({ text, className }) => {
  return (
    <p
      className={cn(
        "max-w-md mx-auto shimmer animate-shimmer bg-gradient-to-r from-[#22200055] via-[#fffffff8] to-[#22200055] font-normal bg-clip-text bg-[length:70px_100px] bg-no-repeat bg-left-top bg-[#222] transition-all duration-100 text-center text-transparent",
        className
      )}
    >
      {text}
    </p>
  );
};

export default TextShimmer;
