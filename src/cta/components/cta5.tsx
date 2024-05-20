import SideImage from "../../assets/dark-grid-1.jpg";

export default function Cta5() {
  return (
    <section className="w-full py-14 px-5 lg:px-0">
      <div className="container px-0 grid md:grid-cols-2 items-center justify-between max-w-5xl mx-auto rounded-xl border">
        <div className="flex flex-col gap-y-5 p-7 lg:p-10 order-2 md:order-1">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl/tight">
              Make animated components magical
            </h2>
            <p className="max-w-[600px] text-neutral-500 md:text-base/[1.5] lg:text-base/[1.5] xl:text-lg/[1.5] dark:text-neutral-400">
              Here is your favourite React Library that you want to buy, it's
              MagicUI. Make your website bold and make your components magical.
            </p>
          </div>
          <a
            className="inline-flex h-11 text-base items-center justify-center rounded-md bg-neutral-900 px-8 font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
            href="#"
          >
            Get Started
          </a>
        </div>
        <div className="relative order-1 md:order-2 mx-auto lg:aspect-video overflow-hidden border rounded-xl rounded-l-none md:rounded-r-xl sm:w-full h-full bg-red-500 min-h-[350px]">
          <img
            alt="Workflow"
            className="object-cover object-center w-full h-full"
            src={SideImage}
          />
        </div>
      </div>
    </section>
  );
}
