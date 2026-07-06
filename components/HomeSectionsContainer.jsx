"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
// Dynamically import all sections to code-split JS and drastically improve Mobile Speed Index
const AboutSection = dynamic(() => import("./AboutSection"), { ssr: true });
const Service = dynamic(() => import("./Service"), { ssr: true });
const TechStack = dynamic(() => import("./TechStack"), { ssr: true });
const Review = dynamic(() => import("./Review"), { ssr: true });
const Status = dynamic(() => import("./StatsDashboard"), { ssr: true });
const TrustedClients = dynamic(() => import("./TrustedClients"), { ssr: true });
const FAQSection = dynamic(() => import("./FAQSection"), { ssr: true });

// Lazy wrapper that only hydrates its children when they come within a large margin (1000px)
// This drastically drops initial load TBT by deferring heavy components, 
// while the large root margin ensures they render before the user scrolls, eliminating scroll stutter.
function LazySection({ children, id, minHeight = "500px" }) {
    const sectionRef = useRef(null);
    const [hasIntersected, setHasIntersected] = useState(false);

    useEffect(() => {
        if (hasIntersected) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            {
                // Trigger hydration 1000px before the section enters the viewport
                rootMargin: "1000px"
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasIntersected]);

    return (
        <div id={id} ref={sectionRef} className="w-full relative" style={{ minHeight: hasIntersected ? 'auto' : minHeight }}>
            {hasIntersected ? children : null}
        </div>
    );
}

/**
 * @param {{ services: object[], faqs: object[], cmsData: object, footer: React.ReactNode }} props
 */
export default function HomeSectionsContainer({ services = [], faqs = [], cmsData = {}, footer }) {
    return (
        <>
            <LazySection minHeight="500px" id="about-lazy">
                <AboutSection cmsData={cmsData} />
            </LazySection>

            <LazySection minHeight="700px" id="service-lazy">
                <Service services={services} cmsData={cmsData} />
            </LazySection>

            <LazySection minHeight="600px" id="techstack-lazy">
                <TechStack />
            </LazySection>

            <LazySection minHeight="500px" id="review-lazy">
                <Review />
            </LazySection>

            <LazySection minHeight="800px" id="status-lazy">
                <Status cmsData={cmsData} />
            </LazySection>

            <LazySection minHeight="250px" id="clients-lazy">
                <TrustedClients />
            </LazySection>

            <LazySection minHeight="500px" id="faq-lazy">
                <FAQSection faqs={faqs} />
            </LazySection>

            <LazySection minHeight="500px" id="footer-lazy">
                {footer}
            </LazySection>
        </>
    );
}

