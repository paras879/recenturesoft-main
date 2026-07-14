"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import {
  Search, Download, Info, Cookie, Settings, Shield,
  FileText, Phone, Gavel, FileQuestion, ArrowUp, Zap
} from 'lucide-react';

import TableOfContents from '../privacy/TableOfContents';
import PrivacySection from '../privacy/PrivacySection';

export default function CookiesContent({ dynamicData }) {
  const getIcon = (iconName, FallbackIcon) => {
    if (typeof iconName === 'string' && LucideIcons[iconName]) {
      return LucideIcons[iconName];
    }
    return iconName || FallbackIcon || LucideIcons.FileText;
  };

  const DEFAULT_SECTIONS = [
    { 
      id: 'introduction', 
      title: '1. What Are Cookies?', 
      icon: 'Cookie',
      htmlContent: '<p className="mb-4">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p><div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50 flex gap-3 my-6"><p className="text-sm text-blue-800 dark:text-blue-200 m-0">Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.</p></div>' 
    },
    { 
      id: 'how-we-use', 
      title: '2. How We Use Cookies', 
      icon: 'Zap',
      htmlContent: '<p className="mb-4">RecentureSoft uses cookies for several reasons, including:</p><ul className="list-disc pl-5 mb-4 space-y-2"><li>To enable certain functions of the website, such as secure login and session management.</li><li>To provide analytics and understand how our website is being used to improve our services.</li><li>To store your preferences and personalized settings.</li><li>To deliver advertisements that are relevant to your interests.</li></ul>' 
    },
    { 
      id: 'types-of-cookies', 
      title: '3. Types of Cookies', 
      icon: 'FileText',
      htmlContent: '<p className="mb-4">We use different types of cookies to run our website and services:</p><ul className="list-disc pl-5 mb-4 space-y-2"><li><strong>Strictly Necessary Cookies:</strong> Essential for you to browse the website and use its features.</li><li><strong>Performance Cookies:</strong> Collect information about how you use our website (e.g., which pages you visit most).</li><li><strong>Functionality Cookies:</strong> Allow our website to remember choices you make (e.g., language preferences).</li><li><strong>Targeting/Advertising Cookies:</strong> Used to deliver ads more relevant to you and your interests.</li></ul>' 
    },
    { 
      id: 'third-party', 
      title: '4. Third-Party Cookies', 
      icon: 'Shield',
      htmlContent: '<p className="mb-4">In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and integrate with external services (like Google Analytics or social media widgets).</p><p>These third parties may also place cookies on your device when you visit our website.</p>' 
    },
    { 
      id: 'manage-cookies', 
      title: '5. Managing Cookies', 
      icon: 'Settings',
      htmlContent: '<p className="mb-4">You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.</p><p>If you choose to reject cookies, you may still use our website though your access to some functionality and areas may be restricted.</p>' 
    },
    { 
      id: 'policy-updates', 
      title: '6. Policy Updates', 
      icon: 'Gavel',
      htmlContent: '<p className="mb-4">We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.</p><p>Please re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>' 
    },
    { 
      id: 'contact', 
      title: '7. Contact Us', 
      icon: 'Phone',
      htmlContent: '<p className="mb-4">If you have any questions about our use of cookies or other technologies, please contact us at:</p><div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700/50"><p className="font-semibold text-zinc-900 dark:text-white mb-2">RecentureSoft Infotech</p><a href="mailto:privacy@recenturesoft.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">privacy@recenturesoft.com</a></div>' 
    }
  ];

  const SECTIONS = dynamicData?.content?.sections || DEFAULT_SECTIONS;
  const faqs = dynamicData?.content?.faqs || [
    { question: 'Are cookies safe?', answer: 'Yes, cookies are simply text files and cannot transmit viruses or damage your computer.' },
    { question: 'Do I have to accept cookies?', answer: 'No, you can configure your browser to block all cookies. However, blocking strictly necessary cookies may cause parts of the website to not work properly.' }
  ];

  const [activeSection, setActiveSection] = useState(SECTIONS[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (!SECTIONS.length) return;
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
  }, [SECTIONS]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPDF = async () => {
    try {
      const style = document.createElement('style');
      style.innerHTML = `
        #policy-content, #policy-content * {
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
      document.head.appendChild(style);

      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('policy-content');
      const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     'Cookies_Policy.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      await html2pdf().set(opt).from(element).save();
      
      document.head.removeChild(style);
    } catch (error) {
      console.error("Error generating PDF:", error);
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Last Updated: {dynamicData?.content?.lastUpdated || 'June 25, 2026'}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
              {dynamicData?.content?.heroTitle || 'Cookies Policy'}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {dynamicData?.content?.heroDesc || 'We use cookies to improve your experience. Learn what cookies are, how we use them, and how you can manage your preferences.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search policy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white placeholder:text-zinc-500"
              />
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative">
        <div className="w-full lg:w-52 flex-shrink-0 order-2 lg:order-1">
          <TableOfContents sections={SECTIONS} activeSection={activeSection} />
        </div>

        <div className="flex-1 order-1 lg:order-2">

          {SECTIONS.map((section) => (
            <div key={section.id} className={!searchQuery || section.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
              <PrivacySection id={section.id} title={section.title} icon={getIcon(section.icon, FileText)}>
                <div dangerouslySetInnerHTML={{ __html: section.htmlContent }} />
              </PrivacySection>
            </div>
          ))}

          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <FileQuestion className="w-6 h-6 text-blue-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">{faq.question}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{faq.answer}</p>
                </div>
              ))}
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
