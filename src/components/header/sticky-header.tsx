import { motion, cubicBezier, useInView, useScroll } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function StickyHeader() {
  const [scrollY, setScrollY] = useState(0);
  const fixedNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*   useEffect(() => {
    if (fixedNavRef.current) {
      const fixedNavTop = fixedNavRef.current.getBoundingClientRect().top;
      if (fixedNavTop <= 0) {
        console.log(scrollY);
        if (scrollY >= 150) {
          console.log("ScrollY is 20 or more");
        }
      }
    }
  }, [scrollY]); */

  const headerVariants = {
    initial: {
      scale: 0.87,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      scale: 0.8,
      boxShadow:
        "rgba(245,40,145,0.35) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
  };

  return (
    <div className="h-[500vh] w-full bg-neutral-50 dark:bg-neutral-900">
      <nav
        ref={fixedNavRef}
        className=" bg-white dark:bg-neutral-900 py-5 border-t border-b"
      >
        <section className="max-w-5xl mx-auto flex items-center justify-between relative">
          <h1>Logo</h1>
          <div>
            <ul className="flex items-center gap-x-5 fixed top-0 left-0 right-0 md:top-4 md:left-4 md:right-4 z-[60] justify-center">
              <motion.div
                initial={{ x: 0 }}
                animate={{
                  border: scrollY >= 120 ? "1px solid white" : "none",
                }}
                style={{ border: scrollY >= 120 ? "1px solid white" : "none" }}
                className=" w-auto h-12 flex items-center justify-center gap-x-5 py-1 pr-1 pl-4 rounded-full overflow-hidden bg-white dark:bg-neutral-900"
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
                    backgroundColor: scrollY >= 120 ? "white" : "transparent",
                    borderRadius: scrollY >= 120 ? "100px" : "0%",
                    padding: scrollY >= 120 ? "0.5rem 1rem" : "0",
                    color: scrollY >= 120 ? "black" : "white",
                    transition: {
                      delay: 0.05,
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                >
                  Download
                </motion.li>
              </motion.div>
            </ul>
          </div>
          <div>
            <button>Get Started</button>
          </div>
        </section>
      </nav>
    </div>
  );
}
