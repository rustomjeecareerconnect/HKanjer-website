import Image from 'next/image';
import Link from 'next/link';
import { FaAmazon } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
  title: 'Books',
  description: 'Published works by Dr. Hanif Kanjer, including bestsellers like "All the Right Answers" and "Strategic Management: Concepts and Cases".',
};

export default function BooksPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="page-hero container-custom text-center mb-16">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-dark dark:text-text mb-6">
            Published <span className="text-gradient">Works</span>
          </h1>
          <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-2xl mx-auto font-body">
            Bridging theory and practice through compelling business literature.
          </p>
          <div className="gold-line-center mt-8"></div>
        </ScrollAnimation>
      </section>

      {/* Book 1 */}
      <section className="section-padding bg-surface-light dark:bg-surface">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-2/5 flex justify-center">
                <div className="relative w-64 h-96 group perspective">
                  <div className="absolute inset-0 bg-accent rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6">
                    <div className="absolute inset-0 bg-primary-light dark:bg-primary m-1 rounded flex items-center justify-center p-6 text-center border border-accent/20">
                      <div>
                        <h3 className="font-heading text-2xl mb-2 text-text-dark dark:text-text">All the Right Answers</h3>
                        <p className="text-sm text-text-dark-muted dark:text-text-muted">Dr. Hanif Kanjer</p>
                      </div>
                    </div>
                  </div>
                  {/* Bestseller Badge */}
                  <div className="absolute -top-4 -right-4 bg-accent text-primary-light font-bold px-4 py-2 rounded-full shadow-lg z-10 transform rotate-12">
                    Bestseller
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5">
                <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">All the Right Answers</h2>
                <p className="text-accent-warm font-semibold mb-6">Publisher: Macmillan India (2005)</p>
                <div className="prose dark:prose-invert max-w-none mb-8 text-text-dark-muted dark:text-text-muted font-body">
                  <p>
                    A bestselling business strategy book addressing corporate dilemmas, leadership choices, and strategic problem-solving. This book uses real-world case scenarios to distill actionable management frameworks that can be applied across various industries.
                  </p>
                  <p>
                    Whether you are an aspiring manager or a seasoned executive, "All the Right Answers" provides the strategic insight needed to navigate complex organizational structures and deliver high-impact results.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary-light font-bold py-3 px-6 rounded transition-colors duration-300">
                    <FaAmazon className="text-xl" /> Buy on Amazon
                  </Link>
                  <Link href="#" className="inline-flex items-center gap-2 border-2 border-text-dark dark:border-text hover:border-accent dark:hover:border-accent text-text-dark dark:text-text hover:text-accent dark:hover:text-accent font-bold py-3 px-6 rounded transition-colors duration-300">
                    Buy on Flipkart
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Book 2 */}
      <section className="section-padding bg-primary-light dark:bg-primary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="w-full lg:w-2/5 flex justify-center">
                <div className="relative w-64 h-96 group perspective">
                  <div className="absolute inset-0 bg-accent rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:-rotate-y-12 group-hover:rotate-x-6">
                    <div className="absolute inset-0 bg-surface-light dark:bg-surface m-1 rounded flex items-center justify-center p-6 text-center border border-accent/20">
                      <div>
                        <h3 className="font-heading text-xl mb-2 text-text-dark dark:text-text">Strategic Management: Concepts and Cases</h3>
                        <p className="text-sm text-text-dark-muted dark:text-text-muted">Dr. Hanif Kanjer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5">
                <h2 className="text-3xl md:text-4xl font-heading text-text-dark dark:text-text mb-4">Strategic Management: Concepts and Cases</h2>
                <div className="prose dark:prose-invert max-w-none mb-8 text-text-dark-muted dark:text-text-muted font-body">
                  <p>
                    An in-depth textbook and executive reference analyzing corporate strategy, competitive structures, value chain positioning, strategic innovation, and case studies of global and Indian enterprises.
                  </p>
                  <p>
                    Designed for business students and practitioners alike, this text bridges the gap between academic theory and practical execution, providing comprehensive tools for competitive advantage.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary-light font-bold py-3 px-6 rounded transition-colors duration-300">
                    <FaAmazon className="text-xl" /> Buy on Amazon
                  </Link>
                  <Link href="#" className="inline-flex items-center gap-2 border-2 border-text-dark dark:border-text hover:border-accent dark:hover:border-accent text-text-dark dark:text-text hover:text-accent dark:hover:text-accent font-bold py-3 px-6 rounded transition-colors duration-300">
                    Buy on Flipkart
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Author's Note */}
      <section className="py-20 bg-secondary-light dark:bg-secondary">
        <div className="container-custom text-center">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto relative px-8">
              <span className="absolute top-0 left-0 text-6xl text-accent opacity-50 font-heading">"</span>
              <p className="text-2xl md:text-3xl font-accent italic text-text-dark dark:text-text relative z-10 py-6">
                I write to translate the complexities of the corporate boardroom and academic theory into accessible, actionable insights that empower the next generation of business leaders.
              </p>
              <span className="absolute bottom-0 right-0 text-6xl text-accent opacity-50 font-heading rotate-180">"</span>
            </div>
            <div className="mt-8 text-text-dark-muted dark:text-text-muted font-body uppercase tracking-widest text-sm">
              — Dr. Hanif Kanjer
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
