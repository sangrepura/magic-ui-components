import { motion, cubicBezier, useInView, useScroll } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "../theme-provider";

export default function StickyHeader() {
  const [scrollY, setScrollY] = useState(0);
  const fixedNavRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  console.log(theme);

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
                  border:
                    scrollY >= 120
                      ? `1px solid ${theme === "dark" ? "white" : "black"}`
                      : "none",
                  transition: {
                    type: "spring",
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                className=" w-auto h-12 flex items-center border border-white justify-center gap-x-5 py-1 pr-1 pl-4 rounded-full overflow-hidden bg-white dark:bg-neutral-900"
              >
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <motion.li
                  initial={{ x: "100%" }}
                  animate={{
                    x: scrollY >= 120 ? "0" : "100%",
                    opacity: scrollY >= 120 ? 1 : 0,
                    width: scrollY >= 120 ? "auto" : 0,
                    backgroundColor:
                      scrollY >= 120
                        ? theme === "dark"
                          ? "white"
                          : "black"
                        : "transparent",
                    borderRadius: scrollY >= 120 ? "100px" : "0%",
                    padding: scrollY >= 120 ? "0.5rem 1rem" : "0",
                    color:
                      scrollY >= 120
                        ? theme === "dark"
                          ? "black"
                          : "white"
                        : "white",
                    transition: {
                      type: "tween",
                      duration: 0.15,
                      ease: "circOut",
                    },
                  }}
                >
                  Download
                </motion.li>
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
