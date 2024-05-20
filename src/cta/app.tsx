import Navbar from "../components/navbar";
import Cta3 from "./components/cta3";
import Cta4 from "./components/cta4";
import Cta5 from "./components/cta5";
import Cta6 from "./components/cta6";
import Cta7 from "./components/cta7";

export default function CtaPage() {
  return (
    <div>
      <Navbar />
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          CTA-3
        </h2>
      </div>
      <div className="p-5">
        <Cta3 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          CTA-4
        </h2>
      </div>
      <div>
        <Cta4 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          CTA-5
        </h2>
      </div>
      <div>
        <Cta5 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          CTA-6
        </h2>
      </div>
      <div>
        <Cta6 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          CTA-7
        </h2>
      </div>
      <div>
        <Cta7 />
      </div>
    </div>
  );
}
