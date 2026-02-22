import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    description?: string
    children: React.ReactNode
    className?: string
}

export function Modal({
    isOpen,
    onClose,
    title,
    description,
    children,
    className,
}: ModalProps) {
    // Prevent body scroll when open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 w-full h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className={cn(
                                "pointer-events-auto w-full max-w-lg overflow-hidden rounded-xl border bg-background p-6 shadow-lg sm:rounded-2xl flex flex-col gap-4",
                                className
                            )}
                        >
                            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                                {title && (
                                    <h2 className="text-lg font-semibold leading-none tracking-tight">
                                        {title}
                                    </h2>
                                )}
                                {description && (
                                    <p className="text-sm text-muted-foreground">{description}</p>
                                )}
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
                                onClick={onClose}
                            >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Close</span>
                            </Button>
                            <div className="flex-1 overflow-y-auto">{children}</div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
