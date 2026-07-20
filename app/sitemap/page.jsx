import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import React from 'react';
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import SitemapClient from "./SitemapClient";

const defaultMetadata = {
    title: "Sitemap | RecentureSoft",
    description: "Navigate through all pages, services, and resources available on the RecentureSoft platform.",
    openGraph: {
        title: "Sitemap | RecentureSoft",
        description: "Complete directory of RecentureSoft's website.",
        url: "https://recenturesoft.com/sitemap",
        siteName: "RecentureSoft",
        type: "website",
    },
    alternates: { canonical: "/sitemap" }
};

const LEGAL_PATHS = new Set([
    "/privacy-policy", "/terms", "/cookies",
]);

const MAIN_PAGES = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "News", path: "/news" },
    { name: "Events", path: "/events" },
    { name: "Careers", path: "/career" },
];

const LEGAL_PAGES = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
];

const COUNTRY_MAP = {
    "noida": "India", "delhi": "India", "mumbai": "India",
    "bangalore": "India", "pune": "India", "hyderabad": "India",
    "chennai": "India", "kolkata": "India", "gurgaon": "India",
    "dubai": "UAE", "abu-dhabi": "UAE", "sharjah": "UAE",
    "london": "UK", "manchester": "UK", "birmingham": "UK",
    "new-york": "USA", "san-francisco": "USA", "los-angeles": "USA",
    "chicago": "USA", "houston": "USA", "miami": "USA",
    "singapore": "Singapore", "tokyo": "Japan", "sydney": "Australia",
    "toronto": "Canada", "berlin": "Germany", "paris": "France",
};

function extractCountry(path, category) {
    if (category) return category;
    const segments = path.replace(/^\/+/, '').split('/');
    const last = segments[segments.length - 1]?.toLowerCase();
    return COUNTRY_MAP[last] || "Other";
}

export async function generateMetadata() {
    return defaultMetadata;
}

export default async function SitemapPage() {
    await connectDB();

    const isActive = await checkPageStatus("/sitemap");
    if (!isActive) return notFound();

    const webPages = await WebPage.find({}).sort({ name: 1 }).lean();

    const infoPagesFlat = [];
    const locationsByCountry = {};
    const legalMap = {};
    const legalPageLookup = new Set();

    for (const lp of LEGAL_PAGES) {
        legalMap[lp.path] = { name: lp.name, path: lp.path, source: "static" };
        legalPageLookup.add(lp.path);
    }

    for (const page of webPages) {
        const path = page.path.startsWith("/") ? page.path : `/${page.path}`;
        const name = page.name;
        const status = page.status;

        if (legalPageLookup.has(path)) {
            legalMap[path] = { name, path, source: "cms", status };
            continue;
        }

        if (page.templateType === "location-template") {
            const country = extractCountry(path, page.category);
            if (!locationsByCountry[country]) locationsByCountry[country] = [];
            locationsByCountry[country].push({ name, path, status });
            continue;
        }

        if (status !== "active") continue;

        infoPagesFlat.push({ name, path });
    }

    const legalPages = Object.values(legalMap).filter(p =>
        p.source === "static" || p.status === "active"
    );

    for (const page of MAIN_PAGES) {
        if (!infoPagesFlat.find(p => p.path === page.path)) {
            infoPagesFlat.push(page);
        }
    }

    const locations = Object.entries(locationsByCountry)
        .map(([country, pages]) => ({ country, pages }))
        .sort((a, b) => a.country.localeCompare(b.country));

    const serialized = JSON.parse(JSON.stringify({
        information: infoPagesFlat,
        locations,
        legal: legalPages,
    }));

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <SitemapClient data={serialized} />
            <FutureFooter />
        </main>
    );
}
