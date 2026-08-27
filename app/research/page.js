import Link from 'next/link';
import { FaGoogle, FaResearchgate, FaBook, FaChartPie, FaUniversity, FaBalanceScale, FaFileAlt } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
  title: 'Research & Publications',
  description: 'Academic research, publications, and op-eds by Dr. Hanif Kanjer advancing knowledge in corporate finance and strategy.',
};

const researchAreas = [
  {
    title: "Corporate Finance",
    icon: <FaChartPie />,
    description: "Research exploring financial valuation models, corporate governance mechanisms, and optimal capital structure in emerging markets."
  },
  {
    title: "Strategic Management",
    icon: <FaBook />,
    description: "Developing turnaround frameworks, analyzing competitive strategy dynamics, and evaluating industry-specific value chain optimizations."
  },
  {
    title: "Management Education",
    icon: <FaUniversity />,
    description: "Investigating pedagogical innovations, curriculum design methodologies, and the evolution of MBA program development globally."
  },
  {
    title: "Corporate Governance",
    icon: <FaBalanceScale />,
    description: "Analyzing board effectiveness, financial transparency, and ethical decision-making frameworks within public and private enterprises."
  }
];

const publications = [
  {
    title: "Capital Structure and Profitability: An Empirical Study of the Indian Automotive Sector",
    publisher: "Journal of Financial Management & Analysis",
    year: "2018",
    description: "An empirical investigation into how varying debt-equity ratios impact the operating margins of leading Indian automotive manufacturers."
  },
  {
    title: "Strategic Turnaround Models for Stressed Assets in Manufacturing",
    publisher: "Asian Journal of Management Cases",
    year: "2016",
    description: "A comprehensive framework for executing operational and financial restructuring in distressed manufacturing entities."
  },
  {
    title: "Pedagogical Innovations in Business Education Post-Pandemic",
    publisher: "International Journal of Educational Management",
    year: "2021",
    description: "An analysis of the shift from traditional case-study methods to simulation and hybrid learning models in B-schools."
  },
  {
    title: "Value Investing in Emerging Markets: Evaluating the Economic Moat",
    publisher: "Global Finance Journal",
    year: "2019",
    description: "A critical review of Warren Buffett's 'economic moat' concept applied to the context of high-growth emerging economies."
  },
  {
    title: "Board Independence and Corporate Performance: Evidence from the BSE 500",
    publisher: "Journal of Corporate Governance",
    year: "2015",
    description: "Examining the correlation between the proportion of independent directors and long-term shareholder value creation."
  }
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Page Hero */}
      <section className="page-hero container-custom text-center mb-16">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-dark dark:text-text mb-6">
            Research & <span className="text-gradient">Publications</span>
          </h1>
          <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-2xl mx-auto font-body">
            Advancing knowledge in corporate finance, strategy, and management education.
          </p>
          <div className="gold-line-center mt-8"></div>
        </ScrollAnimation>
      </section>

      {/* Research Profiles */}
      <section className="container-custom mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ScrollAnimation>
            <a 
              href="https://scholar.google.com/citations?user=X8OOo2wAAAAJ&hl=en&oi=ao" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 glass-card border-2 border-accent/30 hover:border-accent rounded-2xl transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-light dark:bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                <FaGoogle className="text-3xl text-accent group-hover:text-primary-light" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading text-text-dark dark:text-text font-bold mb-1">Google Scholar</h3>
                  <span className="text-xs font-mono text-accent opacity-80 group-hover:opacity-100">Profile &rarr;</span>
                </div>
                <p className="text-sm text-text-dark-muted dark:text-text-muted">
                  View citation metrics, h-index, and indexed academic publications
                </p>
              </div>
            </a>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <a 
              href="https://www.researchgate.net/profile/Hanif-Kanjer" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 glass-card border-2 border-accent/30 hover:border-accent rounded-2xl transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-light dark:bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                <FaResearchgate className="text-3xl text-accent group-hover:text-primary-light" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading text-text-dark dark:text-text font-bold mb-1">ResearchGate</h3>
                  <span className="text-xs font-mono text-accent opacity-80 group-hover:opacity-100">Profile &rarr;</span>
                </div>
                <p className="text-sm text-text-dark-muted dark:text-text-muted">
                  Access research papers, conference proceedings, and collaborative findings
                </p>
              </div>
            </a>
          </ScrollAnimation>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="section-padding bg-surface-light dark:bg-surface">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">Research Focus Areas</h2>
              <div className="gold-line-center"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, idx) => (
              <ScrollAnimation key={idx}>
                <div className="card-base p-8 h-full flex gap-6 items-start">
                  <div className="text-4xl text-accent flex-shrink-0 mt-1">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading text-text-dark dark:text-text mb-3">{area.title}</h3>
                    <p className="text-text-dark-muted dark:text-text-muted font-body leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Key Publications */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom max-w-4xl">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">Selected Academic Publications</h2>
              <div className="gold-line"></div>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <ScrollAnimation key={idx}>
                <div className="relative pl-8 md:pl-12">
                  {/* Custom Bullet */}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent outline outline-4 outline-accent/20"></div>
                  
                  <h3 className="text-xl md:text-2xl font-heading text-text-dark dark:text-text mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                    <span>{pub.publisher}</span>
                    <span>&bull;</span>
                    <span>{pub.year}</span>
                  </div>
                  <p className="text-text-dark-muted dark:text-text-muted font-body">
                    {pub.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contributions */}
      <section className="py-20 bg-secondary-light dark:bg-secondary border-t border-accent/10">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <FaFileAlt className="text-5xl text-accent mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-6">Media Contributions & Op-eds</h2>
            <p className="text-xl text-text-dark-muted dark:text-text-muted mb-12 max-w-3xl mx-auto italic font-accent">
              "Regular contributor of management, policy, and economic op-eds translating complex issues for the wider business community."
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl md:text-3xl font-heading font-bold text-text-dark dark:text-text">The Economic Times</span>
              <span className="text-2xl md:text-3xl font-heading font-bold text-text-dark dark:text-text border-l border-r border-text-dark-muted px-8 md:px-16">Business Standard</span>
              <span className="text-2xl md:text-3xl font-heading font-bold text-text-dark dark:text-text">The Financial Express</span>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
