"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = "",
    fullWidth = false
}: {
    children: ReactNode
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    className?: string
    fullWidth?: boolean
}) {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
        none: { x: 0, y: 0 },
    }

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, type: "spring", bounce: 0.3 }}
            className={`${className} ${fullWidth ? 'w-full' : ''}`}
        >
            {children}
        </motion.div>
    )
}

export function StaggerContainer({
    children,
    className = "",
    delay = 0
}: {
    children: ReactNode
    className?: string
    delay?: number
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({
    children,
    className = ""
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function HoverCard({
    children,
    className = ""
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            className={`transition-shadow hover:shadow-xl ${className}`}
        >
            {children}
        </motion.div>
    )
}
