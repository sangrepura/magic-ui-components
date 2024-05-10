import Navbar from "../components/navbar";
import Header2 from "./header2";
import Header3 from "./header3";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="border">
        <Header2 />
      </div>
      <div className="border">
        <Header3 />
      </div>
    </div>
  );
}
