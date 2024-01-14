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
        "max-w-md mx-auto shimmer animate-shimmer font-normal bg-clip-text bg-[length:70px_100px] bg-no-repeat bg-left-top bg-[#222] transition-all duration-100 text-center ease-[cubic-bezier(0.4,0,0.2,1)] text-transparent",
        className
      )}
    >
      {text}
    </p>
  );
};

export default TextShimmer;
