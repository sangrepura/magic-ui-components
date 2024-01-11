import React from "react";
import TextRevealByChar from "./components/text-reveal/TextRevealCharacter";
import TextRevealByWord from "./components/text-reveal/TextRevealWord";
export default function App() {
  return (
    <main>
      <div className="h-[50vh] bg-red-500">
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
      <div className="h-[50vh] bg-red-500"></div>
    </main>
  );
}
