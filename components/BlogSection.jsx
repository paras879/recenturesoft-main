"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const BlogBackground = dynamic(() => import("./BlogBackground"), {
  ssr: false,
});

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

/* ═══════════════════════════════════════════════════════
   COLOR TOKENS
   ═══════════════════════════════════════════════════════ */
const C = {
  primary: "#06E6FF",
  secondary: "#3B82F6",
  accent: "#8B5CF6",
  gradient: "linear-gradient(135deg, #06E6FF, #3B82F6, #8B5CF6)",
};

/* ═══════════════════════════════════════════════════════
   BLOG DATA
   ═══════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════
   MAGNETIC BUTTON
   ═══════════════════════════════════════════════════════ */
function MagneticButton({ text = "Read Article", compact = false }) {
  return (
    <button
      className={`group/btn relative inline-flex items-center gap-2 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${compact ? "px-4 py-2 text-[11px]" : "px-5 py-2.5 text-xs"}`}
    >
      <div
        className="absolute inset-0 rounded-full transition-all duration-400 group-hover/btn:shadow-[0_0_20px_rgba(6,230,255,0.12)]"
        style={{ border: `1px solid ${C.primary}25`, background: `${C.primary}06` }}
      />
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(135deg, ${C.primary}10, ${C.secondary}08)` }}
      />
      <span className="relative z-10" style={{ color: C.primary }}>{text}</span>
      <svg
        className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
        viewBox="0 0 16 16" fill="none" stroke={C.primary} strokeWidth="2"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </button>
  );
}

/* ═══════════════════════════════════════════════════════
   POPULARITY BAR
   ═══════════════════════════════════════════════════════ */
function PopularityBar({ score, compact = false }) {
  return (
    <div className={`flex items-center gap-2 ${compact ? "w-16" : "w-20"}`}>
      <div className={`flex-1 ${compact ? "h-1" : "h-1.5"} rounded-full bg-slate-200 dark:bg-white/5 overflow-hidden`}>
        <div
          className="h-full rounded-full"
          style={{ background: C.gradient, width: `${score}%` }}
        />
      </div>
      <span className={`${compact ? "text-[9px]" : "text-[10px]"} font-bold tabular-nums`} style={{ color: C.primary }}>{score}</span>
    </div>
  );
}



/* ═══════════════════════════════════════════════════════
   FEATURED CARD (60% left — text-primary, image-accent)
   ═══════════════════════════════════════════════════════ */
function FeaturedCard({ blog }) {
  const [hovered, setHovered] = useState(false);

  if (!blog) return null;

  return (
    <Link href={`/blog/${blog.slug}`} className="block h-full">
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative rounded-[24px] overflow-hidden cursor-pointer h-full hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl shadow-premium"
      >
        {/* Card body */}
        <div
          className="relative h-full rounded-[24px] overflow-hidden flex flex-col bg-slate-50 dark:bg-[#0a1225]/90 border border-slate-200 dark:border-white/[0.04] transition-colors duration-400"
          style={{
            borderColor: hovered ? `${C.primary}50` : undefined,
          }}
        >
          {/* Animated border glow on hover */}
          {hovered && (
            <div
              className="absolute inset-0 rounded-[24px] pointer-events-none z-30 animate-[spin_8s_linear_infinite]"
              style={{
                padding: "1px",
                background: `conic-gradient(from 0deg, ${C.primary}18, transparent 30%, ${C.secondary}12, transparent 60%, ${C.accent}10, transparent 90%, ${C.primary}18)`,
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
          )}

          {/* ── Compact image area (top 40%) ── */}
          <div className="relative overflow-hidden rounded-t-[24px]" style={{ height: "42%", position: "relative" }}>
            <div className="absolute inset-0">
              <Image
                src={blog.image || "/blog/ai-brain.jpg"}
                alt={blog.title || "Featured Blog"}
                fill
                unoptimized={true}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>

            {/* Gradient fade to card body */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-[#0a1225]/90" />

            {/* Category badge */}
            <div className="absolute top-4 left-5 z-10">
              <span
                className="px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-100/90 dark:bg-[#050816]/80 backdrop-blur-md transition-colors duration-400 border border-slate-200 dark:border-white/10"
                style={{
                  color: C.primary,
                  borderColor: hovered ? `${C.primary}50` : undefined,
                }}
              >
                {blog.category}
              </span>
            </div>

            {/* Trending badge */}
            <div
              className="absolute top-4 right-5 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.12em] border border-cyan-500/20"
              style={{
                background: `linear-gradient(135deg, ${C.primary}20, ${C.accent}15)`,
                backdropFilter: "blur(16px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Trending
            </div>
          </div>

          {/* ── Content area (primary focus, 58%) ── */}
          <div className="relative flex flex-col flex-1 px-[clamp(1.25rem,2.5vw,2rem)] pb-[clamp(1.25rem,2.5vw,2rem)] pt-2">
            {/* Meta row */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] text-gray-500">{formatDate(blog.createdAt)}</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span className="text-[11px] text-gray-500">{blog.readingTime}</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-gray-600 uppercase tracking-wider">Score</span>
                <PopularityBar score={blog.popularity || 95} />
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-xl sm:text-2xl lg:text-[28px] font-bold leading-tight mb-4 transition-colors duration-500 text-slate-900 dark:text-white"
              style={{ color: hovered ? C.primary : undefined }}
            >
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm sm:text-[15px] text-slate-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">
              {blog.excerpt}
            </p>

            {/* Bottom row */}
            <div className="flex items-center justify-between">
              <MagneticButton />
              <div
                className="flex items-center gap-1.5 text-gray-600 transition-opacity duration-300"
                style={{ opacity: hovered ? 1 : 0 }}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                <span className="text-[11px] tabular-nums">{blog.views || 0}</span>
              </div>
            </div>
          </div>

          {/* Depth shadow on hover */}
          <div
            className="absolute inset-0 rounded-[24px] pointer-events-none transition-shadow duration-500 shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            style={{ boxShadow: hovered ? `0 25px 60px rgba(0,0,0,0.15), 0 0 40px ${C.primary}15` : undefined }}
          />
        </div>
      </article>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════
   SIDE STACK CARD (compact, text-focused)
   ═══════════════════════════════════════════════════════ */
function SideCard({ blog, heightClass }) {
  if (!blog) return null;

  return (
    <Link href={`/blog/${blog.slug}`} className="block">
      <article
        className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-[#080d19]/90 border border-slate-200 dark:border-white/[0.04] hover:border-cyan-500/30 hover:shadow-[0_15px_40px_rgba(0,255,255,0.08)] hover:-translate-y-1 transition-all duration-300 ${heightClass}`}
      >
        <div className="flex flex-row h-full">
          {/* Image (40% width, full height) */}
          <div className="w-[40%] h-full relative overflow-hidden">
            <Image
              src={blog.image || "/blog/ai-brain.jpg"}
              alt={blog.title || "Blog Post"}
              fill
              unoptimized={true}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 30vw, 20vw"
            />
            {/* Visual overlay */}
            <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
          </div>

          {/* Content (60% width, flex container) */}
          <div className="w-[60%] flex flex-col justify-between p-5 min-w-0 h-full">
            <div>
              {/* Category & Reading Time */}
              <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                  {blog.category}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">
                  {blog.readingTime || "5 min read"}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-base font-bold leading-tight text-slate-900 dark:text-white line-clamp-2 transition-colors duration-300 group-hover:text-cyan-400">
                {blog.title}
              </h4>

              {/* Excerpt */}
              <p className="text-xs text-slate-600 dark:text-gray-400 line-clamp-3 leading-relaxed mt-2">
                {blog.excerpt}
              </p>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-gray-500 font-medium">
                <span>{blog.createdAt ? formatDate(blog.createdAt) : "Recently Published"}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-700" />
                <span>{blog.views || 0} views</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-500 dark:text-cyan-400 transition-all duration-300 group-hover:gap-1.5">
                Read Article
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════
   MARQUEE CARD (compact glass card for slider)
   ═══════════════════════════════════════════════════════ */
function MarqueeCard({ blog }) {
  if (!blog) return null;

  return (
    <Link href={`/blog/${blog.slug}`} className="block flex-shrink-0 w-[350px]">
      <article
        className="group relative w-full h-[340px] rounded-[24px] overflow-hidden border border-slate-200 dark:border-white/[0.04] bg-white/70 dark:bg-[#080d19]/80 backdrop-blur-md hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500/30 hover:shadow-[0_20px_60px_rgba(0,255,255,0.12)] transition-all duration-300 flex flex-col justify-between shadow-premium cursor-pointer"
      >
        {/* Image (60% height) */}
        <div className="h-[58%] w-full relative overflow-hidden rounded-t-[24px]">
          <Image
            src={blog.image || "/blog/ai-brain.jpg"}
            alt={blog.title || "Blog Post"}
            fill
            unoptimized={true}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="350px"
          />
          {/* Slight dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content (42% height) */}
        <div className="h-[42%] p-4 flex flex-col justify-between min-w-0">
          <div>
            {/* Top metadata (Category & Reading Time) */}
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider">
              <span className="text-cyan-500 dark:text-cyan-400">{blog.category}</span>
              <span>•</span>
              <span>{blog.readingTime || "5 min read"}</span>
            </div>

            {/* Title */}
            <h5 className="text-sm font-bold leading-tight text-slate-900 dark:text-white line-clamp-1 mt-1 group-hover:text-cyan-400 transition-colors duration-300">
              {blog.title}
            </h5>

            {/* Excerpt */}
            <p className="text-[11px] text-slate-600 dark:text-gray-400 line-clamp-2 leading-relaxed mt-1">
              {blog.excerpt}
            </p>
          </div>

          {/* Bottom Row (Date, Views & CTA) */}
          <div className="flex items-center justify-between gap-2 mt-auto">
            <span className="text-[10px] text-slate-500 dark:text-gray-500 font-medium">
              {blog.createdAt ? formatDate(blog.createdAt) : "Recently Published"} • {blog.views || 0} views
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-500 dark:text-cyan-400 transition-all duration-300 group-hover:gap-1.5 whitespace-nowrap">
              Read Article
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════
   INFINITE MARQUEE
   ═══════════════════════════════════════════════════════ */
function BlogMarquee({ marqueeBlogs = [] }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const doubled = [...marqueeBlogs, ...marqueeBlogs];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        ref={trackRef}
        className="flex gap-5 py-2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
        }}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {doubled.map((blog, i) => (
          <MarqueeCard key={`${blog._id || blog.id}-${i}`} blog={blog} />
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════ */
export default function BlogSection({ blogs = [] }) {
  console.log(`[BlogSection] Rendered with ${blogs?.length || 0} blogs.`);
  const sectionRef = useRef(null);

  if (!blogs || blogs.length === 0) {
    console.log("[BlogSection] No blogs passed or empty array. Rendering fallback state.");
    return (
      <section ref={sectionRef} className="relative py-20 overflow-hidden bg-background text-center border-t border-slate-200 dark:border-white/5">
        <BlogBackground />
        <div className="relative z-10 max-w-md mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">No Insights Published Yet</h2>
          <p className="text-slate-600 dark:text-gray-400 mb-6 text-sm">
            Check back later! We are cooking up some deep dives into AI and software engineering.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white bg-slate-100 dark:bg-white/[0.02] hover:scale-105 transition-all duration-300"
          >
            Visit Blog Page
          </Link>
        </div>
      </section>
    );
  }

  const featuredBlog =
    blogs.find((b) => b.featured) || blogs[0] || null;

  const sideBlogsData = blogs
    .filter((b) => b.slug !== featuredBlog?.slug)
    .slice(0, 3);

  const marqueeBlogs = blogs
    .filter((b) => b.slug !== featuredBlog?.slug)
    .slice(3);

  console.log(`- Featured blog: ${featuredBlog?.title} (slug: ${featuredBlog?.slug})`);
  console.log(`- Side blogs count: ${sideBlogsData.length}`);
  console.log(`- Marquee blogs count: ${marqueeBlogs.length}`);

  /* Uniform height for side cards */
  const uniformHeight = "h-[200px]";

  return (
    <section ref={sectionRef} className="relative py-[clamp(2rem,4vw,4rem)] overflow-hidden bg-background transition-colors duration-300">
      <BlogBackground />

      {/* ═══ PREMIUM SECTION HEADER ═══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-14">
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            {/* Large gradient heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3">
              From the{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: C.gradient }}>
                Innovation Lab
              </span>
            </h2>

            <p className="text-slate-600 dark:text-gray-500 text-sm sm:text-base max-w-lg leading-relaxed">
              Deep dives into AI, engineering, and digital strategy — curated by our team of industry experts.
            </p>

            {/* Animated line accent */}
            <div
              className="mt-5 h-[2px] rounded-full"
              style={{ background: C.gradient, width: 80 }}
            />
          </div>

          {/* View all CTA */}
          <Link
            href="/blog"
            className="hidden lg:inline-flex items-center gap-3 px-7 py-3 rounded-full text-sm font-semibold cursor-pointer border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white bg-slate-100 dark:bg-white/[0.02] hover:scale-104 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,230,255,0.1)] transition-all duration-300"
          >
            View All Articles
            <svg
              className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ═══ MAGAZINE LAYOUT: Featured (60%) + Side Stack (40%) ═══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-[clamp(1rem,2vw,2rem)]">
        <div className="flex flex-col lg:flex-row gap-6" style={{ perspective: "1200px" }}>
          {/* Featured card — 60% */}
          <div className="lg:w-[58%] min-h-[auto] lg:min-h-[500px]">
            {featuredBlog && (
              <FeaturedCard blog={featuredBlog} />
            )}
          </div>

          {/* Side stack — 40%, 3 asymmetric cards */}
          <div className="lg:w-[42%] flex flex-col gap-4">
            {sideBlogsData.map((blog, i) => (
              <SideCard key={blog._id || blog.id} blog={blog} index={i} heightClass={uniformHeight} />
            ))}
          </div>
        </div>
      </div>

      {/* ═══ HORIZONTAL INFINITE MARQUEE ═══ */}
      <div className="relative z-10 max-w-[100vw]">
        <div
          className="mb-6 max-w-7xl mx-auto px-6"
        >
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">More Stories</h3>
            <div className="flex-1 h-px bg-slate-200 dark:bg-white/5" />
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{ background: `${C.primary}08`, border: `1px solid ${C.primary}15` }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.primary }} />
              <span className="text-[10px] font-semibold uppercase" style={{ color: C.primary }}>Auto-scroll</span>
            </div>
          </div>
        </div>

        <BlogMarquee marqueeBlogs={marqueeBlogs} />
      </div>

      {/* ═══ Mobile view-all ═══ */}
      <div
        className="lg:hidden relative z-10 text-center mt-12 px-6"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 px-7 py-3 rounded-full text-sm font-semibold cursor-pointer border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white bg-slate-100 dark:bg-white/[0.02] hover:scale-104 active:scale-97 transition-all duration-300"
        >
          View All Articles
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
