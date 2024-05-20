export default function Pricing7() {
  const plans = [
    {
      name: "Basic",
      price: "$9 / month",
      features: [
        { text: "Integrations", available: true },
        { text: "Shared links", available: true },
        { text: "Importing and exporting", available: false },
        { text: "Team members", available: false },
      ],
      buttonText: "Buy plan",
    },
    {
      name: "Premium",
      price: "$59 / month",
      features: [
        { text: "Integrations", available: true },
        { text: "Shared links", available: true },
        { text: "Importing and exporting", available: true },
        { text: "Team members", available: true },
      ],
      buttonText: "Buy plan",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-center">
        Plans for teams of all sizes
      </h2>
      <p className="text-center text-neutral-600 mt-2">
        Choose the best package that suits you
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 flex flex-col gap-y-5"
          >
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-2xl font-bold">{plan.price}</p>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">
              {plan.buttonText}
            </button>
            <div className="mt-2">
              <h4 className="font-semibold">Features</h4>
              <ul className="mt-2 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {feature.available ? (
                      <CheckIcon className="text-green-500 mr-2" />
                    ) : (
                      <XIcon className="text-neutral-700/30 dark:text-neutral-300/30 mr-2" />
                    )}
                    <span
                      className={
                        feature.available
                          ? ""
                          : "text-neutral-700/30 dark:text-neutral-300/30"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
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

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
