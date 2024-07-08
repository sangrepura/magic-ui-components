import { useState, useEffect } from "react";
import Header6 from "./header6";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";

export function useScrollDirection() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return { isScrollingUp, prevScrollPos };
}

export default function ScrollUpVisibleHeader() {
  const { isScrollingUp } = useScrollDirection();
  return (
    <section>
      <div className="fixed bottom-10 right-10 border rounded-full p-2">
        <ArrowUpIcon
          className={`w-8 h-8 text-neutral-500 dark:text-neutral-400 transition-all duration-150 ease-out ${
            isScrollingUp ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <Header6 />
      <div className="h-[200vh]"></div>
    </section>
  );
}
