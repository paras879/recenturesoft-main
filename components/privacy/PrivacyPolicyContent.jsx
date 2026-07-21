"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Download, Info, User, Cookie, Link as LinkIcon,
  Share2, Shield, Clock, Gavel, FileText, Phone, FileQuestion, ArrowUp
} from 'lucide-react';

import TableOfContents from './TableOfContents';
import PrivacySection from './PrivacySection';
import QuickSummary from './QuickSummary';
import { DataFlowIllustration, SecurityShieldIllustration } from './Illustrations';

const DEFAULT_SECTIONS = [
  { id: 'introduction', title: '1. Introduction', icon: Info },
  { id: 'user-information', title: '2. User Information', icon: User },
  { id: 'cookies', title: '3. Cookies Policy', icon: Cookie },
  { id: 'third-party', title: '4. Third-Party Links', icon: LinkIcon },
  { id: 'information-sharing', title: '5. Information Sharing', icon: Share2 },
  { id: 'information-security', title: '6. Information Security', icon: Shield },
  { id: 'data-retention', title: '7. Data Retention', icon: Clock },
  { id: 'user-rights', title: '8. User Rights', icon: Gavel },
  { id: 'grievance', title: '9. Grievance Redressal', icon: FileText },
  { id: 'contact', title: '10. Contact Information', icon: Phone },
];

export default function PrivacyPolicyContent({ dynamicData }) {
  const lastUpdated = dynamicData?.content?.lastUpdated || 'June 17, 2026';
  const heroDesc = dynamicData?.content?.heroDesc || 'We believe in full transparency. Learn exactly how we collect, use, and protect your personal information in our simple, easy-to-read policy.';

  // Merge DB sections with icon/id defaults
  const SECTIONS = (() => {
    const dbSections = dynamicData?.content?.sections;
    if (dbSections && dbSections.length > 0) {
      return dbSections.map((s, i) => ({
        id: DEFAULT_SECTIONS[i]?.id || `section-${i}`,
        title: s.title || DEFAULT_SECTIONS[i]?.title || `Section ${i + 1}`,
        icon: DEFAULT_SECTIONS[i]?.icon || FileText,
        htmlContent: s.content || '',
      }));
    }
    return DEFAULT_SECTIONS;
  })();

  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);


  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Back to top visibility
          setShowBackToTop(window.scrollY > 500);

          // Scrollspy logic
          const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
          const currentPos = window.scrollY + 150;

          let current = SECTIONS[0].id;
          for (let i = 0; i < sectionElements.length; i++) {
            const el = sectionElements[i];
            if (el && el.offsetTop <= currentPos) {
              current = SECTIONS[i].id;
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);

      const originalElement = document.getElementById('policy-content');
      const clone = originalElement.cloneNode(true);
      clone.id = 'policy-content-clone';

      const wrapper = document.createElement('div');
      wrapper.style.position = 'absolute';
      wrapper.style.left = '-9999px';
      wrapper.style.top = '-9999px';
      wrapper.style.width = originalElement.offsetWidth + 'px';
      
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      const style = document.createElement('style');
      style.innerHTML = `
        #policy-content-clone, #policy-content-clone * {
          color: rgb(15, 23, 42) !important;
          background-color: rgb(255, 255, 255) !important;
          border-color: rgb(226, 232, 240) !important;
          outline-color: rgb(226, 232, 240) !important;
          text-decoration-color: rgb(15, 23, 42) !important;
          fill: rgb(15, 23, 42) !important;
          stroke: rgb(15, 23, 42) !important;
          box-shadow: none !important;
          text-shadow: none !important;
          background-image: none !important;
        }
      `;
      wrapper.appendChild(style);

      await new Promise(resolve => setTimeout(resolve, 150));

      const html2pdf = (await import('html2pdf.js')).default;
      const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     'Privacy_Policy.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, windowWidth: originalElement.offsetWidth },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      await html2pdf().set(opt).from(clone).save();
      
      document.body.removeChild(wrapper);
      setIsDownloading(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" id="policy-content">
      {/* Header Area */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >

            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {heroDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex items-center w-full sm:w-64 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-all focus-within:ring-2 focus-within:ring-blue-500/50">
              <div className="flex items-center justify-center w-10 flex-shrink-0 h-full">
                <Search className="w-5 h-5 text-zinc-400" />
              </div>
              <input
                type="text"
                placeholder="Search policy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 min-w-0 bg-transparent border-none outline-none py-3 pr-4 text-zinc-900 dark:text-white placeholder:text-zinc-500"
              />
            </div>
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm cursor-pointer ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Download className="w-5 h-5" />
              <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
            </button>
          </motion.div>
        </div>
      </div>

      <QuickSummary />

      <div className="flex flex-col lg:flex-row gap-12 relative">
        {/* Sidebar */}
        <div className="w-full lg:w-52 flex-shrink-0 order-2 lg:order-1">
          <TableOfContents sections={SECTIONS} activeSection={activeSection} />
        </div>

        {/* Main Content */}
        <div className="flex-1 order-1 lg:order-2">

          {SECTIONS.map((section, idx) => (
            <div key={section.id} className={!searchQuery || section.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
              <PrivacySection id={section.id} title={section.title} icon={section.icon}>
                {section.htmlContent ? (
                  <div className="whitespace-pre-line text-zinc-600 dark:text-zinc-400" dangerouslySetInnerHTML={{ __html: section.htmlContent }} />
                ) : idx === 0 ? (
                  <>
                    <p className="mb-4">Welcome to our Privacy Policy. This document explains how we collect, use, disclose, and safeguard your information when you visit our website and use our software services. Please read this privacy policy carefully.</p>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50 flex gap-3 my-6">
                      <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800 dark:text-blue-200 m-0">By using our services, you consent to the data practices described in this statement. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
                    </div>
                  </>
                ) : idx === 1 ? (
                  <>
                    <p className="mb-4">We collect information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products, or otherwise contact us.</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                      <li><strong>Personal Data:</strong> Name, email address, phone number, and physical address.</li>
                      <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, and operating system.</li>
                    </ul>
                    <div className="my-8">
                      <h4 className="text-base font-semibold mb-4 text-zinc-900 dark:text-white">Data Flow Overview</h4>
                      <DataFlowIllustration />
                    </div>
                  </>
                ) : idx === 5 ? (
                  <>
                    <p className="mb-6">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
                    <SecurityShieldIllustration />
                  </>
                ) : idx === 9 ? (
                  <>
                    <p className="mb-4">If you have questions or comments about this notice, you may email us or by post to:</p>
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700/50">
                      <p className="font-semibold text-zinc-900 dark:text-white mb-2">RecentureSoft Infotech</p>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-1">123 Innovation Drive, Tech Park</p>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4">San Francisco, CA 94105</p>
                      <a href="mailto:privacy@recenturesoft.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">privacy@recenturesoft.com</a>
                    </div>
                  </>
                ) : (
                  <p className="text-zinc-600 dark:text-zinc-400">{section.content || ''}</p>
                )}
              </PrivacySection>
            </div>
          ))}

          {/* FAQ Section */}
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <FileQuestion className="w-6 h-6 text-blue-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">Can I opt out of data collection?</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">Yes, you can manage your cookie preferences and opt out of certain tracking through your browser settings or our dedicated cookie management tool.</p>
              </div>
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">Are you GDPR compliant?</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">Yes, we strictly adhere to the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
              </div>
            </div>
          </div>



        </div>
      </div>

      {/* Floating Back to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-50 pointer-events-auto"
        style={{ pointerEvents: showBackToTop ? 'auto' : 'none' }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
