"use client";

import CinematicServiceTemplate from "@/components/shared/CinematicServiceTemplate";
import { LayoutDashboard, BarChart3, LineChart, PieChart, Activity, ShieldCheck, Zap, Database } from "lucide-react";

export default function DashboardContent() {
    const features = [
        {
            icon: LayoutDashboard,
            title: "Customizable Interfaces",
            desc: "Drag-and-drop widgets and personalized layouts tailored to your unique business requirements.",
            highlights: ["Drag & Drop widgets", "Personalized layouts", "Role-based views"]
        },
        {
            icon: BarChart3,
            title: "Real-time Analytics",
            desc: "Monitor KPIs and metrics in real-time with automatically refreshing data streams.",
            highlights: ["Live data streams", "Instant KPI tracking", "Automated refresh"]
        },
        {
            icon: Database,
            title: "Data Integration",
            desc: "Seamlessly connect multiple data sources, APIs, and databases into a single unified view.",
            highlights: ["Multi-source syncing", "REST & GraphQL APIs", "Legacy system support"]
        },
        {
            icon: Activity,
            title: "Interactive Reporting",
            desc: "Generate dynamic, interactive reports that allow users to drill down into the specifics.",
            highlights: ["Drill-down charts", "Export to PDF/Excel", "Scheduled email reports"]
        },
        {
            icon: ShieldCheck,
            title: "Enterprise Security",
            desc: "Role-based access control and advanced encryption to keep your data secure.",
            highlights: ["End-to-end encryption", "Granular permissions", "SSO integration"]
        },
        {
            icon: Zap,
            title: "High Performance",
            desc: "Optimized queries and rendering to ensure your dashboard loads instantly even with big data.",
            highlights: ["Query optimization", "Edge caching", "Virtualization"]
        }
    ];

    return (
        <CinematicServiceTemplate
            title="Transform Raw Data into"
            subtitle="Actionable Insights"
            themeColor="sky"
            introParagraphs={[
                "In today's fast-paced digital economy, data is your most valuable asset. However, raw data without proper visualization is just noise. At RecentureSoft, we specialize in developing custom, high-performance dashboard applications that consolidate complex datasets into intuitive, easy-to-understand visual interfaces.",
                "Whether you need an internal admin panel, a client-facing analytics portal, or a complex financial trading dashboard, our engineering team uses cutting-edge technologies like React, Next.js, and advanced charting libraries to build solutions that empower decision-making."
            ]}
            features={features}
        />
    );
}
