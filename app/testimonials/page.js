'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';
import ScrollAnimation from '@/components/ScrollAnimation';
import VerifiedCredentialsHub from '@/components/VerifiedCredentialsHub';
import PDFViewerModal from '@/components/PDFViewerModal';
import { FaQuoteLeft, FaStar, FaCheckCircle, FaFilePdf, FaAward, FaUniversity, FaDownload, FaBookOpen } from 'react-icons/fa';

const CATEGORIES = ['All', 'S P Jain', 'BML Munjal', 'XIMR'];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  const filteredTestimonials = activeCategory === 'All'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  const openDocumentViewer = (docId) => {
    setSelectedDocId(docId || 'spjain-emba04-sheet');
    setPdfModalOpen(true);
  };

  return (
    <div className="min-h-screen py-20 bg-primary-light dark:bg-primary">
      <div className="container-custom">
        {/* Page Hero Header */}
        <div className="page-hero text-center mb-12">
          <ScrollAnimation>
            <span className="inline-block py-1 px-3.5 rounded-full bg-accent/20 text-accent font-semibold text-xs mb-4 uppercase tracking-widest">
              Authentic Institutional Proof & Ratings
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-dark dark:text-text mb-4">
              Verified Evaluations & Credentials
            </h1>
            <p className="text-text-dark-muted dark:text-text-muted text-base md:text-lg max-w-3xl mx-auto">
              Direct verification of end-term student feedback scorecards, official dean commendations, rating distributions, and institutional credentials in one comprehensive showcase.
            </p>
          </ScrollAnimation>
        </div>

        {/* Interactive Verified Credentials & Scorecards Showcase */}
        <ScrollAnimation delay={0.1}>
          <div className="mb-20">
            <VerifiedCredentialsHub defaultTab="spjain-emba04-sheet" />
          </div>
        </ScrollAnimation>

        {/* Section Heading for Individual Cohort Quotes */}
        <ScrollAnimation delay={0.15}>
          <div className="text-center mb-10 pt-10 border-t border-accent/20">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">
              Official Survey Responses
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-dark dark:text-text">
              Verbatim Student & Dean Endorsements
            </h2>
            <p className="text-xs md:text-sm text-text-dark-muted dark:text-text-muted mt-2 max-w-xl mx-auto">
              Direct feedback collected by university quality assurance cells across MBA and MMS cohorts. Click any document button to read the original official PDF report in your browser.
            </p>
          </div>
        </ScrollAnimation>

        {/* Filter Tabs */}
        <ScrollAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-body transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-primary font-bold shadow-md shadow-accent/20 scale-105'
                    : 'bg-surface-light dark:bg-surface text-text-dark dark:text-text hover:text-accent border border-accent/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Masonry Grid of Real Testimonials */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name + index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid"
              >
                <ScrollAnimation delay={(index % 3) * 0.1}>
                  <div className="card-base glass-card p-7 flex flex-col hover-glow relative overflow-hidden group border border-accent/20 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <FaQuoteLeft className="text-3xl text-accent/20 group-hover:text-accent/40 transition-colors" />
                      {testimonial.rating && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-accent/15 text-accent rounded-full border border-accent/30">
                          <FaStar className="text-[10px]" /> {testimonial.rating}
                        </span>
                      )}
                    </div>
                    
                    <p className="font-accent italic text-sm md:text-base text-text-dark dark:text-text leading-relaxed mb-5 flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {testimonial.course && (
                      <p className="text-xs font-semibold text-accent mb-3 flex items-center gap-1">
                        <FaCheckCircle className="text-[10px]" /> Course: {testimonial.course}
                      </p>
                    )}

                    {/* Action Buttons: In-Browser PDF Reader + Download */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <button
                        onClick={() => openDocumentViewer(testimonial.docId || 'spjain-emba04-sheet')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-accent hover:bg-accent-hover px-3.5 py-2 rounded-xl transition-all shadow-sm group/btn"
                      >
                        <FaBookOpen className="text-xs" />
                        <span>Read Official PDF</span>
                      </button>

                      {testimonial.docFile && (
                        <a
                          href={testimonial.docFile}
                          download
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-dark-muted dark:text-text-muted hover:text-accent bg-surface-light dark:bg-surface px-3 py-2 rounded-xl border border-accent/20 hover:border-accent/40 transition-all"
                          title="Download document directly"
                        >
                          <FaDownload className="text-[10px]" />
                          <span className="hidden sm:inline">Download</span>
                        </a>
                      )}
                    </div>
                    
                    <div className="gold-line w-12 mb-4 opacity-50" />
                    
                    <div>
                      <h4 className="font-heading font-bold text-sm md:text-base text-text-dark dark:text-text">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-text-dark-muted dark:text-text-muted mt-0.5">
                        {testimonial.designation}
                      </p>
                      <p className="text-xs text-text-dark-muted/80 dark:text-text-muted/80">
                        {testimonial.institution}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                </ScrollAnimation>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Direct In-Browser PDF & Document Viewer Modal */}
      <PDFViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        initialDocId={selectedDocId}
      />
    </div>
  );
}

