"use client"

import * as React from "react"
import { Sparkles, ArrowRight } from "lucide-react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function WelcomeModal() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const [greeting, setGreeting] = React.useState("Welcome to my Portfolio!")
    const [message, setMessage] = React.useState("I'm thrilled you're here. This site is more than just a resume—it's a living sandbox.")

    React.useEffect(() => {
        setMounted(true)

        const hour = new Date().getHours()
        let timeGreeting = "Welcome to my Portfolio!"
        let specificMessage = "I'm thrilled you're here. This site is more than just a resume—it's a living sandbox. Feel free to explore my interactive code playground, deep-dive case studies, and performance dashboards!"

        if (hour < 12) {
            timeGreeting = "Good Morning! 🌅"
            specificMessage = "Grab a coffee and take a look around. This site is more than just a resume—it's a living sandbox. Feel free to explore my interactive code playground, deep-dive case studies, and performance dashboards!"
        } else if (hour < 18) {
            timeGreeting = "Good Afternoon! ☀️"
            specificMessage = "Hope you're having a great day. This site is more than just a resume—it's a living sandbox. Feel free to explore my interactive code playground, deep-dive case studies, and performance dashboards!"
        } else {
            timeGreeting = "Good Evening! 🌙"
            specificMessage = "Thanks for stopping by tonight. This site is more than just a resume—it's a living sandbox. Feel free to explore my interactive code playground, deep-dive case studies, and performance dashboards!"
        }

        setGreeting(timeGreeting)
        setMessage(specificMessage)

        // Check if the user has visited before in this session
        const hasVisited = sessionStorage.getItem("hasVisitedPortfolio")
        if (!hasVisited) {
            // Add a small delay so it doesn't pop up instantly on page load
            const timer = setTimeout(() => {
                setIsOpen(true)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleClose = () => {
        setIsOpen(false)
        sessionStorage.setItem("hasVisitedPortfolio", "true")
    }

    // Prevent hydration mismatch
    if (!mounted) return null

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            className="sm:max-w-[425px] overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

            <div className="flex flex-col items-center text-center py-4 relative z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                >
                    <Sparkles className="h-8 w-8 text-primary" />
                </motion.div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                    {greeting}
                </h2>

                <p className="text-muted-foreground mb-8 text-sm sm:text-base leading-relaxed px-2">
                    {message}
                </p>

                <Button
                    onClick={handleClose}
                    className="w-full sm:w-auto rounded-full px-8 group"
                    size="lg"
                >
                    Enter Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </Modal>
    )
}
