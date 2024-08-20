import { useEffect, useRef, useCallback } from "react";
import { Image as FallbackImage } from "lucide-react";

const tilesData = [
  {
    id: 1,
    color: "text-orange-300/20",
    image:
      "https://assets.codepen.io/1468070/edgar-infocus-eCSsB3sIEHs-unsplash.jpg?width=1000&height=1250&format=auto&quality=70",
  },
  {
    id: 2,
    color: "text-teal-300/20",
    image:
      "https://assets.codepen.io/1468070/eugene-golovesov-ItyV8UzZzzw-unsplash.jpg?width=818&height=1228&format=auto&quality=80",
  },
  {
    id: 3,
    color: "text-lime-300/20",
    image:
      "https://assets.codepen.io/1468070/alex-shuper-3OpOV8ntLj4-unsplash.jpg?width=1000&height=1500&format=auto&quality=80",
  },
];

export default function Card4() {
  const wandRef = useRef<HTMLDivElement>(null);
  const movingspaceRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const wand = wandRef.current;
    const movingspace = movingspaceRef.current;
    const tiles = tilesRef.current?.querySelectorAll<HTMLDivElement>(".tile");

    if (!wand || !movingspace || !tiles) return;

    const { clientX: x, clientY: y } = e;
    const { width: wandWidth, height: wandHeight } =
      wand.getBoundingClientRect();
    const {
      width: movingspaceWidth,
      height: movingspaceHeight,
      left: movingspaceLeft,
      top: movingspaceTop,
    } = movingspace.getBoundingClientRect();

    const wandX = x - movingspaceLeft - wandWidth / 2;
    const wandY = y - movingspaceTop - wandHeight / 8;

    const updatedwandX = movingspaceWidth * -0.15 + wandX * 1.3;
    const updatedwandY = movingspaceHeight * 0.1 + wandY * 0.4;

    const mouseXAsDecimal = wandX / movingspaceWidth;

    tiles.forEach((tile) => {
      const { width: tileWidth, left: tileLeft } = tile.getBoundingClientRect();
      const relativeWandX = updatedwandX + movingspaceLeft - tileLeft;
      const relativeWandXAsDecimal = Math.max(
        0,
        Math.min(1, relativeWandX / tileWidth)
      );

      tile.style.setProperty("--opacity", relativeWandXAsDecimal.toString());
      tile.style.setProperty("--blur", (1 - relativeWandXAsDecimal).toString());
    });

    wand.animate(
      {
        left: `${updatedwandX}px`,
        top: `${updatedwandY}px`,
        rotate: `${-10 + mouseXAsDecimal * 20}deg`,
      },
      { duration: 400, fill: "forwards" }
    );
  }, []);

  useEffect(() => {
    const movingspace = movingspaceRef.current;
    if (movingspace) {
      movingspace.addEventListener("mousemove", handleMouseMove);
      return () =>
        movingspace.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  return (
    <div className="h-full flex relative gap-y-10 items-center justify-between w-full max-w-4xl mx-auto py-20 px-5 lg:px-20">
      <div className="flex flex-col gap-y-10 items-center justify-center w-full h-full border border-neutral-200/30 dark:border-neutral-700/30 overflow-hidden bg-transparent p-5 md:p-10 shadow-lg rounded-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        <div className="flex flex-col gap-y-1.5 items-center justify-center">
          <h2 className="mx-4 w-full text-lg text-center font-medium text-balance text-neutral-800 dark:text-neutral-200 md:text-2xl ">
            Generate magical visuals for your designs
          </h2>
          <p className=" w-full text-base text-center text-balance font-normal text-neutral-800/50 dark:text-neutral-200/50 md:text-lg ">
            With Magic Image, you can quickly generate images in Figma while you
            design.
          </p>
        </div>
        <div
          ref={movingspaceRef}
          className="relative w-[calc(100%-40px)] max-w-full md:w-full flex items-center justify-center"
        >
          <div
            ref={wandRef}
            className="bg-[linear-gradient(to_right,_rgb(26,24,28)_10%,_rgb(42,40,44)_45%_55%,_rgb(26,24,28)_90%)] w-[40px] aspect-[1/10] absolute left-[50%] top-[5%] -rotate-[3deg] rounded-lg shadow-[0vmin_1vmin_4vmin_rgba(0,0,0,0.8);] z-[100] overflow-hidden"
          >
            <div className="cap bg-[linear-gradient(to_right,_rgb(212,221,236)_10%,_rgb(255,255,255)_45%_55%,_rgb(212,221,236)_90%)] w-full h-[20%]"></div>
          </div>
          <div className="wandline"></div>
          <div ref={tilesRef} className="flex">
            {tilesData.map((tile) => (
              <div
                key={tile.id}
                className="tile first:rotate-[3deg] first:z-[3] [&:nth-child(2)]:rotate-[-2deg] [&:nth-child(3)]:rotate-[5deg] [&:nth-child(2)]:z-[2] [&:nth-child(2)]:-ml-[40px] [&:nth-child(3)]:-ml-[40px] [&:nth-child(3)]:z-[1] shadow-[0px_3px_6px_rgba(0,0,0,0.25),inset_0px_0.5px_1px_rgba(255,255,255,0.15%)] flex items-center justify-center gap-2.5 w-[200px] aspect-square relative overflow-hidden bg-transparent backdrop-blur-xl rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:border-gray-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              >
                <FallbackImage
                  className={`w-20 h-20 flex items-center justify-center ${tile.color}`}
                />
                <img
                  className="h-full aspect-[1/1] absolute left-0 top-0 object-cover opacity-[var(--opacity)] filter blur-[calc(var(--blur)*10px)]"
                  src={tile.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
