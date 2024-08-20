import CtaPage from "./cta/app";
import HeaderPage from "./header/app";
import PricingPage from "./pricing/app";
import FooterPage from "./footer/app";
import Homepage from "./homepage/homepage";
import NewsletterPage from "./newsletter/app";
import { Route, Routes } from "react-router-dom";
import FeaturePreview from "./feature/featurepreview";
import StickyHeader from "./header/components/stickyheader";
import ScrollUpVisibleHeader from "./header/components/scrollupvisibleheader";
import AnimatedComponent from "./components/animatedcomponents/animatedcomponent";
import TextRevealShowcase from "./components/onscroll-textreveal/text-reveal-showcase";
import CardShowcase from "./components/cards/CardShowcase";
import BentoShowcase from "./components/bentrogrid/bento-showcase";
import ShimmerShowcase from "./components/shimmer/shimmer-showcase";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/header" element={<HeaderPage />} />
      <Route path="/footer" element={<FooterPage />} />
      <Route path="/cta" element={<CtaPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/newsletter" element={<NewsletterPage />} />
      <Route path="/sticky-header" element={<StickyHeader />} />
      <Route path="/scroll-header" element={<ScrollUpVisibleHeader />} />
      <Route path="/feature" element={<FeaturePreview />} />
      <Route path="/animatedcomponent" element={<AnimatedComponent />} />
      <Route path="/text-reveal" element={<TextRevealShowcase />} />
      <Route path="/card" element={<CardShowcase />} />
      <Route path="/bento" element={<BentoShowcase />} />
      <Route path="/shimmer" element={<ShimmerShowcase />} />
    </Routes>
  );
}
