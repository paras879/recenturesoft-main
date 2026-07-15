"use client";

import React from 'react';
import CinematicServiceTemplate from "@/components/shared/CinematicServiceTemplate";
import { ServerCog, Zap, Network, Lock, Database, Code2, FileText } from "lucide-react";

const iconMap = {
    ServerCog, Zap, Network, Lock, Database, Code2, FileText
};

export default function NodeJsContent({ dynamicData }) {
    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string') {
            return iconMap[iconName] || FallbackIcon || FileText;
        }
        return iconName || FallbackIcon || FileText;
    };

    const content = dynamicData?.content || {};

    const title = content.title || "Power Your Backend with";
    const subtitle = content.subtitle || "Node.js";
    const themeColor = content.themeColor || "sky";
    const introParagraphs = content.introParagraphs || [
        "Node.js has fundamentally transformed backend development. By bringing JavaScript to the server, it enables developers to build highly scalable, data-intensive, and real-time applications that perform brilliantly under heavy loads.",
        "At RecentureSoft, our backend engineering teams specialize in architecting robust Node.js solutions. Whether it is a massive microservices architecture, a real-time chat application using WebSockets, or a high-throughput API gateway, we write clean, secure, and highly optimized Node.js code that powers enterprise businesses."
    ];

    const rawFeatures = content.features || [
        {
            icon: "Zap",
            title: "Event-Driven Architecture",
            desc: "Non-blocking I/O operations make Node.js incredibly lightweight and efficient for real-time applications.",
            highlights: ["Asynchronous processing", "WebSocket ready", "Low memory footprint"]
        },
        {
            icon: "Network",
            title: "Microservices & APIs",
            desc: "Build scalable REST and GraphQL APIs that serve as the backbone for your web and mobile clients.",
            highlights: ["GraphQL integration", "RESTful architecture", "Docker containerization"]
        },
        {
            icon: "Database",
            title: "Database Integration",
            desc: "Seamless connectivity with MongoDB, PostgreSQL, Redis, and other modern databases.",
            highlights: ["Prisma & TypeORM", "NoSQL flexibility", "High-performance caching"]
        },
        {
            icon: "ServerCog",
            title: "High Scalability",
            desc: "Easily scale horizontally and vertically to handle thousands of concurrent connections with minimal overhead.",
            highlights: ["PM2 cluster mode", "Kubernetes scaling", "Load balancing"]
        },
        {
            icon: "Lock",
            title: "Enterprise Security",
            desc: "Implement JWT authentication, rate limiting, data encryption, and robust middleware pipelines.",
            highlights: ["OAuth2 & JWT", "Helmet.js protection", "Rate limiting"]
        },
        {
            icon: "Code2",
            title: "Full-Stack JavaScript",
            desc: "Unify your engineering stack by using JavaScript on both the client (React/Next) and the server (Node).",
            highlights: ["TypeScript support", "Shared DTOs", "Unified tooling"]
        }
    ];

    const features = rawFeatures.map(f => ({
        ...f,
        icon: getIcon(f.icon, ServerCog)
    }));

    return (
        <CinematicServiceTemplate
            title={title}
            subtitle={subtitle}
            themeColor={themeColor}
            introParagraphs={introParagraphs}
            features={features}
            ctaTitle={content.ctaTitle}
            ctaSubtitle={content.ctaSubtitle}
            ctaBtnText={content.ctaBtnText}
            ctaBtnLink={content.ctaBtnLink}
        />
    );
}
