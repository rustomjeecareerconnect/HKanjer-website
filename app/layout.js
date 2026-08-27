import { Inter, Playfair_Display, Lora } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Dr. Hanif Kanjer | Professor • Advisor • Author • Educator • Farmer',
    template: '%s | Dr. Hanif Kanjer',
  },
  description:
    'Official website of Prof. Dr. Hanif Kanjer — Academician, Management Consultant, Corporate Advisor, Bestselling Author, and Farmer. Founder Director of Rustomjee Cambridge International School & Junior College.',
  keywords: [
    'Dr. Hanif Kanjer',
    'Management Consultant',
    'Corporate Advisor',
    'Business Strategy',
    'Finance Professor',
    'Rustomjee Cambridge',
    'Equity Investment Masterclass',
    'Author',
  ],
  authors: [{ name: 'Dr. Hanif Kanjer' }],
  openGraph: {
    title: 'Dr. Hanif Kanjer | Professor • Advisor • Author • Educator • Farmer',
    description:
      'Official website of Prof. Dr. Hanif Kanjer — Academician, Management Consultant, Corporate Advisor, Bestselling Author, and Farmer.',
    url: 'https://www.hanifkanjer.com',
    siteName: 'Dr. Hanif Kanjer',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${lora.variable}`}
    >
      <body className="font-body bg-primary-light dark:bg-primary text-text-dark dark:text-text antialiased transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
