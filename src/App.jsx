import React from "react";
import TextRevealByChar from "./components/text-reveal/TextRevealCharacter";
import TextRevealByWord from "./components/text-reveal/TextRevealWord";
export default function App() {
  return (
    <main>
      <div className="h-[50vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text Reveal By Character 👇
        </h2>
      </div>
      <TextRevealByChar />
      <div className="h-[50vh] bg-red-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text Reveal By Word 👇
        </h2>
      </div>
      <TextRevealByWord />
      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          End for now 🎉
        </h2>
      </div>
      <div className="h-[50vh] bg-neutral-900">
        <h1 className="shimmer font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] text-neutral-500/20 justify-center">
          Press D to get the shimmer effect
        </h1>
      </div>
    </main>
  );
}
