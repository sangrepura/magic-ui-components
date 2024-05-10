import { AiOutlineArrowRight } from "react-icons/ai";
import websiteWhiteLogo from "../../assets/manu.png";

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "About", url: "#" },
  { text: "Services", url: "#" },
  { text: "Contact", url: "#" },
  { text: "Careers", url: "#" },
];

export default function Footer5() {
  return (
    <section className="px-5 lg:px-10 py-5">
      <div className="flex flex-col gap-y-5 md:flex-row items-center justify-between w-full gap-x-5">
        <a href="#" className="flex items-center gap-x-2">
          <img className="w-8 h-8 rounded-full" src={websiteWhiteLogo} alt="" />
          <h2 className="text-neutral-900 dark:text-white font-bold text-base">
            Bird<span className="font-[400]">app</span>
          </h2>
        </a>
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
        <div className="group">
          <div className="text-sm border-[#314EE7] text-[#314EE7] group-hover:bg-[#314EE7] group-hover:text-white border rounded-lg px-2.5 py-1.5 font-semibold hover:ring-2 hover:ring-offset-2 transition-all duration-200">
            <a href="#">Get Early Access</a>
            <AiOutlineArrowRight className="inline-block text-[#314EE7] ml-2 group-hover:text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
