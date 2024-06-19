"use client";

import { ArrowRightIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { memo, useState } from "react";

interface PricingOption {
  name: string;
  price: string;
  yearlyPrice: string;
  description: string;
  features?: string[];
  extraBenefits?: string;
}

interface PricingToggleProps {
  enabled: boolean;
  setEnabled: (e: boolean) => void;
  color?: string;
}

interface PricingCardProps {
  option: PricingOption;
  enabled: boolean;
}

const PricingToggle = memo(
  ({ enabled, setEnabled, color }: PricingToggleProps) => (
    <div className="flex items-center">
      <span
        className={`mr-2 font-bold ${enabled ? "text-neutral-500/60" : ""}`}
      >
        Monthly
      </span>
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? `${color}` : "bg-neutral-200 dark:bg-neutral-400"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              enabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </div>
      </label>
      <span
        className={`ml-2 font-bold ${enabled ? "" : "text-neutral-500/60"}`}
      >
        Yearly
      </span>
    </div>
  ),
);

const PricingCard = memo(({ option, enabled }: PricingCardProps) => (
  <div
    className={`h-full w-full border ${
      option.features ? "col-span-2" : "col-span-2 sm:col-span-1"
    } flex flex-col items-stretch rounded-xl border-neutral-300/50 dark:border-neutral-700/50 md:flex-row`}
  >
    <div
      className={`flex flex-col justify-between gap-y-10 p-5 ${
        option.features
          ? "rounded-t-xl md:w-[40%] md:rounded-l-xl md:rounded-tr-none"
          : "w-full rounded-xl"
      } bg-neutral-50 dark:bg-neutral-900`}
    >
      <div className="flex flex-col gap-y-2">
        <p className="text-2xl font-semibold text-black dark:text-white">
          {option.name}
        </p>
        <p className="mx-0 max-w-md text-sm text-neutral-500 dark:text-neutral-400">
          {option.description}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-sm font-medium text-black dark:text-white">
          <span className="text-3xl font-[620] text-black dark:text-white">
            {enabled ? option.yearlyPrice : option.price}
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {enabled ? "/year" : "/month"}
            </span>
          </span>
        </h3>
        <button className="my-2 flex h-10 w-full items-center justify-center rounded-lg border border-slate-500 bg-neutral-800 text-base font-bold text-white transition duration-100 hover:shadow-md hover:drop-shadow-md dark:bg-neutral-100 dark:text-neutral-800">
          <span className="tracking-tight">Choose Plan</span>
          <ArrowRightIcon className="ml-2" />
        </button>
      </div>
    </div>
    {option.features && (
      <div className="pricing-features flex flex-col justify-center gap-y-5 p-5 md:w-[60%] md:pl-10">
        {option.extraBenefits && (
          <p className="text-sm font-[400] text-neutral-500 dark:text-neutral-400">
            {option.extraBenefits}
          </p>
        )}
        {option.features.map((feature, index) => (
          <div key={index} className="flex gap-x-3">
            <CheckCircledIcon className="h-6 w-6 text-green-500" />
            <p className="text-black dark:text-white">{feature}</p>
          </div>
        ))}
      </div>
    )}
  </div>
));

export default function Pricing() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      name: "Free",
      price: "$0",
      yearlyPrice: "$0",
      description:
        "Let top creative talent come to you by posting your job listing on #1 Design Jobs Board.",
    },
    {
      name: "Enterprise",
      price: "$499",
      yearlyPrice: "$1228",
      description:
        "Get your roles filled faster with unlimited access to Dribbble's Job Board and Designer search.",
    },
    {
      name: "Pro",
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
    <section className="pricing__section mx-auto max-w-5xl py-10">
      <div className="pricing-headline flex flex-col gap-y-2">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Pricing
          </h4>
          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Simple pricing for everyone.
          </h2>
          <p className="mt-6 text-balance text-xl leading-8 text-black/80 dark:text-white">
            Choose an <strong>affordable plan</strong> that&apos;s packed with
            the best features for engaging your audience, creating customer
            loyalty, and driving sales.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <PricingToggle
            enabled={enabled}
            setEnabled={setEnabled}
            color="bg-orange-500"
          />
        </div>
        <div className="pricing-card mx-auto grid h-full w-full max-w-3xl grid-cols-2 place-content-center items-center gap-6 px-10 py-8 lg:items-start lg:px-14 lg:py-12 lg:pb-20 lg:pt-8 xl:px-2">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} option={option} enabled={enabled} />
          ))}
        </div>
      </div>
    </section>
  );
}
