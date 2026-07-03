import { connectDB } from "@/lib/mongodb";
import FAQModel from "@/models/FAQ";
import FAQSection from "@/components/FAQSection";

/**
 * Server component that fetches page-specific FAQs from MongoDB
 * and renders the FAQSection client component.
 *
 * @param {{ pageName: string }} props
 */
export default async function PageFAQSection({ pageName = "home" }) {
    let faqs = [];
    try {
        await connectDB();
        const raw = await FAQModel.find({
            isActive: true,
            $or: [{ page: pageName }, ...(pageName === "home" ? [{ page: { $exists: false } }, { page: "" }] : [])],
        })
            .sort({ order: 1, createdAt: -1 })
            .lean();

        faqs = raw.map((f) => ({
            _id: f._id.toString(),
            question: f.question || "",
            answer: f.answer || "",
        }));
    } catch (err) {
        console.error(`Failed to fetch FAQs for page "${pageName}":`, err);
    }

    // Don't render the section at all if there are no FAQs
    if (faqs.length === 0) return null;

    return <FAQSection faqs={faqs} />;
}
