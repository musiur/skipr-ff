import BrandLogo from "@/app/_utils/assets/brand__logo";
import { Type__Navlink } from "@/utils/types";
import NavLink from "./navlink";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import ANIM__ScrollFade from "../anims/fadeupdown.anim";

const Navbar = ({ color = "white" }: { color?: "white" | "black" }) => {
  return (
    <header>
      <ANIM__ScrollFade
        className={clsx(
          "fixed top-0 left-0 w-full z-50 py-[44px] backdrop-blur-2xl",
          {
            "[&>*]:text-white": color === "white",
            "[&>*]:text-black": color === "black",
          }
        )}
      >
        <nav className="container flex items-center justify-between">
          <BrandLogo
            className={clsx("max-w-[170px]", {
              "stroke-white fill-white": color === "white",
              "stroke-black fill-black": color === "black",
            })}
          />
          <ul className="hidden md:flex items-center gap-4 justify-end">
            {Data__Links.map((link: Type__Navlink) => {
              return (
                <li key={link.id}>
                  <NavLink data={link} color={color} />
                </li>
              );
            })}
          </ul>
          <div className="block md:hidden">
            <MenuIcon className="w-8 h-8" />
          </div>
        </nav>
      </ANIM__ScrollFade>
    </header>
  );
};

export default Navbar;

const Data__Links: Type__Navlink[] = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Tech",
    link: "/tech",
  },
  {
    id: 3,
    text: "The Skipr Scope",
    link: "/the-skipr-scope",
  },
  {
    id: 4,
    text: "Skipr",
    link: "/skipr",
  },
];
