export default function PricingToggle({
  enabled,
  setEnabled,
  color,
}: {
  enabled: boolean;
  setEnabled: (e: boolean) => void;
  color?: string;
}) {
  return (
    <div className="flex items-center">
      <span className={`font-bold mr-2 ${enabled ? "text-gray-500/60" : ""}`}>
        Monthly
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? `${color}` : "bg-neutral-200 dark:bg-neutral-400"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform ${
              enabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </div>
      </label>
      <span className={`font-bold ml-2 ${enabled ? "" : "text-gray-500/60"}`}>
        Yearly
      </span>
    </div>
  );
}
