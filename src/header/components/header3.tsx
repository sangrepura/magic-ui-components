import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle, AiFillInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import magicUiLogo from "../../assets/magicui-logo.png";

// MenuItems JSON
const menuItems = [
  { text: "Features", url: "#" },
  { text: "Resources", url: "#" },
  { text: "Company", url: "#" },
  { text: "Contact Sales", url: "#" },
];

const iconComponents = [
  { id: 1, Icon: BsDiscord, url: "#" },
  { id: 2, Icon: AiFillInstagram, url: "#" },
  { id: 3, Icon: FaTwitter, url: "#" },
  { id: 4, Icon: MdEmail, url: "#" },
];

const IconList = () => (
  <div className="header-follow absolute bottom-5 left-0 right-0">
    <div className="flex items-center justify-evenly space-x-2 px-6 py-4">
      {iconComponents.map(({ id, Icon, url }) => (
        <a key={id} href={url}>
          <Icon className="text-2xl text-neutral-900 dark:text-white" />
        </a>
      ))}
    </div>
  </div>
);

interface MobileMenuProps {
  onClose: () => void;
}

function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!event.target.closest(".main-nav-menu-mobile")) {
        onClose();
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <nav className="z-50 dark:bg-neutral-800/60 bg-neutral-100/60 shadow-sm lg:shadow-none absolute left-0 top-0 bottom-0 right-0 border-r border-neutral-400/30 border-dashed w-[270px] md:w-[300px] lg:flex lg:w-[300px] lg:flex-col backdrop-blur-md">
      <a href="/">
        <div className="header-logo p-5 flex items-center space-x-2">
          <div className="header-logo flex items-center space-x-2">
            <div className="bg-neutral-500/20 rounded-full p-2">
              <img className="h-5 w-5 " src={magicUiLogo} alt="MagicUI Logo" />
            </div>
            <h2 className="text-neutral-900 dark:text-white font-semibold">
              MagicUI
            </h2>
          </div>
        </div>
      </a>
      <div className="header-menu lg:hidden">
        <ul className="flex-col space-y-5 px-8 py-5 pb-8 text-[1.1rem] font-semibold text-neutral-900 dark:text-white">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.url}>
                <button>{menuItem.text}</button>
              </a>
            </li>
          ))}
        </ul>
        <div className="header-button space-y-2">
          <div className="px-6 lg:flex lg:items-center">
            <a
              href="#"
              className="flex w-full items-center text-white  justify-center rounded-full bg-neutral-900 dark:bg-neutral-200 dark:text-neutral-900 px-5 py-2 hover:shadow-sm hover:drop-shadow-sm transition duration-200"
            >
              <span>Join now</span>
            </a>
          </div>
        </div>
      </div>
      <IconList />
    </nav>
  );
}

export default function Header3() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = (event: any) => {
    event.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event: any) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="py-2 lg:py-5 px-2 w-full bg-neutral-100 dark:bg-neutral-900 lg:relative  ">
      <nav className="px-5 lg:px-2 py-2.5 lg:border-none lg:py-2 rounded-full flex items-center justify-between">
        <a href="/">
          <div className="header-logo flex items-center space-x-2">
            <h2 className="text-2xl text-neutral-900 dark:text-white font-semibold">
              MagicUI
            </h2>
          </div>
        </a>
        <div className="header-menu hidden lg:flex items-center gap-x-10">
          <ul className="flex space-x-10 text-base font-semibold text-neutral-900 dark:text-white">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <a href={menuItem.url}>
                  <button>{menuItem.text}</button>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex lg:items-center gap-x-5">
          <button className="flex items-center text-neutral-900 hover:ring-2 dark:hover:ring-2 ring-neutral-500 dark:ring-neutral-200/70 justify-center rounded-md hover:shadow-none shadow-[2px_2px_0px_3px_rgba(0,0,0,0.9)] dark:shadow-[1px_1px_0px_2px_rgba(255,255,255,0.5)] dark:hover:shadow-none bg-white px-5 py-2 font-semibold hover:drop-shadow transition-all duration-200">
            <span>Try for free</span>
          </button>
          <button className="flex items-center text-neutral-900 hover:ring-2 dark:hover:ring-2 ring-neutral-500 dark:ring-neutral-200/70 dark:text-white justify-center rounded-md dark:hover:shadow-none hover:shadow-none shadow-[2px_2px_0px_3px_rgba(0,0,0,0.9)] dark:shadow-[1px_1px_0px_2px_rgba(255,255,255,0.9)] bg-white dark:bg-neutral-900 px-5 py-2 font-semibold hover:drop-shadow transition-all duration-200">
            <span>Login</span>
          </button>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <button
            className={`advanced-setting-toggle focus:outline-none ${
              isMobileMenuOpen
                ? "rounded-full bg-neutral-200 text-neutral-800"
                : "text-neutral-200"
            }`}
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <AiOutlineCloseCircle className="text-2xl focus:outline-none active:scale-110 active:text-neutral-200" />
            ) : (
              <HiMenuAlt3 className="text-2xl text-neutral-900 dark:text-white focus:outline-none active:scale-110" />
            )}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="main-nav-menu fixed inset-0 z-50 transform overflow-auto bg-transparent transition duration-150 lg:hidden">
          <MobileMenu onClose={handleMobileMenuClose} />
        </div>
      )}
    </header>
  );
}
