const pricingPlans = [
  {
    title: "Starter",
    description: "Perfect for individuals and small teams.",
    price: "$9",
    features: [
      "Up to 5 users",
      "10 GB storage",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
  },
  {
    title: "Pro",
    description: "Ideal for growing teams and businesses.",
    price: "$29",
    features: [
      "Up to 25 users",
      "100 GB storage",
      "Advanced analytics",
      "Priority email support",
      "Custom branding",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    description: "Tailored for large teams and organizations.",
    price: "$99",
    features: [
      "Unlimited users",
      "1 TB storage",
      "Enterprise-grade analytics",
      "Dedicated account manager",
      "Custom integrations",
    ],
    popular: false,
  },
];

export default function Pricing4() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-8 justify-center">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl ${
              plan.popular
                ? "relative border-2 border-neutral-800 dark:border-neutral-400/60"
                : "border border-neutral-200"
            } bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 flex flex-col justify-between`}
          >
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1.5">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  {plan.description}
                </p>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  /month
                </span>
              </div>
              {plan.popular && (
                <div className="w-fit bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900 px-3 py-1 rounded-full inline-block text-sm font-semibold">
                  Most Popular
                </div>
              )}
            </div>
            <div className="mt-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 fill-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
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
