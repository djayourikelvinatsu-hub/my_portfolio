"use client"

import React from "react"
import { motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const lighthouseData = [
    { subject: 'Performance', A: 98, fullMark: 100 },
    { subject: 'Accessibility', A: 100, fullMark: 100 },
    { subject: 'Best Practices', A: 100, fullMark: 100 },
    { subject: 'SEO', A: 100, fullMark: 100 },
    { subject: 'PWA', A: 100, fullMark: 100 },
]

export const bundleSizeData = [
    { name: 'Jan', nextv12: 140, nextv13: 120, nextv14: 90, nextv15: 75 },
    { name: 'Feb', nextv12: 138, nextv13: 118, nextv14: 88, nextv15: 72 },
    { name: 'Mar', nextv12: 136, nextv13: 115, nextv14: 85, nextv15: 70 },
    { name: 'Apr', nextv12: 135, nextv13: 110, nextv14: 82, nextv15: 68 },
    { name: 'May', nextv12: 130, nextv13: 105, nextv14: 80, nextv15: 65 },
]

export const webVitalsData = [
    { name: 'Home', LCP: 1.2, FID: 12, CLS: 0.01 },
    { name: 'Blog', LCP: 1.5, FID: 15, CLS: 0.04 },
    { name: 'Projects', LCP: 1.8, FID: 18, CLS: 0.05 },
    { name: 'Playground', LCP: 2.1, FID: 25, CLS: 0.02 },
]

export function LighthouseChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={lighthouseData}>
                <PolarGrid opacity={0.5} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Portfolio V2" dataKey="A" stroke="var(--color-chart-2)" fill="var(--color-chart-2)" fillOpacity={0.5} />
                <Tooltip wrapperClassName="dark:bg-card dark:text-foreground border-border rounded-lg shadow-lg" />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export function BundleSizeChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bundleSizeData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                <XAxis dataKey="name" opacity={0.5} stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis opacity={0.5} stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}KB`} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                    itemStyle={{ color: 'var(--color-foreground)' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="nextv12" stroke="var(--color-chart-1)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Next.js v12" />
                <Line type="monotone" dataKey="nextv13" stroke="var(--color-chart-2)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Next.js v13" />
                <Line type="monotone" dataKey="nextv14" stroke="var(--color-chart-3)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Next.js v14" />
                <Line type="monotone" dataKey="nextv15" stroke="var(--color-chart-4)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} name="Next.js v15 (Current)" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export function WebVitalsChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={webVitalsData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                <XAxis dataKey="name" opacity={0.5} stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis opacity={0.5} stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                    itemStyle={{ color: 'var(--color-foreground)' }}
                    cursor={{ fill: 'currentColor', opacity: 0.1 }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="LCP" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} name="LCP (s) <2.5s Good" />
                <Bar dataKey="FID" fill="var(--color-chart-3)" radius={[4, 4, 0, 0]} name="FID (ms) <100ms Good" />
                <Bar dataKey="CLS" fill="var(--color-chart-4)" radius={[4, 4, 0, 0]} name="CLS <0.1 Good" />
            </BarChart>
        </ResponsiveContainer>
    )
}
