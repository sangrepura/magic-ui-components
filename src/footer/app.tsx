import Navbar from "../components/navbar";
import Footer2 from "./components/footer2";
import Footer3 from "./components/footer3";
import Footer4 from "./components/footer4";
import Footer5 from "./components/footer5";
import Footer6 from "./components/footer6";
import Footer7 from "./components/footer7";
import Footer8 from "./components/footer8";
import Footer9 from "./components/footer9";
import Footer10 from "./components/footer10";

export default function FooterPage() {
  return (
    <main className="footer__page">
      <Navbar />
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-2
        </h2>
      </div>
      <div className="p-5 md:px-0">
        <Footer2 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-3
        </h2>
      </div>
      <div>
        <Footer3 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-4
        </h2>
      </div>
      <div>
        <Footer4 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-5
        </h2>
      </div>
      <div>
        <Footer5 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-6
        </h2>
      </div>
      <div className="p-5 md:px-0">
        <Footer6 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-7
        </h2>
      </div>
      <div>
        <Footer7 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-8
        </h2>
      </div>
      <div className="p-5 lg:px-0">
        <Footer8 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-b border-t">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-9
        </h2>
      </div>
      <div>
        <Footer9 />
      </div>
      <div className="h-[10vh] bg-neutral-100 dark:bg-neutral-900 border-t border-b">
        <h2 className="font-bold text-2xl flex items-center h-full justify-center">
          Footer-10
        </h2>
      </div>
      <div>
        <Footer10 />
      </div>
    </main>
  );
}
