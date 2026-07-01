"use client";

// React hooks removed for native CSS optimization
import AboutSection from "./AboutSection";
import Service from "./Service";
import TechStack from "./TechStack";
import Review from "./Review";
import Status from "./StatsDashboard";
import TrustedClients from "./TrustedClients";

// Standard wrapper without lazy rendering so the browser paints everything upfront, eliminating scroll stutter.
function LazySection({ children, id }) {
    return (
        <div id={id} className="w-full relative">
            {children}
        </div>
    );
}

/**
 * @param {{ services: object[], footer: React.ReactNode }} props
 */
export default function HomeSectionsContainer({ services = [], footer }) {
    return (
        <>
            <LazySection minHeight="500px" id="about-lazy">
                <AboutSection />
            </LazySection>

            <LazySection minHeight="700px" id="service-lazy">
                <Service services={services} />
            </LazySection>

            <LazySection minHeight="600px" id="techstack-lazy">
                <TechStack />
            </LazySection>

            <LazySection minHeight="500px" id="review-lazy">
                <Review />
            </LazySection>

            <LazySection minHeight="800px" id="status-lazy">
                <Status />
            </LazySection>

            <LazySection minHeight="250px" id="clients-lazy">
                <TrustedClients />
            </LazySection>

            <LazySection minHeight="500px" id="footer-lazy">
                {footer}
            </LazySection>
        </>
    );
}

