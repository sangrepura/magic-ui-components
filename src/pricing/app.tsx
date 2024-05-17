import Navbar from "../components/navbar";
import Pricing2 from "./components/pricing2";
import Pricing3 from "./components/pricing3";

export default function PricingPage() {
  return (
    <div className="pricing">
      <Navbar />
      <div className="border-b-0">
        <Pricing2 />
      </div>
      <div className="border">
        <Pricing3 />
      </div>
    </div>
  );
}
