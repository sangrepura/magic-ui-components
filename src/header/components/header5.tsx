import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  link: string;
}

const navs: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Examples", link: "/examples" },
  { name: "Motion", link: "/learnings" },
];

const Header5 = () => {
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const ref = useRef<HTMLUListElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const node = e.currentTarget;
    const rect = node.getBoundingClientRect();
    setLeft(node.offsetLeft);
    setWidth(rect.width);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <nav className="py-20 w-full dark:bg-neutral-800/60 bg-neutral-100/60">
      <ul
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black dark:border-white bg-white dark:bg-neutral-800 p-1"
        ref={ref}
      >
        {navs.map((item) => (
          <li
            key={item.name}
            onMouseEnter={handleMouseEnter}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
        <motion.li
          animate={{ left, width, opacity }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
        />
      </ul>
    </nav>
  );
};

export default Header5;
