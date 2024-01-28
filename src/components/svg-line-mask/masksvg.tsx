import "../svg-line-mask/mask.css";

export default function MaskSvg() {
  return (
    <section className="h-[800px] flex items-center justify-center p-10">
      <div className="hidden md:block">
        <div className="bg-[url('../../../integrate.svg')] h-[800px] w-[500px] bg-contain bg-center bg-no-repeat relative">
          <div className="wrapper absolute top-[265px] left-[65px]">
            <div className="linesync relative h-[400px] w-[500px]">
              <div
                className="maskimage z-[1] h-full w-[370px] bg-contain bg-center bg-no-repeat absolute left-0"
                style={
                  {
                    "--background-image": `url('../../../firstline.svg')`,
                  } as React.CSSProperties
                }
              >
                <div></div>
              </div>
            </div>
          </div>
          <div className="wrapper absolute top-[404px] left-[65px]">
            <div className="linesync relative h-[800px] w-[500px]">
              <div
                className="maskimage z-[1] h-full w-[370px] bg-contain bg-center bg-no-repeat absolute left-0"
                style={
                  {
                    "--background-image": `url('../../../secondline.svg')`,
                  } as React.CSSProperties
                }
              >
                <div></div>
              </div>
            </div>
          </div>
          <div className="wrapper absolute top-[410px] left-[65px]">
            <div className="linesync relative h-[800px] w-[500px]">
              <div
                className="maskimage z-[1] h-full w-[370px] bg-contain bg-center bg-no-repeat absolute left-0"
                style={
                  {
                    "--background-image": `url('../../../thirdline.svg')`,
                  } as React.CSSProperties
                }
              >
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden text-white flex items-center justify-center">
        <h1 className="text-white text-center">
          Mobile Optimizatin not available
        </h1>
      </div>
    </section>
  );
}
