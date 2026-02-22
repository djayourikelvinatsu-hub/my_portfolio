"use client"

import React, { useState, useEffect } from "react"
import { LiveProvider, LiveError, LivePreview } from "react-live"
import Editor from "@monaco-editor/react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface CodeEditorProps {
    initialCode: string
    scope?: Record<string, any>
}

export function LiveCodeEditor({ initialCode, scope }: CodeEditorProps) {
    const [code, setCode] = useState(initialCode)
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="flex flex-col border-b lg:border-b-0 lg:border-r">
                <div className="p-3 border-b bg-muted/50 font-mono text-sm flex justify-between items-center text-muted-foreground">
                    <span>Editor</span>
                    <Button variant="ghost" size="sm" onClick={() => setCode(initialCode)}>
                        Reset
                    </Button>
                </div>
                <div className="h-[400px]">
                    {mounted && (
                        <Editor
                            height="100%"
                            defaultLanguage="javascript"
                            theme={theme === "dark" ? "vs-dark" : "light"}
                            value={code}
                            onChange={(value) => setCode(value || "")}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                padding: { top: 16 },
                                scrollBeyondLastLine: false,
                            }}
                        />
                    )}
                </div>
            </div>

            <div className="flex flex-col relative">
                <div className="p-3 border-b bg-muted/50 font-mono text-sm text-muted-foreground flex justify-between items-center">
                    <span>Live Preview</span>
                </div>
                <LiveProvider code={code} scope={scope}>
                    <div className="flex-1 p-6 bg-background/50 overflow-auto relative">
                        <LivePreview />
                    </div>
                    <LiveError className="absolute bottom-0 left-0 right-0 p-4 bg-destructive/10 text-destructive font-mono text-xs border-t border-destructive/20 max-h-[150px] overflow-auto" />
                </LiveProvider>
            </div>
        </div>
    )
}
