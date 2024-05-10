import websiteWhiteLogo from "../../assets/manu.png";

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "About", url: "#" },
  { text: "Services", url: "#" },
];

export default function Footer3() {
  return (
    <div className="px-5 lg:px-10 p-5">
      <div className="flex items-center justify-between gap-x-5">
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

        <ul className="flex items-center justify-center gap-x-10 text-neutral-900 dark:text-white">
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
