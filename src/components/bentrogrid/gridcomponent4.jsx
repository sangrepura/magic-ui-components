import { useEffect } from "react";
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

// switch to requestAnimationFrame if need performance boost
export default function GridComponent4() {
  useEffect(() => {
    const wand = document.getElementById("wand");
    const movingspace = document.getElementById("maindiv");
    const tiles = document.querySelectorAll(".tile");

    movingspace.onmousemove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const wandWidth = wand.offsetWidth;
      const wandHeight = wand.offsetHeight;

      const movingspaceRect = movingspace.getBoundingClientRect();
      const movingspaceWidth = movingspaceRect.width;
      const movingspaceHeight = movingspaceRect.height;

      const wandX = x - movingspaceRect.left - wandWidth / 2;
      const wandY = y - movingspaceRect.top - wandHeight / 8;

      const updatedwandX = movingspaceWidth * -0.15 + wandX * 1.3;
      const updatedwandY = movingspaceHeight * 0.1 + wandY * 0.4;

      const mouseXAsDecimal = wandX / movingspaceWidth;

      for (const tile of tiles) {
        const dimensions = tile.getBoundingClientRect();
        const relativeWandX =
          updatedwandX + movingspaceRect.left - dimensions.left;
        const relativeWandXAsDecimal = Math.max(
          0,
          Math.min(1, relativeWandX / dimensions.width)
        );

        const opacity = relativeWandXAsDecimal;
        const blur = 1 - relativeWandXAsDecimal;

        tile.style.setProperty("--opacity", opacity);
        tile.style.setProperty("--blur", blur);
      }
      wand.animate(
        {
          left: `${updatedwandX}px`,
          top: `${updatedwandY}px`,
          rotate: `${-10 + mouseXAsDecimal * 20}deg`,
        },
        {
          duration: 400,
          fill: "forwards",
        }
      );
    };
    return () => {
      movingspace.onmousemove = null;
    };
  }, []);

  return (
    <div className="h-full flex relative gap-y-10 items-center justify-between w-full max-w-4xl mx-auto py-20 px-5 lg:px-20">
      <div className="flex flex-col gap-y-10 items-center justify-center w-full h-full border border-neutral-700/30 overflow-hidden bg-neutral-800/40 p-10 shadow-lg rounded-2xl ">
        <div className="flex flex-col gap-y-1.5 items-center justify-center">
          <h2 className="mx-4 w-full text-lg text-center font-medium text-balance text-neutral-200 md:text-2xl ">
            Generate magical visuals for your designs
          </h2>
          <p className=" w-full text-base text-center text-balance font-normal text-neutral-200/50 md:text-lg ">
            With Magic Image, you can quickly generate images in Figma while you
            design.
          </p>
        </div>
        <div
          id="maindiv"
          className="relative w-[calc(100%-40px)] max-w-full md:w-full flex items-center justify-center "
        >
          <div
            id="wand"
            className="bg-[linear-gradient(to_right,_rgb(26,24,28)_10%,_rgb(42,40,44)_45%_55%,_rgb(26,24,28)_90%)] w-[40px] aspect-[1/10] absolute left-[50%] top-[5%] -rotate-[3deg] rounded-lg shadow-[0vmin_1vmin_4vmin_rgba(0,0,0,0.8);] z-[100] overflow-hidden"
          >
            <div className="cap bg-[linear-gradient(to_right,_rgb(212,221,236)_10%,_rgb(255,255,255)_45%_55%,_rgb(212,221,236)_90%)] w-full h-[20%]"></div>
          </div>
          <div className="wandline"></div>
          <div id="tiles" className="flex">
            {tilesData.map((tile) => (
              <div
                key={tile.id}
                className={`tile first:rotate-[3deg] first:z-[3] [&:nth-child(2)]:rotate-[-2deg] [&:nth-child(3)]:rotate-[5deg] [&:nth-child(2)]:z-[2] [&:nth-child(2)]:-ml-[40px] [&:nth-child(3)]:-ml-[40px] [&:nth-child(3)]:z-[1] shadow-[0px_3px_6px_rgba(0,0,0,0.25),inset_0px_0.5px_1px_rgba(255,255,255,0.15%)] flex items-center justify-center gap-2.5 w-[200px] aspect-square relative overflow-hidden bg-neutral-800 rounded-xl`}
              >
                <FallbackImage
                  className={`w-20 h-20 flex items-center justify-center ${tile.color}`}
                />
                <img
                  className="h-full aspect-[1/1] absolute left-0 top-0 object-cover opacity-[var(--opacity)] filter blur-[calc(var(--blur)*10px)]"
                  src={tile.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
