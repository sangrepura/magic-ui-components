import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function TextRevealByChar() {
  const ref = useRef<HTMLDivElement | null>(null);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const text =
    "This is scroll by Characters. In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.";
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
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="word relative mx-1 lg:mx-2.5 xl:lg-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span>
      <span className="shadow absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
