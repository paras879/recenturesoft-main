import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSectionsContainer from "@/components/HomeSectionsContainer";
import CookieConsentBanner from "@/components/CookieConsentBanner";

export default async function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <HomeSectionsContainer />
      </main>
      <CookieConsentBanner />
    </>
  );
}