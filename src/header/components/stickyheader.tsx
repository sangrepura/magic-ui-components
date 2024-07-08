import Header1 from "./header1";
import magicuiLogo from "../../assets/magicui-logo.png";

export default function StickyHeader() {
  return (
    <nav>
      <Header1 />
      <div className="w-full bg-white dark:bg-neutral-900">
        <div className="flex flex-col gap-y-5 max-w-3xl mx-auto items-center justify-center h-[200vh] w-full bg-white dark:bg-neutral-900">
          <img className="w-20 h-20" src={magicuiLogo} alt="MagicUI Logo" />
          <h1 className="text-4xl font-bold text-balance text-center">
            MagicUI is the best animated react library.
          </h1>
          <p className="text-center text-balance">
            50+ open-source animated components built with React, Typescript,
            Tailwind CSS, and Framer Motion. Save thousands of hours, create a
            beautiful landing page, and convert your visitors into customers.
          </p>
          <button className="bg-neutral-100 text-black px-4 py-2 rounded-full dark:bg-neutral-800 dark:text-white border border-neutral-800  dark:border-neutral-100">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
