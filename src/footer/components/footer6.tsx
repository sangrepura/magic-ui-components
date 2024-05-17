import { BsArrowRight } from "react-icons/bs";
import logo from "../../assets/manu.png";

type FooterLinksType = {
  column1: { id: number; title: string; url: string }[];
  column2: { id: number; title: string; url: string }[];
  column3: { id: number; title: string; url: string }[];
};

export default function Footer6() {
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

  return (
    <div className="footer px-7 md:px-10 max-w-5xl mx-auto border rounded-lg">
      {/* 1st top section */}
      <div className="border-b border-slate-400/20 border-dashed flex flex-col gap-y-3 items-center justify-center lg:flex-row lg:items-center lg:justify-between py-10">
        <h3 className="text-2xl md:text-4xl text-neutral-900 dark:text-white font-bold max-w-sm text-center md:text-start text-balance">
          Maigcui is the best?
        </h3>
        <div className="flex gap-x-5 flex-col gap-y-2 sm:flex-row py-4 justify-center items-center">
          <a
            href="#"
            className="flex text-base lg:text-base items-center justify-center rounded-full h-[40px] lg:h-[44px] w-40 dark:bg-white bg-neutral-800 text-white dark:text-black font-semibold transition duration-200 hover:ring-2 hover:ring-neutral-900 dark:hover:ring-white hover:ring-offset-2 dark:hover:ring-offset-black"
          >
            <span className="tracking-tight">Let's Chat</span>
            <BsArrowRight className="ml-2" />
          </a>
          <a
            href="#"
            className="flex text-sm lg:text-base items-center justify-center rounded-full border h-[40px] lg:h-[44px] w-40 font-semibold text-neutral-900 dark:text-white hover:bg-neutral-200/30 dark:hover:bg-neutral-700/30 transition duration-200"
          >
            <span className="tracking-tight">Request Demo</span>
          </a>
        </div>
      </div>
      {/* 2nd bottom section */}
      <div className="py-10 flex flex-col md:flex-row md:items-center md:justify-between">
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
          <div className="flex gap-x-3 items-center justify-between px-0 lg:px-10">
            {Object.keys(footerLinks[0]).map((columnKey) => (
              <ul
                key={columnKey}
                className="footer-link-list text-neutral-900 dark:text-white text-sm font-[400] flex flex-col gap-y-2"
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
    </div>
  );
}
