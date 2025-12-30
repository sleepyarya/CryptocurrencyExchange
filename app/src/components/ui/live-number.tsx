"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface LiveNumberProps {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
}

export function LiveNumber({ value, prefix = "", suffix = "", decimals = 2, className = "" }: LiveNumberProps) {
    const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
    const displayValue = useTransform(spring, (current) => current.toFixed(decimals));

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return (
        <motion.span className={className}>
            {prefix}
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </motion.span>
    );
}
