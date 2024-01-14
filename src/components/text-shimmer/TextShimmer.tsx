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
        "max-w-md mx-auto shimmer font-normal text-neutral-500/20",
        className
      )}
    >
      {text}
    </p>
  );
};

export default TextShimmer;
