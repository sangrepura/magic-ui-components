import TextRevealByChar from "./component/text-reveal/TextRevealCharacter";
import TextRevealByWord from "./component/text-reveal/TextRevealWord";

export default function TextRevealShowcase() {
  return (
    <section>
      <div className="h-[20vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-full justify-center">
          Text Reveal By Character 👇
        </h2>
      </div>

      <TextRevealByChar />

      <div className="h-[20vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-full justify-center">
          Text Reveal By Word [re-usable]👇
        </h2>
      </div>

      <TextRevealByWord text="This is scroll by words. In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold." />
    </section>
  );
}
