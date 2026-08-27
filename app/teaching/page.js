'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import VerifiedCredentialsHub from '@/components/VerifiedCredentialsHub';
import { FiClock, FiDollarSign, FiAward, FiUsers, FiBookOpen, FiStar, FiCheck } from 'react-icons/fi';
import { FaStar, FaGraduationCap } from 'react-icons/fa';

const learningOutcomes = [
  "Reading & dissecting Balance Sheets, P&L, and Cash Flow Statements",
  "Key investment ratios: ROE, ROCE, P/E, Debt-to-Equity, Operating Margins",
  "Assessing economic moats, competitive advantages, and management quality",
  "Macroeconomic analysis, interest rate cycles, and sector valuations",
  "Intrinsic valuation modeling vs. market price; avoiding value traps",
  "Live case studies of listed Indian companies on BSE/NSE",
  "Practical Excel modeling templates for automated screening"
];

const institutions = [
  {
    name: "S P Jain School of Global Management",
    locations: "Dubai, Singapore, Mumbai",
    subjects: "Strategic Innovation, Managerial Economics, Business Strategy (EMBA)",
    highlight: "Student Rating: 9.60 / 10.0"
  },
  {
    name: "Xavier Institute of Management & Research (XIMR)",
    locations: "St. Xavier's Campus, Mumbai",
    subjects: "Derivatives & Risk Management (MMS Finance)",
    highlight: "Student Rating: 4.56 / 5.0 (Ranked Excellent)"
  },
  {
    name: "BML Munjal University",
    locations: "Gurugram, India",
    subjects: "Integrated Decision Making (MBA School of Management)",
    highlight: "Student Rating: 4.9984 / 5.0 (Near-Perfect Score)"
  },
  {
    name: "Rustomjee Business School (RBS)",
    locations: "Mumbai, India",
    subjects: "Founder Dean • Strategic Management, Corporate Finance & Restructuring",
    highlight: "Curriculum Architecture & Leadership"
  },
  {
    name: "MH Saboo Siddik College of Engineering",
    locations: "Mumbai, India",
    subjects: "Engineering Economics, Production Systems & Operations Research",
    highlight: "Engineering & Applied Economics"
  }
];

export default function TeachingPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Masterclass Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary dark:to-secondary section-padding border-b border-accent/20">
        <div className="container-custom relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block py-1 px-3.5 rounded-full bg-accent/20 text-accent font-semibold text-xs mb-6 uppercase tracking-widest">
                Flagship Academic & Investor Program
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-dark dark:text-text mb-6">
                Masterclass on Equity Investment & <span className="text-gradient">Fundamental Analysis</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-dark-muted dark:text-text-muted mb-10 font-body">
                Learn to evaluate stocks, dissect balance sheets, and model intrinsic value like a professional fund manager.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-2 bg-surface-light dark:bg-surface px-6 py-3 rounded-full shadow-sm border border-accent/10 text-text-dark dark:text-text">
                  <FiClock className="text-accent text-xl" />
                  <span className="font-semibold">8 Hours Live Instruction</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-light dark:bg-surface px-6 py-3 rounded-full shadow-sm border border-accent/10 text-text-dark dark:text-text">
                  <FiDollarSign className="text-accent text-xl" />
                  <span className="font-semibold">₹12,000 Inclusions</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-light dark:bg-surface px-6 py-3 rounded-full shadow-sm border border-accent/10 text-text-dark dark:text-text">
                  <FiAward className="text-accent text-xl" />
                  <span className="font-semibold">Certificate & Financial Models</span>
                </div>
              </div>

              <Link href="/contact" className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-10 rounded-lg transition-transform hover:scale-105 duration-300 text-lg shadow-lg shadow-accent/20">
                Enroll in Masterclass
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Classroom Spotlight Image Section */}
      <section className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <ScrollAnimation>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/30 group">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/gallery/classroom-sp-jain.jpg"
                      alt="Prof. Dr. Hanif Kanjer with Executive MBA Cohort at S P Jain Global"
                      fill
                      sizes="(max-width: 1024px) 100vw, 650px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-medium">
                      Prof. Dr. Hanif Kanjer with Executive MBA Cohort at S P Jain School of Global Management (Dubai & Singapore)
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-5">
              <ScrollAnimation delay={0.2}>
                <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">Pedagogical Approach</span>
                <h2 className="text-3xl font-heading font-bold text-text-dark dark:text-text mb-4">
                  Transformative, Case-Driven & Analytical Teaching
                </h2>
                <p className="text-text-dark-muted dark:text-text-muted text-sm md:text-base leading-relaxed mb-6 font-body">
                  Whether mentoring future school leaders at RCIS, training MBA students at S P Jain and XIMR, or guiding retail investors in the Equity Masterclass, Dr. Kanjer’s pedagogy centers around simulated scenarios, empirical data, and linking rigorous theory to boardroom decision-making.
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-sm text-text-dark dark:text-text">
                    <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                    <span>Direct financial statement analysis (BSE / NSE live data)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-text-dark dark:text-text">
                    <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                    <span>Structured corporate decision matrices and valuation models</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-text-dark dark:text-text">
                    <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                    <span>High engagement, active case discussions, and zero jargon</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Student & Institutional Feedback Ratings Hub */}
      <section className="section-padding bg-primary-light dark:bg-primary border-t border-b border-accent/10">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">
                Official Institutional Evaluations
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark dark:text-text mb-4">
                Verified Faculty & Student Scorecards
              </h2>
              <div className="gold-line-center"></div>
              <p className="mt-4 text-text-dark-muted dark:text-text-muted">
                Inspect authentic end-term performance scorecards, dean signatures, verbatim comments, and institutional records across premier business schools.
              </p>
            </div>
          </ScrollAnimation>

          <VerifiedCredentialsHub defaultTab="spjain-emba04-sheet" />
        </div>
      </section>

      {/* What You'll Learn (Masterclass Curriculum) */}
      <section className="section-padding bg-surface-light dark:bg-surface">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">Masterclass Curriculum</span>
              <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">What You Will Master</h2>
              <div className="gold-line-center"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card-base flex items-start gap-4 p-6 ${index === 6 ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-text-dark dark:text-text font-body mt-2 leading-relaxed">
                  {outcome}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Teaching Portfolio */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">Higher Education & Professorships</span>
              <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">Academic Teaching Portfolio</h2>
              <div className="gold-line-center"></div>
              <p className="mt-4 text-text-dark-muted dark:text-text-muted max-w-2xl mx-auto">
                Visiting Faculty and Professor for postgraduate, MBA, and executive programs across renowned institutions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((inst, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="card-base p-6 h-full border border-surface-light dark:border-surface hover:border-accent/30 transition-colors flex flex-col">
                  <div className="mb-4">
                    <FaGraduationCap className="text-2xl text-accent mb-3" />
                    <h3 className="text-xl font-heading font-bold text-text-dark dark:text-text leading-tight">{inst.name}</h3>
                    <p className="text-xs text-text-dark-muted dark:text-text-muted mt-1">{inst.locations}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-accent/10">
                    <p className="text-xs font-semibold text-accent mb-1 uppercase tracking-wider">{inst.highlight}</p>
                    <p className="text-sm text-text-dark-muted dark:text-text-muted font-body">
                      {inst.subjects}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary-light dark:bg-secondary border-t border-accent/10">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-6">Ready to Master Equity Investment?</h2>
            <p className="text-xl text-text-dark-muted dark:text-text-muted mb-10 max-w-2xl mx-auto">
              Join the next cohort and start making informed, data-driven fundamental investment decisions.
            </p>
            <Link href="/contact" className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 duration-300 shadow-lg">
              Enroll Now
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
