import React, { FC, ReactNode, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../../lib/utils";

// This component is used to create a relative container which will set the height of the scrollable container
interface TextRevealHeightContainerProps {
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
  className?: string;
}

const TextRevealHeightContainer: FC<TextRevealHeightContainerProps> = ({
  targetRef,
  children,
  className,
}) => {
  return (
    <div ref={targetRef} className={cn("h-[200vh] relative z-0", className)}>
      {children}
    </div>
  );
};

// This component is used to create a sticky container which will make the text container sticky
interface TextRevealStickyContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const TextRevealStickyContainer: FC<TextRevealStickyContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 py-[5rem] px-0 flex items-center h-[50%] bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};

// This component is used to create the paragraph container
interface TextRevealParagraphContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const TextRevealParagraphContainer: FC<TextRevealParagraphContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-4xl mx-auto px-[1rem]", className)}>
      {children}
    </div>
  );
};

// This component is used to create the text paragraph
interface TextRevealParagraphProps {
  children?: React.ReactNode;
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
  className?: string;
}

const TextRevealParagraph: FC<TextRevealParagraphProps> = ({
  children,
  targetRef,
  className,
}) => {
  return (
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
};

// This component is used to create the words
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
        style={{ opacity: opacity }}
        className={cn("text-white", animatedTextColorClassName)}
      >
        {children}
      </motion.span>
    </span>
  );
};

// This component is used to create the words
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
