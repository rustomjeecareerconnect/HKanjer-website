'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { officialDocumentSheets } from '@/lib/data/teachingEvaluations';
import PDFViewerModal from './PDFViewerModal';
import { 
  FaFileAlt, 
  FaSearchPlus, 
  FaSearchMinus, 
  FaExpand, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaUniversity, 
  FaCheckCircle, 
  FaAward, 
  FaEye, 
  FaThLarge, 
  FaFilePdf,
  FaStamp,
  FaDownload,
  FaBookOpen
} from 'react-icons/fa';

export default function DocumentSheetViewer({ defaultDocumentId = 'spjain-emba04-sheet' }) {
  const [selectedDocId, setSelectedDocId] = useState(defaultDocumentId);
  const [viewMode, setViewMode] = useState('single'); // 'single' or 'grid'
  const [viewFormat, setViewFormat] = useState(() => {
    const initialDoc = officialDocumentSheets.find(doc => doc.id === defaultDocumentId);
    return initialDoc?.image ? 'scan' : 'pdf';
  }); // 'pdf' or 'scan'
  const [zoomLevel, setZoomLevel] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalDocId, setActiveModalDocId] = useState(defaultDocumentId);
  const [activeCategory, setActiveCategory] = useState('All');

  const currentIndex = officialDocumentSheets.findIndex(doc => doc.id === selectedDocId);
  const currentDoc = officialDocumentSheets[currentIndex >= 0 ? currentIndex : 0];

  const categories = ['All', 'S P Jain', 'BML Munjal', 'XIMR', 'Curriculum', 'Credentials'];

  const filteredDocs = activeCategory === 'All'
    ? officialDocumentSheets
    : officialDocumentSheets.filter(d => d.category === activeCategory);

  const isPdf = currentDoc?.fileUrl?.endsWith('.pdf');

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + officialDocumentSheets.length) % officialDocumentSheets.length;
    const nextDoc = officialDocumentSheets[nextIdx];
    setSelectedDocId(nextDoc.id);
    setViewFormat(nextDoc.image ? 'scan' : 'pdf');
    setZoomLevel(1);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % officialDocumentSheets.length;
    const nextDoc = officialDocumentSheets[nextIdx];
    setSelectedDocId(nextDoc.id);
    setViewFormat(nextDoc.image ? 'scan' : 'pdf');
    setZoomLevel(1);
  };

  const openPdfModal = (docId) => {
    setActiveModalDocId(docId || currentDoc.id);
    setModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Category filter & View Mode toggles */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-accent/20">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-primary shadow-md shadow-accent/20 scale-105'
                  : 'bg-surface-light dark:bg-surface text-text-dark dark:text-text hover:border-accent/50 border border-accent/20'
              }`}
            >
              {cat === 'All' ? 'All Document Sheets & Scans' : cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold bg-surface-light dark:bg-surface text-text-dark dark:text-text border border-accent/30 hover:border-accent transition-colors"
          >
            {viewMode === 'single' ? (
              <>
                <FaThLarge className="text-accent" />
                <span>Show All as Grid</span>
              </>
            ) : (
              <>
                <FaFilePdf className="text-accent" />
                <span>Document Sheet Viewer</span>
              </>
            )}
          </button>
        </div>
      </div>

      {viewMode === 'single' ? (
        /* SINGLE DOCUMENT / PDF VIEWER MODE */
        <div className="space-y-6">
          {/* Document Viewer Frame with PDF Toolbar */}
          <div className="card-base glass-card rounded-3xl border-2 border-accent/30 overflow-hidden shadow-2xl bg-primary-light/95 dark:bg-primary/95">
            {/* Top Toolbar */}
            <div className="bg-surface-light dark:bg-surface/90 border-b border-accent/20 px-4 md:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/20 text-accent flex items-center justify-center font-bold">
                  <FaFilePdf className="text-lg" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm md:text-base text-text-dark dark:text-text truncate max-w-[280px] sm:max-w-md">
                    {currentDoc.title}
                  </h3>
                  <p className="text-[11px] text-text-dark-muted dark:text-text-muted flex items-center gap-2">
                    <span>{currentDoc.institution}</span>
                    <span>•</span>
                    <span className="text-accent font-semibold">{currentDoc.overallScore}</span>
                  </p>
                </div>
              </div>

              {/* View Format Switcher & Page Controls & Zoom */}
              <div className="flex items-center gap-2 md:gap-3">
                {isPdf && currentDoc.image && (
                  <div className="hidden sm:flex items-center bg-primary-light dark:bg-primary rounded-xl border border-accent/20 p-0.5 text-xs">
                    <button
                      onClick={() => setViewFormat('pdf')}
                      className={`px-3 py-1 rounded-lg font-medium transition-all ${
                        viewFormat === 'pdf'
                          ? 'bg-accent text-primary font-bold shadow-sm'
                          : 'text-text-dark-muted dark:text-text-muted hover:text-accent'
                      }`}
                    >
                      PDF Engine
                    </button>
                    <button
                      onClick={() => setViewFormat('scan')}
                      className={`px-3 py-1 rounded-lg font-medium transition-all ${
                        viewFormat === 'scan'
                          ? 'bg-accent text-primary font-bold shadow-sm'
                          : 'text-text-dark-muted dark:text-text-muted hover:text-accent'
                      }`}
                    >
                      High-Res Page
                    </button>
                  </div>
                )}

                <div className="flex items-center bg-primary-light dark:bg-primary rounded-xl border border-accent/20 px-2 py-1 text-xs">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 hover:text-accent rounded-lg transition-colors"
                    title="Previous Document"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <span className="px-2 font-mono text-text-dark dark:text-text">
                    {currentIndex + 1} / {officialDocumentSheets.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-1.5 hover:text-accent rounded-lg transition-colors"
                    title="Next Document"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>

                {(!isPdf || viewFormat === 'scan') && (
                  <div className="hidden sm:flex items-center bg-primary-light dark:bg-primary rounded-xl border border-accent/20 px-2 py-1 text-xs gap-1">
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.15))}
                      className="p-1.5 hover:text-accent rounded-lg transition-colors"
                      title="Zoom Out"
                    >
                      <FaSearchMinus size={12} />
                    </button>
                    <span className="px-1 text-[11px] font-mono text-text-dark dark:text-text">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(1.6, prev + 0.15))}
                      className="p-1.5 hover:text-accent rounded-lg transition-colors"
                      title="Zoom In"
                    >
                      <FaSearchPlus size={12} />
                    </button>
                    {zoomLevel !== 1 && (
                      <button
                        onClick={() => setZoomLevel(1)}
                        className="text-[10px] px-1.5 py-0.5 bg-accent/20 text-accent rounded hover:bg-accent/30"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                )}

                <button
                  onClick={() => openPdfModal(currentDoc.id)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-accent text-primary font-bold text-xs hover:bg-accent-hover transition-colors shadow-sm"
                  title="Open in Fullscreen Reader"
                >
                  <FaBookOpen size={12} />
                  <span className="hidden sm:inline">Interactive Reader</span>
                  <span className="sm:hidden">Read</span>
                </button>
              </div>
            </div>

            {/* Document Canvas Area */}
            <div className="p-3 md:p-6 bg-[#131720] flex items-center justify-center min-h-[550px] overflow-auto">
              <motion.div
                key={currentDoc.id + viewFormat}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-4xl"
              >
                {isPdf && viewFormat === 'pdf' ? (
                  /* Native In-Browser Embedded PDF Viewer */
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-700 h-[650px] flex flex-col relative">
                    <object
                      data={`${currentDoc.fileUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                      type="application/pdf"
                      className="w-full h-full"
                    >
                      <div className="p-8 text-center bg-slate-900 text-white flex flex-col items-center justify-center h-full">
                        <FaFilePdf className="text-accent text-5xl mb-3" />
                        <h4 className="font-bold text-lg mb-2">{currentDoc.title}</h4>
                        <p className="text-xs text-slate-300 mb-4">
                          Direct in-browser PDF reader available.
                        </p>
                        <button
                          onClick={() => openPdfModal(currentDoc.id)}
                          className="px-4 py-2 rounded-xl bg-accent text-primary font-bold text-xs"
                        >
                          Open Fullscreen Reader
                        </button>
                      </div>
                    </object>
                  </div>
                ) : (
                  /* High-Resolution Document Scan / Page View */
                  <div 
                    className="bg-white rounded-xl shadow-2xl p-2 md:p-4 border border-slate-300 relative group cursor-pointer"
                    onClick={() => openPdfModal(currentDoc.id)}
                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center', transition: 'transform 0.15s ease-out' }}
                  >
                    <div className="relative w-full aspect-[3/4] max-h-[750px] bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
                      {currentDoc.image ? (
                        <Image
                          src={currentDoc.image}
                          alt={currentDoc.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      ) : (
                        <div className="p-8 text-center flex flex-col items-center justify-center">
                          <FaFilePdf className="text-accent text-5xl mb-3" />
                          <h4 className="font-bold text-slate-800 text-base">{currentDoc.title}</h4>
                          <p className="text-xs text-slate-600 mt-1">{currentDoc.institution}</p>
                          {currentDoc.fileUrl && (
                            <button
                              onClick={() => openPdfModal(currentDoc.id)}
                              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-primary font-bold text-xs shadow-md"
                            >
                              <FaBookOpen /> Open PDF Reader
                            </button>
                          )}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-semibold gap-2 pointer-events-none">
                        <FaExpand /> Click to open Interactive PDF Reader
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Bottom Caption & Description */}
            <div className="p-4 md:p-6 bg-surface-light dark:bg-surface border-t border-accent/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent/20 text-accent">
                      Original Valid Document
                    </span>
                    <span className="text-xs text-text-dark-muted dark:text-text-muted">
                      {currentDoc.institution}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-text-dark dark:text-text">
                    {currentDoc.title}
                  </h4>
                  <p className="text-xs md:text-sm text-text-dark-muted dark:text-text-muted mt-1 leading-relaxed max-w-3xl">
                    {currentDoc.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => openPdfModal(currentDoc.id)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-primary font-bold text-xs hover:bg-accent-hover transition-colors shadow-sm"
                  >
                    <FaBookOpen size={12} />
                    <span>Read In Browser</span>
                  </button>

                  {currentDoc.fileUrl && (
                    <a
                      href={currentDoc.fileUrl}
                      download
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-light dark:bg-surface text-accent border border-accent/40 font-semibold text-xs hover:bg-accent/15 transition-colors"
                      title="Download PDF file"
                    >
                      <FaDownload size={11} />
                      <span>Download</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Document Strip */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-dark-muted dark:text-text-muted block mb-3">
              Browse All Official Scans & Document Pages ({officialDocumentSheets.length} Documents)
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {officialDocumentSheets.map((doc, idx) => {
                const isSelected = doc.id === currentDoc.id;
                return (
                  <div
                    key={doc.id}
                    onClick={() => {
                      setSelectedDocId(doc.id);
                      setViewFormat(doc.image ? 'scan' : 'pdf');
                      setZoomLevel(1);
                    }}
                    className={`group cursor-pointer rounded-xl overflow-hidden border-2 transition-all p-1.5 flex flex-col bg-surface-light dark:bg-surface ${
                      isSelected
                        ? 'border-accent ring-2 ring-accent/30 shadow-lg scale-105'
                        : 'border-accent/20 hover:border-accent/60 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="relative aspect-[3/4] w-full bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
                      {doc.image ? (
                        <Image
                          src={doc.image}
                          alt={doc.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="p-2 text-center flex flex-col items-center justify-center">
                          <FaFileAlt className="text-accent text-xl mb-1" />
                          <span className="text-[9px] font-bold text-text-dark dark:text-text line-clamp-2">
                            {doc.institution.split(' ')[0]}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-1 left-1 bg-black/70 text-white text-[9px] px-1 rounded font-mono">
                        #{idx + 1}
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-text-dark dark:text-text mt-1.5 truncate text-center">
                      {doc.institution.split(' ')[0]} - {doc.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* GRID VIEW OF ALL DOCUMENTS & SCANS AS IS */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="card-base glass-card rounded-2xl overflow-hidden border border-accent/30 flex flex-col hover:border-accent transition-all duration-300 group shadow-lg"
            >
              {/* Document Image Header */}
              <div 
                className="relative aspect-[4/3] bg-slate-900 cursor-pointer overflow-hidden border-b border-accent/20"
                onClick={() => openPdfModal(doc.id)}
              >
                {doc.image ? (
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-surface-light to-accent/10 dark:from-surface dark:to-accent/10 p-6 flex flex-col items-center justify-center text-center">
                    <FaFilePdf className="text-accent text-4xl mb-2" />
                    <span className="text-xs font-bold text-text-dark dark:text-text">{doc.institution}</span>
                    <span className="text-[10px] text-accent font-semibold mt-1">{doc.overallScore}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5">
                  <FaBookOpen /> Read Document in Browser
                </div>
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-accent text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                  {doc.category}
                </div>
              </div>

              {/* Document Info */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-text-dark dark:text-text mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-accent font-semibold mb-2">
                    {doc.course || doc.programme}
                  </p>
                  <p className="text-xs text-text-dark-muted dark:text-text-muted line-clamp-2 mb-4">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-accent/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-accent">
                    ★ {doc.overallScore}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openPdfModal(doc.id)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-accent text-primary font-bold hover:bg-accent-hover transition-colors flex items-center gap-1"
                    >
                      <FaBookOpen size={11} />
                      <span>Read</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedDocId(doc.id);
                        setViewFormat(doc.image ? 'scan' : 'pdf');
                        setViewMode('single');
                      }}
                      className="text-xs px-3 py-1.5 rounded-lg bg-surface-light dark:bg-surface border border-accent/30 text-text-dark dark:text-text hover:border-accent font-semibold transition-colors"
                    >
                      Viewer
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* FULLSCREEN IN-BROWSER PDF & DOCUMENT VIEWER MODAL */}
      <PDFViewerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialDocId={activeModalDocId}
      />
    </div>
  );
}

