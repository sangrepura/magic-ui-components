import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 z-50 items-center justify-between px-10 p-4 bg-neutral-800 dark:bg-neutral-800 backdrop-blur-sm border-b border-dashed border-neutral-700/30">
      <div>
        <a href="/" className="text-xl font-bold text-white">
          MagicUI
        </a>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
