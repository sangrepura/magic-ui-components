import { useState, useEffect, useRef } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { ModeToggle } from "../../components/mode-toggle";
import { useTheme } from "../../components/theme-provider";
import magicUiLogo from "../../assets/magicui-logo.png";

export default function Header1() {
  const [scrollY, setScrollY] = useState(0);
  const fixedNavRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={fixedNavRef}
      className=" bg-white dark:bg-neutral-900 py-7 px-10 xl:px-0"
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between relative">
        <img className="w-10 h-10" src={magicUiLogo} alt="MagicUI Logo" />

        <ul className="md:flex items-center gap-x-5 fixed left-4 right-4 z-[60] justify-center hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              boxShadow:
                scrollY >= 120
                  ? theme === "dark"
                    ? "0 0 0 1px rgba(255,255,255,.08), 0 1px 2px -1px rgba(255,255,255,.08), 0 2px 4px rgba(255,255,255,.04)"
                    : "0 0 0 1px rgba(17,24,28,.08), 0 1px 2px -1px rgba(17,24,28,.08), 0 2px 4px rgba(17,24,28,.04)"
                  : "none",
            }}
            transition={{
              ease: "linear",
              duration: 0.05,
              delay: 0.05,
            }}
            className="md:p-1.5 md:py-2 py-2.5 px-6 w-auto h-12 flex items-center justify-center gap-x-5 rounded-full overflow-hidden bg-white dark:bg-neutral-900 transition-all"
          >
            <nav className="h-full hidden md:flex relative items-center justify-between gap-x-3.5">
              <ul className="h-full flex flex-col md:flex-row justify-center md:justify-start gap-6 md:gap-0 lg:gap-1">
                <li className="px-[0.75rem] py-[0.375rem] flex items-center justify-center">
                  Home
                </li>
                <li className="px-[0.75rem] py-[0.375rem] flex items-center justify-center">
                  About
                </li>
                <li className="px-[0.75rem] py-[0.375rem] flex items-center justify-center">
                  Services
                </li>
                <li className="px-[0.75rem] py-[0.375rem] flex items-center justify-center">
                  Contact
                </li>
              </ul>
            </nav>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: scrollY >= 120 ? "auto" : 0,
              }}
              transition={{
                ease: "linear",
                duration: 0.25,
                delay: 0.05,
              }}
              className="!hidden md:!block rounded-full overflow-hidden"
            >
              <AnimatePresence>
                {scrollY >= 120 && (
                  <motion.ul
                    initial={{ x: "125%" }}
                    animate={{ x: "0" }}
                    exit={{
                      x: "125%",
                      transition: { ease: "linear", duration: 1 },
                    }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className="shrink-0 whitespace-nowrap"
                  >
                    <li>
                      <a
                        href="#"
                        className="relative inline-flex w-fit items-center justify-center overflow-hidden outline-none bg-neutral-900 dark:bg-white text-white dark:text-black gap-x-1.5 px-3 py-1.5 rounded-full"
                      >
                        <span data-sb-field-path=".label">Get Started</span>
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </ul>

        <div className="z-[999] items-center gap-x-5 hidden md:flex">
          <button>Get Started</button>
          <ModeToggle />
        </div>
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            onClick={() => setActive((prev) => !prev)}
            animate={active ? "open" : "close"}
            className="relative h-8 w-8 rounded-md flex items-center justify-center md:hidden"
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                close: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  opacity: 0,
                },
                close: {
                  opacity: 1,
                },
              }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["65%", "50%", "50%"],
                },
                close: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "65%"],
                },
              }}
            ></motion.span>
          </motion.button>
        </MotionConfig>
      </nav>
    </header>
  );
}
