import Navbar from "../components/navbar";
import Pricing2 from "./components/pricing2";
export default function PricingPage() {
  return (
    <div className="pricing">
      <Navbar />
      <div className="border">
        <Pricing2 />
      </div>
    </div>
  );
}
