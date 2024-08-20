import WizastyleFeatureCard from "../svg-line-mask/wizacard/WizastyleFeatureCard";
import { BackgroundBeams } from "../svg-line-mask/background-beams";
import GsapMotionPathFollowing from "../svg-line-mask/gsapmotionpath/gsapmask";
import GradientGsapMask from "../svg-line-mask/gsapgradient";
import FramerMaskGradient from "../svg-line-mask/framermotionmask";
import { SvgLineAnimation } from "../svg-line-mask/framermotion/svglineanimation";
import Navbar from "../navbar";

export default function AnimatedComponent() {
  return (
    <main>
      <Navbar />

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
    </main>
  );
}
