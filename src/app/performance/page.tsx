"use client"

import { motion } from "framer-motion"
import { Activity } from "lucide-react"
import { BundleSizeChart, LighthouseChart, WebVitalsChart } from "@/components/performance/metrics-charts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PerformancePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-12">
                    <div className="inline-flex items-center rounded-lg bg-chart-2/10 p-3 mb-6">
                        <Activity className="h-6 w-6 text-chart-2" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Performance Metrics
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        A transparent view into the Core Web Vitals, Lighthouse scores, and
                        architectural optimizations of this portfolio. Fast loads are a feature, not an afterthought.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Lighthouse Audit</CardTitle>
                            <CardDescription>Perfect 100/100 across all primary metrics</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LighthouseChart />
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Bundle Size Trends</CardTitle>
                            <CardDescription>Evolution of JavaScript payload across Next.js framework updates</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BundleSizeChart />
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Core Web Vitals</CardTitle>
                            <CardDescription>Real-User Monitoring metrics per primary route</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <WebVitalsChart />
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
        </div>
    )
}
