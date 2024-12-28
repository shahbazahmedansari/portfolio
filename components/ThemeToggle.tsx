"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            size="icon"
            variant="secondary"
            className="rounded-full hover:cursor-pointer hover:shadow-xl"
            onClick={() => {
                if (theme === "light") {
                    console.log("dark");
                    setTheme("dark");
                } else if (theme === "dark") {
                    console.log("light");
                    setTheme("light");
                }
            }}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 text-blue-700 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] text-blue-700 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}
