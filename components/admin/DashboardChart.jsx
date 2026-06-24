"use client";

import { useTheme } from "next-themes";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

export default function DashboardChart({ 
    data, 
    title = "Analytics", 
    description = "Data over the last 7 days", 
    dataKey = "count", 
    dataName = "Total", 
    color = "#06b6d4" 
}) {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-[300px] w-full animate-pulse bg-slate-100 dark:bg-white/5 rounded-2xl mb-8 border border-slate-200 dark:border-white/10"></div>;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDark = currentTheme === "dark";

    const axisColor = isDark ? "#94a3b8" : "#64748b";
    const gridColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
    const tooltipBg = isDark ? "#0f172a" : "#ffffff";
    const tooltipBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
    const tooltipText = isDark ? "#f8fafc" : "#0f172a";

    return (
        <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm mb-8 w-full">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorChart" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                        <XAxis 
                            dataKey="date" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: axisColor, fontSize: 12 }} 
                            dy={10}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: axisColor, fontSize: 12 }} 
                            allowDecimals={false}
                        />
                        <Tooltip
                            contentStyle={{ 
                                backgroundColor: tooltipBg, 
                                borderColor: tooltipBorder,
                                color: tooltipText,
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                            itemStyle={{ color: tooltipText, fontWeight: 'bold' }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey={dataKey} 
                            name={dataName}
                            stroke={color} 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorChart)" 
                            activeDot={{ r: 6, strokeWidth: 0, fill: color }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
