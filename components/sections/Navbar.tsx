import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ThemeToggle";
import { ResumeButton } from "../ResumeButton";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      href: "#",
    },
    {
      id: 2,
      title: "Projects",
      href: "#",
    },
    {
      id: 3,
      title: "Contact Me",
      href: "#",
    },
  ];
  return (
    <nav className="hidden items-center justify-between px-8 py-5 sm:flex bg-slate-100 dark:bg-slate-900">
      <Button
        asChild
        className="rounded-full size-10 bg-blue-700 hover:bg-blue-700"
      >
        <Link href="/">S</Link>
      </Button>
      <div className="flex items-center justify-center">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="px-5 hover:cursor-pointer"
          >
            <h3 className="font-semibold text-gray-600 dark:text-white">
              {link.title}
            </h3>
          </Link>
        ))}
        <div className="flex items-center px-5">
          <ResumeButton />
        </div>
        <div className="dark:text-white">|</div>
        <div className="px-5">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
