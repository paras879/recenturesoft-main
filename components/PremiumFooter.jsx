import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import NewsletterForm from "./NewsletterForm";

const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/career" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
];


export default function PremiumFooter() {
    return (
        <footer className="relative bg-slate-50 dark:bg-[#020617] pt-10 md:pt-14 lg:pt-20 pb-4 md:pb-6 lg:pb-8 overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-cyan-600/20 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-[1400px]">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8 mb-6 md:mb-10 lg:mb-12">

                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-4 order-3 md:order-3 lg:order-1">
                        <Link href="/" className="inline-block mb-6">
                            <img src="/Logo.png" alt="RecentureSoft" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-sm" />
                        </Link>
                        <p className="text-slate-700 dark:text-gray-300 font-medium leading-relaxed mb-8 w-full">
                            Engineering extraordinary digital experiences. We partner with visionaries to build high-performance software, web, and mobile solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com/recenturesoft" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#4267B2] flex items-center justify-center text-white hover:scale-110 transition-all">
                                <FaFacebookF size={18} />
                            </a>

                            <a href="https://x.com/recenturesoft" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-all">
                                <FaTwitter size={18} />
                            </a>

                            <a href="https://linkedin.com/company/recenturesoft" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-all">
                                <FaLinkedinIn size={18} />
                            </a>

                            <a href="https://pinterest.com/recenturesoft" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#E60023] flex items-center justify-center text-white hover:scale-110 transition-all">
                                <FaPinterestP size={18} />
                            </a>

                            <a href="https://instagram.com/recenturesoft" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-fuchsia-500 flex items-center justify-center text-white hover:scale-110 transition-all">
                                <FaInstagram size={18} />
                            </a>

                            <a href="https://youtube.com/@recenturesoft" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-all">
                                <FaYoutube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1 lg:col-span-2 order-2 md:order-2">
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-2 md:space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2 order-1 md:order-1">
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6 tracking-wide">Services</h4>
                        <ul className="space-y-2 md:space-y-4">
                            {[
                                { name: "CMS Development", href: "/cms" },
                                { name: "CRM Development", href: "/crm" },
                                { name: "Web Design", href: "/web-design" },
                                { name: "SEO Services", href: "/seo-service" },
                                { name: "Mobile Apps", href: "/android-application-development" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-3 order-4 md:order-4 mt-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-wide">
                            Newsletter
                        </h2>
                        <p className="text-slate-600 dark:text-gray-300 text-sm font-medium mb-2 md:mb-4 leading-relaxed">
                            Subscribe to our newsletter for the latest insights in enterprise tech.
                        </p>
                        <NewsletterForm />
                    </div>

                </div>

                <div className="mt-0 pt-0 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 dark:text-gray-500 text-sm font-light">
                        &copy; {new Date().getFullYear()} RecentureSoft. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy_policy" className="text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
