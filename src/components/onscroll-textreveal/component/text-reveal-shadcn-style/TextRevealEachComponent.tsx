import React, { FC, ReactNode } from "react";
import { motion, useTransform } from "framer-motion";
import { cn } from "../../../../../lib/utils";

interface TextRevealHeightContainerProps {
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
  className?: string;
}

const TextRevealHeightContainer: FC<TextRevealHeightContainerProps> = ({
  targetRef,

  children,

  className,
}) => (
  <div ref={targetRef} className={cn("h-[200vh] relative z-0", className)}>
    {children}
  </div>
);

interface TextRevealStickyContainerProps {
  children?: React.ReactNode;

  className?: string;
}

const TextRevealStickyContainer: FC<TextRevealStickyContainerProps> = ({
  children,

  className,
}) => (
  <div
    className={cn(
      "sticky top-0 py-[5rem] px-0 flex items-center h-[50%] bg-neutral-900",
      className
    )}
  >
    {children}
  </div>
);

interface TextRevealParagraphContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const TextRevealParagraphContainer: FC<TextRevealParagraphContainerProps> = ({
  children,
  className,
}) => (
  <div className={cn("max-w-4xl mx-auto px-[1rem]", className)}>{children}</div>
);

interface TextRevealParagraphProps {
  children?: React.ReactNode;

  targetRef: React.MutableRefObject<HTMLDivElement | null>;

  className?: string;
}

const TextRevealParagraph: FC<TextRevealParagraphProps> = ({
  children,

  targetRef,
  className,
}) => (
  <p
    ref={targetRef}
    className={cn(
      "paragraph flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-5 md:p-8 lg:p-10 text-white/20",
      className
    )}
  >
    {children}
  </p>
);

interface WordProps {
  children: ReactNode;
  progress: any;

  range: [number, number];
  defaultTextOpacityClassName?: string;
  animatedTextColorClassName?: string;
}

const Word: FC<WordProps> = ({
  children,

  progress,
  range,

  defaultTextOpacityClassName,

  animatedTextColorClassName,
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word relative mx-1 lg:mx-2.5 xl:lg-3">
      <span className={cn("absolute opacity-30", defaultTextOpacityClassName)}>
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className={cn("text-white", animatedTextColorClassName)}
      >
        {children}
      </motion.span>
    </span>
  );
};

interface TextRevealByWordComponentProps {
  text: string;

  scrollYProgress: any;

  defaultTextOpacityClassName?: string;

  animatedTextColorClassName?: string;
}

const TextRevealByWordComponent: FC<TextRevealByWordComponentProps> = ({
  text,
  scrollYProgress,

  defaultTextOpacityClassName,
  animatedTextColorClassName,
}) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => {
        const start = i / words.length;

        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            defaultTextOpacityClassName={defaultTextOpacityClassName}
            animatedTextColorClassName={animatedTextColorClassName}
          >
            {word}
          </Word>
        );
      })}
    </>
  );
};

export {
  TextRevealHeightContainer,
  TextRevealStickyContainer,
  TextRevealParagraphContainer,
  TextRevealParagraph,
  TextRevealByWordComponent,
};
