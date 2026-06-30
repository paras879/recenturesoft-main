import CreateBlogForm from "@/components/admin/CreateBlogForm";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogCategory from "@/models/BlogCategory";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Edit Blog | Admin",
};

export default async function EditBlogPage({ params }) {
    const { id } = await params;
    await connectDB();
    const blog = await Blog.findById(id).lean();

    if (!blog) {
        return notFound();
    }

    const initialData = {
        _id: blog._id.toString(),
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        tags: blog.tags,
        author: blog.author,
        image: blog.image,
        featured: blog.featured,
        published: blog.published,
        readingTime: blog.readingTime,
        seoTitle: blog.seoTitle || "",
        seoDescription: blog.seoDescription || ""
    };

    const categories = await BlogCategory.find().sort({ createdAt: 1 }).lean();
    const catNames = categories.map(c => c.name);

    return <CreateBlogForm initialData={initialData} categories={catNames} />;
}
