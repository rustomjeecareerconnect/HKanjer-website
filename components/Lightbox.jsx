'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev,
  setCurrentIndex
}) {
  const handleNext = useCallback(() => {
    if (onNext) {
      onNext();
    } else if (setCurrentIndex) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  }, [onNext, setCurrentIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (onPrev) {
      onPrev();
    } else if (setCurrentIndex) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  }, [onPrev, setCurrentIndex, images.length]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    },
    [isOpen, onClose, handleNext, handlePrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-accent transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-50"
          aria-label="Close lightbox"
        >
          <FiX size={28} />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-accent transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-50 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <FiChevronLeft size={32} />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-accent transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-50 backdrop-blur-sm"
            aria-label="Next image"
          >
            <FiChevronRight size={32} />
          </button>
        )}

        {/* Content Box */}
        <div
          className="relative w-full max-w-5xl aspect-video md:aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-secondary/80 to-primary/90 border border-accent/20 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full flex flex-col items-center justify-center"
          >
            {currentImage?.hasRealImage ? (
              <div className="relative w-full h-full">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt || 'Gallery photo'}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-heading">✦</span>
                </div>
                
                <span className="text-accent text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-accent/10 rounded-full border border-accent/20 mb-3">
                  {currentImage?.category || 'Gallery'}
                </span>

                <h3 className="text-white text-2xl md:text-3xl font-heading font-medium max-w-2xl leading-relaxed mb-2">
                  {currentImage?.caption || currentImage?.alt}
                </h3>
              </div>
            )}
          </motion.div>

          {/* Bottom Counter Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex justify-between items-center text-xs text-white/80 px-6 z-10">
            <span className="font-medium">{currentImage?.caption}</span>
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
