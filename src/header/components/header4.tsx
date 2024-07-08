import { ModeToggle } from "../../components/mode-toggle";
import { FC } from "react";

const Header4: FC = () => {
  return (
    <nav className="flex justify-between items-center w-full sticky top-0 p-5 sm:px-10 z-20 max-w-[1000px] mx-auto">
      <div className="backdrop-blur-[0.0625px] z-[1] h-[20vh]  fixed inset-0 pointer-events-none [mask-image:linear-gradient(0deg,transparent_0%,#000_12.5%,#000_25%,transparent_37.5%)]"></div>
      <div className="backdrop-blur-[0.125px] z-[2] h-[20vh]  fixed inset-0 pointer-events-none [mask-image:linear-gradient(0deg,transparent_12.5%,#000_25%,#000_37.5%,transparent_50%)]"></div>
      <div className="backdrop-blur-[0.25px] z-[3] h-[20vh]  fixed inset-0 pointer-events-none [mask-image:linear-gradient(0deg,transparent_25%,#000_37.5%,#000_50%,transparent_62.5%)]"></div>
      <div className="backdrop-blur-[0.5px] z-[4] h-[20vh]  fixed inset-0 pointer-events-none [mask-image:linear-gradient(0deg,transparent_37.5%,#000_50%,#000_62.5%,transparent_75%)]"></div>
      <div className="backdrop-blur-[1px] z-[5] h-[20vh]  fixed inset-0 pointer-events-none [mask-image:linear-gradient(0deg,transparent_50%,#000_62.5%,#000_75%,transparent_87.5%)]"></div>
      <div className="backdrop-blur-[2px] z-[6] h-[20vh]  fixed inset-0 pointer-events-none [mask-image:linear-gradient(0deg,transparent_62.5%,#000_75%,#000_87.5%,transparent_100%)]"></div>
      <div className="backdrop-blur-[4px] z-[7] h-[20vh]  fixed inset-0 pointer-events-none [mask-image:linear-gradient(0deg,transparent_75%,#000_87.5%,#000_100%,transparent_112.5%)]"></div>
      <a className="z-[10]" href="/">
        Magicui
      </a>
      <div className="z-[10]">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header4;
