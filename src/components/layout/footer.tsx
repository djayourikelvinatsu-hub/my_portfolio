import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function Footer() {
    return (
        <footer className="border-t bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-sm font-semibold tracking-tight">KELVIN ATSU DJAYOURI © {new Date().getFullYear()}</p>
                    <p className="text-xs text-muted-foreground mb-4 mt-1">Built with Next.js, Tailwind, & Framer Motion</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm font-medium mt-2">
                        <a href="mailto:kelvinatsu213@gmail.com" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <Mail className="h-4 w-4" /> kelvinatsu213@gmail.com
                        </a>
                        <a href="tel:0592921133" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-chart-2 hover:text-white transition-all duration-300">
                            <Phone className="h-4 w-4" /> +233 59 292 1133
                        </a>
                        <a href="https://wa.me/233592921133" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-green-500 hover:text-white transition-all duration-300">
                            <FaWhatsapp className="h-4 w-4" /> WhatsApp
                        </a>
                    </div>
                </div>

                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
