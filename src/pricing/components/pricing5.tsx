import React from "react";

interface Plan {
  name: string;
  price?: string;
  description: string;
  features?: string[];
  buttonText: string;
  popular: boolean;
}

const plans: Plan[] = [
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

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <div
    className={`overflow-hidden rounded-lg border border-neutral-300/30 bg-white dark:border-neutral-700/30 dark:bg-neutral-950 ${
      plan.popular ? "relative" : ""
    }`}
  >
    {plan.popular && (
      <div className="absolute right-0 top-0 rounded-bl-lg bg-neutral-900 px-3 py-1 text-white dark:bg-neutral-100 dark:text-neutral-900">
        Most Popular
      </div>
    )}
    <div
      className={`p-6 md:p-8 ${
        plan.popular
          ? "rounded-lg border-2 border-neutral-800 dark:border-neutral-600"
          : "border border-transparent"
      }`}
    >
      <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
      <p className="mb-6 text-neutral-500 dark:text-neutral-400">
        {plan.description}
      </p>
      {plan.price && (
        <div className="mb-6 flex items-baseline">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="ml-2 text-sm text-neutral-500">/month</span>
        </div>
      )}
      {plan.features && (
        <ul className="mb-8 space-y-2">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <CheckIcon className="mr-2 h-5 w-5 text-primary" />
              <span className="font-medium text-neutral-900 dark:text-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}
      <button className="inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary px-8 font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 hover:drop-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        {plan.buttonText}
      </button>
    </div>
  </div>
);

export default function Pricing() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-y-5 py-12 md:py-20">
      <div className="w-full px-4 md:px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {plans.slice(0, 2).map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
      <div className="w-full px-4 md:px-6">
        <div className="flex items-center justify-between overflow-hidden rounded-lg border dark:bg-neutral-950">
          <div className="p-6 md:p-8">
            <h2 className="mb-2 text-2xl font-bold">{plans[2].name}</h2>
            <p className="mb-6 text-neutral-500 dark:text-neutral-400">
              {plans[2].description}
            </p>
            <button className="inline-flex h-11 w-fit items-center justify-center whitespace-nowrap rounded-lg bg-primary px-8 font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 hover:drop-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              {plans[2].buttonText}
            </button>
          </div>
          <div className="relative isolate hidden h-[240px] w-full before:absolute before:left-32 before:top-0 before:z-[-1] before:h-full before:w-full before:skew-x-[-45deg] before:border-l before:border-neutral-300 before:bg-neutral-200 before:content-[''] dark:before:border-neutral-500 before:dark:bg-neutral-800 md:block lg:w-2/3">
            <div className="ml-12 flex h-full w-full flex-col items-center justify-center gap-y-0.5">
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
  );
}
