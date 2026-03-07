"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Moon, Sun, Terminal, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LocalTime } from "@/components/ui/local-time"

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Playground", path: "/playground" },
    { name: "Performance", path: "/performance" },
    { name: "Lab", path: "/lab" },
]

export function Navbar() {
    const pathname = usePathname()
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => setMounted(true), [])

    return (
        <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2 group">
                    <span className="text-primary font-mono font-bold text-xl group-hover:text-white transition-colors">{"//"}</span>
                    <span className="font-bold inline-block font-mono tracking-wider text-lg">KAD</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative text-xs font-mono tracking-widest uppercase transition-colors hover:text-primary",
                                pathname === item.path
                                    ? "text-primary font-semibold"
                                    : "text-muted-foreground"
                            )}
                        >
                            {pathname !== item.path && <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1">{"//"}</span>}
                            {item.name}
                            {pathname === item.path && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-4">
                        <LocalTime />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="hidden" // Hiding theme toggle since we are prioritizing dark mode, but keeping code for safety
                        >
                            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                        <Button asChild className="hidden lg:flex rounded-full px-6 font-mono text-xs tracking-widest uppercase hover:scale-105 transition-transform">
                            <a href="/#contact">Let's Talk</a>
                        </Button>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <div className="flex md:hidden items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {mounted ? (
                            theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )
                        ) : (
                            <div className="h-5 w-5" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden border-b bg-background px-4 py-4"
                >
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.path
                                        ? "text-primary font-bold"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    )
}
