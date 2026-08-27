import Link from 'next/link';
import { FaFileContract, FaArrowLeft } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
  title: 'Terms of Service | Prof. Dr. Hanif Kanjer',
  description: 'Terms of Service and legal terms governing the use of the official academic, research, and advisory website of Prof. Dr. Hanif Kanjer.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-primary-light dark:bg-primary text-text-dark dark:text-text">
      <div className="container-custom max-w-4xl">
        <ScrollAnimation>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover mb-8 transition-colors"
          >
            <FaArrowLeft size={12} />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-accent/15 rounded-2xl border border-accent/30 text-accent">
              <FaFileContract size={24} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-accent">Legal & Conditions</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">Terms of Service</h1>
            </div>
          </div>
          <p className="text-sm text-text-dark-muted dark:text-text-muted mb-8">
            Effective Date: January 2025
          </p>

          <div className="gold-line mb-10" />

          <div className="space-y-8 text-sm md:text-base leading-relaxed text-text-dark-muted dark:text-text-muted font-body">
            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website (<strong className="text-text-dark dark:text-text">www.hanifkanjer.com</strong>), you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please refrain from using the website.
              </p>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">2. Intellectual Property Rights</h2>
              <p className="mb-3">
                All contents on this website—including published articles, essays, case studies, evaluation summaries, book overviews, and multimedia assets—are the intellectual property of Prof. Dr. Hanif Kanjer or attributed publishers (such as Pearson Education, Macmillan India, University of Mumbai, and S P Jain School of Global Management).
              </p>
              <p>
                You may read, download, or cite content for personal, non-commercial, and academic educational reference with proper citation and attribution. Commercial reproduction without prior written authorization is strictly prohibited.
              </p>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">3. Educational & Advisory Disclaimer</h2>
              <p className="mb-3">
                The articles, educational materials, and Masterclass overviews shared on this website are for general academic knowledge, management education, and strategic thought leadership.
              </p>
              <p>
                Nothing on this website constitutes personalized financial advice, SEBI-registered stock recommendation, or legal counsel. Professional advisory engagements are formally governed by separate contractual agreements.
              </p>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">4. Third-Party Links & Document Files</h2>
              <p>
                This website includes links to external academic databases (Google Scholar, ResearchGate) and book retailers (Amazon, Flipkart). Prof. Dr. Hanif Kanjer is not responsible for the availability, content, or policies of third-party external websites.
              </p>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">5. Inquiries & Contact</h2>
              <p>
                For permissions, academic collaboration, speaking invitations, or questions regarding these terms, please submit an inquiry via the <Link href="/contact" className="text-accent underline font-semibold hover:text-accent-hover">Contact Page</Link>.
              </p>
            </section>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
}
