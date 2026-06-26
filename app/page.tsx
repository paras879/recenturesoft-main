import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSectionsContainer from "@/components/HomeSectionsContainer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { connectDB } from "@/lib/mongodb";
import ServiceModel from "@/models/Service";

// Always fetch fresh data from MongoDB on every request (like dev mode)
export const dynamic = "force-dynamic";

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

export default async function Home() {
  const services = await getServices();

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <HomeSectionsContainer services={services} />
      </main>
      <CookieConsentBanner />
    </>
  );
}