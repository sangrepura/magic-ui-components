import Navbar from "../components/navbar";
import Footer2 from "./components/footer2";
import Footer3 from "./components/footer3";
import Footer4 from "./components/footer4";
import Footer5 from "./components/footer5";
import Footer6 from "./components/footer6";
import Footer7 from "./components/footer7";
import Footer8 from "./components/footer8";
import Footer9 from "./components/footer9";
import Header2 from "../header/header2";
import Footer10 from "./components/footer10";

export default function Footer() {
  return (
    <div className="footer">
      <Navbar />
      <Header2 />
      <div className="border">
        <Footer2 />
      </div>
      <div className="border">
        <Footer3 />
      </div>
      <div className="border">
        <Footer4 />
      </div>
      <div className="border">
        <Footer5 />
      </div>
      <div className="border">
        <Footer6 />
      </div>
      <div className="border">
        <Footer7 />
      </div>
      <div className="border">
        <Footer8 />
      </div>
      <div className="border">
        <Footer9 />
      </div>
      <div className="border">
        <Footer10 />
      </div>
    </div>
  );
}
