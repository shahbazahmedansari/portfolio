import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowDownToLine } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="hidden items-center justify-between px-8 py-5 sm:flex">
      <Button
        asChild
        className="rounded-full size-10 bg-blue-700 hover:bg-blue-700"
      >
        <Link href="/">S</Link>
      </Button>
      <div className="flex items-center justify-center">
        <Link href="/" className="px-5">
          Home
        </Link>
        <Link href="#" className="px-5">
          Projects
        </Link>
        <Link href="#" className="px-5">
          Contact
        </Link>
        <div className="flex items-center px-5">
          <ArrowDownToLine />
          <Link href={"/"}>Resume</Link>
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
