import magicuiLogo from "../assets/magicui-logo.png";
import Header2 from "./components/header2";
import Header3 from "./components/header3";
import Header4 from "./components/header4";
import Header5 from "./components/header5";
import Header7 from "./components/header7";

export default function HeaderPage() {
  return (
    <div className="header relative bg-white dark:bg-neutral-900">
      <Header4 />
      <div className="w-full bg-white dark:bg-neutral-900">
        <div className="flex flex-col gap-y-5 max-w-3xl mx-auto items-center justify-center h-screen w-full bg-white dark:bg-neutral-900">
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
      <div className="border">
        <Header2 />
      </div>
      <div className="border">
        <Header3 />
      </div>
      <div className="border">
        <Header5 />
      </div>
      <div className="border">
        <Header7 />
      </div>
    </div>
  );
}
