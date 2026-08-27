import { articles } from '@/lib/data/articles';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  return { title: article?.title, description: article?.excerpt };
}

export default function ArticleDetail({ params }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return <div className="container-custom py-20 text-center text-text-dark dark:text-text">Article not found.</div>;
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen py-20 bg-primary-light dark:bg-primary">
      <div className="container-custom max-w-3xl">
        <Link href="/articles" className="inline-block text-accent hover:text-accent-hover mb-8 font-medium transition-colors">
          &larr; Back to Articles
        </Link>
        
        <header className="mb-10">
          <span className="inline-block text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            {article.category}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-text-dark dark:text-text mb-4">
            {article.title}
          </h1>
          <div className="text-text-dark-muted dark:text-text-muted text-sm">
            {article.date} • {article.readTime}
          </div>
        </header>

        <div className="gold-line mb-10" />

        <article className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-accent hover:prose-a:text-accent-hover mb-16 font-body text-text-dark dark:text-text">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

        {/* Share Section */}
        <div className="border-t border-accent/20 pt-8 mb-16">
          <h3 className="text-xl font-heading text-text-dark dark:text-text mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="text-text-dark-muted dark:text-text-muted hover:text-[#1DA1F2] transition-colors p-2 bg-surface-light dark:bg-surface rounded-full">
              <FaTwitter size={20} />
            </button>
            <button className="text-text-dark-muted dark:text-text-muted hover:text-[#0A66C2] transition-colors p-2 bg-surface-light dark:bg-surface rounded-full">
              <FaLinkedin size={20} />
            </button>
            <button className="text-text-dark-muted dark:text-text-muted hover:text-[#25D366] transition-colors p-2 bg-surface-light dark:bg-surface rounded-full">
              <FaWhatsapp size={20} />
            </button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-surface-light dark:bg-surface p-8 rounded-xl border border-accent/10">
            <h3 className="text-2xl font-heading text-text-dark dark:text-text mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map(related => (
                <Link href={`/articles/${related.slug}`} key={related.slug} className="group block">
                  <h4 className="font-heading text-lg text-text-dark dark:text-text group-hover:text-accent transition-colors mb-2">
                    {related.title}
                  </h4>
                  <p className="text-sm text-text-dark-muted dark:text-text-muted line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
