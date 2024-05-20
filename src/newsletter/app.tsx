import Navbar from "../components/navbar";
import Newsletter1 from "./components/newsletter1";

export default function NewsletterPage() {
  return (
    <div className="header">
      <Navbar />
      <div className="border-b">
        <Newsletter1 />
      </div>
    </div>
  );
}
