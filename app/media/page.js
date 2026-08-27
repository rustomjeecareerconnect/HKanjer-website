import Link from 'next/link';
import { FaGraduationCap, FaChartLine, FaGlobeAmericas, FaLandmark, FaMicrophone, FaUsers, FaBuilding, FaChalkboardTeacher } from 'react-icons/fa';

export const metadata = { 
  title: 'For Media & Press', 
  description: 'Media inquiries, expert commentary, and speaking engagements' 
};

export default function MediaPage() {
  const expertTopics = [
    {
      title: "School Education & International Curriculum",
      description: "Insights on IGCSE/A-Levels and global educational standards.",
      icon: <FaGraduationCap className="text-3xl text-accent mb-4" />
    },
    {
      title: "Business Education & MBA Pedagogy",
      description: "Trends in management education and bridging the academia-industry gap.",
      icon: <FaChalkboardTeacher className="text-3xl text-accent mb-4" />
    },
    {
      title: "Corporate Strategy & Equity Markets",
      description: "Expert analysis on market fundamentals and strategic corporate decision-making.",
      icon: <FaChartLine className="text-3xl text-accent mb-4" />
    },
    {
      title: "Macroeconomic Trends & Policy Analysis",
      description: "Perspectives on economic policies and their societal impacts.",
      icon: <FaGlobeAmericas className="text-3xl text-accent mb-4" />
    }
  ];

  const engagements = [
    { title: "Keynote Addresses", icon: <FaMicrophone className="text-xl text-accent" /> },
    { title: "Panel Discussions", icon: <FaUsers className="text-xl text-accent" /> },
    { title: "Corporate Workshops", icon: <FaBuilding className="text-xl text-accent" /> },
    { title: "Academic Conferences", icon: <FaLandmark className="text-xl text-accent" /> }
  ];

  return (
    <div className="min-h-screen py-20 bg-primary-light dark:bg-primary">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="page-hero text-center mb-20">
          <h1 className="font-heading text-4xl md:text-5xl text-text-dark dark:text-text mb-4">
            For Media & Press
          </h1>
          <p className="text-text-dark-muted dark:text-text-muted text-lg max-w-2xl mx-auto">
            Expert commentary, speaking engagements, and press inquiries.
          </p>
        </div>

        {/* Expert Topics */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-text-dark dark:text-text mb-4">Expert Topics Available for Commentary</h2>
            <div className="gold-line-center" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertTopics.map((topic, idx) => (
              <div key={idx} className="card-base glass-card p-8 hover-glow flex flex-col">
                {topic.icon}
                <h3 className="font-heading text-xl text-text-dark dark:text-text mb-3">{topic.title}</h3>
                <p className="text-text-dark-muted dark:text-text-muted font-body">{topic.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Speaking Engagements & Press Kit Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Speaking Engagements */}
          <section className="bg-surface-light dark:bg-surface p-10 rounded-2xl border border-accent/10">
            <h2 className="font-heading text-2xl text-text-dark dark:text-text mb-6">Speaking Engagements</h2>
            <div className="gold-line mb-8" />
            <p className="text-text-dark-muted dark:text-text-muted mb-8 font-body">
              Dr. Kanjer is available for various speaking formats, bringing decades of academic and corporate experience to your audience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {engagements.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-primary-light dark:bg-primary p-4 rounded-xl border border-accent/5">
                  {item.icon}
                  <span className="font-heading text-text-dark dark:text-text font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Press Kit & Contact */}
          <section className="bg-accent/5 dark:bg-accent/10 p-10 rounded-2xl border border-accent/20 flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-2xl text-text-dark dark:text-text mb-6">Press Kit</h2>
              <div className="gold-line mb-8" />
              <p className="text-text-dark-muted dark:text-text-muted mb-6 font-body leading-relaxed">
                Prof. Dr. Hanif Kanjer is a multifaceted academician, management consultant, and bestselling author with extensive experience across global institutions like S P Jain Global and RCIS.
              </p>
              <p className="text-text-dark dark:text-text font-medium mb-8">
                For high-resolution headshots, detailed biography, and press materials, please contact us directly.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="mb-6">
                <h3 className="font-heading text-lg text-text-dark dark:text-text mb-2">Media Contact</h3>
                <p className="text-sm text-text-dark-muted dark:text-text-muted">
                  For media inquiries, interviews, and expert commentary requests. We typically respond within 24-48 hours.
                </p>
              </div>
              <Link href="/contact">
                <button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 rounded-full font-heading font-medium transition-colors inline-block w-full sm:w-auto text-center shadow-lg shadow-accent/20">
                  Request Press Kit / Contact
                </button>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
