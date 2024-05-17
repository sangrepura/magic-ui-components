import { BsArrowRight } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import Pricingtoggle from "./pricingtoggle";
import { useState } from "react";

export default function Pricing2() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      name: "Free",
      price: "$0",
      yearlyPrice: "$0",
      description:
        "Let top creative talent come to you by posting your job listing on #1 Design Jobs Board.",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
      ],
    },

    {
      name: " Pro",
      price: "$499",
      yearlyPrice: "$1228",
      description:
        "Get your roles filled faster with unlimited access to Dribbble's Job Board and Designer search.",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
      ],
      extraBenefits: "Everything in free plan, plus",
    },
  ];

  return (
    <section className="pricing__section max-w-5xl mx-auto py-10">
      <div className="pricing-headline flex flex-col gap-y-2">
        <div className="flex items-center justify-center flex-col gap-y-3">
          <h3 className="text-3xl sm:text-4xl max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-black dark:text-white">
            Ready to buy the magic?
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400">
            Choose the best package that suits you
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Pricingtoggle
            enabled={enabled}
            setEnabled={setEnabled}
            color="bg-pink-500"
          />
        </div>
        <div className="pricing-card max-w-3xl mx-auto w-full grid place-content-center items-center lg:items-start h-full px-10 lg:px-14 xl:px-2 gap-6 py-8 lg:py-12 lg:pb-20 lg:pt-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`w-fit lg:w-full h-full border border-neutral-300/50 dark:border-neutral-700/50 rounded-xl grid lg:grid-cols-5 place-content-center `}
            >
              <div className="p-5 flex flex-col justify-between gap-y-10 col-span-2 bg-neutral-50 dark:bg-neutral-900 rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl">
                <div className="flex flex-col gap-y-2">
                  <p
                    className={` text-2xl text-black dark:text-white font-semibold`}
                  >
                    {option.name}
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md mx-0">
                    {option.description}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-sm font-medium text-black dark:text-white">
                    <span className="text-3xl font-[620] text-black dark:text-white">
                      {enabled ? option.yearlyPrice : option.price}
                      <span className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
                        {enabled ? "/year" : "/month"}
                      </span>
                    </span>
                  </h3>
                  <button
                    className={`my-2 flex text-base items-center justify-center rounded-lg h-10 w-full font-bold  border border-slate-500 hover:shadow-md hover:drop-shadow-md transition duration-100 text-white dark:bg-neutral-100 bg-neutral-800 dark:text-neutral-800`}
                  >
                    <span className="tracking-tight">Choose Plan</span>

                    <BsArrowRight className="ml-2" />
                  </button>
                </div>
              </div>

              <div className="pricing-features flex flex-col justify-center col-span-3 gap-y-5 p-5 lg:w-2/3">
                {option.extraBenefits && (
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm font-[400]">
                    {option.extraBenefits}
                  </p>
                )}
                {option.features.map((feature, index) => (
                  <div key={index} className="flex gap-x-3">
                    <div className="border border-pink-500 dark:border-pink-500 rounded-full h-5 w-5 flex items-center justify-center">
                      <BiCheck className="text-pink-500 text-lg" />
                    </div>
                    <p className="text-black dark:text-white">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
