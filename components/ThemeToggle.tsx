"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        switch (theme) {
            case "light":
                setTheme("dark");
                break;
            case "dark":
                setTheme("light");
                break;
            default:
                break;
        }
    };

    const toggleTheme = () => {
        switchTheme();
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:cursor-pointer hover:shadow-xl p-4"
            onClick={toggleTheme}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 text-blue-700 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] text-blue-700 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
