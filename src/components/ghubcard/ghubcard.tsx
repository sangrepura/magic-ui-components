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

export default function GHubCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const controls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between h-full border rounded-md">
        <div className="w-full md:w-1/2 p-10 md:h-full">
          <div className="md:h-full flex flex-col gap-y-10 items-start justify-between">
            <h2 className="text-3xl font-bold">
              Github Sponsors lets you support your favorite open source
              projects
            </h2>
            <a
              href="#"
              className="text-blue-500 font-bold hover:underline transition-all underline-offset-4"
            >
              Invest with Github Sponsors
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden right__container [-webkit-mask-image:linear-gradient(to_bottom,transparent_10%,black_35%);] md:[-webkit-mask-image:none;]">
          <div
            ref={ref}
            className="grid gap-5 grid-cols-3 [transform:rotate(-15deg)translateZ(10px);] max-h-[450px] relative -top-[100px] -right-[50px]"
          >
            <AnimatePresence>
              {cardImage.map((card, index) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
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
                  <p className="dark:text-neutral-200/50 text-sm">
                    {card.title}
                  </p>
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
    </section>
  );
}
