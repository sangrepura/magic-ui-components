import {
  MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

type ListOrderItem = "front" | "middle" | "back";

export default function Card3() {
  const dragProgress = useMotionValue(0);
  const [order, setOrder] = useState<ListOrderItem[]>([
    "front",
    "middle",
    "back",
  ]);

  const handleDragEnd = () => {
    const x = dragProgress.get();
    if (x <= -50) {
      const orderCopy = [...order];
      orderCopy.unshift(orderCopy.pop() as ListOrderItem);
      setOrder(orderCopy);
    }
  };

  useEffect(() => {
    const FIVE_SECONDS = 5000;

    // Automatically shuffle the list every 5 seconds, so long
    // as it isn't being dragged
    const intervalRef = setInterval(() => {
      const x = dragProgress.get();
      if (x === 0) {
        setOrder((pv) => {
          const orderCopy = [...pv];
          orderCopy.unshift(orderCopy.pop() as ListOrderItem);
          return orderCopy;
        });
      }
    }, FIVE_SECONDS);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="grid place-content-center max-w-xl mx-auto w-full bg-gradient-to-b from-blue-400/80 ring-1 ring-blue-300/30 via-blue-600 to-blue-800 px-8 pt-24  rounded-lg text-slate-50 overflow-hidden">
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <h2 className="mx-4 text-center text-2xl font-medium text-neutral-200 md:text-4xl ">
          Drag and Testimonials
        </h2>
        <motion.div
          whileTap={{ scale: 0.985 }}
          className="relative -ml-[100px] h-[200px] w-[350px] md:-ml-[175px]"
        >
          <Card
            testimonial="Made for Desktop and Mobile. It's like magic."
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[0]}
          />
          <Card
            testimonial="Made for Desktop and Mobile. It's like magic."
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[1]}
          />
          <Card
            testimonial="Made for Desktop and Mobile. It's like magic."
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[2]}
          />
        </motion.div>
      </div>
    </div>
  );
}

interface CardProps {
  handleDragEnd: Function;
  dragProgress: MotionValue<number>;
  testimonial: string;
  position: ListOrderItem;
}

const Card = ({
  handleDragEnd,
  dragProgress,
  testimonial,
  position,
}: CardProps) => {
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    // When component first mounts, dragX will be a percentage
    // due to us setting the initial X value in the animate prop.
    if (typeof latest === "number" && dragging) {
      dragProgress.set(latest);
    } else {
      // Default back to 0 so that setInterval can continue
      dragProgress.set(0);
    }
  });

  const onDragStart = () => setDragging(true);

  const onDragEnd = () => {
    setDragging(false);
    handleDragEnd();
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
        x: dragX,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-5 top-10 grid h-[200px] w-[300px] select-none space-y-6 rounded-2xl border-white border bg-gradient-to-b from-blue-700 via-blue-900 to-blue-800 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <span className="text-center text-xl text-white font-semibold">
        {testimonial}
      </span>
    </motion.div>
  );
};
