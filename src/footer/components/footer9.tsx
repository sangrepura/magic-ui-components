import logo from "../../assets/manu.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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
  column4: { id: number; title: string; url: string }[];
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
    column4: [
      { id: 13, title: "Press", url: "#" },
      { id: 14, title: "Careers", url: "#" },
      { id: 15, title: "Newsletters", url: "#" },
      { id: 16, title: "More", url: "#" },
    ],
  },
];

export default function Footer9() {
  return (
    <footer className="footer">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full py-10 px-7 md:px-10">
        <div className="flex gap-x-3 w-full items-center justify-between lg:pl-10">
          {Object.keys(footerLinks[0]).map((columnKey) => (
            <ul
              key={columnKey}
              className="footer-link-list text-neutral-900 dark:text-white text-sm  flex flex-col gap-y-2"
            >
              {footerLinks[0][columnKey as keyof FooterLinksType].map(
                (link: any) => (
                  <a href={link.url} key={link.id}>
                    <li className="hover:underline hover:underline-offset-4">
                      {link.title}
                    </li>
                  </a>
                )
              )}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-5 md:items-center justify-between border-t border-dashed border-neutral-500/20 dark:border-neutral-700/50 py-10 bg-neutral-100 dark:bg-neutral-900  px-7 md:px-10">
        <div className="flex flex-col gap-y-3.5 justify-start items-start">
          <a href="#" className="flex items-center gap-x-2.5">
            <img className="w-10 h-10 rounded-full" src={logo} alt="" />
            <h1 className="text-xl text-neutral-900 dark:text-white font-bold">
              Magicui
            </h1>
          </a>
          <p className="text-neutral-900 dark:text-white ">
            50+ open-source animated component for Design Engineer
          </p>
        </div>

        <div className="flex flex-col gap-y-5">
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
          <p className="text-neutral-900 dark:text-white text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
