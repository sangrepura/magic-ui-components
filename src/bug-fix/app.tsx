import Navbar from "../components/navbar";
import ClientTweetCard from "../components/magicui/client-tweet-card";

export default function BugFix() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center py-5 ">
        <ClientTweetCard id="1790521517278908626" />
      </div>
    </>
  );
}
