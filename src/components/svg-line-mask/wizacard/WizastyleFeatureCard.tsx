import "./wizastyleFeatureCard.css";

export default function WizastyleFeatureCard() {
  return (
    <section className="max-w-sm mx-auto flex items-center justify-center h-[70vh] p-5 md:p-0">
      <div className="mastering-card mastering-card-fully max-w-full w-full h-[416px] relative rounded-3xl overflow-hidden border-2 border-[#e4e8ee] bg-[#f6f7fa] p-[32px_40px] flex flex-col flex-end isolate">
        <div className="mastering-fully absolute top-0 left-0 w-[332px] h-full">
          <img
            alt="Mastering fully background"
            src="https://wiza.co/build/q-d108d5cc.png"
            className="absolute top-0 left-0 w-full h-full z-[2] object-cover select-none pointer-events-none"
          />
          <div className="mastering-squares mastering-squares-animated">
            <div className="mastering-square h-[202px] left-[40px] w-[202px] rounded-xl top-[60px] bg-[#e4e8ee] z-[1]">
              <div></div>
            </div>
            <div className="mastering-square h-[146px] top-[116px] left-[40px] w-[202px] rounded-xl bg-[#e4e8ee] z-[1]">
              <div></div>
            </div>
            <div className="mastering-square h-[66px] top-[196px] left-[40px] w-[202px] rounded-xl bg-[#e4e8ee] z-[1]">
              <div></div>
            </div>
          </div>
          <div className="mastering-squares">
            <div className="mastering-square"></div>
            <div className="mastering-square"></div>
            <div className="mastering-square"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
