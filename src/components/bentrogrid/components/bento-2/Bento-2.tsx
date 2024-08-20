import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect } from "react";

const cardImage = [
  {
    id: 1,
    title: "octocat",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
  {
    id: 2,
    title: "mojombo",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
  {
    id: 3,
    title: "defunkt",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
  {
    id: 4,
    title: "pjhyett",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
  {
    id: 5,
    title: "wycats",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
  {
    id: 6,
    title: "ezmobius",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
  {
    id: 7,
    title: "ivey",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
  {
    id: 8,
    title: "evanphx",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
  {
    id: 9,
    title: "vanpelt",
    link: "#",
    image:
      "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
  },
];

const FeatureCard1 = () => {
  const firstBoxRef = useRef(null);
  const firstBoxInView = useInView(firstBoxRef, { amount: 0.55 });
  const firstBoxControls = useAnimation();

  useEffect(() => {
    if (firstBoxInView) {
      firstBoxControls.start("visible");
    } else {
      firstBoxControls.start("hidden");
    }
  }, [firstBoxInView, firstBoxControls]);

  return (
    <div
      ref={firstBoxRef}
      className="rounded-lg border h-[650px] border-neutral-200 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-10 pb-0 overflow-hidden"
    >
      <h2 className="text-2xl font-bold pb-5">
        GitHub Discussions creates space to ask questions and have open-ended
        conversations.
      </h2>
      <a
        href="#"
        className="text-blue-500 font-bold hover:underline transition-all underline-offset-4"
      >
        Invest with Github Sponsors
      </a>
      <AnimatePresence>
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.96, y: 25 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          initial="hidden"
          animate={firstBoxControls}
          exit={{
            opacity: 0,
            scale: 0,
            transition: {
              duration: 0.25,
              ease: "linear",
            },
          }}
          transition={{
            duration: 0.25,
            ease: "linear",
          }}
          className="mt-10 w-full rounded-t-xl"
          src="https://images.unsplash.com/photo-1476458438255-0ab285b38cb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </AnimatePresence>
    </div>
  );
};

const FeatureCard2 = () => {
  const secondBoxRef = useRef(null);
  const secondBoxInView = useInView(secondBoxRef, { amount: 0.55 });
  const secondBoxControls = useAnimation();

  useEffect(() => {
    if (secondBoxInView) {
      secondBoxControls.start("visible");
    } else {
      secondBoxControls.start("hidden");
    }
  }, [secondBoxInView, secondBoxControls]);

  return (
    <div
      ref={secondBoxRef}
      className="rounded-lg border h-[650px] border-neutral-200 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-10 pb-0 overflow-hidden"
    >
      <h2 className="text-2xl font-bold pb-5">
        GitHub Discussions creates space to ask questions and have open-ended
        conversations.
      </h2>
      <a
        href="#"
        className="text-blue-500 font-bold hover:underline transition-all underline-offset-4"
      >
        Invest with Github Sponsors
      </a>

      <AnimatePresence>
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.96, x: 25 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={secondBoxControls}
          exit={{
            opacity: 0,
            scale: 0,
            transition: {
              duration: 0.25,
              ease: "linear",
            },
          }}
          transition={{
            duration: 0.25,
            ease: "linear",
          }}
          className="mt-10 w-full rounded-t-xl"
          src="https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </AnimatePresence>
    </div>
  );
};

const FeatureCard3 = () => {
  const thirdBoxRef = useRef(null);
  const thirdBoxInView = useInView(thirdBoxRef, { amount: 0.55 });
  const thirdBoxControls = useAnimation();

  useEffect(() => {
    if (thirdBoxInView) {
      thirdBoxControls.start("visible");
    } else {
      thirdBoxControls.start("hidden");
    }
  }, [thirdBoxInView, thirdBoxControls]);

  return (
    <div className="flex flex-col gap-5 md:flex-row items-center justify-between h-full rounded-lg border border-neutral-200 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <div className="w-full md:w-1/2 p-10 md:h-full flex flex-col gap-y-10 items-start justify-between">
        <h2 className="text-3xl font-bold">
          Github Sponsors lets you support your favorite open source projects
        </h2>
        <a
          href="#"
          className="text-blue-500 font-bold hover:underline transition-all underline-offset-4"
        >
          Invest with Github Sponsors
        </a>
      </div>
      <div className="w-full md:w-1/2 overflow-hidden right__container [-webkit-mask-image:linear-gradient(to_bottom,transparent_10%,black_35%);] md:[-webkit-mask-image:none;]">
        <div
          ref={thirdBoxRef}
          className="grid gap-5 grid-cols-3 [transform:rotate(-15deg)translateZ(10px);] max-h-[450px] relative -top-[100px] -right-[50px]"
        >
          <AnimatePresence>
            {cardImage.map((card, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.96, y: 25 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                initial="hidden"
                animate={thirdBoxControls}
                exit={{
                  opacity: 0,
                  scale: 0,
                  transition: {
                    duration: 0.1,
                    ease: "linear",
                    delay: index * 0,
                  },
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear",
                  delay: index * 0.1,
                  staggerChildren: 0.1,
                  staggerDirection: 1,
                }}
                key={card.id}
                className="flex flex-col items-center gap-y-2 border rounded-md p-5 bg-white/5"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-full w-20 h-20 object-cover"
                />
                <p className="dark:text-neutral-200/50 text-sm">{card.title}</p>
                <a
                  href={card.link}
                  className="bg-indigo-500 p-2 py-0.5 rounded-md border dark:border-neutral-200/50 border-neutral-700/50  dark:shadow-xl dark:drop-shadow-lg text-white"
                >
                  Sponsor
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function Bento2() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col gap-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FeatureCard1 />
        <FeatureCard2 />
      </div>
      <FeatureCard3 />
    </section>
  );
}
