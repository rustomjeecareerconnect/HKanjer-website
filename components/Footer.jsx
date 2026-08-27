import Link from 'next/link';
import { FaLinkedin, FaGraduationCap, FaResearchgate, FaAmazon } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary-light dark:bg-secondary border-t-2 border-accent relative pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-2xl font-bold">
              Dr. Hanif <span className="text-accent">Kanjer</span>
            </h3>
            <p className="text-text-dark-muted dark:text-text-muted text-sm leading-relaxed">
              Academician, Management Consultant, Corporate Advisor, Bestselling Author, and Farmer. Dedicated to excellence in education and leadership.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/hanifkanjer" target="_blank" rel="noopener noreferrer" className="text-text-dark-muted dark:text-text-muted hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn Profile" title="LinkedIn Profile">
                <FaLinkedin size={22} />
              </a>
              <a href="https://scholar.google.com/citations?user=X8OOo2wAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-text-dark-muted dark:text-text-muted hover:text-accent transition-colors" aria-label="Google Scholar Profile" title="Google Scholar">
                <FaGraduationCap size={22} />
              </a>
              <a href="https://www.researchgate.net/profile/Hanif-Kanjer" target="_blank" rel="noopener noreferrer" className="text-text-dark-muted dark:text-text-muted hover:text-accent transition-colors" aria-label="ResearchGate Profile" title="ResearchGate">
                <FaResearchgate size={22} />
              </a>
              <a href="https://www.amazon.in/All-Right-Answers-Hanif-Kanjer/dp/1403929173" target="_blank" rel="noopener noreferrer" className="text-text-dark-muted dark:text-text-muted hover:text-accent transition-colors" aria-label="Amazon Author & Books" title="Amazon Author & Books">
                <FaAmazon size={22} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xl font-semibold mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Books', 'Articles', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-text-dark-muted dark:text-text-muted hover:text-accent animated-underline inline-block pb-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xl font-semibold mb-2">Offerings</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Teaching & Masterclass', href: '/teaching' },
                { label: 'Corporate Advisory', href: '/services' },
                { label: 'Books & Publications', href: '/books' },
                { label: 'Research & Papers', href: '/research' },
                { label: 'Media & Features', href: '/media' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-text-dark-muted dark:text-text-muted hover:text-accent animated-underline inline-block pb-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xl font-semibold mb-2">Contact</h4>
            <p className="text-sm text-text-dark-muted dark:text-text-muted leading-relaxed">
              Rustomjee Cambridge International School & Junior College (RCIS)<br />
              Mumbai, India
            </p>
            <Link href="/contact" className="text-sm text-accent font-medium hover:text-accent-hover transition-colors mt-2">
              Send a Message &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-text-dark-muted/20 dark:border-text-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-dark-muted dark:text-text-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} Prof. Dr. Hanif Kanjer. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-dark-muted dark:text-text-muted">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
