"use client"

import * as React from "react"
import { Clock } from "lucide-react"

export function LocalTime() {
    const [time, setTime] = React.useState<string>("");

    React.useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Africa/Accra',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            });
            setTime(formatter.format(now));
        };

        updateTime();
        // Update every minute (or more frequently to be sure it hits the minute mark quickly)
        const interval = setInterval(updateTime, 10000);

        return () => clearInterval(interval);
    }, []);

    if (!time) {
        return (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-secondary/50 px-2.5 py-1 rounded-full border">
                <Clock className="w-3 h-3 opacity-50" />
                <span className="w-12 h-3.5 bg-muted-foreground/20 rounded animate-pulse"></span>
            </div>
        );
    }

    return (
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-secondary/30 hover:bg-secondary/50 transition-colors px-2.5 py-1 rounded-full border shadow-sm">
            <Clock className="w-3 h-3" />
            <span>Accra, {time}</span>
        </div>
    )
}
