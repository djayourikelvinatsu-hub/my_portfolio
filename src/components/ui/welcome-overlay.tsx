"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const lines = [
  { text: "// Hello, World.", delay: 0.2, className: "text-primary font-mono text-sm sm:text-base tracking-widest" },
  { text: "Welcome to Kelvin's Portfolio", delay: 0.7, className: "text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight" },
  { text: "Great software starts with a great engineer.", delay: 1.3, className: "text-muted-foreground text-base sm:text-xl font-light max-w-lg text-center" },
]

export function WelcomeOverlay() {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const seen = sessionStorage.getItem("welcome-seen")
    if (!seen) {
      setVisible(true)
      sessionStorage.setItem("welcome-seen", "1")
    }
  }, [])

  const dismiss = () => {
    setExiting(true)
    setTimeout(() => setVisible(false), 700)
  }

  useEffect(() => {
    if (!visible) return
    const handleKey = () => dismiss()
    window.addEventListener("keydown", handleKey, { once: true })
    return () => window.removeEventListener("keydown", handleKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  if (!visible) return null

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="welcome"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6 cursor-pointer select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.65, ease: "easeInOut" } }}
          transition={{ duration: 0.4 }}
          onClick={dismiss}
          aria-label="Welcome screen — click or press any key to continue"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm" />

          {/* Ambient glow accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                className={line.className}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: line.delay, ease: "easeOut" }}
              >
                {i === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {line.text}
                  </span>
                ) : (
                  line.text
                )}
              </motion.p>
            ))}

            {/* Prompt */}
            <motion.div
              className="mt-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
            >
              <motion.span
                className="text-xs sm:text-sm font-mono text-primary/70 tracking-widest uppercase border border-primary/20 rounded-full px-5 py-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                [ click or press any key to explore ]
              </motion.span>
            </motion.div>

            {/* Decorative dots */}
            <motion.div
              className="flex gap-1.5 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.4 }}
            >
              {[0, 0.15, 0.3].map((d, i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary/50"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: d }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
