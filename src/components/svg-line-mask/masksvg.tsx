import "../svg-line-mask/mask.css";

export default function MaskSvg() {
  return (
    <section className="h-[70vh] flex items-center justify-center p-10">
      <div className="hidden md:block">
        <div className="bg-[url('../../../integrate.svg')] h-[50vh] w-[500px] bg-contain bg-center bg-no-repeat relative">
          <div className="wrapper absolute top-[95px] left-[65px]">
            <div className="linesync relative h-[50vh] w-[500px]">
              <div
                className="maskimage z-[1] h-[458px] w-[370px] bg-contain bg-center bg-no-repeat absolute left-0"
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
          <div className="wrapper absolute top-[234px] left-[65px]">
            <div className="linesync relative h-[50vh] w-[500px]">
              <div
                className="maskimage z-[1] h-[458px] w-[370px] bg-contain bg-center bg-no-repeat absolute left-0"
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
          <div className="wrapper absolute top-[238px] left-[65px]">
            <div className="linesync relative h-[50vh] w-[500px]">
              <div
                className="maskimage z-[1] h-[458px] w-[370px] bg-contain bg-center bg-no-repeat absolute left-0"
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
