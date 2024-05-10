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

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "About", url: "#" },
  { text: "Services", url: "#" },
  { text: "Contact", url: "#" },
];

export default function Footer2() {
  return (
    <section className="flex flex-col gap-y-5 py-5 px-7 md:px-10">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">Magicui</h2>

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
      <div className="flex flex-col md:flex-row gap-y-5 md:items-center justify-between">
        <ul className="flex flex-col md:flex-row md:items-center gap-x-10 gap-y-2 text-sm font-semibold text-neutral-500 dark:text-neutral-300">
          {links.map((link, index) => (
            <li
              key={index}
              className="hover:underline hover:underline-offset-4"
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-semibold text-neutral-500 dark:text-neutral-300">
          <p>All right reserverd</p>
        </div>
      </div>
    </section>
  );
}
