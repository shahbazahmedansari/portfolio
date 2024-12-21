"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export function ResumeButton() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <ArrowDownToLine />
        <Link href="/" className="font-semibold text-gray-600 dark:text-white">Resume</Link>
      </Button>
    </div>
  );
}
