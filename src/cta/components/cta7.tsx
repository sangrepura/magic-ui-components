import animatedImg from "../../assets/animated-beam.jpg";
import animatedDarkImg from "../../assets/animated-beam-dark.jpg";
import logo from "../../assets/magicui-logo.png";
export default function Cta7() {
  return (
    <section className="w-full">
      <div className="bg-cta7 relative flex flex-col items-center justify-between gap-6  h-full  dark:border-neutral-700/50 px-0 lg:gap-10 bg-white/30 dark:bg-black/30 p-10">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#00000055_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] lab-bg [background-size:16px_16px] -z-10"></div>

        <div className="absolute top-4 right-4 bg-neutral-900 text-white px-4 py-2 rounded-full flex items-center gap-2">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a5 5 0 10-2.92 0z"
              fillRule="evenodd"
            />
          </svg>
          <span className="font-semibold">50% Off</span>
        </div>

        <div className=" flex gap-6 items-center justify-center flex-col backdrop-blur-sm border border-neutral-300/30 p-10 rounded-xl">
          <img src={logo} alt="MagicUI" className="w-20 h-20" />
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-center text-neutral-900 dark:text-neutral-100">
              Summer Sales Going On
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 md:text-lg text-center max-w-md mx-auto">
              Get up to 50% off on all our products this summer. Don't miss out
              on this incredible opportunity!
            </p>
          </div>
          <a
            className="inline-flex h-10  items-center justify-center rounded-full ring-2 ring-offset-2 dark:ring-offset-current dark:ring-neutral-100 ring-neutral-900 bg-neutral-900 px-10 font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
