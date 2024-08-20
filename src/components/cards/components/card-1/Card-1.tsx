import slackIcon from "../../../../assets/slackicon.svg";
import driveIcon from "../../../../assets/driveicon.svg";
import youtubeIcon from "../../../../assets/youtubeicon.svg";

export default function Card1() {
  return (
    <section className="p-10 xl:p-0">
      <div className=" max-w-full sm:max-w-md w-full border bg-white p-4 pr-0 rounded-md overflow-hidden cursor-pointer">
        <div className="flex items-center justify-between gap-x-10 group">
          <div className="w-2/3 flex flex-col gap-y-2 ">
            <h2 className="text-lg font-bold">Integration made simple</h2>
            <p className="w-full md:w-4/5 text-base leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              laboriosam, quidem, voluptates, quas doloribus quae quia quibusdam
              voluptas doloremque quod.
            </p>
          </div>
          <div className="w-1/3  relative -mr-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={231}
                height={153}
                fill="none"
                className="absolute top-10 -right-10 z-[10]"
                viewBox="0 0 154 102"
              >
                <path
                  fill="#5B72F8"
                  d="M35 0H1l57.5 75v26.5H75V73L35 0ZM118.459 1H152L95.277 74.892V101H79V72.921L118.459 1Z"
                />
                <path
                  fill="#7384FF"
                  d="M122 1H33l41.82 72.5V102h4.825V73.5L122 1Z"
                />
                <path
                  stroke="#000"
                  d="M58.5 101.5V75L1.5.5h151L95 75v26.5H58.5Z"
                />
              </svg>
              <div className="absolute -top-14 -right-24 z-[5] h-72 w-72 rounded-full border border-slate-100"></div>
              <div className="absolute -top-10 -right-28 z-[4] h-72 w-72 rounded-full border border-slate-200/50"></div>
              <div className="absolute -top-5 -right-32 z-[3] h-72 w-72 rounded-full border border-slate-100"></div>
              <div className="z-[5] bg-white -rotate-6 group-hover:-translate-x-4 group-hover:rotate-6 group-hover:-translate-y-6 transition-all duration-100 ease-in-out rounded-md h-14 w-14 p-1 absolute shadow-[2px_2px_50px_-10px] shadow-teal-800 top-0 right-0 m-auto flex items-center justify-center">
                <img className="w-10 h-10" src={youtubeIcon} alt="chatgpt" />
              </div>
              <div className="z-10 bg-white  group-hover:translate-x-3 rotate-0 group-hover:-rotate-6 -translate-y-3 group-hover:translate-y-3 transition-all duration-100 ease-in-out rounded-md h-14 w-14 p-1 absolute shadow-[2px_2px_50px_-10px] shadow-teal-800 -top-10 -left-10 m-auto flex items-center justify-center">
                <img className="w-10 h-10" src={slackIcon} alt="chatgpt" />
              </div>
              <div className="z-10 bg-white -translate-x-4 rotate-3 group-hover:-translate-x-4 -translate-y-10 group-hover:translate-y-6 transition-all duration-100 ease-in-out rounded-md h-14 w-14 p-1 absolute shadow-[2px_2px_50px_-10px] shadow-teal-800 inset-0 m-auto flex items-center justify-center">
                <img className="w-10 h-10" src={driveIcon} alt="chatgpt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
