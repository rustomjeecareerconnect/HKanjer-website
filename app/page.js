'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useMotionValue } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiEdit3, FiSun, FiChevronDown } from 'react-icons/fi';
import { FaBookOpen, FaDownload } from 'react-icons/fa';
import { articles } from '@/lib/data/articles';
import { testimonials } from '@/lib/data/testimonials';
import ScrollAnimation from '@/components/ScrollAnimation';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import PDFViewerModal from '@/components/PDFViewerModal';

const roles = ['Professor', 'Advisor', 'Author', 'Educator', 'Farmer'];

function Counter({ from = 0, to, duration = 2 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const latestArticles = articles.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  const openPdfViewer = (docId) => {
    setSelectedDocId(docId || 'integrated-decision-making-doc');
    setPdfModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center bg-primary-light dark:bg-primary overflow-hidden page-hero">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent mix-blend-overlay"></div>
        <div className="container-custom relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl text-text-dark dark:text-text font-bold mb-4"
            >
              Dr. Hanif Kanjer
            </motion.h1>
            
            <div className="h-12 mb-6 flex items-center justify-center lg:justify-start text-2xl md:text-3xl font-body text-text-dark-muted dark:text-text-muted">
              <span>I am&nbsp;</span>
              <div className="relative min-w-[240px] text-accent font-semibold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 whitespace-nowrap"
                  >
                    {/^[aeiou]/i.test(roles[roleIndex]) ? 'an' : 'a'} {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 text-text-dark-muted dark:text-text-muted font-body"
            >
              Bringing clarity, discipline, and insight to every role.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href="#highlights" variant="primary">Explore My Work</Button>
              <Button href="/teaching" variant="outline">Enroll in Masterclass</Button>
            </motion.div>
          </div>

          {/* Mobile Portrait (visible on small screens) */}
          <div className="flex lg:hidden justify-center items-center my-6">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-1 bg-gradient-to-tr from-accent/40 via-accent/15 to-accent/50 shadow-2xl shrink-0">
              <div className="w-full h-64 sm:h-72 aspect-square rounded-[22px] overflow-hidden bg-surface-light dark:bg-surface border-2 border-accent/40 shadow-xl relative">
                <Image
                  src="/images/dr-hanif-kanjer-2014-original.jpg"
                  alt="Prof. Dr. Hanif Kanjer"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 350px"
                  className="object-cover object-top filter contrast-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-white px-3 py-1.5 rounded-md border-2 border-accent/60 text-center shadow-md">
                  <p className="text-xs font-heading font-bold text-black">Prof. Dr. Hanif Kanjer</p>
                  <p className="text-[10px] text-[#8a5b00] font-semibold uppercase tracking-wider">Academician & Strategic Advisor</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Outer Subtle Orbiting Ring */}
            <div className="absolute w-[370px] h-[370px] rounded-full border border-accent/20 animate-[spin_30s_linear_infinite]">
              <div className="w-3 h-3 rounded-full bg-accent absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-lg shadow-accent/50"></div>
            </div>

            {/* Main Portrait Card with Gold Frame */}
            <div className="relative w-80 md:w-88 h-[400px] rounded-3xl p-1 bg-gradient-to-tr from-accent/50 via-accent/20 to-accent/60 shadow-2xl group shrink-0">
              <div className="w-full h-[392px] aspect-[4/5] rounded-[22px] overflow-hidden bg-surface-light dark:bg-surface border-2 border-accent/40 shadow-2xl relative">
                <Image
                  src="/images/dr-hanif-kanjer-2014-original.jpg"
                  alt="Prof. Dr. Hanif Kanjer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 360px"
                  className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white px-4 py-3 rounded-lg border-2 border-accent/60 text-center shadow-lg">
                  <h3 className="text-sm font-heading font-bold text-black">
                    Prof. Dr. Hanif Kanjer
                  </h3>
                  <p className="text-[11px] text-[#8a5b00] font-semibold tracking-wider uppercase mt-0.5">
                    Educator • Corporate Advisor • Author
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#highlights" className="text-accent hover:text-accent-hover transition-colors animate-bounce block">
            <FiChevronDown size={32} />
          </a>
        </motion.div>
      </section>

      {/* Section 2: Professional Highlights */}
      <section id="highlights" className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', num: 20, suffix: '+' },
              { label: 'Students Impacted', num: 10000, suffix: '+' },
              { label: 'Bestselling Books', num: 2, suffix: '' },
              { label: 'Countries Worked In', num: 9, suffix: '+' }
            ].map((stat, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                    <Counter to={stat.num} duration={2.5} />{stat.suffix}
                  </div>
                  <div className="text-sm md:text-base font-body text-text-dark-muted dark:text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Core Pillars */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom">
          <SectionHeading title="Core Pillars" subtitle="The foundations of a diverse and impactful career" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: FiBookOpen, title: 'Academia', desc: 'Institution building, curriculum design, pedagogy.', link: '/teaching' },
              { icon: FiBriefcase, title: 'Advisory', desc: 'Corporate strategy, financial modeling, consulting.', link: '/services' },
              { icon: FiEdit3, title: 'Authorship', desc: 'Bestselling books, articles, thought leadership.', link: '/books' },
              { icon: FiSun, title: 'Agriculture', desc: 'Farming, grounded values, giving back.', link: '/about' }
            ].map((pillar, i) => (
              <ScrollAnimation key={i} delay={i * 0.1} className="h-full">
                <Link href={pillar.link} className="block h-full group focus:outline-none focus:ring-2 focus:ring-accent rounded-xl">
                  <div className="card-base h-full flex flex-col items-center text-center p-8 transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-xl hover-glow">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <pillar.icon size={28} />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3 text-text-dark dark:text-text group-hover:text-accent transition-colors">{pillar.title}</h3>
                    <p className="font-body text-text-dark-muted dark:text-text-muted mb-6 flex-grow">{pillar.desc}</p>
                    <span className="text-accent font-semibold animated-underline inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Learn More <span className="ml-2">→</span>
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Featured Articles */}
      <section className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading title="Recent Thoughts" subtitle="Insights on leadership, education, and society" className="mb-0" />
            <Link href="/articles" className="hidden md:inline-flex text-accent font-semibold animated-underline items-center">
              View All Articles <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article, i) => (
              <ScrollAnimation key={article.slug} delay={i * 0.1}>
                <Link href={`/articles/${article.slug}`} className="block h-full group focus:outline-none focus:ring-2 focus:ring-accent rounded-xl">
                  <div className="card-base h-full flex flex-col p-6 hover-glow transition-all duration-300 group-hover:border-accent/60">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-text-dark-muted dark:text-text-muted">{article.readTime}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3 text-text-dark dark:text-text group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body text-text-dark-muted dark:text-text-muted text-sm mb-4 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="text-sm text-text-dark-muted dark:text-text-muted mt-auto pt-4 border-t border-accent/20 flex items-center justify-between">
                      <span>{article.date}</span>
                      <span className="text-accent text-xs font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/articles" className="text-accent font-semibold animated-underline inline-flex items-center">
              View All Articles <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials Preview */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom text-center">
          <SectionHeading title="Verified Evaluations" subtitle="Documented feedback and ratings from premier institutions" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredTestimonials.map((t, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="glass-card p-8 relative text-left h-full flex flex-col hover-glow rounded-2xl border border-accent/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent text-xs font-semibold px-2.5 py-1 bg-accent/15 rounded-full border border-accent/30">
                      ★ {t.rating}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-accent/80 font-medium">
                      {t.category}
                    </span>
                  </div>
                  <p className="font-accent italic text-text-dark dark:text-text text-base md:text-lg relative z-10 mb-6 flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  {/* Direct PDF Reader Action */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <button
                      onClick={() => openPdfViewer(t.docId || 'integrated-decision-making-doc')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-accent hover:bg-accent-hover px-3 py-1.5 rounded-lg shadow-sm transition-all"
                    >
                      <FaBookOpen className="text-[11px]" />
                      <span>Read Official PDF</span>
                    </button>
                    {t.docFile && (
                      <a
                        href={t.docFile}
                        download
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-text-dark-muted dark:text-text-muted hover:text-accent bg-surface-light dark:bg-surface px-2.5 py-1.5 rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
                        title="Download file"
                      >
                        <FaDownload size={10} />
                        <span>Download</span>
                      </a>
                    )}
                  </div>

                  <div>
                    <div className="gold-line w-12 mb-3"></div>
                    <h4 className="font-heading font-bold text-text-dark dark:text-text">{t.name}</h4>
                    <p className="text-xs text-text-dark-muted dark:text-text-muted">{t.designation}</p>
                    <p className="text-xs text-text-dark-muted/80 dark:text-text-muted/80 mt-0.5">{t.institution}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          <div className="mt-12">
            <Link href="/testimonials" className="text-accent font-semibold animated-underline inline-flex items-center">
              See All Verified Feedback & Endorsements <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PDF Modal on Home Page */}
      <PDFViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        initialDocId={selectedDocId}
      />

      {/* Section 6: CTA Banner */}
      <section className="py-20 bg-surface-light dark:bg-surface border-t-2 border-accent">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark dark:text-text mb-6">
              Ready to Transform Your Strategy?
            </h2>
            <p className="font-body text-text-dark-muted dark:text-text-muted mb-10 max-w-2xl mx-auto text-lg">
              Whether you are looking to refine your corporate financial models or seeking profound insights through academic masterclasses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">Book a Consultation</Button>
              <Button href="/teaching" variant="outline">Join the Masterclass</Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
