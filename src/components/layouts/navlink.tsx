"use client";

import { Type__Navlink } from "@/utils/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  data,
  color = "white",
}: {
  data: Type__Navlink;
  color: "white" | "black";
}) => {
  const { link, text } = data;
  const pathname = usePathname();
  let matched = false;
  if (pathname !== "/" && link !== "/") {
    matched = pathname.includes(link);
  } else if (pathname === link) {
    matched = true;
  }
  return (
    <Link
      href={link}
      className={clsx("lato-bold text-[20px] py-1", {
        "border-b-4 border-white": matched && color === "white",
        "border-b-4 border-black": matched && color === "black",
      })}
    >
      {text}
    </Link>
  );
};

export default NavLink;
