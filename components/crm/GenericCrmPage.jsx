import Image from "next/image";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import CrmContent from "@/components/crm/CrmContent";
import { CheckCircle2, ArrowRight } from "lucide-react";

const headingColorMap = {
    default: "text-slate-900 dark:text-white",
    "blue-gradient": "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400",
    "indigo-gradient": "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    "orange-gradient": "text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-500 dark:from-orange-400 dark:to-rose-400",
    amber: "text-amber-600 dark:text-amber-400",
    rose: "text-rose-600 dark:text-rose-400"
};

const textColorMap = {
    default: "text-slate-600 dark:text-slate-400",
    muted: "text-slate-400 dark:text-slate-500",
    indigo: "text-indigo-600 dark:text-indigo-400",
    emerald: "text-emerald-600/90 dark:text-emerald-400/90",
    amber: "text-amber-700 dark:text-amber-400",
    rose: "text-rose-600/90 dark:text-rose-400/90"
};

const getHeadingStyle = (block) => {
    if (block.headingColorType === 'custom' && block.customHeadingColor) {
        return { style: { color: block.customHeadingColor }, className: "" };
    }
    const colorClass = headingColorMap[block.headingColor] || headingColorMap.default;
    return { className: colorClass, style: {} };
};

const getTextStyle = (block) => {
    if (block.textColorType === 'custom' && block.customTextColor) {
        return { style: { color: block.customTextColor }, className: "" };
    }
    const colorClass = textColorMap[block.textColor] || textColorMap.default;
    return { className: colorClass, style: {} };
};

export default function GenericCrmPage({ page }) {
    const heroContent = page.content?.crmHero || {};
    const blocks = page.content?.crmBlocks || [];

    const title = heroContent.title || "Customer Relationship";
    const highlight = heroContent.highlight || "Management";
    const desktopBanner = heroContent.desktopBanner || "/Banner/crm_banner.webp";

    return (
        <div className="min-h-screen bg-[#fafcff] dark:bg-[#020617] selection:bg-blue-500/30 font-manrope">
            {/* --- PREMIUM HERO SECTION --- */}
            <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
                {/* Background ambient glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent dark:from-blue-900/20 dark:to-transparent pointer-events-none" />
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                        {/* Text Content */}
                        <div className="text-left max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] mb-6 tracking-tight">
                                {title} <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                                    {highlight}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
                                Enhance your business workflow, connect your tools, and supercharge your team's productivity with our enterprise-grade solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact-form-section" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 group">
                                    Get Started Now
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Image Presentation */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[600px] flex items-center justify-center">
                            {/* Decorative elements behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 rounded-[3rem] transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6" />
                            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-200/50 dark:border-white/10 overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
                                <Image
                                    src={desktopBanner}
                                    alt={`${title} Banner`}
                                    fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center"
                                    priority
                                />
                                {/* Inner glow/shadow for premium feel */}
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[3rem]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DYNAMIC BLOCKS SECTION --- */}
            <section className="py-8 md:py-16 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    {blocks.length > 0 ? (
                        <div className="space-y-24">
                            {blocks.map((block, index) => {
                                // Helper to wrap any block with a side image if provided
                                const LayoutWrapper = ({ children, isText }) => {
                                    // 1. Gather all images (support both new array and legacy side image)
                                    let imageList = [];
                                    if (block.images && block.images.length > 0) {
                                        imageList = block.images.filter(img => img.url);
                                    } else if (block.imageUrl) {
                                        imageList = [{
                                            url: block.imageUrl,
                                            align: block.imageAlign || 'right',
                                            size: 'medium',
                                            alt: block.title || block.h2 || block.h3 || "Section Image"
                                        }];
                                    }

                                    if (imageList.length === 0) {
                                        return (
                                            <div className={isText ? "max-w-4xl mx-auto" : ""}>
                                                {children}
                                            </div>
                                        );
                                    }

                                    // 2. Filter images by position
                                    const leftImages = imageList.filter(img => img.align === 'left');
                                    const rightImages = imageList.filter(img => img.align === 'right');
                                    const topImages = imageList.filter(img => img.align === 'top');
                                    const bottomImages = imageList.filter(img => img.align === 'bottom');

                                    // Helper to render an image with its size classes
                                    const renderImage = (img, key) => {
                                        const sizeClass = img.size === 'small' ? 'max-w-md' : img.size === 'medium' ? 'max-w-2xl' : img.size === 'large' ? 'max-w-4xl' : 'max-w-full w-full';
                                        return (
                                            <div key={key} className={`w-full flex ${img.align === 'left' ? 'justify-start' : img.align === 'right' ? 'justify-end' : 'justify-center'} my-4`}>
                                                <div className={`relative overflow-hidden rounded-[2rem] border border-slate-200/50 dark:border-white/10 shadow-xl bg-white dark:bg-slate-900 ${sizeClass} w-full transition-all duration-300 hover:scale-[1.01]`}>
                                                    <Image 
                                                        src={img.url} 
                                                        alt={img.alt || block.title || block.h2 || "Section Image"} 
                                                        width={1200} 
                                                        height={800} 
                                                        className="w-full h-auto object-cover max-h-[60vh]"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    };

                                    const contentBody = (
                                        <div className="w-full space-y-6">
                                            {topImages.map((img, i) => renderImage(img, `top-${i}`))}
                                            {children}
                                            {bottomImages.map((img, i) => renderImage(img, `bottom-${i}`))}
                                        </div>
                                    );

                                    // If we have side images (left or right), we wrap the content body in a split layout
                                    if (leftImages.length > 0 || rightImages.length > 0) {
                                        return (
                                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full">
                                                {leftImages.length > 0 && (
                                                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                                        {leftImages.map((img, i) => renderImage(img, `left-${i}`))}
                                                    </div>
                                                )}
                                                <div className={`w-full ${leftImages.length > 0 && rightImages.length > 0 ? 'lg:w-1/3' : 'lg:w-1/2'}`}>
                                                    {contentBody}
                                                </div>
                                                {rightImages.length > 0 && (
                                                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                                        {rightImages.map((img, i) => renderImage(img, `right-${i}`))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    // If no side images, just return the content body with top/bottom images
                                    return (
                                        <div className={isText ? "max-w-4xl mx-auto w-full" : "w-full"}>
                                            {contentBody}
                                        </div>
                                    );
                                };

                                // 1. TEXT BLOCK
                                if (block.type === 'text') {
                                    if (!block.h2 && !block.h3 && !block.desc && !block.list && !block.imageUrl) return null;
                                    
                                    return (
                                        <div key={index}>
                                            <LayoutWrapper isText={true}>
                                                <div className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none">
                                                    {block.h2 && <h2 style={{ ...getHeadingStyle(block).style, fontSize: (block.mainHeadingSize && block.mainHeadingSize !== 'default') ? block.mainHeadingSize : undefined }} className={`text-3xl md:text-4xl font-extrabold mb-6 tracking-tight ${getHeadingStyle(block).className}`}>{block.h2}</h2>}
                                                    {block.h3 && <h3 style={{ ...getHeadingStyle(block).style, fontSize: (block.subHeadingSize && block.subHeadingSize !== 'default') ? block.subHeadingSize : undefined }} className={`text-2xl font-bold mb-4 ${getHeadingStyle(block).className}`}>{block.h3}</h3>}
                                                    {block.desc && block.desc.split('\n').map((p, i) => p.trim() ? <p key={i} style={{ ...getTextStyle(block).style, fontSize: (block.bodyTextSize && block.bodyTextSize !== 'default') ? block.bodyTextSize : undefined }} className={`mb-6 leading-relaxed ${getTextStyle(block).className}`}>{p}</p> : null)}
                                                    {block.list && (
                                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 list-none pl-0">
                                                            {block.list.split('\n').map((l, i) => l.trim() ? (
                                                                <li key={i} className="flex items-start gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm">
                                                                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                                                                    <span style={{ fontSize: (block.bodyTextSize && block.bodyTextSize !== 'default') ? block.bodyTextSize : undefined }} className="text-slate-700 dark:text-slate-300 font-medium leading-tight">{l}</span>
                                                                </li>
                                                            ) : null)}
                                                        </ul>
                                                    )}
                                                </div>
                                            </LayoutWrapper>
                                        </div>
                                    );
                                }
                                
                                // 2. HIGHLIGHT BLOCK
                                else if (block.type === 'highlight') {
                                    if (!block.title && !block.desc1 && !block.desc2) return null;
                                    return (
                                        <div key={index}>
                                            <LayoutWrapper>
                                                <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2rem] p-10 md:p-14 text-white shadow-2xl shadow-blue-500/20 text-center">
                                                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                                                    <div className="relative z-10 max-w-3xl mx-auto">
                                                        {block.title && <h3 style={{ ...getHeadingStyle(block).style, fontSize: (block.mainHeadingSize && block.mainHeadingSize !== 'default') ? block.mainHeadingSize : undefined }} className={`text-3xl md:text-4xl font-extrabold mb-6 tracking-tight ${(block.headingColor || block.headingColorType === 'custom') ? getHeadingStyle(block).className : "text-white"}`}>{block.title}</h3>}
                                                        {block.desc1 && <p style={{ ...getTextStyle(block).style, fontSize: (block.bodyTextSize && block.bodyTextSize !== 'default') ? block.bodyTextSize : undefined }} className={`mb-6 leading-relaxed text-xl ${(block.textColor || block.textColorType === 'custom') ? getTextStyle(block).className : "text-blue-50"}`}>{block.desc1}</p>}
                                                        {block.desc2 && <p style={{ ...getTextStyle(block).style, fontSize: (block.bodyTextSize && block.bodyTextSize !== 'default') ? block.bodyTextSize : undefined }} className={`text-lg ${(block.textColor || block.textColorType === 'custom') ? getTextStyle(block).className : "text-blue-100/80"}`}>{block.desc2}</p>}
                                                    </div>
                                                </div>
                                            </LayoutWrapper>
                                        </div>
                                    );
                                }
                                
                                // 3. CARDS BLOCK
                                else if (block.type === 'cards') {
                                    if (!block.title && (!block.items || block.items.length === 0)) return null;
                                    
                                    const CardsContent = (
                                        <LayoutWrapper>
                                            <div>
                                                {block.title && (
                                                    <div className="text-center mb-12">
                                                        <h4 style={{ ...getHeadingStyle(block).style, fontSize: (block.mainHeadingSize && block.mainHeadingSize !== 'default') ? block.mainHeadingSize : undefined }} className={`text-3xl md:text-4xl font-extrabold tracking-tight ${getHeadingStyle(block).className}`}>{block.title}</h4>
                                                        <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full" />
                                                    </div>
                                                )}
                                                {block.items && block.items.length > 0 && (
                                                    <div className={`grid grid-cols-1 ${block.imageUrl ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8`}>
                                                        {block.items?.map((s, i) => (
                                                            <div key={i} className="group bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                                <div className="relative z-10">
                                                                    {s.icon && <div className="text-4xl mb-6 bg-blue-50 dark:bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-500/20">{s.icon}</div>}
                                                                    <h5 style={{ ...getHeadingStyle(block).style, fontSize: (block.subHeadingSize && block.subHeadingSize !== 'default') ? block.subHeadingSize : undefined }} className={`font-bold text-xl mb-4 ${getHeadingStyle(block).className || "text-slate-900 dark:text-white"}`}>{s.title}</h5>
                                                                    <p style={{ ...getTextStyle(block).style, fontSize: (block.bodyTextSize && block.bodyTextSize !== 'default') ? block.bodyTextSize : undefined }} className={`leading-relaxed text-sm md:text-base ${getTextStyle(block).className || "text-slate-600 dark:text-slate-400"}`}>{s.desc}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </LayoutWrapper>
                                    );

                                    if (block.bgImageUrl) {
                                        return (
                                            <div key={index} className="relative rounded-[3rem] overflow-hidden px-6 py-12 md:px-12 md:py-20 lg:p-24 shadow-2xl border border-slate-200/50 dark:border-white/10 my-16">
                                                <div className="absolute inset-0 z-0">
                                                    <Image src={block.bgImageUrl} alt="Background" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" quality={90} />
                                                </div>
                                                {/* Elegant frosted glass overlay */}
                                                <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-2xl z-10" />
                                                <div className="relative z-20">
                                                    {CardsContent}
                                                </div>
                                            </div>
                                        );
                                    }

                                    return <div key={index}>{CardsContent}</div>;
                                }
                                
                                // 4. STEPS BLOCK (Vertical Timeline)
                                else if (block.type === 'steps') {
                                    if (!block.title && (!block.steps || block.steps.length === 0)) return null;
                                    return (
                                        <div key={index}>
                                            <LayoutWrapper>
                                                <div>
                                                    {block.title && (
                                                        <div className="mb-12">
                                                            <h4 style={{ ...getHeadingStyle(block).style, fontSize: (block.mainHeadingSize && block.mainHeadingSize !== 'default') ? block.mainHeadingSize : undefined }} className={`text-3xl md:text-4xl font-extrabold tracking-tight ${getHeadingStyle(block).className}`}>{block.title}</h4>
                                                        </div>
                                                    )}
                                                    {block.steps && block.steps.length > 0 && (
                                                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 dark:before:via-blue-900 before:to-transparent">
                                                            {block.steps?.map((step, i) => (
                                                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                                                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#020617] bg-blue-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                                                                        {i + 1}
                                                                    </div>
                                                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-300">
                                                                        <h5 style={{ ...getHeadingStyle(block).style, fontSize: (block.subHeadingSize && block.subHeadingSize !== 'default') ? block.subHeadingSize : undefined }} className={`font-bold text-xl mb-2 ${getHeadingStyle(block).className || "text-slate-900 dark:text-white"}`}>{step.stage}</h5>
                                                                        <p style={{ ...getTextStyle(block).style, fontSize: (block.bodyTextSize && block.bodyTextSize !== 'default') ? block.bodyTextSize : undefined }} className={`leading-relaxed text-sm md:text-base ${getTextStyle(block).className || "text-slate-600 dark:text-slate-400"}`}>{step.desc}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </LayoutWrapper>
                                        </div>
                                    );
                                }
                                
                                // 5. IMAGE BLOCK (Support both multi-images and single legacy image)
                                else if (block.type === 'image') {
                                    let imageList = [];
                                    if (block.images && block.images.length > 0) {
                                        imageList = block.images.filter(img => img.url);
                                    } else if (block.url) {
                                        imageList = [{
                                            url: block.url,
                                            align: block.align || 'center',
                                            size: block.size || 'large',
                                            alt: block.alt || "Page Content Image"
                                        }];
                                    }

                                    if (imageList.length === 0) return null;

                                    return (
                                        <div key={index} className="w-full space-y-8">
                                            {imageList.map((img, i) => {
                                                const alignClass = img.align === 'left' ? 'justify-start' : img.align === 'right' ? 'justify-end' : 'justify-center';
                                                const sizeClass = img.size === 'small' ? 'max-w-md' : img.size === 'medium' ? 'max-w-3xl' : img.size === 'large' ? 'max-w-5xl' : 'max-w-full w-full';
                                                
                                                return (
                                                    <div key={i} className="w-full relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-[#020617] rounded-[2rem] p-6 md:p-10 border border-slate-100 dark:border-white/5 shadow-sm">
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
                                                        <div className={`relative z-10 flex w-full ${alignClass}`}>
                                                            <div className={`overflow-hidden rounded-[1.5rem] border-4 border-white dark:border-slate-800 shadow-xl ${sizeClass} w-full transition-all duration-300 hover:scale-[1.01]`}>
                                                                <Image 
                                                                    src={img.url} 
                                                                    alt={img.alt || "Page Content Image"} 
                                                                    width={1600} 
                                                                    height={900} 
                                                                    className="w-full h-auto object-cover max-h-[75vh]" 
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                }
                                
                                return null;
                            })}
                        </div>
                    ) : (
                        <div className="dynamic-crm-content-wrapper">
                            <CrmContent />
                        </div>
                    )}
                </div>
            </section>

            <SolutionContactForm serviceName={`${title} ${highlight}`} />
            <PageFAQSection pageName={page.path.replace("/", "") || "crm"} />
        </div>
    );
}

