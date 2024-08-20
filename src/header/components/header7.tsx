"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface TabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  children: (
    activeTab: string,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
  ) => React.ReactNode;
}

export const Tabs = ({
  activeTab,
  setActiveTab,
  className,
  children,
}: TabsProps) => {
  return (
    <div
      className={cn(
        "w-full mx-auto flex items-center justify-center",
        className
      )}
    >
      {children(activeTab, setActiveTab)}
    </div>
  );
};

interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList = ({ children }: TabsListProps) => {
  return (
    <div className="relative flex items-center border w-fit p-1.5 rounded-full">
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  onClick: (value: string) => void;

  children: React.ReactNode;
  isActive: boolean;
}

export const TabsTrigger = ({
  value,
  onClick,
  children,
  isActive,
}: TabsTriggerProps) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={cn("relative z-[1] px-4 py-2", { "z-0": isActive })}
    >
      {isActive && (
        <motion.div
          layoutId="active-tab"
          className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full"
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 300,
            damping: 25,
            velocity: 2,
          }}
        />
      )}
      <span
        className={cn(
          "relative text-sm block font-medium duration-200",
          isActive
            ? "text-white dark:text-black delay-100"
            : "text-neutral-800 dark:text-white"
        )}
      >
        {children}
      </span>
    </button>
  );
};

const tabsData = [
  { value: "home", label: "Home" },
  { value: "about", label: "About" },
  { value: "services", label: "Services" },
  { value: "contact", label: "Contact" },
];
export default function MyTabs() {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].value);

  return (
    <section className="py-10 max-w-5xl mx-auto">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        {(activeTab, setActiveTab) => (
          <>
            <TabsList>
              {tabsData.map((option) => (
                <TabsTrigger
                  key={option.value}
                  value={option.value}
                  onClick={setActiveTab}
                  isActive={activeTab === option.value}
                >
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </>
        )}
      </Tabs>
    </section>
  );
}
