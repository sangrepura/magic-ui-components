/*  left image right image

some animtion on image entry

and fix whatever bug there is
*/

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

type cardDataProps = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
};

const cardData: cardDataProps[] = [
  {
    id: 1,
    title: "Innovative Design",
    content:
      "Our design is not just visually appealing, but also highly functional.",
    image:
      "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "User-Centric Approach",
    content:
      "We prioritize the needs and preferences of our users in our design process.",
    image:
      "https://images.unsplash.com/photo-1686170287433-c95faf6d3608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    title: "Seamless Integration",
    content:
      "Our features seamlessly integrate with your existing systems for a smooth experience.",
    image:
      "https://images.unsplash.com/photo-1720378042271-60aff1e1c538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Continuous Improvement",
    content:
      "We are constantly updating and improving our features to provide the best experience.",
    image:
      "https://images.unsplash.com/photo-1666882990322-e7f3b8df4f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
];

const AccordionDemo = () => {
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    undefined
  );

  const carouselRef = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
        setCurrentIndex(index);
      }
    }
  };

  useEffect(() => {
    scrollToIndex(0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % cardData.length : 0
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) % cardData.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, 5000);

    return () => clearInterval(autoScrollTimer);
  }, [currentIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          cardData.length - 1
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-7 xl:px-0 py-20 grid grid-cols-5 items-center h-full gap-x-10 bg-white dark:bg-neutral-900">
      <div className="col-span-2 hidden md:block">
        <Accordion.Root
          className="w-[300px]"
          type="single"
          defaultValue={`item-${currentIndex}`}
          value={`item-${currentIndex}`}
          onValueChange={(value) =>
            setCurrentIndex(Number(value.split("-")[1]))
          }
        >
          {cardData.map((item, index) => (
            <AccordionItem
              key={item.id}
              className="relative mb-8 last:mb-0"
              value={`item-${index}`}
            >
              <div className="absolute top-0 bottom-0 left-0 right-auto overflow-hidden bg-sky-300/30 rounded-lg h-full w-0.5">
                <div
                  className={`absolute top-0 left-0 w-full ${
                    currentIndex === index ? "h-full" : "h-0"
                  } bg-sky-500 transition-all ease-linear origin-top`}
                  style={{
                    transitionDuration: currentIndex === index ? "5s" : "0s",
                  }}
                ></div>
              </div>
              <AccordionTrigger className="text-xl font-bold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion.Root>
      </div>
      <div className="col-span-5 md:col-span-3 h-full">
        {cardData[currentIndex !== undefined ? currentIndex : 0]?.image &&
          !cardData[currentIndex !== undefined ? currentIndex : 0]?.video && (
            <motion.img
              key={currentIndex}
              src={
                cardData[currentIndex !== undefined ? currentIndex : 0].image
              }
              alt="feature"
              className="w-full h-full aspect-auto object-cover rounded-xl border border-neutral-300/50 p-1"
              initial={{ y: -10, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          )}
        {cardData[currentIndex !== undefined ? currentIndex : 0]?.video &&
          !cardData[currentIndex !== undefined ? currentIndex : 0]?.image && (
            <video
              preload="auto"
              src={
                cardData[currentIndex !== undefined ? currentIndex : 0].video
              }
              className="w-full h-full aspect-auto rounded-lg object-cover"
              autoPlay
              loop
              muted
            />
          )}
      </div>
      <ul
        ref={carouselRef}
        className="[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden col-span-5 md:hidden h-full py-10 overflow-x-auto flex flex-nowrap snap-x"
        style={{
          scrollSnapType: "x mandatory",
          padding: "50px calc(50%)",
        }}
      >
        {cardData.map((item, index) => (
          <a
            key={item.id}
            className="card shrink-0 grid items-start mr-8 last:mr-0 justify-center h-full py-4 max-w-60 relative"
            onClick={() => setCurrentIndex(index)}
            style={{
              scrollSnapAlign: "center",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-auto overflow-hidden bg-sky-300/30 rounded-lg h-0.5 w-full">
              <div
                className={`absolute top-0 left-0 h-full ${
                  currentIndex === index ? "w-full" : "w-0"
                } bg-sky-500 transition-all ease-linear origin-top`}
                style={{
                  transitionDuration: currentIndex === index ? "5s" : "0s",
                }}
              ></div>
            </div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-sm max-w-sm text-balance mx-0">{item.content}</p>
          </a>
        ))}
      </ul>
    </section>
  );
};

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={cn(
        " group flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] leading-none outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={cn(
      "text-gray-700 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-2 px-5">{children}</div>
  </Accordion.Content>
));

export default AccordionDemo;
