import { Link } from "react-router-dom";

const links = [
  { to: "/header", text: "Nav-header component" },
  { to: "/sticky-header", text: "Sticky Nav-header" },
  { to: "/scroll-header", text: "Scroll Up Visible Nav-header" },
  { to: "/feature", text: "Feature Cards" },
  { to: "/cta", text: "CTA Page" },
  { to: "/pricing", text: "Pricing Page" },
  { to: "/newsletter", text: "Newsletter Page" },
  { to: "/footer", text: "Footer Page" },
  { to: "/text-reveal", text: "Text Reveal" },
  { to: "/bento", text: "Bento Showcase" },
  { to: "/card", text: "Cards" },
  { to: "/shimmer", text: "Shimmer Effect" },
];

export default function Homepage() {
  return (
    <section id="homepage" className="min-h-screen">
      <div className="bg-neutral-800 px-5 h-screen flex flex-col gap-y-10 items-center justify-center w-full">
        <div className="text-white">
          <h1 className="text-4xl font-bold text-white text-balance">
            All the animationed components | Built by Arghya
          </h1>
        </div>
        <ul className="flex flex-wrap items-center justify-start md:justify-center max-w-3xl mx-auto gap-5">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="text-white bg-black p-2 font-normal tracking-wide hover:bg-gray-700 transition-all duration-100 ease-out active:bg-gray-600 rounded-md"
                to={link.to}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
