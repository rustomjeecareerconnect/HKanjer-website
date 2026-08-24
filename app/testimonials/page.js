'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';
import ScrollAnimation from '@/components/ScrollAnimation';
import { FaQuoteLeft, FaStar, FaCheckCircle } from 'react-icons/fa';

const CATEGORIES = ['All', 'S P Jain', 'RCIS', 'XIMR', 'BML Munjal', 'Industry'];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTestimonials = activeCategory === 'All'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen py-20 bg-primary-light dark:bg-primary">
      <div className="container-custom">
        <div className="page-hero text-center mb-16">
          <ScrollAnimation>
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-xs mb-4 uppercase tracking-widest">
              Verified Feedback & Endorsements
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-text-dark dark:text-text mb-4">
              What People Say
            </h1>
            <p className="text-text-dark-muted dark:text-text-muted text-lg max-w-2xl mx-auto">
              Student feedback ratings and institutional endorsements from top business schools, universities, and industry clients.
            </p>
          </ScrollAnimation>
        </div>

        {/* Verified Ratings Highlight Banner */}
        <ScrollAnimation delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="card-base text-center p-6 border-t-4 border-t-accent hover-glow">
              <div className="flex items-center justify-center gap-1 text-accent mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="text-3xl font-heading font-bold text-accent mb-1">4.998 / 5.0</div>
              <h4 className="font-semibold text-text-dark dark:text-text text-sm">BML Munjal University</h4>
              <p className="text-xs text-text-dark-muted dark:text-text-muted mt-1">Integrated Decision Making (MBA)</p>
            </div>

            <div className="card-base text-center p-6 border-t-4 border-t-accent hover-glow">
              <div className="flex items-center justify-center gap-1 text-accent mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="text-3xl font-heading font-bold text-accent mb-1">9.60 / 10.0</div>
              <h4 className="font-semibold text-text-dark dark:text-text text-sm">S P Jain School of Global Mgmt</h4>
              <p className="text-xs text-text-dark-muted dark:text-text-muted mt-1">Strategic Innovation (EMBA)</p>
            </div>

            <div className="card-base text-center p-6 border-t-4 border-t-accent hover-glow">
              <div className="flex items-center justify-center gap-1 text-accent mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="text-3xl font-heading font-bold text-accent mb-1">4.56 / 5.0</div>
              <h4 className="font-semibold text-text-dark dark:text-text text-sm">Xavier Institute of Mgmt (XIMR)</h4>
              <p className="text-xs text-text-dark-muted dark:text-text-muted mt-1">Derivatives & Risk Mgmt (MMS)</p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Filter Tabs */}
        <ScrollAnimation delay={0.2}>
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

        {/* Masonry Grid */}
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
                  <div className="card-base glass-card p-8 flex flex-col hover-glow relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-4">
                      <FaQuoteLeft className="text-3xl text-accent/20 group-hover:text-accent/40 transition-colors" />
                      {testimonial.rating && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-accent/15 text-accent rounded-full border border-accent/30">
                          <FaStar className="text-[10px]" /> {testimonial.rating}
                        </span>
                      )}
                    </div>
                    
                    <p className="font-accent italic text-base md:text-lg text-text-dark dark:text-text leading-relaxed mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>

                    {testimonial.course && (
                      <p className="text-xs font-semibold text-accent mb-3 flex items-center gap-1">
                        <FaCheckCircle className="text-[10px]" /> Course: {testimonial.course}
                      </p>
                    )}
                    
                    <div className="gold-line w-12 mb-4 opacity-50" />
                    
                    <div>
                      <h4 className="font-heading font-bold text-base md:text-lg text-text-dark dark:text-text">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-text-dark-muted dark:text-text-muted mt-0.5">
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
    </div>
  );
}
