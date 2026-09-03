'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const MAIN_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Services', href: '/services' },
  { label: 'Research', href: '/research' },
  { label: 'Articles', href: '/articles' },
];

const MORE_LINKS = [
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Media', href: '/media' },
  { label: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-light/95 dark:bg-primary/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-xl font-bold tracking-wide z-50 flex items-center gap-1">
          Dr. Hanif <span className="text-accent">Kanjer</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {MAIN_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-hover relative group ${
                isActive(link.href) ? 'text-accent' : 'text-text-dark dark:text-text'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent transition-transform duration-300 ${
                  isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}

          {/* More Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-text-dark dark:text-text hover:text-accent-hover transition-colors">
              More <FiChevronDown className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full right-0 mt-2 w-48 bg-surface-light dark:bg-surface rounded-lg shadow-lg border border-accent/10 overflow-hidden transition-all duration-300 origin-top-right ${isMoreOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
              {MORE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm hover:bg-accent/5 hover:text-accent transition-colors ${
                    isActive(link.href) ? 'text-accent bg-accent/5' : 'text-text-dark dark:text-text'
                  }`}
                  onClick={() => setIsMoreOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-accent text-primary px-5 py-2 rounded-md text-sm font-medium hover:bg-accent-hover transition-colors shadow-sm"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-dark dark:text-text hover:text-accent transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary-light/98 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-center overflow-y-auto pt-20 pb-8 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-3 w-full max-w-xs px-6">
          {[...MAIN_LINKS, ...MORE_LINKS].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-heading font-semibold tracking-wide py-1.5 transition-colors ${
                isActive(link.href) ? 'text-accent border-b-2 border-accent' : 'text-text-dark hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 bg-accent text-primary px-8 py-3 rounded-xl text-base font-bold hover:bg-accent-hover transition-colors w-full text-center shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
