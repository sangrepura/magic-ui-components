import { useState, useEffect } from "react";

interface Link {
  href: string;
  label: string;
}

const links: Link[] = [
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

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

export default function Header6() {
  const { isScrollingUp, prevScrollPos } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between mx-auto max-w-5xl p-3 px-5 border-b md:border-none ${
        isScrollingUp
          ? "fixed top-0 left-0 right-0 z-[1] translate-y-0 transition-transform duration-200 ease-out"
          : prevScrollPos < 10
          ? "relative"
          : "fixed top-0 left-0 right-0 z-[1] translate-y-[-100%] transition-transform duration-200 ease-out"
      }`}
    >
      <a href="#" className="mr-6 flex items-center">
        Magicui
      </a>
      <div className="hidden md:flex items-center justify-center flex-1 text-center">
        <div className="flex items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="ml-auto ">
        <button className="hidden md:block bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black px-4 py-2 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300">
          CTA
        </button>
        <div className="md:hidden">
          <div
            className="relative h-8 w-8 rounded-md flex items-center justify-center group cursor-pointer"
            onClick={handleMobileMenuToggle}
          >
            <span
              className={`absolute top-1/2 h-0.5 w-4 bg-neutral-900 ${
                isMobileMenuOpen
                  ? "translate-y-0 rotate-45 "
                  : "-translate-y-1.5"
              } transition-all duration-150`}
            ></span>
            <span
              className={`absolute h-0.5 w-4 bg-neutral-900 ${
                isMobileMenuOpen ? "opacity-0" : ""
              } transition-all duration-75`}
            ></span>
            <span
              className={`absolute top-1/2 -translate-y-1/2 h-0.5 w-4 bg-neutral-900 transition-all duration-150 ${
                isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
