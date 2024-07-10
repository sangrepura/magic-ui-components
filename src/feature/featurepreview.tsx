import Feature from "./featurecard";
import Navbar from "../components/navbar";

export default function FeaturePreview() {
  return (
    <section className="flex flex-col gap-y-5">
      <Navbar />
      <Feature collapseDelay={10000} />
    </section>
  );
}
