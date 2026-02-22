"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import { LiveCodeEditor } from "@/components/playground/live-editor"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const buttonDemoCode = `
function ButtonDemo() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg bg-card text-card-foreground shadow-sm">
      <h3 className="text-xl font-bold">Interactive Counter</h3>
      <p className="text-muted-foreground">Current count is: {count}</p>
      <div className="flex gap-2">
        <Button onClick={() => setCount(c => c - 1)} variant="outline">
          Decrease
        </Button>
        <Button onClick={() => setCount(c => c + 1)}>
          Increase
        </Button>
      </div>
    </div>
  )
}
`.trim()

const scope = {
    Button,
    Card,
    CardContent,
    Input,
    React // Expose React to the live preview scope
}

export default function PlaygroundPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-12">
                    <div className="inline-flex items-center rounded-lg bg-primary/10 p-3 mb-6">
                        <Code2 className="h-6 w-6 text-primary" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Interactive Code Playground
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Experiment with my React components in real-time. Edit the code on the left
                        and see the results instantly on the right. Powered by Monaco Editor.
                    </p>
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted text-xs">1</span>
                            State & Interactive Components
                        </h2>
                        <LiveCodeEditor initialCode={buttonDemoCode} scope={scope} />
                    </section>
                </div>
            </motion.div>
        </div>
    )
}
