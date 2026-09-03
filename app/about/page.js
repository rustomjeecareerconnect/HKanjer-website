'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiGlobe, FiBriefcase, FiDownload, FiCheckCircle } from 'react-icons/fi';
import { FaGraduationCap, FaChalkboardTeacher, FaBookReader, FaSpa, FaMusic, FaSeedling } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';

const timeline = [
  {
    year: '1990s',
    title: 'B.E. Production Engineering',
    institution: 'University of Mumbai',
    description: 'Laid the rigorous technical and systems-engineering foundation that would inform subsequent process re-engineering, corporate strategy, and analytical financial modeling.'
  },
  {
    year: '1995-2004',
    title: 'Global Corporate Consulting Across 15+ Countries',
    institution: '3M, Unilever Gulf, Ernst & Young, Infosys, Giordano Fashions',
    description: 'Nearly a decade of high-impact strategic advisory across North America, Europe, the Middle East, and Asia. Specializing in business process reengineering, strategic turnarounds, and cross-border market entry.'
  },
  {
    year: '2000s',
    title: 'MBA in Strategy & Ivy League Exchange',
    institution: 'London Business School (UK) & Amos Tuck School of Business (Dartmouth, USA)',
    description: 'Graduated from Europe’s top-ranked business school (LBS) and selected for the prestigious exchange program at Dartmouth’s Tuck School of Business, mastering global strategy and corporate innovation.'
  },
  {
    year: '2004',
    title: 'Consulting Director — Founding Dubai Campus',
    institution: 'S P Jain School of Global Management',
    description: 'Instrumental in conceptualizing, establishing, and launching the premier international campus of S P Jain in Dubai, shaping executive education across the Middle East.'
  },
  {
    year: '2005',
    title: 'Bestselling Author — "All the Right Answers"',
    institution: 'Macmillan Publishing',
    description: 'Authored the widely acclaimed executive guide published by Macmillan, breaking down complex strategic dilemmas into intuitive, actionable problem-solving algorithms.'
  },
  {
    year: '2006 - Present',
    title: 'Founder Director & Dean of Institutional Governance',
    institution: 'Rustomjee Cambridge International School & Junior College',
    description: 'Built a benchmark international curriculum institution growing from 3,500 students to over 10,500 students, 425 teachers, and 180 staff across multiple modern campuses.'
  },
  {
    year: '2010s',
    title: 'Founder Dean',
    institution: 'Rustomjee Business School (RBS)',
    description: 'Pioneered an executive business school bridging world-class academic frameworks with grounded Indian socio-economic realities.'
  },
  {
    year: '2015',
    title: 'PhD in Management & Finance',
    institution: 'University of Mumbai',
    description: 'Completed doctoral dissertation on advanced managerial paradigms and capital market strategies, reinforcing academic excellence.'
  },
  {
    year: '2024 - 2025',
    title: 'Co-Author — "Strategic Management: Concepts and Cases" (18th Edition)',
    institution: 'Pearson Education',
    description: 'Co-authored the 18th Global & Indian adaptation with Dr. Fred David and Dr. Forest David, contextualizing global strategy frameworks with rich Indian business case studies.'
  }
];

const qualifications = [
  { title: 'PhD in Management', inst: 'University of Mumbai', icon: FiAward },
  { title: 'MBA in Strategy', inst: 'London Business School (Europe Top-Ranked)', icon: FiGlobe },
  { title: 'Ivy League Exchange', inst: 'Amos Tuck School, Dartmouth (USA)', icon: FiBook },
  { title: 'B.E. Production Engineering', inst: 'University of Mumbai', icon: FiBriefcase }
];

const personalPursuits = [
  { title: 'Tibetan Yoga & Mindfulness', desc: 'Practicing holistic discipline and breathwork traditions to cultivate mental clarity.', icon: FaSpa },
  { title: 'Award-Winning Poetry', desc: 'Honored with the prestigious Editor’s Choice Award in the UK for literary verse.', icon: FaBookReader },
  { title: 'Salsa & Rhythmic Arts', desc: 'Exploring expressive movement, coordination, and the creative balance of mind and body.', icon: FaMusic },
  { title: 'Agriculture & Space Remodeling', desc: 'Grounded in sustainable farming, nature stewardship, and innovative spatial architecture.', icon: FaSeedling }
];

const archivePhotos = [
  { src: '/images/dr-hanif-kanjer-2025-portrait.jpg', label: '2025 Executive Portrait', sub: 'Founder Director & Dean' },
  { src: '/images/dr-hanif-kanjer-author-2025.jpg', label: '2025 Author Session', sub: 'Pearson Strategic Management' },
  { src: '/images/dr-hanif-kanjer-visiting-card.jpeg', label: 'Official Visiting Card', sub: 'RCIS Academic Directorate' },
  { src: '/images/dr-hanif-kanjer-2014.jpg', label: '2014 Leadership Session', sub: 'Cambridge Master Trainer' },
  { src: '/images/dr-hanif-kanjer-2004.jpg', label: '2004 Dubai Archive', sub: 'Founding S P Jain Dubai Campus' },
  { src: '/images/gallery/classroom-sp-jain.jpg', label: 'Executive Cohort in Dubai', sub: 'S P Jain School of Global Mgmt' }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Page Hero */}
      <section className="page-hero bg-primary-light dark:bg-primary relative overflow-hidden flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent mix-blend-overlay"></div>
        <div className="container-custom relative z-10 text-center">
          <ScrollAnimation>
            <span className="inline-block py-1 px-4 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs mb-4 uppercase tracking-widest">
              Visionary Educator & Strategy Scholar
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-dark dark:text-text font-bold mb-6">
              About Prof. Dr. Hanif Kanjer
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-dark-muted dark:text-text-muted font-body leading-relaxed">
              Shaping the future of business leaders with purpose, passion, and strategic insight across three decades of institutional and corporate excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/docs/dr-hanif-kanjer-profile.docx"
                download
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:scale-105 text-sm"
              >
                <FiDownload size={16} />
                <span>Download Official Profile (DOCX)</span>
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-surface-light dark:bg-surface text-text-dark dark:text-text hover:text-accent border border-accent/30 font-bold py-3 px-6 rounded-xl transition-all text-sm"
              >
                <span>View Historical Photo Gallery</span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Section 2: Comprehensive Official Biography */}
      <section className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 relative lg:sticky lg:top-28 z-10">
              <ScrollAnimation>
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-3xl overflow-hidden border-2 sm:border-4 border-accent/40 shadow-2xl group">
                  <Image
                    src="/images/dr-hanif-kanjer-2025-portrait.jpg"
                    alt="Prof. Dr. Hanif Kanjer"
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 400px"
                    className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-surface-light/95 dark:bg-primary/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-accent/30 shadow-lg">
                    <p className="text-sm sm:text-base font-heading font-bold text-text-dark dark:text-text">Dr. Hanif Kanjer</p>
                    <p className="text-xs text-accent font-semibold">Founder Director & Dean, RCIS</p>
                    <p className="text-[10px] sm:text-[11px] text-text-dark-muted dark:text-text-muted mt-1 leading-tight">MBA (London Business School) • PhD (Univ of Mumbai) • Tuck Exchange (USA)</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Quick Institutional Stats */}
              <ScrollAnimation delay={0.2}>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                  <div className="card-base p-2 sm:p-3 text-center rounded-xl sm:rounded-2xl border border-accent/20 bg-surface-light dark:bg-surface">
                    <p className="font-heading text-lg sm:text-xl font-bold text-accent">10,500+</p>
                    <p className="text-[9px] sm:text-[10px] text-text-dark-muted dark:text-text-muted">Students Led</p>
                  </div>
                  <div className="card-base p-2 sm:p-3 text-center rounded-xl sm:rounded-2xl border border-accent/20 bg-surface-light dark:bg-surface">
                    <p className="font-heading text-lg sm:text-xl font-bold text-accent">425+</p>
                    <p className="text-[9px] sm:text-[10px] text-text-dark-muted dark:text-text-muted">Faculty</p>
                  </div>
                  <div className="card-base p-2 sm:p-3 text-center rounded-xl sm:rounded-2xl border border-accent/20 bg-surface-light dark:bg-surface">
                    <p className="font-heading text-lg sm:text-xl font-bold text-accent">15+ Nations</p>
                    <p className="text-[9px] sm:text-[10px] text-text-dark-muted dark:text-text-muted">Consulting</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-7 prose prose-lg dark:prose-invert max-w-none text-text-dark-muted dark:text-text-muted font-body space-y-5 sm:space-y-6">
              <ScrollAnimation delay={0.2}>
                <span className="text-xs font-bold uppercase tracking-widest text-accent block">Executive Biography</span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark dark:text-text mt-1 mb-4 sm:mb-6">
                  Bridging Global Business Strategy & Transformative Education
                </h2>
                
                <p className="text-sm sm:text-base leading-relaxed">
                  In the ever-evolving world of business and education, few individuals manage to bridge both domains with equal brilliance. <strong>Dr. Hanif Kanjer</strong>, Founder Director and Dean of Rustomjee Cambridge International School and Junior College, stands out as one such visionary. A dynamic leader, globally educated scholar, and passionate educator, Dr. Kanjer’s journey is a testament to the power of purpose-driven leadership.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  Holding an MBA from the prestigious <strong>London Business School</strong>, Europe’s top-ranked business institution, and a PhD in Management from the University of Mumbai, Dr. Kanjer has always believed that true education transcends borders. Selected for an elite exchange program at the Ivy League’s <strong>Amos Tuck School of Business, Dartmouth, USA</strong>, he was exposed early on to the world’s best minds in business thinking and innovation.
                </p>

                <div className="p-4 sm:p-6 rounded-2xl bg-accent/10 border-l-4 border-accent my-4 sm:my-6">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-text-dark dark:text-text mb-2">Global Consulting Across Continents</h3>
                  <p className="text-xs sm:text-sm text-text-dark-muted dark:text-text-muted leading-relaxed m-0">
                    Dr. Kanjer’s early career was shaped by nearly a decade in the corporate world, working across continents with industry giants like <strong>Giordano Fashions, Business Consulting Group, Unilever Gulf, 3M UK, Ernst & Young, and Infosys</strong>. His global consulting work took him to over 15 countries across North America, Europe, the Middle East, and Asia, where he contributed to business process reengineering, strategic turnarounds, and new market development.
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed">
                  Yet, in 2002, he made a bold and inspiring choice to return to India and channel his global expertise into building institutions of excellence in education. In 2004, he served as Consulting Director instrumental in establishing the first international campus of <strong>S P Jain School of Global Management in Dubai</strong>.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  From directing Rustomjee International School with 3,500 students to now leading a vibrant learning community of <strong>over 10,500 students, 425 teachers, and 180 staff</strong>, his leadership is both expansive and deeply personal. He went on to found the <strong>Rustomjee Cambridge International School in 2006</strong>, now a benchmark for international curriculum schools in India, and subsequently established <strong>Rustomjee Business School</strong>, delivering corporate training and executive management programs.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  A <strong>Master Trainer from Cambridge International</strong>, prolific writer, and speaker, Dr. Kanjer has contributed thought-provoking articles to <em>Business Standard, Economic Times, Financial Express</em>, and more. His first book, <em>All the Right Answers</em>, published by Macmillan in 2005, showcased his talent for breaking down complex business ideas into accessible insights.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  He has co-authored the Indian adaptation of <strong>Strategic Management: Concepts and Cases (18th Edition)</strong> published by Pearson alongside Dr. Fred David and Dr. Forest David. The Indian adaptation contextualizes core strategy concepts with rich, real-world Indian business cases, making it an essential resource for students, educators, and business leaders alike.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Academic Qualifications */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom">
          <SectionHeading title="Academic Pedigree & Global Institutions" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {qualifications.map((qual, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="card-base text-center p-8 h-full flex flex-col items-center justify-center hover-glow rounded-3xl border border-accent/25 bg-surface-light dark:bg-surface">
                  <qual.icon className="text-accent mb-4" size={36} />
                  <h3 className="font-heading font-bold text-lg text-text-dark dark:text-text mb-2">{qual.title}</h3>
                  <p className="text-sm text-text-dark-muted dark:text-text-muted font-body">{qual.inst}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Photographic Archive & Visual Milestones */}
      <section className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">Visual Heritage</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark dark:text-text">
              Leadership Milestones in Photographs
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted text-sm md:text-base mt-3">
              Capturing two decades of institutional leadership, academic author sessions, executive cohorts in Dubai, and official credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {archivePhotos.map((photo, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="card-base rounded-2xl overflow-hidden border-2 border-accent/20 hover:border-accent/50 transition-all group bg-surface-light dark:bg-surface">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 border-t border-accent/15">
                    <p className="text-sm font-heading font-bold text-text-dark dark:text-text">{photo.label}</p>
                    <p className="text-xs text-accent font-semibold">{photo.sub}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Beyond the Classroom & Personal Pursuits */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold block mb-2">Holistic Dimensions</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark dark:text-text">
              Beyond the Boardroom & Classroom
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted text-sm md:text-base mt-3">
              Outside the lecture halls, Dr. Kanjer’s life reflects a rare balance of intellect, creativity, and soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalPursuits.map((item, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="card-base p-6 rounded-2xl border border-accent/20 bg-surface-light dark:bg-surface h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-4 text-xl">
                    <item.icon />
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-dark dark:text-text mb-2">{item.title}</h3>
                  <p className="text-xs text-text-dark-muted dark:text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Career Timeline */}
      <section className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Career Milestones & Chronology" centered />
          
          <div className="relative max-w-4xl mx-auto mt-16">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <ScrollAnimation key={index}>
                  <div className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-secondary-light dark:border-secondary transform -translate-x-1/2 mt-6 md:mt-0 z-10"></div>
                    
                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                      <div className="glass-card p-6 inline-block w-full rounded-2xl border border-accent/25">
                        <span className="inline-block px-3 py-1 bg-accent/15 text-accent font-bold text-xs rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-heading text-lg md:text-xl font-bold text-text-dark dark:text-text mb-1">
                          {item.title}
                        </h3>
                        <h4 className="text-xs font-semibold text-accent mb-3">
                          {item.institution}
                        </h4>
                        <p className="text-xs md:text-sm text-text-dark-muted dark:text-text-muted font-body leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Philosophy Quote */}
      <section className="section-padding bg-[#F9F6F0] dark:bg-[#1A1A1A] border-t border-accent/20">
        <div className="container-custom text-center max-w-4xl">
          <ScrollAnimation>
            <div className="text-accent text-6xl font-heading mb-2">“</div>
            <p className="font-accent italic text-2xl md:text-3xl text-text-dark dark:text-text leading-relaxed mb-6">
              True impact is created when knowledge meets purpose, and strategy meets service.
            </p>
            <div className="gold-line-center w-24 mb-6"></div>
            <h4 className="font-heading font-bold text-lg text-text-dark dark:text-text uppercase tracking-widest">
              Prof. Dr. Hanif Kanjer
            </h4>
            <p className="text-xs text-accent font-semibold mt-1">Founder Director & Dean</p>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
