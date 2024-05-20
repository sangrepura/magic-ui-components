export default function Cta6() {
  return (
    <section className="w-full py-14 px-5 lg:px-0">
      <div className="container px-0 grid md:grid-cols-2 items-center justify-between max-w-5xl mx-auto rounded-xl border">
        <div className="relative mx-auto aspect-video overflow-hidden rounded-l-xl sm:w-full h-full bg-red-500">
          <img
            alt="Workflow"
            className="object-cover object-center w-full h-full"
            src="https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-neutral-900/20 dark:to-neutral-800/20" />
        </div>
        <div className="flex flex-col gap-y-3.5 p-7 md:p-10">
          <div className="space-y-2">
            <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl text-balance">
              “One of the best and{" "}
              <span className="text-primary bg-lime-400 dark:bg-lime-500 px-2">
                unique react animated library
              </span>{" "}
              component I have seen and it boosed my productivity in no time.“
            </blockquote>
            <div className="py-2.5">
              <div className="font-semibold">Jane Smith</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                CEO, Acme Corporation
              </div>
            </div>
          </div>
          <a
            className="inline-flex h-11 text-base items-center justify-center rounded-md bg-neutral-900 px-8 font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
            href="#"
          >
            Buy now
          </a>
        </div>
      </div>
    </section>
  );
}
