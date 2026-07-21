"use client";

import dynamic from "next/dynamic";
// Dynamically import all sections to code-split JS and drastically improve Mobile Speed Index
const AboutSection = dynamic(() => import("./AboutSection"), { ssr: true });
const Service = dynamic(() => import("./Service"), { ssr: true });
const TechStack = dynamic(() => import("./TechStack"), { ssr: true });
const Review = dynamic(() => import("./Review"), { ssr: true });
const Status = dynamic(() => import("./StatsDashboard"), { ssr: true });
const TrustedClients = dynamic(() => import("./TrustedClients"), { ssr: true });
const FAQSection = dynamic(() => import("./FAQSection"), { ssr: true });

/**
 * @param {{ services: object[], faqs: object[], reviews: object[], cmsData: object, footer: React.ReactNode }} props
 */
export default function HomeSectionsContainer({ services = [], faqs = [], reviews, cmsData = {}, footer }) {
    return (
        <>
            <div id="about-section" className="w-full relative">
                <AboutSection cmsData={cmsData} />
            </div>

            <div id="service-section" className="w-full relative">
                <Service services={services} cmsData={cmsData} />
            </div>

            <div id="techstack-section" className="w-full relative">
                <TechStack />
            </div>

            <div id="review-section" className="w-full relative">
                <Review initialReviews={reviews} />
            </div>

            <div id="status-section" className="w-full relative">
                <Status cmsData={cmsData} />
            </div>

            <div id="clients-section" className="w-full relative">
                <TrustedClients />
            </div>

            <div id="faq-section" className="w-full relative">
                <FAQSection faqs={faqs} />
            </div>

            <div id="footer-section" className="w-full relative">
                {footer}
            </div>
        </>
    );
}

