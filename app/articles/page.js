'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { articles } from '@/lib/data/articles';
import ScrollAnimation from '@/components/ScrollAnimation';

const CATEGORIES = ['All', 'Management', 'From My Diary'];

export default function ArticlesIndex() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen py-20 bg-primary-light">
      <div className="container-custom">
        <div className="page-hero text-center mb-16">
          <ScrollAnimation>
            <h1 className="font-heading text-4xl md:text-5xl text-text-dark mb-4">
              Articles & Thought Leadership
            </h1>
            <p className="text-text-dark-muted text-lg max-w-2xl mx-auto">
              Essays, management insights, and personal diary reflections by Dr. Hanif Kanjer.
            </p>
          </ScrollAnimation>
        </div>

        {/* Filter Buttons */}
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-body transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-primary font-semibold shadow-sm'
                    : 'bg-surface-light text-text-dark hover:text-accent-hover border border-accent/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Articles Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ScrollAnimation delay={index * 0.1}>
                  <Link href={`/articles/${article.slug}`} className="block group">
                    <div className="card-base bg-surface-light p-6 h-full flex flex-col border border-accent/10 hover:border-accent/30 shadow-sm hover:shadow-md transition-all rounded-2xl">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-xs text-text-dark-muted font-medium">
                          {article.date} • {article.readTime}
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl text-text-dark mb-3 group-hover:text-accent transition-colors font-bold">
                        {article.title}
                      </h2>
                      <p className="text-text-dark-muted mb-6 flex-grow font-body text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="text-accent font-semibold animated-underline inline-flex self-start text-sm">
                        Read Full Article &rarr;
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
