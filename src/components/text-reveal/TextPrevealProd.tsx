import React, { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../../lib/utils";

interface TextRevealHeightContainerProps {
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
  containerClassName?: string;
}

const TextRevealHeightContainer: FC<TextRevealHeightContainerProps> = ({
  targetRef,
  children,
  containerClassName,
}) => {
  return (
    <div
      ref={targetRef}
      className={cn("h-[200vh] relative z-0", containerClassName)}
    >
      {children}
    </div>
  );
};

// This component is used to create a sticky container that will hold the text
interface TextRevealStickyContainerProps {
  children?: React.ReactNode;
  stickyClassName?: string;
}

const TextRevealStickyContainer: FC<TextRevealStickyContainerProps> = ({
  children,
  stickyClassName,
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 py-[5rem] px-0 flex items-center h-[50%]  bg-neutral-900",
        stickyClassName
      )}
    >
      {children}
    </div>
  );
};

// This component is used to create the text paragraph
interface TextRevealParagraphProps {
  children?: React.ReactNode;
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
  paragraphClassName?: string;
}

const TextRevealParagraph: FC<TextRevealParagraphProps> = ({
  children,
  targetRef,
  paragraphClassName,
}) => {
  return (
    <p
      ref={targetRef}
      className={cn(
        "paragraph flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-5 md:p-8 lg:p-10 text-white/20",
        paragraphClassName
      )}
    >
      {children}
    </p>
  );
};

//
interface WordsComponentProps {
  words: string[];
  scrollYProgress: any;
}

const WordsComponent: FC<WordsComponentProps> = ({
  words,
  scrollYProgress,
}) => {
  return (
    <>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </>
  );
};

interface TextRevealByWordComponentProps {
  text: string;
  containerClassName?: string;
  stickyClassName?: string;
  paragraphClassName?: string;
}

const TextRevealByWordComponent: FC<TextRevealByWordComponentProps> = ({
  text,
  containerClassName,
  stickyClassName,
  paragraphClassName,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" ");

  return (
    <main>
      <TextRevealHeightContainer
        targetRef={targetRef}
        containerClassName={containerClassName}
      >
        <TextRevealStickyContainer stickyClassName={stickyClassName}>
          <div className="max-w-4xl mx-auto px-[1rem]">
            <TextRevealParagraph
              targetRef={targetRef}
              paragraphClassName={paragraphClassName}
            >
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </TextRevealParagraph>
          </div>
        </TextRevealStickyContainer>
      </TextRevealHeightContainer>
    </main>
  );
};

export default TextRevealByWordComponent;

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="word relative mx-1 lg:mx-2.5 xl:lg-3">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
