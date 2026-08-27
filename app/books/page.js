import Link from 'next/link';
import { FaAmazon, FaShoppingBag, FaBookOpen, FaAward, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
  title: 'Books & Published Works | Dr. Hanif Kanjer',
  description: 'Explore books authored and co-authored by Prof. Dr. Hanif Kanjer, including "All the Right Answers" and Pearson\'s "Strategic Management: Concepts and Cases".',
};

const books = [
  {
    id: 'strategic-management',
    title: 'Strategic Management: Concepts and Cases',
    subtitle: 'A Competitive Advantage Approach (18th Edition)',
    authors: 'Fred R. David, Forest R. David & Dr. Hanif Kanjer',
    publisher: 'Pearson Education',
    year: '2024 / 2025',
    isbn10: '9361590952',
    isbn13: '978-9361590955',
    edition: '18th Global & Indian Edition',
    badge: 'Latest Pearson Edition',
    amazonUrl: 'https://www.amazon.in/Strategic-Management-Competitive-Advantage-Approach/dp/9361590952',
    flipkartUrl: 'https://www.flipkart.com/strategic-management-concepts-cases-a-competitive-advantage-approach-18th-pearson/p/itme8f12f5b9736e',
    overview: 'Co-authored by Prof. Dr. Hanif Kanjer alongside legendary strategic management scholars Fred R. David and Forest R. David, this 18th edition by Pearson is a globally benchmarked curriculum textbook and strategic executive guide. It introduces modern frameworks for competitive strategy, industry analysis, value chain optimization, corporate restructuring, and comprehensive case studies tailored for modern leadership.',
    highlights: [
      'Comprehensive 3-stage strategy formulation framework (Input, Matching & Decision Stages)',
      'Extensive integration of Indian and global corporate case studies & emerging market paradigms',
      'Actionable models for competitive intelligence, Porter\'s Five Forces, and dynamic matrix analysis (BCG, IE, SPACE, QSPM)',
      'Dedicated chapters on corporate governance, business ethics, sustainability, and digital transformation strategy'
    ]
  },
  {
    id: 'all-the-right-answers',
    title: 'All the Right Answers',
    subtitle: 'Practical Problem Solving & Strategic Decision Making for Modern Leaders',
    authors: 'Dr. Hanif Kanjer',
    publisher: 'Macmillan India',
    year: '2005',
    isbn10: '1403929173',
    isbn13: '978-1403929174',
    edition: 'First Edition',
    badge: 'Bestseller',
    amazonUrl: 'https://www.amazon.in/All-Right-Answers-Hanif-Kanjer/dp/1403929173',
    flipkartUrl: null,
    overview: 'A widely acclaimed business strategy and management reference addressing boardroom dilemmas, leadership crossroads, and tactical corporate problem-solving. Through pragmatic case vignettes and structured thinking templates, the book empowers professionals to diagnose complex organizational challenges and craft resilient solutions.',
    highlights: [
      'Proven problem-solving algorithms for high-stakes managerial dilemmas',
      'Frameworks for aligning organizational culture with market positioning',
      'Real-world case scenarios spanning manufacturing, finance, and educational enterprises',
      'Practical tools for cross-functional alignment and executive decision accountability'
    ]
  }
];

export default function BooksPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="page-hero container-custom text-center mb-16">
        <ScrollAnimation>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <FaBookOpen /> Published Works & Textbooks
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-dark dark:text-text mb-6">
            Author & <span className="text-gradient">Published Books</span>
          </h1>
          <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-3xl mx-auto font-body leading-relaxed">
            Bridging rigorous academic theory, emerging market cases, and high-impact boardroom execution through authoritative business literature.
          </p>
          <div className="gold-line-center mt-8"></div>
        </ScrollAnimation>
      </section>

      {/* Books Showcase */}
      <div className="space-y-16 container-custom">
        {books.map((book, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={book.id}
              className="card-base glass-card rounded-3xl p-6 md:p-12 border-2 border-accent/25 hover:border-accent/50 transition-all duration-300 shadow-xl"
            >
              <ScrollAnimation>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-14`}>
                  
                  {/* Book 3D-Styled Visual Cover */}
                  <div className="w-full lg:w-5/12 flex justify-center flex-shrink-0">
                    <div className="relative w-64 sm:w-72 h-[390px] sm:h-[430px] group perspective">
                      {/* Decorative Gold Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Book Cover Container */}
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-surface to-primary p-1 shadow-2xl border-2 border-accent/50 flex flex-col justify-between overflow-hidden">
                        {/* Book Spine Texture */}
                        <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/40 via-white/10 to-transparent z-10 border-r border-accent/20"></div>

                        {/* Top Book Header */}
                        <div className="p-6 pl-8 z-10">
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[10px] font-mono tracking-wider uppercase font-bold text-accent px-2 py-0.5 rounded bg-accent/15">
                              {book.publisher}
                            </span>
                            <span className="text-[11px] font-bold text-text-muted">
                              {book.edition.split(' ')[0]}
                            </span>
                          </div>
                          <h3 className="font-heading font-bold text-xl sm:text-2xl text-text leading-snug">
                            {book.title}
                          </h3>
                          <p className="text-xs text-accent font-semibold mt-1">
                            {book.subtitle}
                          </p>
                        </div>

                        {/* Bottom Book Footer */}
                        <div className="p-6 pl-8 border-t border-accent/20 bg-black/30 z-10">
                          <p className="text-xs text-text-muted">Authors:</p>
                          <p className="text-xs font-bold text-text truncate">
                            {book.authors}
                          </p>
                          <div className="flex items-center justify-between text-[10px] text-accent mt-3 font-mono">
                            <span>ISBN: {book.isbn10}</span>
                            <span>{book.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="absolute -top-3 -right-3 bg-accent text-primary font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-1.5 border border-accent-light">
                        <FaAward /> {book.badge}
                      </div>
                    </div>
                  </div>

                  {/* Book Content & Purchase Links */}
                  <div className="w-full lg:w-7/12">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/15 px-3 py-1 rounded-md">
                        {book.publisher} ({book.year})
                      </span>
                      <span className="text-xs font-semibold text-text-dark-muted dark:text-text-muted">
                        ISBN-10: {book.isbn10}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-text-dark dark:text-text font-bold mb-2">
                      {book.title}
                    </h2>
                    <p className="text-base text-accent font-semibold mb-4">
                      {book.subtitle}
                    </p>
                    <p className="text-sm font-medium text-text-dark-muted dark:text-text-muted mb-5">
                      By <strong className="text-text-dark dark:text-text">{book.authors}</strong>
                    </p>

                    <p className="text-sm md:text-base text-text-dark-muted dark:text-text-muted leading-relaxed font-body mb-6">
                      {book.overview}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-surface-light dark:bg-surface/80 border border-accent/20">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-text mb-3">
                        Key Features & Curriculum Coverage:
                      </h4>
                      <ul className="space-y-2 text-xs md:text-sm text-text-dark-muted dark:text-text-muted">
                        {book.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <FaCheckCircle className="text-accent flex-shrink-0 mt-0.5 text-xs" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Official Purchase & Retail Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      {book.amazonUrl && (
                        <a
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#ff9900] hover:bg-[#e68a00] text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm"
                        >
                          <FaAmazon className="text-lg" />
                          <span>Buy on Amazon India</span>
                          <FaExternalLinkAlt className="text-xs ml-1 opacity-70" />
                        </a>
                      )}

                      {book.flipkartUrl && (
                        <a
                          href={book.flipkartUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#2874f0] hover:bg-[#1a5bc4] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm"
                        >
                          <FaShoppingBag className="text-lg" />
                          <span>Buy on Flipkart</span>
                          <FaExternalLinkAlt className="text-xs ml-1 opacity-70" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </ScrollAnimation>
            </section>
          );
        })}
      </div>

      {/* Author Quote / Philosophy Section */}
      <section className="mt-20 py-16 bg-secondary-light dark:bg-secondary border-t border-accent/15">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto relative px-6 md:px-12">
              <span className="text-5xl text-accent opacity-40 font-heading block mb-2">“</span>
              <p className="text-xl md:text-2xl font-accent italic text-text-dark dark:text-text relative z-10 leading-relaxed">
                Strategic management is not merely an abstract academic discipline—it is the living art of synthesizing competitive insight, rigorous execution, and disciplined governance to create enduring institutional value.
              </p>
              <div className="mt-6 text-text-dark-muted dark:text-text-muted font-body uppercase tracking-widest text-xs font-semibold">
                — Prof. Dr. Hanif Kanjer
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
