import Navbar from "../components/navbar";
import Pricing2 from "./components/pricing2";
import Pricing3 from "./components/pricing3";
import Pricing4 from "./components/pricing4";
import Pricing5 from "./components/pricing5";
import Pricing6 from "./components/pricing6";
import Pricing7 from "./components/pricing7";
import Pricing8 from "./components/pricing8";
import Pricing9 from "./components/pricing9";

export default function PricingPage() {
  return (
    <div className="pricing">
      <Navbar />
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Pricing-2
        </h2>
      </div>
      <div className="border-b">
        <Pricing2 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Pricing-3
        </h2>
      </div>
      <div className="border-b">
        <Pricing3 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Pricing-4
        </h2>
      </div>
      <div className="border-b">
        <Pricing4 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Pricing-5
        </h2>
      </div>
      <div className="border-b">
        <Pricing5 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Pricing-6
        </h2>
      </div>
      <div className="border-b">
        <Pricing6 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Pricing-7
        </h2>
      </div>
      <div className="border-b">
        <Pricing7 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Pricing-8
        </h2>
      </div>
      <div className="border-b">
        <Pricing8 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Pricing-9
        </h2>
      </div>
      <div className="border-b">
        <Pricing9 />
      </div>
    </div>
  );
}
