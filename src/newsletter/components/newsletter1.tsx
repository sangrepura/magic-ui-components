import { useState } from "react";
import magicUiLogo from "../../assets/magicui-logo.png";

export default function Newsletter1() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <div className="mx-auto max-w-md space-y-4 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="flex items-center justify-center gap-2 flex-col">
        <img className="w-10 h-10" src={magicUiLogo} alt="MagicUI Logo" />
        <div className="flex items-center justify-center flex-col gap-y-2">
          <h2 className="text-3xl text-center font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Stay up to date
          </h2>
          <p className="text-base text-center text-neutral-500 dark:text-neutral-400 sm:mx-auto sm:max-w-sm text-balance sm:text-lg">
            Subscribe to our newsletter to get the latest updates and news.
          </p>
        </div>
      </div>
      <form className="mt-8 sm:flex sm:justify-center" onSubmit={handleSubmit}>
        <div className="rounded-md w-full">
          <div className="flex rounded-md gap-2">
            <input
              className="h-10 rounded-md border bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-l-md border-neutral-300 px-5 py-3 placeholder-neutral-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder-neutral-400"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-r-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
