import FeatureSection from "./featurecard";
import Navbar from "../components/navbar";

export default function FeaturePreview() {
  return (
    <main className="flex flex-col gap-y-5">
      <Navbar />
      <FeatureSection />
    </main>
  );
}
