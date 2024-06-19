import React, { useState } from "react";

export default function Header5() {
  const [activeTab, setActiveTab] = useState<string>("work");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="nav-pill-wrapper relative flex justify-center items-center">
      <div className="nav-indicator-glow absolute inset-0 rounded-full bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.5)] z-[1]"></div>
      <div className="nav-pill relative flex bg-gray-800 rounded-full p-1 z-[2]">
        <a
          href="#"
          className={`nav-toggle work flex items-center justify-center px-4 py-2 text-white no-underline relative z-[3] rounded-l-full ${
            activeTab === "work" ? "active" : ""
          }`}
          onClick={() => handleTabClick("work")}
        >
          <div className="text-nav-toggle font-bold text-lg">Work</div>
        </a>
        <a
          href="#"
          className={`nav-toggle info flex items-center justify-center px-4 py-2 text-white no-underline relative z-[3] rounded-r-full ${
            activeTab === "info" ? "active" : ""
          }`}
          onClick={() => handleTabClick("info")}
        >
          <div className="text-nav-toggle font-bold text-lg">Info</div>
        </a>
        <div
          className="nav-indicator-pill absolute top-1 left-1 w-1/2 h-[calc(100%-8px)] bg-gray-600 rounded-full transition-all duration-300 ease-in-out z-[1]"
          style={{
            left: activeTab === "work" ? "0.25rem" : "calc(50% + 0.25rem)",
          }}
        ></div>
      </div>
    </div>
  );
}
