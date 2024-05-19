export default function Cta3() {
  return (
    <section className="max-w-5xl mx-auto p-7 border rounded-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-3.5">
        <div className="flex flex-col gap-y-3 items-center md:items-start">
          <h3 className="text-3xl md:text-3xl lg:text-4xl text-center md:text-left font-bold leading-[1.15] text-black dark:text-white">
            Pick your favourite React Library
          </h3>
          <p className="text-center max-w-xs md:max-w-full mx-auto md:mx-0 md:text-left text-neutral-500 dark:text-neutral-400">
            Here is your favourite React Library that you want to buy, it's
            MagicUI.
          </p>
        </div>
        <a
          href="/"
          className="bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-800 hover:ring-2 hover:ring-neutral-800 dark:hover:ring-neutral-200 hover:ring-offset-2 transition-all ease-linear duration-100 hover:ring-offset-current w-48 h-10 rounded-lg flex items-center justify-center"
        >
          Buy now
        </a>
      </div>
    </section>
  );
}
