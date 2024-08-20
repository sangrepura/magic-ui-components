import Card1 from "./components/card-1/Card-1";
import Card2 from "./components/card-2/Card-2";
import Card3 from "./components/card-3/Card-3";
import Card4 from "./components/card-4/Card-4";
import Card5 from "./components/card-5/Card-5";

export default function CardShowcase() {
  return (
    <div>
      <div className="h-[50vh] w-full bg-neutral-900 relative flex flex-col items-center justify-center antialiased">
        <Card1 />
      </div>
      <div className="h-fit w-full bg-neutral-100 relative flex flex-col items-center justify-center antialiased py-20 px-5 lg:px-20">
        <Card2 />
      </div>
      <div className="h-fit w-full bg-neutral-900 relative flex flex-col items-center justify-center antialiased py-20 px-5 lg:px-20">
        <Card3 />
      </div>
      <div className="h-fit w-full bg-neutral-100 relative flex flex-col items-center justify-center antialiased py-20 px-5 lg:px-20">
        <Card4 />
      </div>
      <div className="h-fit w-full bg-neutral-100 relative flex flex-col items-center justify-center antialiased py-20 px-5 lg:px-20">
        <Card5 />
      </div>
    </div>
  );
}
