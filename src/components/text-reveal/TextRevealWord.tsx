import { motion, useScroll, useTransform } from "framer-motion";
import React, { FC, ReactNode, useRef } from "react";
import { cn } from "../../../lib/utils";

interface TextRevealByWordProps {
  text: string;
  containerClassName?: string;
  stickyClassName?: string;
  paragraphContainerClassName?: string;
  paragraphClassName?: string;
  defaultTextOpacityClassName?: string;
  highlightedWordClassName?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  containerClassName,
  stickyClassName,
  paragraphContainerClassName,
  paragraphClassName,
  defaultTextOpacityClassName,
  highlightedWordClassName,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("h-[200vh] relative z-0", containerClassName)}
    >
      <div
        className={cn(
          "sticky top-0 py-[5rem] px-0 flex items-center h-[50%]  bg-neutral-900",
          stickyClassName
        )}
      >
        <div
          className={cn(
            "max-w-4xl mx-auto px-[1rem]",
            paragraphContainerClassName
          )}
        >
          <p
            ref={targetRef}
            className={cn(
              "paragraph flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-5 md:p-8 lg:p-10 text-white/20",
              paragraphClassName
            )}
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  defaultTextOpacityClassName={defaultTextOpacityClassName}
                  highlightedWordClassName={highlightedWordClassName}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  defaultTextOpacityClassName?: string;
  highlightedWordClassName?: string;
}
const Word: FC<WordProps> = ({
  children,
  progress,
  range,
  defaultTextOpacityClassName,
  highlightedWordClassName,
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word relative mx-1 lg:mx-2.5 xl:lg-3">
      <span className={cn("absolute opacity-30", defaultTextOpacityClassName)}>
        {children}
      </span>
      <motion.span
        style={{ opacity: opacity }}
        className={cn("text-white", highlightedWordClassName)}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
