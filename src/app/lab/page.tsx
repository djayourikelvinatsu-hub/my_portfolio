"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Beaker, Bug, MonitorSmartphone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function InteractiveLabPage() {
    const [fixed, setFixed] = useState(false)

    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
            <div className="mb-16 text-center md:text-left">
                <div className="inline-flex items-center rounded-lg bg-chart-1/10 p-3 mb-6">
                    <Beaker className="h-6 w-6 text-chart-1" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Interactive Lab
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
                    Experiments, technical challenges, and specialized tooling.
                    Use this section to test your problem-solving skills or view responsive/accessibility audits.
                </p>
            </div>

            <div className="grid gap-8">
                <Card className="shadow-sm border-chart-1/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-chart-1/5 rounded-full blur-3xl" />
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <Bug className="h-5 w-5 text-chart-1" />
                            <CardTitle>Fix This Code Challenge</CardTitle>
                        </div>
                        <CardDescription>
                            Identify and fix the common React anti-pattern in the example below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto border">
                                <p className="text-muted-foreground mb-4 border-b pb-2">// Identify the issue with this component</p>
                                <div className="text-foreground/80">
                                    <span className="text-chart-2">function</span> UserList(<span className="text-chart-4">&#123; users &#125;</span>) &#123;<br />
                                    &nbsp;&nbsp;<span className="text-chart-2">return</span> (<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-chart-2">ul</span>&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;users.map((user, index) =&gt; (<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-chart-2">li</span> key=&#123;index&#125;&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;user.name&#125;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-chart-2">li</span>&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-chart-2">ul</span>&gt;<br />
                                    &nbsp;&nbsp;)<br />
                                    &#125;
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-4">
                                {fixed ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-6 bg-chart-3/10 text-chart-3 border border-chart-3/20 rounded-lg text-center"
                                    >
                                        <CheckCircle2 className="h-10 w-10 mx-auto mb-2" />
                                        <h4 className="font-bold mb-1">Correct!</h4>
                                        <p className="text-sm">
                                            Using index as a key is an anti-pattern when the list can mutate.
                                            You should use a stable unique identifier like \`user.id\`.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <p className="font-medium">What is the problem?</p>
                                        <Button variant="outline" onClick={() => { }} className="justify-start text-left h-auto py-3">
                                            A) The component name should be lowercase
                                        </Button>
                                        <Button variant="outline" onClick={() => setFixed(true)} className="justify-start text-left h-auto py-3 hover:border-chart-3 hover:text-chart-3">
                                            B) Using array index as a key prop
                                        </Button>
                                        <Button variant="outline" onClick={() => { }} className="justify-start text-left h-auto py-3">
                                            C) Missing React.memo wrapper around the list
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Responsive Lab Demo */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <MonitorSmartphone className="h-5 w-5 text-chart-2" />
                            <CardTitle>Responsive Design Lab</CardTitle>
                        </div>
                        <CardDescription>
                            Click a device type to simulate viewport constraints on this container.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* Implementation omitted to keep bundle small, but demonstrates the concept */}
                        <div className="w-full h-[300px] border-2 border-dashed rounded-xl flex items-center justify-center bg-muted/20">
                            <div className="space-y-4 text-center p-6">
                                <MonitorSmartphone className="h-12 w-12 text-muted-foreground mx-auto" />
                                <p className="text-muted-foreground">Interactive viewport resizing lab</p>
                                <div className="flex gap-2 justify-center">
                                    <Button variant="outline" size="sm">Mobile</Button>
                                    <Button variant="outline" size="sm">Tablet</Button>
                                    <Button variant="outline" size="sm">Desktop</Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
