"use client";

// React hooks removed for native CSS optimization
import AboutSection from "./AboutSection";
import Service from "./Service";
import TechStack from "./TechStack";
import Review from "./Review";
import Status from "./StatsDashboard";
import TrustedClients from "./TrustedClients";
import FAQSection from "./FAQSection";

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

