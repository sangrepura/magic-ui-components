import { motion, cubicBezier, useInView, useScroll } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "../theme-provider";

export default function StickyHeader() {
  const [scrollY, setScrollY] = useState(0);
  const fixedNavRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

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
    <div className="h-[500vh] w-full bg-neutral-50 dark:bg-neutral-900">
      <nav
        ref={fixedNavRef}
        className=" bg-white dark:bg-neutral-900 py-7 border-t border-b"
      >
        <section className="max-w-5xl mx-auto flex items-center justify-between relative">
          <h1>Logo</h1>
          <div>
            <ul className="flex items-center gap-x-5 fixed top-4 left-4 right-4 z-[60] justify-center">
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
                  duration: 0.1,
                }}
                className="md:p-1.5 md:py-2 py-2.5 px-6 w-auto h-12 flex items-center justify-center gap-x-5 rounded-full overflow-hidden bg-white dark:bg-neutral-900 transition-all"
              >
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <nav className="h-full hidden md:block">
                      <ul className="h-full flex flex-col md:flex-row justify-center md:justify-start gap-6 md:gap-0 lg:gap-1">
                        <li className="px-[0.75rem] py-[0.375rem]">Home</li>
                        <li className="px-[0.75rem] py-[0.375rem]">About</li>
                        <li className="px-[0.75rem] py-[0.375rem]">Services</li>
                        <li className="px-[0.75rem] py-[0.375rem]">Contact</li>
                      </ul>
                    </nav>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: scrollY >= 120 ? "auto" : 0,
                      }}
                      transition={{
                        ease: "linear",
                        duration: 0.1,
                      }}
                      className="!hidden md:!block rounded-full overflow-hidden"
                    >
                      <motion.ul
                        initial={{ x: 0 }}
                        animate={{
                          x: scrollY >= 120 ? "0" : "125%",
                        }}
                        className=" shrink-0 whitespace-nowrap"
                      >
                        <li>
                          <a
                            href="#"
                            className="transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden outline-none bg-black dark:bg-white text-white dark:text-black gap-x-1.5 px-3 py-1.5 rounded-full"
                          >
                            <span data-sb-field-path=".label">Get Started</span>
                          </a>
                        </li>
                      </motion.ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ul>
          </div>
          <div className="z-[999] flex items-center gap-x-5">
            <button>Get Started</button>
            <ModeToggle />
          </div>
        </section>
      </nav>
    </div>
  );
}
