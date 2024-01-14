import React, { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface WordProps {
  children: ReactNode;
  progress: any; // Replace 'any' with the actual type
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="word relative mx-1 lg:mx-2.5 xl:lg-3">
      <span className="shadow absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};

interface TextRevealByWordProps {
  text: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" ");

  return (
    <main>
      <div ref={targetRef} className="relative z-0 h-[200vh]">
        <div className="sticky top-0 py-[5rem] px-0 flex items-center h-[50%] text-white/20 bg-neutral-900">
          <div className="max-w-4xl mx-auto px-[1rem]">
            <p
              ref={targetRef}
              className="paragraph flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-5 md:p-8 lg:p-10"
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
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TextRevealByWord;
