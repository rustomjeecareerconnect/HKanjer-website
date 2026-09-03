import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-4xl font-heading font-bold mb-4 text-text-dark dark:text-text">Page Not Found</h2>
      <p className="text-text-dark-muted dark:text-text-muted mb-8 max-w-md">
        Could not find requested resource. Please return to the homepage.
      </p>
      <Link
        href="/"
        className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-lg transition-all shadow-md"
      >
        Return Home
      </Link>
    </div>
  );
}
