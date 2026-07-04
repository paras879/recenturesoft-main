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

// Standard wrapper without lazy rendering so the browser paints everything upfront, eliminating scroll stutter.
function LazySection({ children, id }) {
    return (
        <div id={id} className="w-full relative">
            {children}
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

