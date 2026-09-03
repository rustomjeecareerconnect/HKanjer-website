'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaBriefcase, FaCogs, FaLightbulb, FaChevronDown, FaGraduationCap, FaIndustry, FaTshirt, FaCar, FaLaptopCode, FaMoneyBillWave } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';
import { servicesData } from '@/lib/data/services';

const iconMap = {
  FaChartLine: <FaChartLine className="text-3xl text-accent" />,
  FaBriefcase: <FaBriefcase className="text-3xl text-accent" />,
  FaCogs: <FaCogs className="text-3xl text-accent" />,
  FaLightbulb: <FaLightbulb className="text-3xl text-accent" />
};

const industries = [
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Manufacturing", icon: <FaIndustry /> },
  { name: "Textiles", icon: <FaTshirt /> },
  { name: "Automotive", icon: <FaCar /> },
  { name: "Digital/Tech", icon: <FaLaptopCode /> },
  { name: "Financial Services", icon: <FaMoneyBillWave /> },
];

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Page Hero */}
      <section className="page-hero container-custom text-center mb-16">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-dark dark:text-text mb-6">
            Consulting & <span className="text-gradient">Advisory Services</span>
          </h1>
          <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-2xl mx-auto font-body">
            Strategic solutions for complex business challenges across multiple sectors.
          </p>
          <div className="gold-line-center mt-8"></div>
        </ScrollAnimation>
      </section>

      {/* Key Achievements Strip */}
      <section className="py-12 bg-secondary-light dark:bg-secondary border-y border-accent/20 mb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-accent/20 text-center">
            <ScrollAnimation className="pt-4 md:pt-0 px-4">
              <h3 className="text-4xl font-heading text-accent mb-2">25%</h3>
              <p className="text-text-dark dark:text-text font-semibold mb-1">Cost Savings Achieved</p>
              <p className="text-sm text-text-dark-muted dark:text-text-muted">BPR project for manufacturing client</p>
            </ScrollAnimation>
            
            <ScrollAnimation className="pt-8 md:pt-0 px-4 delay-100">
              <h3 className="text-4xl font-heading text-accent mb-2">Multiple</h3>
              <p className="text-text-dark dark:text-text font-semibold mb-1">PE & Institutional Valuations</p>
              <p className="text-sm text-text-dark-muted dark:text-text-muted">Delivered across various sectors</p>
            </ScrollAnimation>
            
            <ScrollAnimation className="pt-8 md:pt-0 px-4 delay-200">
              <h3 className="text-4xl font-heading text-accent mb-2">Cross-Industry</h3>
              <p className="text-text-dark dark:text-text font-semibold mb-1">Domain Expertise</p>
              <p className="text-sm text-text-dark-muted dark:text-text-muted">Manufacturing, Education, Textiles & Automotive</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom max-w-4xl">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading text-center text-text-dark dark:text-text mb-12">Areas of Expertise</h2>
          </ScrollAnimation>

          <div className="space-y-6">
            {servicesData.map((service, index) => (
              <ScrollAnimation key={service.id}>
                <div 
                  className="card-base border border-surface-light dark:border-surface hover:border-accent/30 overflow-hidden cursor-pointer"
                  onClick={() => toggleExpand(service.id)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-full bg-secondary-light dark:bg-secondary items-center justify-center flex-shrink-0">
                        {iconMap[service.icon]}
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading text-text-dark dark:text-text mb-2">{service.title}</h3>
                        <p className="text-text-dark-muted dark:text-text-muted font-body">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                        <FaChevronDown />
                      </div>
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 sm:pl-[104px]">
                          <h4 className="font-semibold text-text-dark dark:text-text mb-3 uppercase text-sm tracking-wider">Key Engagements:</h4>
                          <ul className="space-y-2">
                            {service.engagements.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-text-dark-muted dark:text-text-muted">
                                <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-surface-light dark:bg-surface">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">Industries Served</h2>
              <div className="gold-line-center"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, idx) => (
              <ScrollAnimation key={idx}>
                <div className="flex flex-col items-center justify-center p-6 glass-card rounded-xl text-center hover-glow group transition-all duration-300">
                  <div className="text-4xl text-text-dark-muted dark:text-text-muted group-hover:text-accent transition-colors duration-300 mb-4">
                    {ind.icon}
                  </div>
                  <h4 className="font-semibold text-sm md:text-base text-text-dark dark:text-text">{ind.name}</h4>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-light dark:bg-primary border-t border-accent/10">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-6">Looking for Strategic Guidance?</h2>
            <p className="text-xl text-text-dark-muted dark:text-text-muted mb-10 max-w-2xl mx-auto">
              Let's discuss how we can address your complex business challenges and drive growth.
            </p>
            <Link href="/contact" className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 duration-300 shadow-lg">
              Discuss Your Project
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
