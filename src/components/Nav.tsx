"use client";

import { useState, useEffect, ReactNode } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";

interface NavProps {
  logo?: string;
  links?: { label: string; icon?: ReactNode; href: string }[];
  defaultOpen?: boolean;
}

const Nav: React.FC<NavProps> = ({ logo, links = [], defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <nav
      className={`bg-light-navbarBackground dark:bg-dark-navbarBackground text-text h-screen p-5 pt-8 ${
        open ? "w-52" : "w-20"
      } duration-500 relative`}
    >
      <BsArrowLeftShort
        className={`border bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground border-light-background dark:border-dark-foreground text-3xl rounded-full absolute -right-3 top-9 cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />

      <div className="w-10 h-10 bg-light-primary dark:bg-dark-primary rounded-md flex justify-center items-center">
        {logo ? (
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
        ) : (
          <div className="text-background dark:text-background text-center font-bold">
            EM
          </div>
        )}
      </div>

      <ul className={`mt-10 space-y-4 ${!open && "hidden"}`}>
        {links.map(({ label, icon, href }, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer"
          >
            {icon && <span className="text-xl">{icon}</span>}
            <a href={href} className="text-sm font-medium">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
