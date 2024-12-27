"use client";
import { motion } from "framer-motion";
import React from "react";

interface HeroButtonProps {
    className: string;
    children: React.ReactNode;
}

const HeroButton = ({ className, children }: HeroButtonProps) => {
    return (
        <motion.div
            className={`${className} max-sm:w-full hover:cursor-pointer text-xl mt-10 rounded-full`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    );
};

export default HeroButton;
