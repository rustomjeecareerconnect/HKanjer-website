'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaFilePdf, 
  FaDownload, 
  FaExpand, 
  FaCompress, 
  FaSearchPlus, 
  FaSearchMinus, 
  FaChevronLeft, 
  FaChevronRight, 
  FaCheckCircle, 
  FaUniversity,
  FaFileAlt,
  FaExternalLinkAlt,
  FaBookOpen
} from 'react-icons/fa';
import { officialDocumentSheets } from '@/lib/data/teachingEvaluations';

export default function PDFViewerModal({ 
  isOpen, 
  onClose, 
  initialDocId = 'spjain-emba04-sheet',
  customDoc = null
}) {
  const [selectedDocId, setSelectedDocId] = useState(initialDocId);
  const [viewFormat, setViewFormat] = useState(() => {
    const initialDoc = customDoc || officialDocumentSheets.find(d => d.id === initialDocId);
    return initialDoc?.image ? 'scan' : 'pdf';
  }); // 'pdf' or 'scan'
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  // Sync selectedDocId when initialDocId or isOpen changes
  useEffect(() => {
    if (initialDocId) {
      setSelectedDocId(initialDocId);
      setZoomLevel(1);
      const initialDoc = customDoc || officialDocumentSheets.find(d => d.id === initialDocId);
      setViewFormat(initialDoc?.image ? 'scan' : 'pdf');
    }
  }, [customDoc, initialDocId, isOpen]);

  // Handle ESC key and arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen, onClose]);

  const currentDoc = customDoc || officialDocumentSheets.find(d => d.id === selectedDocId) || officialDocumentSheets[0];
  const currentIndex = officialDocumentSheets.findIndex(d => d.id === currentDoc.id);

  const isPdf = currentDoc?.fileUrl?.endsWith('.pdf');
  const isImage = currentDoc?.fileUrl?.match(/\.(jpeg|jpg|png|webp)$/i) || currentDoc?.image;

  useEffect(() => {
    if (isOpen && currentDoc?.image) {
      setViewFormat('scan');
    }
  }, [currentDoc?.id, currentDoc?.image, isOpen]);

  if (!isOpen) return null;

  const handlePrevDoc = () => {
    if (currentIndex > 0) {
      const nextDoc = officialDocumentSheets[currentIndex - 1];
      setSelectedDocId(nextDoc.id);
      setViewFormat(nextDoc.image ? 'scan' : 'pdf');
      setZoomLevel(1);
    } else {
      const nextDoc = officialDocumentSheets[officialDocumentSheets.length - 1];
      setSelectedDocId(nextDoc.id);
      setViewFormat(nextDoc.image ? 'scan' : 'pdf');
      setZoomLevel(1);
    }
  };

  const handleNextDoc = () => {
    if (currentIndex < officialDocumentSheets.length - 1) {
      const nextDoc = officialDocumentSheets[currentIndex + 1];
      setSelectedDocId(nextDoc.id);
      setViewFormat(nextDoc.image ? 'scan' : 'pdf');
      setZoomLevel(1);
    } else {
      const nextDoc = officialDocumentSheets[0];
      setSelectedDocId(nextDoc.id);
      setViewFormat(nextDoc.image ? 'scan' : 'pdf');
      setZoomLevel(1);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className={`bg-surface-light dark:bg-[#12161f] border border-accent/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden w-full transition-all duration-300 ${
            isFullscreen 
              ? 'fixed inset-0 rounded-none z-50 h-screen max-w-none' 
              : 'max-w-6xl h-[90vh] max-h-[920px]'
          }`}
        >
          {/* Top Header Bar */}
          <div className="px-4 py-3 bg-surface dark:bg-[#181d28] border-b border-accent/20 flex items-center justify-between gap-3 text-text-dark dark:text-text flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center font-bold flex-shrink-0">
                <FaFilePdf className="text-base" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-accent/20 text-accent">
                    Original Verified Document
                  </span>
                  <span className="text-xs text-text-dark-muted dark:text-text-muted hidden sm:inline truncate">
                    {currentDoc.institution}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-text-dark dark:text-text truncate mt-0.5">
                  {currentDoc.title}
                </h3>
              </div>
            </div>

            {/* Quick Actions & Close */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* Document Format Switcher if both PDF and Scan available */}
              {isPdf && currentDoc.image && (
                <div className="flex items-center bg-primary-light dark:bg-primary rounded-xl border border-accent/25 p-0.5 text-[10px] sm:text-xs">
                  <button
                    onClick={() => setViewFormat('pdf')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      viewFormat === 'pdf'
                        ? 'bg-accent text-primary font-bold shadow-sm'
                        : 'text-text-dark-muted dark:text-text-muted hover:text-accent'
                    }`}
                  >
                    PDF Mode
                  </button>
                  <button
                    onClick={() => setViewFormat('scan')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      viewFormat === 'scan'
                        ? 'bg-accent text-primary font-bold shadow-sm'
                        : 'text-text-dark-muted dark:text-text-muted hover:text-accent'
                    }`}
                  >
                    High-Res Page
                  </button>
                </div>
              )}

              {/* Toggle Sidebar */}
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                  showSidebar
                    ? 'bg-accent/15 text-accent border-accent/40'
                    : 'bg-surface-light dark:bg-surface text-text-dark-muted dark:text-text-muted border-accent/20 hover:text-accent'
                }`}
                title="Toggle Document Details & List"
              >
                <FaBookOpen size={11} />
                <span>Documents</span>
              </button>

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-xl text-text-dark-muted dark:text-text-muted hover:text-accent hover:bg-accent/10 border border-accent/20 transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <FaCompress size={13} /> : <FaExpand size={13} />}
              </button>

              {/* Download original */}
              {currentDoc.fileUrl && (
                <a
                  href={currentDoc.fileUrl}
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent text-primary font-bold text-xs hover:bg-accent-hover transition-colors shadow-sm"
                  title="Download Original File"
                >
                  <FaDownload size={11} />
                  <span className="hidden sm:inline">Download</span>
                </a>
              )}

              {/* Close Modal */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-text-dark-muted dark:text-text-muted hover:text-red-400 hover:bg-red-500/10 border border-accent/20 transition-colors"
                title="Close"
              >
                <FaTimes size={15} />
              </button>
            </div>
          </div>

          {/* Sub Toolbar for Zoom & Navigation */}
          <div className="px-4 py-2 bg-surface-light dark:bg-[#141822] border-b border-accent/15 flex items-center justify-between text-xs text-text-dark-muted dark:text-text-muted flex-shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevDoc}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-accent/10 hover:text-accent border border-accent/20 transition-colors"
                title="Previous Document"
              >
                <FaChevronLeft size={10} />
                <span className="hidden sm:inline">Previous</span>
              </button>
              <span className="font-mono text-text-dark dark:text-text font-semibold px-1">
                {currentIndex + 1} of {officialDocumentSheets.length}
              </span>
              <button
                onClick={handleNextDoc}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-accent/10 hover:text-accent border border-accent/20 transition-colors"
                title="Next Document"
              >
                <span className="hidden sm:inline">Next</span>
                <FaChevronRight size={10} />
              </button>
            </div>

            {/* Overall Score Badge */}
            <div className="flex items-center gap-2">
              {currentDoc.overallScore && (
                <span className="font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/25">
                  Rating: {currentDoc.overallScore}
                </span>
              )}
            </div>

            {/* Scan Page Zoom Controls */}
            {(!isPdf || viewFormat === 'scan') && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setZoomLevel(prev => Math.max(0.7, prev - 0.15))}
                  className="p-1.5 hover:text-accent rounded-lg border border-accent/20"
                  title="Zoom Out"
                >
                  <FaSearchMinus size={11} />
                </button>
                <span className="font-mono text-[11px] px-1 text-text-dark dark:text-text">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel(prev => Math.min(1.8, prev + 0.15))}
                  className="p-1.5 hover:text-accent rounded-lg border border-accent/20"
                  title="Zoom In"
                >
                  <FaSearchPlus size={11} />
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
          </div>

          {/* Main Viewer Body (Reader Canvas + Sidebar) */}
          <div className="flex-1 flex overflow-hidden min-h-0 bg-[#0f1219]">
            {/* Primary Document Canvas */}
            <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 overflow-auto relative">
              {isPdf && viewFormat === 'pdf' ? (
                /* Native In-Browser PDF Rendering Object/Iframe */
                <div className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-slate-700">
                  <object
                    data={`${currentDoc.fileUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                    type="application/pdf"
                    className="w-full h-full min-h-[450px]"
                  >
                    <div className="p-8 text-center bg-surface-light dark:bg-surface text-text-dark dark:text-text flex flex-col items-center justify-center h-full">
                      <FaFilePdf className="text-accent text-5xl mb-3" />
                      <h4 className="font-bold text-lg mb-2">{currentDoc.title}</h4>
                      <p className="text-sm text-text-dark-muted dark:text-text-muted mb-4 max-w-md">
                        Your browser does not support embedded PDF rendering. You can view the high-resolution scanned page or download the file directly.
                      </p>
                      <div className="flex items-center gap-3">
                        {currentDoc.image && (
                          <button
                            onClick={() => setViewFormat('scan')}
                            className="px-4 py-2 rounded-xl bg-accent text-primary font-bold text-xs"
                          >
                            Switch to High-Res Scanned Page
                          </button>
                        )}
                        <a
                          href={currentDoc.fileUrl}
                          download
                          className="px-4 py-2 rounded-xl bg-surface border border-accent/40 text-accent font-bold text-xs"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </object>
                </div>
              ) : currentDoc.image ? (
                /* High-Res Scanned Document Page */
                <div 
                  className="w-full max-w-3xl max-h-full bg-white rounded-xl shadow-2xl p-2 sm:p-4 border border-slate-300 overflow-auto flex items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center', transition: 'transform 0.15s ease-out' }}
                >
                  <div className="relative w-full aspect-[3/4] max-h-[760px] bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={currentDoc.image}
                      alt={currentDoc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              ) : (
                /* Fallback for spreadsheet / non-image documents */
                <div className="p-8 max-w-lg bg-surface-light dark:bg-surface text-text-dark dark:text-text rounded-2xl border border-accent/30 text-center flex flex-col items-center">
                  <FaFileAlt className="text-accent text-5xl mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">{currentDoc.title}</h3>
                  <p className="text-xs text-text-dark-muted dark:text-text-muted mb-6 leading-relaxed">
                    {currentDoc.description}
                  </p>
                  {currentDoc.fileUrl && (
                    <a
                      href={currentDoc.fileUrl}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-primary font-bold text-xs shadow-lg hover:bg-accent-hover transition-colors"
                    >
                      <FaDownload />
                      <span>Download Original Evaluation File</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right Sidebar: Document Metadata & All Documents Switcher */}
            {showSidebar && (
              <div className="w-80 border-l border-accent/20 bg-surface-light dark:bg-[#141822] flex flex-col hidden lg:flex flex-shrink-0 overflow-hidden">
                <div className="p-4 border-b border-accent/15">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                    Document Dossier
                  </h4>
                  <p className="text-xs text-text-dark-muted dark:text-text-muted">
                    Official quality assurance & evaluation records.
                  </p>
                </div>

                {/* Current Doc Summary */}
                <div className="p-4 bg-accent/5 border-b border-accent/15 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-dark-muted dark:text-text-muted">Institution:</span>
                    <span className="font-semibold text-text-dark dark:text-text truncate max-w-[170px] text-right">
                      {currentDoc.institution}
                    </span>
                  </div>
                  {currentDoc.course && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-dark-muted dark:text-text-muted">Course:</span>
                      <span className="font-semibold text-accent truncate max-w-[170px] text-right">
                        {currentDoc.course}
                      </span>
                    </div>
                  )}
                  {currentDoc.overallScore && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-dark-muted dark:text-text-muted">Score:</span>
                      <span className="font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {currentDoc.overallScore}
                      </span>
                    </div>
                  )}
                  {currentDoc.date && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-dark-muted dark:text-text-muted">Term:</span>
                      <span className="text-text-dark dark:text-text text-right text-[11px]">
                        {currentDoc.date}
                      </span>
                    </div>
                  )}
                  {currentDoc.details && (
                    <div className="pt-2 border-t border-accent/15">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-dark-muted dark:text-text-muted block mb-1.5">
                        Key Highlights:
                      </span>
                      <ul className="space-y-1 text-[11px] text-text-dark-muted dark:text-text-muted leading-tight">
                        {currentDoc.details.slice(0, 3).map((d, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-accent font-bold">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* All Available Documents List */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-text-dark-muted dark:text-text-muted px-2 py-1">
                    Select Document ({officialDocumentSheets.length})
                  </div>
                  {officialDocumentSheets.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setSelectedDocId(doc.id);
                        setZoomLevel(1);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-2.5 ${
                        selectedDocId === doc.id
                          ? 'bg-accent/15 border-accent text-text-dark dark:text-text shadow-sm'
                          : 'bg-surface/50 border-accent/15 text-text-dark-muted dark:text-text-muted hover:border-accent/40 hover:text-text-dark dark:hover:text-text'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        selectedDocId === doc.id ? 'bg-accent text-primary font-bold' : 'bg-accent/20 text-accent'
                      }`}>
                        <FaFilePdf size={11} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-heading font-semibold text-xs truncate">
                          {doc.title}
                        </h5>
                        <p className="text-[10px] text-accent mt-0.5 truncate">
                          {doc.institution} • {doc.overallScore}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
