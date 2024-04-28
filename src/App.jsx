import Homepage from "./components/homepage/homepage";
import { Route, Routes } from "react-router-dom";
import Page2 from "./components/page-2/app";

export default function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
}
