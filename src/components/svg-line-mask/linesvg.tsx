import * as React from "react";
const LineSvgComponent = () => {
  return (
    <section className="lazy-background-image lazy-background-image-backgroundImage bg-[url('https://www.dimension.dev/build/q-0ba0c5bc.png')] bg-cover lazy-background-image-loaded relative sync mx-auto h-[2000px] w-[1440px] my-20 overflow-hidden">
      <div className="sync-lines-wrapper flex absolute top-[1px] left-[86px] max-w-7xl mx-auto w-full h-full justify-between">
        <div className="sync-lines">
          <div
            className="lazy-background-image lazy-background-image-maskImage lazy-background-image-loaded sync-line"
            style={
              {
                "--background-image": `url('https://www.dimension.dev/build/q-a5fdc0f3.png')`,
              } as React.CSSProperties
            }
          >
            <div></div>
          </div>
          <div
            className="lazy-background-image lazy-background-image-maskImage lazy-background-image-loaded sync-line"
            style={
              {
                "--background-image": `url('https://www.dimension.dev/build/q-e14375d3.png')`,
              } as React.CSSProperties
            }
          >
            <div></div>
          </div>
        </div>
        <div className="sync-lines">
          <div
            className="lazy-background-image lazy-background-image-maskImage lazy-background-image-loaded sync-line"
            style={
              {
                "--background-image": `url('https://www.dimension.dev/build/q-a5fdc0f3.png')`,
              } as React.CSSProperties
            }
          >
            <div></div>
          </div>
          <div
            className="lazy-background-image lazy-background-image-maskImage lazy-background-image-loaded sync-line"
            style={
              {
                "--background-image": `url('https://www.dimension.dev/build/q-e14375d3.png')`,
              } as React.CSSProperties
            }
          >
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineSvgComponent;
