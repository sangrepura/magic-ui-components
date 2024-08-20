import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  ReactNode,
} from "react";
import { cn } from "../lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
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

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
} & Accordion.AccordionContentProps;

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "text-neutral-800 dark:text-neutral-400 font-medium data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-2 px-5">{children}</div>
    </Accordion.Content>
  )
);

type CardDataProps = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
};

const cardData: CardDataProps[] = [
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

type FeatureProps = {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right";
};

const Feature = ({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
}: FeatureProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    undefined
  );

  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(undefined);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });

        setCurrentIndex(index);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % cardData.length : 0
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) % cardData.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

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
    <section
      ref={ref}
      className=" px-7 xl:px-0 py-20 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-5 items-center justify-center h-full gap-x-10">
        {/* col-span-2 md:flex items-end justify-end hidden */}
        <div className={`col-span-2 hidden md:block ${ltr ? "order-2" : ""}`}>
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
                <div
                  className={`absolute top-0 bottom-0 overflow-hidden bg-sky-300/30 rounded-lg h-full w-0.5 ${
                    linePosition === "right"
                      ? "right-0 left-auto"
                      : "left-0 right-auto"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full ${
                      currentIndex === index ? "h-full" : "h-0"
                    } bg-sky-500 transition-all ease-linear origin-top`}
                    style={{
                      transitionDuration:
                        currentIndex === index ? `${collapseDelay}ms` : "0s",
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
        <div
          className={`col-span-5 md:col-span-3 min-h-[200px] h-[350px] w-auto ${
            ltr ? "order-1" : ""
          }`}
        >
          {cardData[currentIndex !== undefined ? currentIndex : 0]?.image &&
            !cardData[currentIndex !== undefined ? currentIndex : 0]?.video && (
              <motion.img
                key={currentIndex}
                src={
                  cardData[currentIndex !== undefined ? currentIndex : 0].image
                }
                alt="feature"
                className="w-full h-full aspect-auto object-cover rounded-xl border border-neutral-300/50 p-1"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              />
            )}

          {!cardData[currentIndex !== undefined ? currentIndex : 0]?.image &&
            !cardData[currentIndex !== undefined ? currentIndex : 0]?.video && (
              <div className="w-full h-full aspect-auto rounded-xl border border-neutral-300/50 p-1 bg-gray-200"></div>
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
          className="[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden col-span-5 md:hidden h-full py-10 overflow-x-auto flex flex-nowrap snap-x [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)]"
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
                    transitionDuration:
                      currentIndex === index ? `${collapseDelay}ms` : "0s",
                  }}
                ></div>
              </div>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-sm max-w-sm text-balance mx-0">
                {item.content}
              </p>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default function FeatureSection() {
  return <Feature collapseDelay={10000} linePosition="right" />;
}
