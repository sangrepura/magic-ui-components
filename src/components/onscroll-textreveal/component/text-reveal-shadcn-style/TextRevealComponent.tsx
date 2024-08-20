import { useScroll } from "framer-motion";
import { FC, useRef } from "react";
import {
  TextRevealHeightContainer,
  TextRevealStickyContainer,
  TextRevealParagraphContainer,
  TextRevealParagraph,
  TextRevealByWordComponent,
} from "./TextRevealEachComponent";

interface TextRevealByWordComponentProps {
  scrollYProgress: any;
  text: string;
}

const TextRevealComponent: FC<TextRevealByWordComponentProps> = ({ text }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    layoutEffect: false,
  });

  return (
    <TextRevealHeightContainer targetRef={targetRef}>
      <TextRevealStickyContainer>
        <TextRevealParagraphContainer>
          <TextRevealParagraph targetRef={targetRef}>
            <TextRevealByWordComponent
              scrollYProgress={scrollYProgress}
              text={text}
              animatedTextColorClassName="text-red-500"
              defaultTextOpacityClassName="opacity-30"
            />
          </TextRevealParagraph>
        </TextRevealParagraphContainer>
      </TextRevealStickyContainer>
    </TextRevealHeightContainer>
  );
};

export default TextRevealComponent;
