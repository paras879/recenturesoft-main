"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Download, Check, Info, Shield, Link as LinkIcon,
  FileText, Phone, Gavel, FileQuestion, ArrowUp, UserCheck, AlertTriangle
} from 'lucide-react';

import TableOfContents from '../privacy/TableOfContents';
import PrivacySection from '../privacy/PrivacySection';

const SECTIONS = [
  { id: 'introduction', title: '1. Introduction', icon: Info },
  { id: 'user-obligations', title: '2. User Obligations', icon: UserCheck },
  { id: 'services', title: '3. Our Services', icon: FileText },
  { id: 'intellectual-property', title: '4. Intellectual Property', icon: Shield },
  { id: 'third-party', title: '5. Third-Party Links', icon: LinkIcon },
  { id: 'limitation-liability', title: '6. Limitation of Liability', icon: AlertTriangle },
  { id: 'governing-law', title: '7. Governing Law', icon: Gavel },
  { id: 'contact', title: '8. Contact Information', icon: Phone },
];

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              Last Updated: June 25, 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Please read these terms carefully before using our services. They outline your rights, responsibilities, and our commitment to you.
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
                placeholder="Search terms..."
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
        <div className="w-full lg:w-64 flex-shrink-0 order-2 lg:order-1">
          <TableOfContents sections={SECTIONS} activeSection={activeSection} />
        </div>

        <div className="flex-1 order-1 lg:order-2">

          <div className={!searchQuery || 'Introduction'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id="introduction" title="1. Introduction" icon={SECTIONS[0].icon}>
              <p className="mb-4">Welcome to RecentureSoft. By accessing our website and utilizing our software services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.</p>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50 flex gap-3 my-6">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800 dark:text-blue-200 m-0">These terms constitute a legally binding agreement made between you and RecentureSoft, concerning your access to and use of our services.</p>
              </div>
            </PrivacySection>
          </div>

          <div className={!searchQuery || 'User Obligations'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id="user-obligations" title="2. User Obligations" icon={SECTIONS[1].icon}>
              <p className="mb-4">By using our services, you represent and warrant that:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not use the services for any illegal or unauthorized purpose.</li>
              </ul>
            </PrivacySection>
          </div>

          <div className={!searchQuery || 'Our Services'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id="services" title="3. Our Services" icon={SECTIONS[2].icon}>
              <p className="mb-4">RecentureSoft provides custom software development, digital marketing, and IT consulting services. We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice.</p>
              <p>We will not be liable if for any reason all or any part of the service is unavailable at any time or for any period.</p>
            </PrivacySection>
          </div>

          <div className={!searchQuery || 'Intellectual Property'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id="intellectual-property" title="4. Intellectual Property" icon={SECTIONS[3].icon}>
              <p className="mb-4">Unless otherwise indicated, the Site and Services are our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us.</p>
              <p>They are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.</p>
            </PrivacySection>
          </div>

          <div className={!searchQuery || 'Third-Party Links'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id="third-party" title="5. Third-Party Links" icon={SECTIONS[4].icon}>
              <p className="mb-4">The Site may contain links to third-party websites and applications of interest. These third-party websites are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us.</p>
              <p>We are not responsible for any third-party websites accessed through the Site.</p>
            </PrivacySection>
          </div>

          <div className={!searchQuery || 'Limitation Liability'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id="limitation-liability" title="6. Limitation of Liability" icon={SECTIONS[5].icon}>
              <p className="mb-4">In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.</p>
            </PrivacySection>
          </div>

          <div className={!searchQuery || 'Governing Law'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id="governing-law" title="7. Governing Law" icon={SECTIONS[6].icon}>
              <p className="mb-4">These terms shall be governed by and defined following the laws of India. RecentureSoft and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            </PrivacySection>
          </div>

          <div className={!searchQuery || 'Contact Information'.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'}>
            <PrivacySection id="contact" title="8. Contact Information" icon={SECTIONS[7].icon}>
              <p className="mb-4">If you have any questions or concerns regarding these terms, please contact us at:</p>
              <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700/50">
                <p className="font-semibold text-zinc-900 dark:text-white mb-2">RecentureSoft Infotech</p>
                <a href="mailto:info@recenturesoft.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">info@recenturesoft.com</a>
              </div>
            </PrivacySection>
          </div>

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

          <div className="p-6 rounded-2xl bg-zinc-900 dark:bg-zinc-800 text-white shadow-xl mt-8 mb-16 border border-zinc-800 dark:border-zinc-700">
            <h4 className="text-lg font-bold mb-4">Acknowledge Terms</h4>
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center justify-center mt-1">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-6 h-6 rounded border-2 border-zinc-600 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-colors"></div>
                <Check className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <div>
                <p className="font-medium">I have read and agree to the Terms of Service</p>
                <p className="text-sm text-zinc-400 mt-1">By checking this box, you acknowledge that you are bound by these terms.</p>
              </div>
            </label>
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
