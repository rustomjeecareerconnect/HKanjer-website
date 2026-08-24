'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView, useMotionValue } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiEdit3, FiSun, FiChevronDown } from 'react-icons/fi';
import { articles } from '@/lib/data/articles';
import { testimonials } from '@/lib/data/testimonials';
import ScrollAnimation from '@/components/ScrollAnimation';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import { useRef } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const latestArticles = articles.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

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

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80 rounded-full border-4 border-accent/30 p-4 animate-[spin_20s_linear_infinite]">
              <div className="w-full h-full rounded-full border-2 border-accent border-dashed"></div>
            </div>
            <div className="absolute w-72 h-72 rounded-full overflow-hidden bg-surface-light dark:bg-surface border-4 border-accent/50 shadow-2xl">
              {/* Portrait Placeholder */}
              <div className="w-full h-full bg-secondary-light dark:bg-secondary flex items-center justify-center text-text-dark-muted dark:text-text-muted">
                Portrait Image
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
              { icon: FiBriefcase, title: 'Advisory', desc: 'Corporate strategy, financial modeling, consulting.', link: '/advisory' },
              { icon: FiEdit3, title: 'Authorship', desc: 'Bestselling books, articles, thought leadership.', link: '/writing' },
              { icon: FiSun, title: 'Agriculture', desc: 'Farming, grounded values, giving back.', link: '/about' }
            ].map((pillar, i) => (
              <ScrollAnimation key={i} delay={i * 0.1} className="h-full">
                <div className="card-base h-full flex flex-col items-center text-center p-8 group">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-text-dark dark:text-text">{pillar.title}</h3>
                  <p className="font-body text-text-dark-muted dark:text-text-muted mb-6 flex-grow">{pillar.desc}</p>
                  <Link href={pillar.link} className="text-accent font-semibold animated-underline inline-flex items-center">
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
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
            <Link href="/writing" className="hidden md:inline-flex text-accent font-semibold animated-underline items-center">
              View All Articles <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article, i) => (
              <ScrollAnimation key={article.slug} delay={i * 0.1}>
                <Link href={`/writing/${article.slug}`} className="block h-full">
                  <div className="card-base h-full flex flex-col p-6 hover-glow">
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
                    <div className="text-sm text-text-dark-muted dark:text-text-muted mt-auto pt-4 border-t border-accent/20">
                      {article.date}
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/writing" className="text-accent font-semibold animated-underline inline-flex items-center">
              View All Articles <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials Preview */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom text-center">
          <SectionHeading title="What Others Say" subtitle="Reflections from colleagues, clients, and students" center />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredTestimonials.map((t, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="glass-card p-8 relative text-left h-full flex flex-col">
                  <div className="text-accent text-5xl font-heading absolute top-4 left-4 opacity-20">"</div>
                  <p className="font-accent italic text-text-dark dark:text-text text-lg relative z-10 mb-6 flex-grow">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="gold-line w-12 mb-3"></div>
                    <h4 className="font-heading font-bold text-text-dark dark:text-text">{t.name}</h4>
                    <p className="text-sm text-text-dark-muted dark:text-text-muted">{t.designation}, {t.institution}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          <div className="mt-12">
            <Link href="/about#testimonials" className="text-accent font-semibold animated-underline inline-flex items-center">
              See All Testimonials <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

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
