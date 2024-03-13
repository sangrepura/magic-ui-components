import TextRevealByChar from "../../components/text-reveal/TextRevealCharacter";
import TextRevealByWord from "../../components/text-reveal/TextRevealWord";
import TextShimmer from "../../components/text-shimmer/TextShimmer";
import TextRevealComponent from "../../components/text-reveal-parts/TextRevealComponent";
import MaskSvg from "../../components/svg-line-mask/masksvg";
import WizastyleFeatureCard from "../../components/svg-line-mask//wizacard/WizastyleFeatureCard";
import { BackgroundBeams } from "../../components/svg-line-mask/background-beams";
import GsapMotionPathFollowing from "../../components/svg-line-mask/gsapmotionpath/gsapmask";
import GradientGsapMask from "../../components/svg-line-mask/gsapgradient";
import FramerMaskGradient from "../../components/svg-line-mask/framermotionmask";
import { SvgLineAnimation } from "../../components/svg-line-mask/framermotion/svglineanimation";
import HoverAnimationComponent from "../../components/listhover/animatedhoveredlist";
import GridComponent1 from "../../components/bentrogrid/gridcomponent1";
import GridComponent2 from "../../components/bentrogrid/gridcomponent2";
import GridComponent3 from "../../components/bentrogrid/gridcomponent3";
import GridComponent4 from "../../components/bentrogrid/gridcomponent4";
import GridComponent5 from "../../components/bentrogrid/gridcomponent5";
import GridComponent6 from "../../components/bentrogrid/gridcomponent6";
import GHubCard from "../ghubcard/ghubcard";
import Navbar from "../navbar";

export default function Homepage() {
  return (
    <main>
      <Navbar />
      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text Reveal By Character 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <TextRevealByChar />

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-red-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text Reveal By Word [re-usable]👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <TextRevealByWord text="This is scroll by words. In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold." />

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Text shimmer component 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] flex items-center justify-center bg-neutral-900">
        <TextShimmer text="Press D to get the shimmer effect" />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Shadcn style 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <TextRevealComponent
        text="This is scroll by words. In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold."
        scrollYProgress={0.5}
      />

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Svg Line wiza style 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <div className="bg-neutral-100">
        <WizastyleFeatureCard />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Svg Line wiza style 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeams />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Gsap Motion Path Following 👇
        </h2>
      </div>

      <div className="h-[50vh] w-full bg-neutral-200 relative flex flex-col items-center justify-center antialiased">
        <GsapMotionPathFollowing />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] w-full bg-neutral-900 relative flex flex-col items-center justify-center antialiased">
        <GradientGsapMask />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] w-full bg-neutral-900 relative flex flex-col items-center justify-center antialiased">
        <FramerMaskGradient />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center h-[50vh] justify-center">
          Svg Line Animation with framer motion and props 👇
        </h2>
      </div>

      {/* ====================================================================================================== */}
      <div className=" h-[250vh] overflow-hidden w-full bg-neutral-900 relative flex flex-col items-center justify-center ">
        <div className="absolute top-0 left-0 right-0 mx-auto">
          <SvgLineAnimation />
        </div>
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-lime-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center text-center h-[50vh] justify-center">
          Hover Animated List
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] w-full bg-neutral-50 dark:bg-neutral-900 relative flex flex-col items-center justify-center antialiased py-20 px-5">
        <HoverAnimationComponent />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] bg-amber-500">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center text-center h-[50vh] justify-center">
          Bento Grid #1
        </h2>
      </div>

      {/* ====================================================================================================== */}

      <div className="h-[50vh] w-full bg-neutral-900 relative flex flex-col items-center justify-center antialiased">
        <GridComponent1 />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-fit w-full bg-neutral-100 relative flex flex-col items-center justify-center antialiased py-20 px-5 lg:px-20">
        <GridComponent2 />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-fit w-full bg-neutral-50 dark:bg-neutral-900 relative flex flex-col items-center justify-center antialiased py-20 px-5 lg:px-20">
        <GridComponent3 />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-fit w-full bg-neutral-50 dark:bg-neutral-900 relative flex flex-col items-center justify-center antialiased py-20 px-5 lg:px-20">
        <GridComponent4 />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-full grid place-content-center overflow-hidden w-full bg-neutral-50 dark:bg-neutral-900 antialiased py-20 px-5 lg:px-20 relative">
        <GridComponent5 />
      </div>

      {/* ====================================================================================================== */}

      <div className="h-full grid place-content-center overflow-hidden w-full bg-neutral-50 dark:bg-neutral-900 antialiased py-20 px-5 lg:px-20">
        <GridComponent6 />
      </div>

      {/* ====================================================================================================== */}

      <div className="grid place-content-center overflow-hidden w-full bg-neutral-50 dark:bg-neutral-900 antialiased py-20 px-5 lg:px-20">
        <GHubCard />
      </div>
    </main>
  );
}
