import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSectionsContainer from "@/components/HomeSectionsContainer";
import dynamic from "next/dynamic";
const CookieConsentBanner = dynamic(() => import("@/components/CookieConsentBanner"), { ssr: false });
const FutureFooter = dynamic(() => import("@/components/FutureFooter"));
import { connectDB } from "@/lib/mongodb";
import ServiceModel from "@/models/Service";
import WebPageModel from "@/models/WebPage";
import FAQModel from "@/models/FAQ";


export const metadata = {
    title: "Home | RecentureSoft",
    description: "Explore our expert services and solutions at RecentureSoft.",
    alternates: { canonical: "/" }
};
// Use Incremental Static Regeneration (ISR) to cache the page for 60 seconds
export const revalidate = 60;

type ServiceData = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  images: string[];
  image: string;
  icon: string;
  features: string[];
  category: string;
  colSpan: string;
  color: string;
  accent: string;
  scene: string;
};

async function getServices(): Promise<ServiceData[]> {
  try {
    await connectDB();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const raw: any[] = await ServiceModel.find({ status: true }).sort({ createdAt: 1 }).lean();
    return raw.map((s) => ({
      _id: s._id.toString(),
      title: s.title || "",
      slug: s.slug || "",
      shortDescription: s.shortDescription || "",
      description: s.description || "",
      images: Array.isArray(s.images) ? s.images.filter(Boolean) : [],
      image: s.image || "",
      icon: s.icon || "",
      features: Array.isArray(s.features) ? s.features : [],
      category: s.category || "Enterprise Engineering",
      colSpan: s.colSpan || "lg:col-span-6",
      color: s.color || "cyan",
      accent: s.accent || "from-cyan-500/20 to-blue-500/20",
      scene: s.scene || "SoftwareDevGraphic",
    }));
  } catch (err) {
    console.error("Failed to fetch services for homepage:", err);
    return [];
  }
}

async function getHomePageData() {
  try {
    await connectDB();
    const pageData = await WebPageModel.findOne({ path: "/" }).lean();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (pageData as any)?.content || {};
  } catch (err) {
    console.error("Failed to fetch home page CMS data:", err);
    return {};
  }
}

async function getFaqs() {
  try {
    await connectDB();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawFaqs: any[] = await FAQModel.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean();
    return rawFaqs.map((f) => ({
      _id: f._id.toString(),
      question: f.question || "",
      answer: f.answer || "",
    }));
  } catch (err) {
    console.error("Failed to fetch FAQs:", err);
    return [];
  }
}

export default async function Home() {
    const isActive = await checkPageStatus("/");
    if (!isActive) return notFound();

  const services = await getServices();
  const cmsData = await getHomePageData();
  const faqs = await getFaqs();

  return (
    <>
      <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"RecentureSoft","description":"RecentureSoft builds scalable enterprise software, AI products, web platforms, and mobile applications for global businesses.","url":"https://recenturesoft.com"}) }} />
        <Navbar />
        <Hero cmsData={cmsData} />
        <HomeSectionsContainer services={services} faqs={faqs} cmsData={cmsData} footer={<FutureFooter />} />
      </main>
      <CookieConsentBanner />
    </>
  );
}