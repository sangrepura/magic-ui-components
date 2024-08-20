import BentoShadcn from "./components/bento-shadcn-style/BentoShadcn";
import Bento1 from "./components/bento-1/Bento-1";
import Bento2 from "./components/bento-2/Bento-2";
import Bento3 from "./components/bento-3/Bento-3";

export default function BentoShowcase() {
  return (
    <div>
      <div className="h-[20vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-full justify-center">
          Bento Shadcn Style 👇
        </h2>
      </div>
      <div className="h-full grid place-content-center overflow-hidden w-full bg-neutral-50 dark:bg-neutral-900 antialiased py-20 px-5 lg:px-20 relative">
        <BentoShadcn />
      </div>
      <div className="h-[20vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-full justify-center">
          Bento-1 👇
        </h2>
      </div>
      <div className="h-full grid place-content-center overflow-hidden w-full bg-neutral-50 dark:bg-neutral-900 antialiased py-20 px-5 lg:px-20 relative">
        <Bento1 />
      </div>
      <div className="h-[20vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-full justify-center">
          Bento-2 👇
        </h2>
      </div>
      <div className="h-full grid place-content-center overflow-hidden w-full bg-neutral-50 dark:bg-neutral-900 antialiased py-20 px-5 lg:px-20 relative">
        <Bento2 />
      </div>
      <div className="h-[20vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-full justify-center">
          Bento-3 👇
        </h2>
      </div>
      <div className="h-full grid place-content-center overflow-hidden w-full bg-neutral-50 dark:bg-neutral-900 antialiased py-20 px-5 lg:px-20 relative">
        <Bento3 />
      </div>
    </div>
  );
}
