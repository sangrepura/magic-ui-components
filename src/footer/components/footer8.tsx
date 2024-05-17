import logo from "../../assets/manu.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import iosDownloadImage from "../../assets/ios-download.png";
import playstoreDownloadImage from "../../assets/playstore-download.png";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com" },
  { icon: <FaInstagram />, url: "https://www.instagram.com" },
  { icon: <FaTwitter />, url: "https://www.twitter.com" },
];

type FooterLinksType = {
  column1: { id: number; title: string; url: string }[];
  column2: { id: number; title: string; url: string }[];
  column3: { id: number; title: string; url: string }[];
};

const footerLinks: FooterLinksType[] = [
  {
    column1: [
      { id: 1, title: "About", url: "#" },
      { id: 2, title: "Contact", url: "#" },
      { id: 3, title: "Blog", url: "#" },
      { id: 4, title: "Story", url: "#" },
    ],
    column2: [
      { id: 5, title: "Company", url: "#" },
      { id: 6, title: "Product", url: "#" },
      { id: 7, title: "Press", url: "#" },
      { id: 8, title: "More", url: "#" },
    ],
    column3: [
      { id: 9, title: "Press", url: "#" },
      { id: 10, title: "Careers", url: "#" },
      { id: 11, title: "Newsletters", url: "#" },
      { id: 12, title: "More", url: "#" },
    ],
  },
];

export default function Footer8() {
  return (
    <footer className="footer px-7 md:px-10 max-w-5xl mx-auto border rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-10">
        <div className="flex flex-col gap-y-1 justify-start items-start">
          <a href="#" className="flex items-center gap-x-2.5">
            <img className="w-10 h-10 rounded-full" src={logo} alt="" />
            <h1 className="text-xl text-neutral-900 dark:text-white font-bold">
              Magicui
            </h1>
          </a>
          <p className="text-neutral-900 dark:text-white text-sm mt-5 max-w-xs">
            50+ open-source animated components built with React, Typescript,
            Tailwind CSS, and Framer Motion. Save thousands of hours, create a
            beautiful landing page, and convert your visitors into customers.
          </p>
          <p className="text-neutral-900 dark:text-white text-sm mt-10">
            All rights reserved.
          </p>
        </div>
        <div className="pt-5 md:w-1/2">
          <div className="flex gap-x-3 items-center justify-between lg:pl-10">
            {Object.keys(footerLinks[0]).map((columnKey) => (
              <ul
                key={columnKey}
                className="footer-link-list text-neutral-900 dark:text-white text-sm  flex flex-col gap-y-2"
              >
                {footerLinks[0][columnKey as keyof FooterLinksType].map(
                  (link: any) => (
                    <li
                      className="hover:underline hover:underline-offset-4"
                      key={link.id}
                    >
                      <a href={link.url}>{link.title}</a>
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-10 md:items-center justify-between border-t border-dashed py-10">
        <div className="flex items-center gap-x-2">
          <img
            className="border border-neutral-900 dark:border-neutral-700 rounded-md"
            src={playstoreDownloadImage}
            alt="playstore"
          />
          <img
            className="border border-neutral-900 dark:border-neutral-700 rounded-md"
            src={iosDownloadImage}
            alt="ios"
          />
        </div>

        <div className="social-icons flex items-center gap-x-4">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="text-neutral-500 hover:text-neutral-900 hover:dark:text-white text-2xl"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
