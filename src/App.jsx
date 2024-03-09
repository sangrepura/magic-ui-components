import TextRevealByChar from "./components/text-reveal/TextRevealCharacter";
import TextRevealByWord from "./components/text-reveal/TextRevealWord";
import TextShimmer from "./components/text-shimmer/TextShimmer";
import TextRevealComponent from "./components/text-reveal-parts/TextRevealComponent";
import MaskSvg from "./components/svg-line-mask/masksvg";
import WizastyleFeatureCard from "./components/svg-line-mask//wizacard/WizastyleFeatureCard";
import { BackgroundBeams } from "./components/svg-line-mask/background-beams";
import GsapMotionPathFollowing from "./components/svg-line-mask/gsapmotionpath/gsapmask";
import GradientGsapMask from "./components/svg-line-mask/gsapgradient";
import FramerMaskGradient from "./components/svg-line-mask/framermotionmask";
import { SvgLineAnimation } from "./components/svg-line-mask/framermotion/svglineanimation";
import HoverAnimationComponent from "./components/listhover/animatedhoveredlist";
import GridComponent1 from "./components/bentrogrid/gridcomponent1";
import GridComponent2 from "./components/bentrogrid/gridcomponent2";
import GridComponent3 from "./components/bentrogrid/gridcomponent3";
import GridComponent4 from "./components/bentrogrid/gridcomponent4";
import GridComponent5 from "./components/bentrogrid/gridcomponent5";
import GridComponent6 from "./components/bentrogrid/gridcomponent6";
import StickyHeader from "./components/header/sticky-header";
import Homepage from "./components/homepage/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page2 from "./components/page-2/app";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
}
