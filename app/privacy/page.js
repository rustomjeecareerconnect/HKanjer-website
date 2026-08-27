import Link from 'next/link';
import { FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
  title: 'Privacy Policy | Prof. Dr. Hanif Kanjer',
  description: 'Privacy Policy and data protection guidelines for the official academic, advisory, and educational website of Prof. Dr. Hanif Kanjer.',
};

export default function PrivacyPage() {
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
              <FaShieldAlt size={24} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-accent">Legal & Compliance</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-sm text-text-dark-muted dark:text-text-muted mb-8">
            Last updated: January 2025
          </p>

          <div className="gold-line mb-10" />

          <div className="space-y-8 text-sm md:text-base leading-relaxed text-text-dark-muted dark:text-text-muted font-body">
            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">1. Introduction</h2>
              <p>
                Welcome to the official website of Prof. Dr. Hanif Kanjer (<strong className="text-text-dark dark:text-text">www.hanifkanjer.com</strong>). This Privacy Policy explains how information is collected, used, and protected when you browse our website, download academic documents, or submit inquiries through our contact and consultation forms.
              </p>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">2. Information We Collect</h2>
              <p className="mb-3">
                We only collect personal information that you voluntarily provide to us. This includes:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-text-dark dark:text-text">Contact Inquiries:</strong> Your full name, email address, phone number, and organization name when submitting messages for corporate advisory, academic lectures, or masterclass enrollment.</li>
                <li><strong className="text-text-dark dark:text-text">Technical & Usage Data:</strong> Standard anonymous browser metrics (such as device type, browser version, and page response times) to optimize website performance.</li>
              </ul>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">
                The information you provide is strictly used for the following legitimate purposes:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>To respond directly to your advisory consultations, speaking invitations, or academic inquiries.</li>
                <li>To furnish enrollment details for the Equity Investment Masterclass or university guest lectures.</li>
                <li>To maintain the security, functionality, and accessibility of this digital portal.</li>
              </ul>
              <p className="mt-3 text-accent font-medium">
                We never sell, rent, or trade your personal contact details to third-party marketing companies.
              </p>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">4. Document Downloads & External Links</h2>
              <p>
                This website provides links to external platforms (including Google Scholar, ResearchGate, Pearson Education, Macmillan, Amazon, and Flipkart) as well as direct institutional evaluation PDF sheets. When visiting third-party links, please review the respective privacy policies of those external services.
              </p>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">5. Data Retention & Security</h2>
              <p>
                We employ standard industry safeguards and encrypted communication protocols to protect any submitted inquiry data against unauthorized disclosure, loss, or alteration.
              </p>
            </section>

            <section className="bg-surface-light dark:bg-surface p-6 md:p-8 rounded-2xl border border-accent/15">
              <h2 className="text-xl font-heading font-bold text-text-dark dark:text-text mb-3">6. Contact for Privacy Inquiries</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data updates, please contact us via our <Link href="/contact" className="text-accent underline font-semibold hover:text-accent-hover">Contact Form</Link> or email at <strong className="text-text-dark dark:text-text">info@hanifkanjer.com</strong>.
              </p>
            </section>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
}
