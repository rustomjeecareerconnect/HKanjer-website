'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBook, FiGlobe, FiBriefcase } from 'react-icons/fi';
import ScrollAnimation from '@/components/ScrollAnimation';
import SectionHeading from '@/components/SectionHeading';

const timeline = [
  {
    year: '1990s',
    title: 'B.E. Production Engineering',
    institution: 'University of Mumbai',
    description: 'Laid the technical and analytical foundation that would inform future process optimization and financial modeling work.'
  },
  {
    year: '1995-2004',
    title: 'Corporate Career Begins',
    institution: '3M, Unilever, EY, Infosys',
    description: 'Over 9 years of global experience across the USA, UK, Europe, Middle East, and Asia. Developed expertise in strategy, process re-engineering, and corporate finance.'
  },
  {
    year: '2000s',
    title: 'MBA in Strategy',
    institution: 'London Business School & Tuck School',
    description: 'Specialized in global business strategy. Participated in a highly competitive exchange program at the Tuck School of Business, Dartmouth College.'
  },
  {
    year: '2004',
    title: 'Consulting Director',
    institution: 'S P Jain School of Global Management',
    description: 'Spearheaded the launch of the Dubai campus, establishing a premier global educational footprint.'
  },
  {
    year: '2005',
    title: 'Bestselling Author',
    institution: 'Macmillan Publishing',
    description: 'Published "All the Right Answers," a definitive guide addressing complex management and career challenges.'
  },
  {
    year: '2010s',
    title: 'Founder Dean',
    institution: 'Rustomjee Business School',
    description: 'Built a business school focused on bridging the gap between academic theory and rigorous corporate reality.'
  },
  {
    year: '2015',
    title: 'PhD in Finance/Management',
    institution: 'University of Mumbai',
    description: 'Advanced research in financial paradigms and management strategies, cementing academic credentials.'
  },
  {
    year: 'Present',
    title: 'Founder Director & Educator',
    institution: 'RCIS & Equity Investment Masterclass',
    description: 'Leading Rustomjee Cambridge International School while actively conducting high-impact masterclasses in equity analysis and fundamental valuation.'
  }
];

const qualifications = [
  { title: 'PhD Finance/Management', inst: 'University of Mumbai', icon: FiAward },
  { title: 'MBA Strategy', inst: 'London Business School, UK', icon: FiGlobe },
  { title: 'Exchange Program', inst: 'Tuck School, Dartmouth, USA', icon: FiBook },
  { title: 'B.E. Production Engineering', inst: 'University of Mumbai', icon: FiBriefcase }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Page Hero */}
      <section className="page-hero bg-primary-light dark:bg-primary relative overflow-hidden flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent mix-blend-overlay"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-dark dark:text-text font-bold mb-6"
          >
            About Dr. Hanif Kanjer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-text-dark-muted dark:text-text-muted font-body"
          >
            A career spanning two decades across corporate boardrooms, academic institutions, and farmland.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Biography */}
      <section className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <ScrollAnimation>
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-accent/30 shadow-xl">
                  {/* Portrait Placeholder */}
                  <div className="w-full h-full bg-surface-light dark:bg-surface flex items-center justify-center text-text-dark-muted dark:text-text-muted text-lg">
                    Portrait Image
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:col-span-7 prose prose-lg dark:prose-invert max-w-none text-text-dark-muted dark:text-text-muted">
              <ScrollAnimation delay={0.2}>
                <h2 className="font-heading text-3xl font-bold text-text-dark dark:text-text mb-6">The Journey</h2>
                <p>
                  Prof. Dr. Hanif Kanjer is a unique confluence of rigorous academic scholarship, high-stakes corporate advisory, and grounded agricultural roots. His journey began with a B.E. in Production Engineering from the University of Mumbai, which instilled a deep appreciation for systems and process optimization.
                </p>
                <p>
                  Transitioning into the corporate sector, Dr. Kanjer spent over nine years navigating global markets with industry giants such as EY, 3M UK, Unilever Gulf, and Infosys. This extensive international exposure—spanning the USA, UK, Europe, Middle East, and Asia—provided unparalleled insights into diverse business cultures and strategic execution.
                </p>
                <p>
                  Driven by a passion for continuous learning, he pursued an MBA at the prestigious London Business School, complementing it with a highly selective exchange program at the Tuck School of Business at Dartmouth. He later solidified his academic credentials with a PhD from the University of Mumbai.
                </p>
                <p>
                  In the academic realm, Dr. Kanjer is recognized as a formidable institution builder. He served as the Consulting Director for S P Jain Global during the launch of its Dubai campus and subsequently as the Founder Dean of Rustomjee Business School. Today, he is the Founder Director of Rustomjee Cambridge International School & Junior College, while also conducting highly sought-after masterclasses in equity investment.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Academic Qualifications */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom">
          <SectionHeading title="Academic Pedigree" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {qualifications.map((qual, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="card-base text-center p-8 h-full flex flex-col items-center justify-center hover-glow">
                  <qual.icon className="text-accent mb-4" size={32} />
                  <h3 className="font-heading font-bold text-lg text-text-dark dark:text-text mb-2">{qual.title}</h3>
                  <p className="text-sm text-text-dark-muted dark:text-text-muted font-body">{qual.inst}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Career Timeline */}
      <section className="section-padding bg-secondary-light dark:bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Career Milestones" center />
          
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
                      <div className="glass-card p-6 inline-block w-full">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold text-sm rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-heading text-xl font-bold text-text-dark dark:text-text mb-1">
                          {item.title}
                        </h3>
                        <h4 className="text-sm font-semibold text-text-dark-muted dark:text-text-muted mb-3">
                          {item.institution}
                        </h4>
                        <p className="text-sm text-text-dark-muted dark:text-text-muted font-body leading-relaxed">
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

      {/* Section 5: Philosophy */}
      <section className="section-padding bg-[#F9F6F0] dark:bg-[#1A1A1A]">
        <div className="container-custom text-center max-w-4xl">
          <ScrollAnimation>
            <div className="text-accent text-6xl font-heading mb-4">"</div>
            <p className="font-accent italic text-2xl md:text-3xl text-text-dark dark:text-text leading-relaxed mb-8">
              True education and leadership are inextricably linked to meritocracy, rigorous ethics, and the conscious building of character. Success without integrity is a hollow victory.
            </p>
            <div className="gold-line-center w-24 mb-6"></div>
            <h4 className="font-heading font-bold text-xl text-text-dark dark:text-text uppercase tracking-widest">
              Prof. Dr. Hanif Kanjer
            </h4>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
