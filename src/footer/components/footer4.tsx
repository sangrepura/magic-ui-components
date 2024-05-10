import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import websiteWhiteLogo from "../../assets/manu.png";

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "About", url: "#" },
  { text: "Services", url: "#" },
];

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com" },
  { icon: <AiOutlineInstagram />, url: "https://www.instagram.com" },
  { icon: <FaYoutube />, url: "https://www.youtube.com" },
];

export default function Footer4() {
  return (
    <div className="px-5 lg:px-10 p-5">
      <div className="flex flex-col gap-y-5 md:flex-row items-start md:items-center justify-between w-full gap-x-5">
        <div className="header-logo flex items-center gap-x-2">
          <img
            className="w-8 h-8 rounded-full"
            src={websiteWhiteLogo}
            alt="Company Logo"
          />
          <h2 className="text-neutral-900 dark:text-white font-bold text-base">
            Darkmode
          </h2>
        </div>
        <div className="social-icons flex items-center gap-x-4">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="text-neutral-500 hover:text-neutral-900 hover:dark:text-white text-xl"
            >
              {icon.icon}
            </a>
          ))}
        </div>
        <ul className="flex flex-col md:flex-row items-start md:items-center justify-center gap-x-10 text-neutral-900 dark:text-white">
          {links.map((link, index) => (
            <li
              key={index}
              className="hover:underline hover:underline-offset-4"
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
