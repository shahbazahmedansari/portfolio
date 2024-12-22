import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "../ThemeToggle";

const MobileNav = () => {
  return (
    <nav className="sm:hidden flex items-center justify-between px-8 py-5">
      <Button
        asChild
        className="rounded-full size-10 bg-blue-700 hover:bg-blue-700"
      >
        <Link href="/">S</Link>
      </Button>
      <div className="flex items-center justify-center px-5">
        <div className="px-5">
          <ThemeToggle />
        </div>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <Button
                asChild
                className="rounded-full size-10 bg-blue-700 hover:bg-blue-700 mb-10"
              >
                <Link href="/">S</Link>
              </Button>

              <SheetDescription className="flex flex-col items-center justify-center gap-8">
                <Button
                  asChild
                  className="rounded-full px-16 bg-slate-200 dark:bg-blue-700 text-black dark:text-white"
                >
                  <Link href="/">Home</Link>
                </Button>
                <Button
                  asChild
                  className="rounded-full px-16 bg-slate-200 dark:bg-slate-950 text-black dark:text-white"
                >
                  <Link href="/">Projects</Link>
                </Button>
                <Button
                  asChild
                  className="rounded-full px-16 bg-slate-200 dark:bg-slate-950 text-black dark:text-white"
                >
                  <Link href="/">Contact</Link>
                </Button>
                <Button
                  asChild
                  className="text-blue-700 bg-slate-200 dark:bg-slate-800 rounded-full px-16"
                >
                  <Link href="/">Resume</Link>
                </Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNav;
