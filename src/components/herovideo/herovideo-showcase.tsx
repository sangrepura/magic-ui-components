import { useState } from "react";
import HeroVideo from "./herovideo";
import Navbar from "../navbar";
import { BorderBeam } from "../magicui/borderbeam";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

export default function HeroVideoShowcase() {
  const [animationStyle, setAnimationStyle] =
    useState<AnimationStyle>("left-in-right-out");

  const animationOptions: AnimationStyle[] = [
    "from-bottom",
    "from-center",
    "from-top",
    "from-left",
    "from-right",
    "fade",
    "top-in-bottom-out",
    "left-in-right-out",
  ];

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto h-screen flex flex-col justify-center items-center px-7 lg:px-0 relative">
        <div className="mb-6 p-4 rounded-lg shadow-lg">
          <h3 className="text-center text-white font-semibold mb-3">
            Choose Animation Style
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {animationOptions.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
                  animationStyle === option
                    ? "bg-neutral-600 text-white border border-neutral-500"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-700"
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  checked={animationStyle === option}
                  onChange={(e) =>
                    setAnimationStyle(e.target.value as AnimationStyle)
                  }
                  className="hidden"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="relative rounded-2xl p-1 overflow-hidden">
          <BorderBeam />
          <HeroVideo
            animationStyle={animationStyle}
            videoSrc="https://www.youtube.com/embed/fYhInYej-lg"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </section>
    </>
  );
}
