'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
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

const feedbackHighlights = [
  {
    institution: "BML Munjal University",
    score: "4.9984 / 5.0",
    course: "Integrated Decision Making (MBA)",
    evaluator: "Dean, School of Management",
    bullets: [
      "Broadened student analytical thinking and conceptual clarity",
      "Real-world application of strategy and decision theory",
      "5.00 / 5.00 across 18 feedback dimensions"
    ]
  },
  {
    institution: "S P Jain School of Global Management",
    score: "9.60 / 10.0",
    course: "Strategic Innovation & Economics (EMBA)",
    evaluator: "Executive MBA Student Feedback",
    bullets: [
      "Simulated product creation format and practical casework",
      "High classroom engagement with live economic examples",
      "Rated 'Best professor & transformative learning method'"
    ]
  },
  {
    institution: "Xavier Institute of Management & Research",
    score: "4.56 / 5.0",
    course: "Derivatives & Risk Management (MMS Finance)",
    evaluator: "Institutional Director's Endorsement",
    bullets: [
      "Structured and engaging delivery of complex financial tools",
      "Effectively linked quantitative theory to capital markets",
      "Official institutional endorsement for academic excellence"
    ]
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
                      src="/images/teaching/classroom.jpg"
                      alt="Prof. Dr. Hanif Kanjer with Executive MBA Cohort at S P Jain Global"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-medium">
                      Prof. Dr. Hanif Kanjer with Executive MBA Cohort at S P Jain School of Global Management
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

      {/* Verified Student & Institutional Feedback Ratings */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">
                Official Institutional Evaluations
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">
                Verified Faculty & Student Ratings
              </h2>
              <div className="gold-line-center"></div>
              <p className="mt-4 text-text-dark-muted dark:text-text-muted">
                Documented end-term performance evaluations and dean endorsements across leading business schools.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {feedbackHighlights.map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.15}>
                <div className="card-base h-full flex flex-col p-8 glass-card border border-accent/20 hover-glow">
                  <div className="flex items-center gap-1 text-accent mb-3">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  
                  <div className="text-4xl font-heading font-bold text-accent mb-2">
                    {item.score}
                  </div>

                  <h3 className="text-lg font-heading font-bold text-text-dark dark:text-text mb-1">
                    {item.institution}
                  </h3>
                  
                  <p className="text-xs font-semibold text-accent mb-1">
                    {item.course}
                  </p>

                  <p className="text-xs text-text-dark-muted dark:text-text-muted mb-6">
                    {item.evaluator}
                  </p>

                  <div className="border-t border-accent/10 pt-4 mt-auto">
                    <ul className="space-y-2">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs text-text-dark-muted dark:text-text-muted flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* S P Jain EMBA 37 Detailed Feedback */}
      <section className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">
                S P Jain School of Global Management — EMBA 37
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">
                Official Student Feedback — Strategic Innovation
              </h2>
              <div className="gold-line-center"></div>
              <p className="mt-4 text-text-dark-muted dark:text-text-muted">
                End-term student feedback collected on 30th November 2016 from a batch of 24 students (19 respondents). Course commenced 26th November 2016.
              </p>
            </div>
          </ScrollAnimation>

          {/* Course Info Cards */}
          <ScrollAnimation delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="card-base p-4 text-center border border-accent/20">
                <p className="text-xs text-text-dark-muted dark:text-text-muted uppercase tracking-wider mb-1">Course</p>
                <p className="font-heading font-bold text-text-dark dark:text-text text-sm">Strategic Innovation</p>
              </div>
              <div className="card-base p-4 text-center border border-accent/20">
                <p className="text-xs text-text-dark-muted dark:text-text-muted uppercase tracking-wider mb-1">Faculty</p>
                <p className="font-heading font-bold text-text-dark dark:text-text text-sm">Prof. Hanif Kujer</p>
              </div>
              <div className="card-base p-4 text-center border border-accent/20">
                <p className="text-xs text-text-dark-muted dark:text-text-muted uppercase tracking-wider mb-1">Respondents</p>
                <p className="font-heading font-bold text-accent text-sm">19 / 24</p>
              </div>
              <div className="card-base p-4 text-center border border-accent/20">
                <p className="text-xs text-text-dark-muted dark:text-text-muted uppercase tracking-wider mb-1">Average Rating</p>
                <p className="font-heading font-bold text-accent text-lg">9.17 / 10</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Detailed Faculty Ratings Table */}
          <ScrollAnimation delay={0.2}>
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-6 text-center">
                Faculty Evaluation Breakdown <span className="text-sm font-normal text-text-dark-muted dark:text-text-muted">(1 = Lowest, 10 = Highest)</span>
              </h3>
              <div className="card-base overflow-hidden border border-accent/20">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="text-left p-4 font-heading font-bold text-text-dark dark:text-text">Sr.</th>
                      <th className="text-left p-4 font-heading font-bold text-text-dark dark:text-text">Evaluation Criteria</th>
                      <th className="text-center p-4 font-heading font-bold text-accent">Rating</th>
                      <th className="text-center p-4 font-heading font-bold text-accent">Max Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent/10">
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="p-4 text-text-dark dark:text-text font-semibold">1</td>
                      <td className="p-4 text-text-dark-muted dark:text-text-muted">Met the objectives/learning outcomes of the course</td>
                      <td className="p-4 text-center font-bold text-text-dark dark:text-text">8.74</td>
                      <td className="p-4 text-center font-bold text-accent">9.41</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="p-4 text-text-dark dark:text-text font-semibold">2</td>
                      <td className="p-4 text-text-dark-muted dark:text-text-muted">Illustrated concepts with applications and real-world examples (global/regional)</td>
                      <td className="p-4 text-center font-bold text-text-dark dark:text-text">9.21</td>
                      <td className="p-4 text-center font-bold text-accent">9.66</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="p-4 text-text-dark dark:text-text font-semibold">3</td>
                      <td className="p-4 text-text-dark-muted dark:text-text-muted">Generated effective class participation</td>
                      <td className="p-4 text-center font-bold text-text-dark dark:text-text">9.37</td>
                      <td className="p-4 text-center font-bold text-accent">9.59</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="p-4 text-text-dark dark:text-text font-semibold">4</td>
                      <td className="p-4 text-text-dark-muted dark:text-text-muted">Ensured class discipline</td>
                      <td className="p-4 text-center font-bold text-text-dark dark:text-text">9.11</td>
                      <td className="p-4 text-center font-bold text-accent">9.48</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="p-4 text-text-dark dark:text-text font-semibold">5</td>
                      <td className="p-4 text-text-dark-muted dark:text-text-muted">Challenged me to think analytically</td>
                      <td className="p-4 text-center font-bold text-text-dark dark:text-text">9.32</td>
                      <td className="p-4 text-center font-bold text-accent">9.72</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="p-4 text-text-dark dark:text-text font-semibold">6</td>
                      <td className="p-4 text-text-dark-muted dark:text-text-muted">Stimulated Creative Thinking</td>
                      <td className="p-4 text-center font-bold text-text-dark dark:text-text">9.26</td>
                      <td className="p-4 text-center font-bold text-accent">9.72</td>
                    </tr>
                    <tr className="bg-accent/10">
                      <td className="p-4"></td>
                      <td className="p-4 font-heading font-bold text-text-dark dark:text-text">Average of the above Ratings</td>
                      <td className="p-4 text-center font-heading font-bold text-accent text-lg">9.17</td>
                      <td className="p-4 text-center font-heading font-bold text-accent text-lg">9.60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>

          {/* "Becoming a Leader" Rating Distribution */}
          <ScrollAnimation delay={0.3}>
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-6 text-center">
                "Becoming a Leader" — Student Rating Distribution
              </h3>
              <div className="card-base p-8 border border-accent/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Bar Chart Visual */}
                  <div>
                    <div className="flex items-end gap-2 h-48 mb-4">
                      {[
                        { label: '≤1', value: 0 },
                        { label: '1-2', value: 0 },
                        { label: '2-3', value: 0 },
                        { label: '3-4', value: 0 },
                        { label: '4-5', value: 1 },
                        { label: '5-6', value: 1 },
                        { label: '6-7', value: 1 },
                        { label: '7-8', value: 2 },
                        { label: '8-9', value: 6 },
                        { label: '9-10', value: 8 },
                      ].map((bar, i) => (
                        <div key={i} className="flex flex-col items-center flex-1">
                          <span className="text-[10px] text-text-dark-muted dark:text-text-muted mb-1 font-semibold">{bar.value}</span>
                          <div
                            className="w-full bg-accent/80 rounded-t-sm transition-all duration-500"
                            style={{ height: `${bar.value > 0 ? (bar.value / 8) * 100 : 2}%`, minHeight: bar.value > 0 ? '8px' : '2px' }}
                          ></div>
                          <span className="text-[9px] text-text-dark-muted dark:text-text-muted mt-1 text-center leading-tight">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-xs text-text-dark-muted dark:text-text-muted mt-2">Ratings →</p>
                  </div>

                  {/* Summary Stats */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <span className="text-sm text-text-dark-muted dark:text-text-muted">Students rating 8+</span>
                      <span className="font-heading font-bold text-accent text-lg">14 / 19 (73.7%)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <span className="text-sm text-text-dark-muted dark:text-text-muted">Students rating 9-10</span>
                      <span className="font-heading font-bold text-accent text-lg">8 / 19 (42.1%)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <span className="text-sm text-text-dark-muted dark:text-text-muted">Students rating 7+</span>
                      <span className="font-heading font-bold text-accent text-lg">16 / 19 (84.2%)</span>
                    </div>
                    <p className="text-xs text-text-dark-muted dark:text-text-muted italic">
                      Overall "Becoming a Leader" score demonstrates strong transformative impact on executive students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Student Comments */}
          <ScrollAnimation delay={0.4}>
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-6 text-center">
                Student Comments on Professor's Effectiveness
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "His illustrations were very much clear.",
                  "Classy! Inspirational!",
                  "The University should bring in more professors like him.",
                  "Good",
                  "Excellent Professor",
                  "It has been a wonderful 6 days. The professor helped me think analytic and out of the box.",
                  "Very effective",
                  "Need some more class"
                ].map((comment, idx) => (
                  <div key={idx} className="card-base p-5 border border-accent/10 hover:border-accent/30 transition-colors flex items-start gap-3">
                    <FaStar className="text-accent text-xs mt-1 flex-shrink-0" />
                    <p className="text-sm text-text-dark-muted dark:text-text-muted italic font-body">"{comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Meeting the Faculty Stats */}
          <ScrollAnimation delay={0.5}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-6 text-center">
                Faculty Accessibility
              </h3>
              <div className="card-base overflow-hidden border border-accent/20">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="text-left p-4 font-heading font-bold text-text-dark dark:text-text">Question</th>
                      <th className="text-center p-4 font-heading font-bold text-green-600 dark:text-green-400">Yes</th>
                      <th className="text-center p-4 font-heading font-bold text-text-dark-muted dark:text-text-muted">No</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent/10">
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="p-4 text-text-dark-muted dark:text-text-muted">Did you make attempts to meet the faculty?</td>
                      <td className="p-4 text-center font-bold text-green-600 dark:text-green-400">2 (10.5%)</td>
                      <td className="p-4 text-center text-text-dark-muted dark:text-text-muted">3 (15.8%)</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="p-4 text-text-dark-muted dark:text-text-muted">If Yes, was the faculty available outside class for clarification of doubts?</td>
                      <td className="p-4 text-center font-bold text-green-600 dark:text-green-400">2 (100%)</td>
                      <td className="p-4 text-center text-text-dark-muted dark:text-text-muted">0 (0%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>
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
