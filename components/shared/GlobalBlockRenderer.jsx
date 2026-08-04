import ClientCardsGrid from "@/components/crm/ClientCardsGrid";
import Image from "next/image";
import Link from "next/link";

/**
 * GlobalBlockRenderer
 * Renders a single GlobalBlock (from Admin's Shared Blocks) into the page.
 * It reuses the same visual design as GenericCrmPage blocks.
 */
export default function GlobalBlockRenderer({ globalBlock }) {
    if (!globalBlock?.blockData?.blocks?.length) return null;

    const blocks = globalBlock.blockData.blocks;

    const headingStyle = { className: "text-slate-900 dark:text-white", style: {} };
    const subHeadingStyle = { className: "text-slate-900 dark:text-white", style: {} };
    const textStyle = { className: "text-slate-600 dark:text-slate-400", style: {} };

    return (
        <section className="pt-6 pb-2 md:pt-8 md:pb-4 lg:pt-10 lg:pb-6 px-2 md:px-4">
            <div className="w-full mx-auto space-y-4 md:space-y-6 lg:space-y-8">
                {blocks.map((block, index) => {
                    // CARDS BLOCK
                    if (block.type === "cards") {
                        return (
                            <div key={index} className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
                                <ClientCardsGrid
                                    block={block}
                                    headingStyle={headingStyle}
                                    subHeadingStyle={subHeadingStyle}
                                    textStyle={textStyle}
                                    renderButtons={null}
                                />
                            </div>
                        );
                    }

                    // TEXT BLOCK
                    if (block.type === "text") {
                        const listItems = block.list ? block.list.split("\n").filter(Boolean) : [];
                        return (
                            <div key={index} className="max-w-4xl mx-auto px-4 md:px-6 py-8">
                                {block.h2 && (
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{block.h2}</h2>
                                )}
                                {block.h3 && (
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">{block.h3}</h3>
                                )}
                                {block.desc && (
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{block.desc}</p>
                                )}
                                {listItems.length > 0 && (
                                    <ul className="space-y-2">
                                        {listItems.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    }

                    // HIGHLIGHT BLOCK
                    if (block.type === "highlight") {
                        return (
                            <div key={index} className="max-w-5xl mx-auto px-4 md:px-6 py-8">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-500/20 rounded-2xl p-6 md:p-10">
                                    {block.title && <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">{block.title}</h3>}
                                    {block.desc1 && <p className="text-slate-600 dark:text-slate-300 mb-3">{block.desc1}</p>}
                                    {block.desc2 && <p className="text-slate-500 dark:text-slate-400">{block.desc2}</p>}
                                </div>
                            </div>
                        );
                    }

                    // IMAGE BLOCK
                    if (block.type === "image" && block.images?.length > 0) {
                        return (
                            <div key={index} className="max-w-5xl mx-auto px-4 md:px-6 py-4">
                                {block.images.map((img, imgIdx) => (
                                    img.url ? (
                                        <div key={imgIdx} className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-white/10">
                                            <Image
                                                src={img.url}
                                                alt={img.alt || "Section Image"}
                                                width={1200}
                                                height={600}
                                                className="w-full h-auto object-cover"
                                                sizes="(max-width: 768px) 100vw, 80vw"
                                            />
                                        </div>
                                    ) : null
                                ))}
                            </div>
                        );
                    }

                    // STEPS BLOCK
                    if (block.type === "steps" && block.steps?.length > 0) {
                        return (
                            <div key={index} className="max-w-5xl mx-auto px-4 md:px-6 py-8">
                                {block.title && (
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">{block.title}</h3>
                                        <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
                                    </div>
                                )}
                                <div className="space-y-4">
                                    {block.steps.map((step, stepIdx) => (
                                        <div key={stepIdx} className="flex gap-4 items-start p-5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg shrink-0">
                                                {stepIdx + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{step.title}</h4>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        </section>
    );
}
