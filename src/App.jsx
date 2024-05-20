import Homepage from "./components/homepage/homepage";
import { Route, Routes } from "react-router-dom";
import FooterPage from "./footer/app";
import HeaderPage from "./header/app";
import BugFix from "./bug-fix/app";
import CtaPage from "./cta/app";
import PricingPage from "./pricing/app";
import NewsletterPage from "./newsletter/app";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/header" element={<HeaderPage />} />
      <Route path="/footer" element={<FooterPage />} />
      <Route path="/bug-fix" element={<BugFix />} />
      <Route path="/cta" element={<CtaPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/newsletter" element={<NewsletterPage />} />
    </Routes>
  );
}
