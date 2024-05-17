import { useState } from "react";
import logo from "../../assets/manu.png";

type FooterLinksType = {
  column1: { id: number; title: string; url: string }[];
  column2: { id: number; title: string; url: string }[];
};

const footerLinks: FooterLinksType[] = [
  {
    column1: [
      { id: 1, title: "About", url: "#" },
      { id: 2, title: "Contact", url: "#" },
      { id: 3, title: "Blog", url: "#" },
      { id: 4, title: "Story", url: "#" },
    ],
    column2: [
      { id: 5, title: "Company", url: "#" },
      { id: 6, title: "Product", url: "#" },
      { id: 7, title: "Press", url: "#" },
      { id: 8, title: "More", url: "#" },
    ],
  },
];

export default function Footer10() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setIsSubscribed(true);
    // Reset the subscribed status after 2 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 2000);
  };

  return (
    <section className="px-7 md:px-10 py-10 ">
      <div className=" flex max-w-6xl mx-auto flex-col gap-x-5 gap-y-10 lg:flex-row md:items-start md:justify-between lg:px-10 xl:px-0">
        <div className="flex w-full flex-col items-start gap-y-5 justify-start md:w-1/2 lg:w-1/3">
          <a href="/" className="flex items-center gap-x-2">
            <img className="w-10 h-10 rounded-full" src={logo} alt="" />
            <h2 className="font-bold">Magicui</h2>
          </a>
          <p className=" text-neutral-900 dark:text-white">
            50+ open-source animated component for Design Engineer.
          </p>
        </div>

        <div className="flex items-center justify-start gap-x-10 mt-2.5">
          {Object.keys(footerLinks[0]).map((columnKey) => (
            <ul
              key={columnKey}
              className="text-neutral-900 dark:text-white text-[15px] flex flex-col gap-y-2"
            >
              {footerLinks[0][columnKey as keyof FooterLinksType].map(
                (link: any) => (
                  <li
                    className="hover:underline hover:underline-offset-4"
                    key={link.id}
                  >
                    <a href={link.url}>{link.title}</a>
                  </li>
                )
              )}
            </ul>
          ))}
        </div>

        <div className="flex items-center justify-between mt-2.5">
          <div className="flex flex-col gap-y-1">
            <p className="text-lg font-bold">Contact us</p>
            <p className="text-neutral-500">
              We have a great support team to help you
            </p>
            <div className="flex items-center gap-x-2 pt-3.5">
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-x-2 pt-3.5"
              >
                <input
                  className="w-full p-2 rounded-lg border bg-neutral-50 dark:bg-neutral-900 placeholder:text-sm placeholder:text-neutral-300 dark:placeholder:text-neutral-600"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  className="bg-neutral-900 w-48 dark:bg-white text-white dark:text-neutral-900 px-5 py-2 rounded-lg"
                >
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
