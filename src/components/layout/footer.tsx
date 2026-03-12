import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import { FaWhatsapp, FaDev } from "react-icons/fa"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-sm mt-auto">
            <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-sm font-mono tracking-widest text-primary mb-2">{"//"} DEV_KAD</p>
                    <p className="text-sm font-semibold tracking-tight">© {new Date().getFullYear()} All rights reserved.</p>
                    <p className="text-xs text-muted-foreground mb-6 mt-1">Built with Next.js, Tailwind, & Framer Motion</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 py-1 text-xs font-mono tracking-wider uppercase">
                        <a href="mailto:kelvinatsu213@gmail.com" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all duration-300">
                            <Mail className="h-4 w-4" /> Email
                        </a>
                        <a href="tel:0592921133" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 hover:border-chart-2 hover:text-chart-2 transition-all duration-300">
                            <Phone className="h-4 w-4" /> Call
                        </a>
                        <a href="https://wa.me/233592921133" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 hover:border-green-500 hover:text-green-500 transition-all duration-300 w-full sm:w-auto justify-center">
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
                    <a
                        href="https://dev.to/kaddev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <FaDev className="h-5 w-5" />
                        <span className="sr-only">Dev.to</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
