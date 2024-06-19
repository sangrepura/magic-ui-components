import React from "react";

const menuItems = [
  { href: "#", className: "works", text: "Work" },
  { href: "#", className: "infos", text: "Info" },
  { href: "#", className: "abouts", text: "About" },
  { href: "#", className: "contacts", text: "Contact" },
];

export default function Header4() {
  return (
    <div className="flex flex-col max-w-md mx-auto justify-center relative py-5">
      <div className="nav-indicator-glows bg-white rounded-[50px] w-7 h-[2px] shadow-[0_2px_25px_2px_#fff] ml-10 mb-0.5"></div>
      <div className="nav-pills flex relative h-14 items-center justify-between backdrop-blur-sm bg-white/10 rounded-full border border-neutral-200/10">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`nav-toggles flex items-center justify-center relative text-white z-10 w-full ${item.className}`}
          >
            <div className="text-nav-toggles">{item.text}</div>
          </a>
        ))}
        <div className="nav-indicator-pills -z-[1] bg-neutral-300/30 rounded-full block absolute top-[5px] left-[5px] h-[calc(100%-10px)] w-[calc(25%-10px)] [transition:left_0.3s_ease]"></div>
      </div>
    </div>
  );
}
