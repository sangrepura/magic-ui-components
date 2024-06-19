import Navbar from "../components/navbar";
import ClientTweetCard from "../components/magicui/client-tweet-card";
import { BentoDemo } from "./bento-grid";

export default function BugFix() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center py-5 ">
        <ClientTweetCard id="1790521517278908626" />
      </div>
      <BentoDemo />
    </div>
  );
}
