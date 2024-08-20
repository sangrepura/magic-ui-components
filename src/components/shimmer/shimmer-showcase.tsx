import AnimatedShinyText from "./text-shimmer/shinytext";
import { ArrowRightIcon } from "lucide-react";

export default function ShimmerShowcase() {
  return (
    <section>
      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text shimmer component 👇
        </h2>
      </div>
      <div className="h-[50vh] flex items-center justify-center bg-neutral-900">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Magic UI</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </section>
  );
}
