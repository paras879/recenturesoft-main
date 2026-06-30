"use client";

import CinematicServiceTemplate from "@/components/shared/CinematicServiceTemplate";
import { Smartphone, Combine, Gauge, PenTool, CheckCircle, SmartphoneNfc } from "lucide-react";

export default function ReactNativeContent() {
    const features = [
        {
            icon: Combine,
            title: "Cross-Platform Codebase",
            desc: "Write your application logic once in JavaScript/TypeScript and deploy it simultaneously to both iOS and Android.",
            highlights: ["Unified codebase", "Lower maintenance cost", "Consistent logic"]
        },
        {
            icon: Gauge,
            title: "Near-Native Performance",
            desc: "React Native compiles to native OS components, ensuring buttery-smooth animations and high performance.",
            highlights: ["Hermes JS Engine", "60 FPS Animations", "JIT Compilation"]
        },
        {
            icon: PenTool,
            title: "Custom UI/UX",
            desc: "Deliver pixel-perfect, platform-specific user interfaces that feel natural to both Apple and Android users.",
            highlights: ["Platform-specific UI", "Native feel", "Custom animations"]
        },
        {
            icon: SmartphoneNfc,
            title: "Hardware Integration",
            desc: "Seamlessly connect to native device hardware like cameras, GPS, Bluetooth, and biometric sensors.",
            highlights: ["FaceID & TouchID", "Bluetooth Low Energy", "Native camera APIs"]
        },
        {
            icon: CheckCircle,
            title: "Fast Time-to-Market",
            desc: "Cut development time and cost in half by maintaining a single unified codebase instead of two separate apps.",
            highlights: ["Rapid prototyping", "Simultaneous launch", "Hot Reloading"]
        },
        {
            icon: Smartphone,
            title: "Over-The-Air Updates",
            desc: "Push critical bug fixes and feature updates directly to users' devices without waiting for App Store approvals.",
            highlights: ["CodePush integration", "Instant bug fixes", "A/B Testing"]
        }
    ];

    return (
        <CinematicServiceTemplate
            title="Dominate Both App Stores with"
            subtitle="React Native"
            themeColor="indigo"
            introParagraphs={[
                "Building separate mobile applications for iOS and Android requires massive engineering resources. React Native solves this by allowing developers to write truly native mobile applications using React and JavaScript—cutting development costs in half.",
                "RecentureSoft houses top-tier mobile engineering teams that specialize in React Native. We build robust, high-performance cross-platform apps for startups and enterprises alike. From complex state management to integrating native C++ modules, we ensure your app performs flawlessly on every device."
            ]}
            features={features}
        />
    );
}
