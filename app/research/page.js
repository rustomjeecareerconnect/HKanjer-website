import Link from 'next/link';
import { FaGoogle, FaResearchgate, FaBook, FaChartPie, FaUniversity, FaBalanceScale } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
  title: 'Research & Scholarly Profiles',
  description: 'Academic research profiles and scholarly contributions of Prof. Dr. Hanif Kanjer.',
};

const researchAreas = [
  {
    title: "Strategic Management & Corporate Governance",
    icon: <FaBook />,
    description: "Formulation of competitive advantage frameworks, strategic turnaround analysis, and corporate decision-making models as published in Pearson and Macmillan works."
  },
  {
    title: "Financial Valuation & Capital Structure",
    icon: <FaChartPie />,
    description: "Financial modeling, cost of capital optimization, and equity investment frameworks taught across Executive MBA programs at S P Jain and XIMR."
  },
  {
    title: "Pedagogy & Institution Building",
    icon: <FaUniversity />,
    description: "K-12 and tertiary international education methodologies, Cambridge curriculum leadership, and holistic student-centric development."
  },
  {
    title: "Agri-Economics & Sustainable Farming",
    icon: <FaBalanceScale />,
    description: "Sustainable agricultural practices, rural empowerment, and hands-on resource management in organic cultivation."
  }
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Page Hero */}
      <section className="page-hero container-custom text-center mb-16">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-dark dark:text-text mb-6">
            Research & <span className="text-gradient">Scholarly Profiles</span>
          </h1>
          <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-2xl mx-auto font-body">
            Official academic profiles, research indices, and core scholarly domains.
          </p>
          <div className="gold-line-center mt-8"></div>
        </ScrollAnimation>
      </section>

      {/* Verified Academic Profiles */}
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
                  <span className="text-xs font-mono text-accent opacity-80 group-hover:opacity-100">Live Profile &rarr;</span>
                </div>
                <p className="text-sm text-text-dark-muted dark:text-text-muted">
                  Official Google Scholar profile with verified academic citations, publications, and metrics.
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
                  <span className="text-xs font-mono text-accent opacity-80 group-hover:opacity-100">Live Profile &rarr;</span>
                </div>
                <p className="text-sm text-text-dark-muted dark:text-text-muted">
                  Direct scholarly profile on ResearchGate for peer interactions and indexed research records.
                </p>
              </div>
            </a>
          </ScrollAnimation>
        </div>
      </section>

      {/* Research & Scholarly Focus Areas */}
      <section className="section-padding bg-surface-light dark:bg-surface">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">Academic & Research Focus Areas</h2>
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

      {/* Published Works Reference */}
      <section className="py-16 bg-primary-light dark:bg-primary border-t border-accent/10">
        <div className="container-custom text-center max-w-3xl">
          <ScrollAnimation>
            <h2 className="text-2xl md:text-3xl font-heading text-text-dark dark:text-text mb-4">
              Published Textbooks & Literature
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted font-body mb-8">
              For Dr. Hanif Kanjer&apos;s published book titles, co-authored Pearson curriculum editions, and ISBN references, explore the dedicated Books catalog.
            </p>
            <Link
              href="/books"
              className="bg-accent hover:bg-accent/90 text-primary font-heading font-medium px-6 py-3 rounded-xl transition-all shadow-md shadow-accent/20 inline-flex items-center gap-2"
            >
              <span>View Published Books</span>
              <span>&rarr;</span>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
