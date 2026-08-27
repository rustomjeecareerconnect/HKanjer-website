'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery } from '@/lib/data/gallery';
import ScrollAnimation from '@/components/ScrollAnimation';
import Lightbox from '@/components/Lightbox';

const CATEGORIES = ['All', 'Portraits', 'Lectures', 'Evaluations', 'Credentials'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'All'
    ? gallery
    : gallery.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-20 bg-primary-light dark:bg-primary">
      <div className="container-custom">
        <div className="page-hero text-center mb-16">
          <ScrollAnimation>
            <span className="inline-block py-1 px-3.5 rounded-full bg-accent/20 text-accent font-semibold text-xs mb-4 uppercase tracking-widest">
              Visual Journey
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-text-dark dark:text-text mb-4">
              Gallery & Moments
            </h1>
            <p className="text-text-dark-muted dark:text-text-muted text-lg max-w-2xl mx-auto">
              Memories from university lecture halls, executive education cohorts, academic milestones, and agricultural life.
            </p>
          </ScrollAnimation>
        </div>

        {/* Filter Tabs */}
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-body transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-primary font-medium'
                    : 'bg-surface-light dark:bg-surface text-text-dark dark:text-text hover:text-accent-hover border border-accent/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Photo Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => {
              const originalIndex = gallery.findIndex(g => g.id === image.id);
              
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ScrollAnimation delay={(index % 4) * 0.1}>
                    <div 
                      className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-500 border border-accent/20 bg-surface-light dark:bg-surface"
                      onClick={() => openLightbox(originalIndex)}
                    >
                      {image.hasRealImage ? (
                        <div className="w-full h-full relative">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary flex flex-col items-center justify-center p-6 text-center transition-transform duration-700 group-hover:scale-105">
                          <span className="text-accent text-2xl mb-2 font-heading">✦</span>
                          <span className="text-xs text-text-dark-muted dark:text-text-muted font-medium">{image.caption}</span>
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-accent text-[11px] font-semibold uppercase tracking-wider mb-1 block transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                          {image.category}
                        </span>
                        <p className="text-white text-sm font-medium transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        images={gallery} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
      />
    </div>
  );
}
