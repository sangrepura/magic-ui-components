import React from "react";
import TextRevealByChar from "./components/text-reveal/TextRevealCharacter";
import TextRevealByWord from "./components/text-reveal/TextRevealWord";
import TextShimmer from "./components/text-shimmer/TextShimmer";
import TextRevealComponent from "./components/text-reveal-parts/TextRevealComponent";
export default function App() {
  return (
    <main>
      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text Reveal By Character 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <TextRevealByChar />

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-red-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text Reveal By Word [re-usable]👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <TextRevealByWord text="This is scroll by words. In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold." />

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text shimmer component 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] flex items-center justify-center bg-neutral-900">
        <TextShimmer text="Press D to get the shimmer effect" />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Shadcn style 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <TextRevealComponent text="This is scroll by words. In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold." />

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          End for now 🎉
        </h2>
      </div>

      {/* ====================================================================================================== */}
    </main>
  );
}
