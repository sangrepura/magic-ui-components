import Navbar from "../components/navbar";
import Cta3 from "./components/cta3";
import Cta4 from "./components/cta4";

export default function CtaPage() {
  return (
    <div>
      <Navbar />
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          CTA-2
        </h2>
      </div>
      <div className="p-5 lg:px-0">
        <Cta3 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          CTA-2
        </h2>
      </div>
      <div className="p-5 lg:px-0">
        <Cta4 />
      </div>
    </div>
  );
}
