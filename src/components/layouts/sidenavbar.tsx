"use client";

import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import NavLink from "./navlink";

const SideNavbar = ({
  Data__Links,
  color,
}: {
  Data__Links: any;
  color: "black" | "white";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex">
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed top-0 left-0 h-[100dvh] w-full bg-darkish text-white"
      >
        <div className="flex-1 p-4">
          <X
            className="w-8 h-8 ml-auto"
            role="button"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <ul className="flex flex-col gap-4 p-4 justify-end items-end sm:p-8">
          {Data__Links.map((link: any) => {
            return (
              <li key={link.id}>
                <NavLink data={link} color={color} />
              </li>
            );
          })}
        </ul>
      </motion.div>
      <div className="flex-1 p-4">
        <MenuIcon
          className="w-8 h-8"
          role="button"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default SideNavbar;
