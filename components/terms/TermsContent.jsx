"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Download, Info, Shield, Link as LinkIcon,
  FileText, Phone, Gavel, FileQuestion, ArrowUp, UserCheck, AlertTriangle
} from 'lucide-react';

import TableOfContents from '../privacy/TableOfContents';
import PrivacySection from '../privacy/PrivacySection';

export default function TermsContent({ dynamicData }) {
  const lastUpdated = dynamicData?.content?.lastUpdated || 'June 25, 2026';
  const heroDesc = dynamicData?.content?.heroDesc || 'Please read these terms carefully before using our services. They outline your rights, responsibilities, and our commitment to you.';

  const DEFAULT_SECTIONS = [
    { id: 'introduction', title: '1. Introduction', icon: Info },
    { id: 'user-obligations', title: '2. User Obligations', icon: UserCheck },
    { id: 'services', title: '3. Our Services', icon: FileText },
    { id: 'intellectual-property', title: '4. Intellectual Property', icon: Shield },
    { id: 'third-party', title: '5. Third-Party Links', icon: LinkIcon },
    { id: 'limitation-liability', title: '6. Limitation of Liability', icon: AlertTriangle },
    { id: 'governing-law', title: '7. Governing Law', icon: Gavel },
    { id: 'contact', title: '8. Contact Information', icon: Phone },
  ];

  // If dynamicData has sections, merge title/icon from defaults with content from DB
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
          setShowBackToTop(window.scrollY > 500);

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
        filename:     'Terms_of_Service.pdf',
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
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >

            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
              Terms of Service
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
                placeholder="Search terms..."
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

      <div className="flex flex-col lg:flex-row gap-12 relative">
        <div className="w-full lg:w-52 flex-shrink-0 order-2 lg:order-1">
          <TableOfContents sections={SECTIONS} activeSection={activeSection} />
        </div>

        <div className="flex-1 order-1 lg:order-2">

          <div className={!searchQuery || 'Introduction'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id={SECTIONS[0]?.id || 'introduction'} title={SECTIONS[0]?.title || '1. Introduction'} icon={SECTIONS[0]?.icon || Info}>
              {SECTIONS[0]?.htmlContent
                ? <div dangerouslySetInnerHTML={{ __html: SECTIONS[0].htmlContent }} />
                : <>
                    <p className="mb-4">Welcome to RecentureSoft. By accessing our website and utilizing our software services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.</p>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50 flex gap-3 my-6">
                      <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800 dark:text-blue-200 m-0">These terms constitute a legally binding agreement made between you and RecentureSoft, concerning your access to and use of our services.</p>
                    </div>
                  </>
              }
            </PrivacySection>
          </div>

          {SECTIONS.slice(1).map((section, i) => (
            <div key={section.id} className={!searchQuery || section.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
              <PrivacySection id={section.id} title={section.title} icon={section.icon}>
                {section.htmlContent
                  ? <div dangerouslySetInnerHTML={{ __html: section.htmlContent }} />
                  : <p className="text-zinc-600 dark:text-zinc-400">{section.content || ''}</p>
                }
              </PrivacySection>
            </div>
          ))}



          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <FileQuestion className="w-6 h-6 text-blue-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">Do you update these terms?</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">Yes, we may update these terms from time to time. We will notify users of any significant changes by updating the "Last Updated" date.</p>
              </div>
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">Can I cancel my services?</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">Service cancellations are subject to the specific Master Service Agreement signed during client onboarding.</p>
              </div>
            </div>
          </div>



        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-50 pointer-events-auto"
        style={{ pointerEvents: showBackToTop ? 'auto' : 'none' }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
