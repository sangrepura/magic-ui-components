import SideImage from "../../assets/dark-grid-1.jpg";
export default function Pricing5() {
  const plans = [
    {
      name: "Standard",
      price: "$29",
      description: "Perfect for small teams and startups.",
      features: ["Up to 5 users", "10GB storage", "Basic support"],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$59",
      description: "Ideal for growing teams and businesses.",
      features: ["Unlimited users", "100GB storage", "Priority support"],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Tailored pricing for large teams and enterprises.",
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <>
      <section className="py-12 md:py-20 max-w-5xl mx-auto flex justify-center items-center flex-col gap-y-5">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {plans.slice(0, 2).map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border border-neutral-300/30 dark:border-neutral-700/30 overflow-hidden dark:bg-neutral-950 ${
                  plan.popular ? "relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div
                  className={`p-6 md:p-8 ${
                    plan.popular
                      ? "border-2 border-neutral-800 dark:border-neutral-600 rounded-lg"
                      : "border border-transparent"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-neutral-500 mb-6 dark:text-neutral-400">
                    {plan.description}
                  </p>
                  {plan.price && (
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-neutral-500 text-sm ml-2">
                        /month
                      </span>
                    </div>
                  )}
                  {plan.features && (
                    <ul className="space-y-2 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container px-4 md:px-6">
          <div className=" rounded-lg border flex items-center justify-between overflow-hidden dark:bg-neutral-950">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-2">{plans[2].name}</h2>
              <p className="text-neutral-500 mb-6 dark:text-neutral-400">
                {plans[2].description}
              </p>
              <button className="w-fit inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                {plans[2].buttonText}
              </button>
            </div>
            <div className="h-[220px] hidden md:block w-full lg:w-2/3 isolate relative before:absolute before:content-[''] before:top-0 before:left-28 before:w-full before:h-full before:bg-neutral-200 before:dark:bg-neutral-800 before:skew-x-[-45deg] before:z-[-1] before:border-l before:border-neutral-500 dark:before:border-neutral-100">
              <div className="flex flex-col gap-y-0.5 items-center justify-center h-full w-full ml-12">
                <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100">
                  50% off
                </h1>
                <p className="text-neutral-800 dark:text-neutral-100">
                  for the first 100 customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
