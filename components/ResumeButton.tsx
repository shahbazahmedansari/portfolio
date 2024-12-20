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
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <ArrowDownToLine />
        <Link href="/">Resume</Link>
      </Button>
    </div>
  );
}
