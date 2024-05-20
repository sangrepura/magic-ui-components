const plans = [
  {
    title: "Freelancer",
    description: "The essentials to provide your best work for clients.",
    price: "$24",
    priceUnit: "/month",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    buttonColor: "bg-neutral-800",
    buttonHoverColor: "hover:bg-neutral-700",
    height: "h-[450px]",
  },
  {
    title: "Startup",
    description: "A plan that scales with your rapidly growing business.",
    price: "$32",
    priceUnit: "/month",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    buttonColor: "bg-pink-600",
    buttonHoverColor: "hover:bg-pink-700",
    mostPopular: true,
    height: "h-[500px]",
  },
  {
    title: "Enterprise",
    description: "Dedicated support and infrastructure for your company.",
    price: "$48",
    priceUnit: "/month",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
    ],
    buttonColor: "bg-neutral-800",
    buttonHoverColor: "hover:bg-neutral-700",
    height: "h-[450px]",
  },
];

export default function Pricing8() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end py-20 px-5">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`w-[350px] p-6 py-8 relative grid gap-y-5 items-start justify-between h-full ${
            plan.height
          } ${plan.mostPopular ? "border lg:rounded-t-xl" : ""} ${
            index === 0
              ? "lg:border-r-0 rounded-t-xl lg:rounded-tl-xl lg:rounded-tr-none lg:rounded-bl-xl"
              : "border"
          } ${
            index === 2
              ? "lg:border-l-0 lg:rounded-tr-xl rounded-b-xl lg:rounded-bl-none lg:rounded-br-xl"
              : "border"
          }`}
        >
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="text-neutral-500">{plan.description}</p>
              {plan.mostPopular && (
                <span className="absolute top-2 right-2 dark:bg-neutral-100 bg-neutral-900 text-neutral-100 dark:text-neutral-900 px-2 py-1 rounded-md text-sm">
                  Most popular
                </span>
              )}
            </div>
            <div className="flex flex-col gap-y-5 h-full justify-between">
              <div className="text-5xl font-bold">
                {plan.price}
                <span className="text-2xl font-medium">{plan.priceUnit}</span>
              </div>
              <ul className=" text-neutral-500 flex flex-col gap-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className={`${plan.buttonColor} text-white w-full py-2 px-4 rounded-md ${plan.buttonHoverColor} transition-colors`}
            >
              Buy plan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
