import { articles } from '@/lib/data/articles';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return { title: article?.title, description: article?.excerpt };
}

export default async function ArticleDetail({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <div className="container-custom py-20 text-center text-text-dark dark:text-text">Article not found.</div>;
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  const articleUrl = `https://www.hanifkanjer.com/articles/${article.slug}`;
  const encodedTitle = encodeURIComponent(article.title);
  const encodedUrl = encodeURIComponent(articleUrl);

  return (
    <div className="min-h-screen py-20 bg-primary-light">
      <div className="container-custom max-w-3xl">
        <Link href="/articles" className="inline-block text-accent hover:text-accent-hover mb-8 font-medium transition-colors">
          &larr; Back to Articles
        </Link>
        
        <header className="mb-10">
          <span className="inline-block text-xs font-semibold bg-accent/10 text-accent px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {article.category}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-text-dark mb-4 font-bold leading-tight">
            {article.title}
          </h1>
          <div className="text-text-dark-muted text-sm font-medium">
            {article.date} • {article.readTime}
          </div>
        </header>

        <div className="gold-line mb-10" />

        <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-dark prose-a:text-accent hover:prose-a:text-accent-hover mb-16 font-body text-text-dark">
          {article.content.split('\n\n').map((block, idx) => {
            const trimmed = block.trim();
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={idx} className="font-heading text-xl font-bold mt-8 mb-3 text-text-dark">
                  {trimmed.replace(/^###\s+/, '')}
                </h3>
              );
            }
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={idx} className="font-heading text-2xl font-bold mt-10 mb-4 text-text-dark border-b border-accent/15 pb-2">
                  {trimmed.replace(/^##\s+/, '')}
                </h2>
              );
            }
            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
              const items = trimmed.split('\n').filter(i => i.trim().length > 0);
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 my-4 text-text-dark">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item.replace(/^[-*]\s+/, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="mb-4 text-text-dark text-base md:text-lg leading-relaxed whitespace-pre-line">
                {trimmed}
              </p>
            );
          })}
        </article>

        {/* Share Section */}
        <div className="border-t border-accent/20 pt-8 mb-16">
          <h3 className="text-xl font-heading text-text-dark mb-4">Share this article</h3>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X / Twitter"
              className="text-text-dark-muted hover:text-[#1DA1F2] transition-colors p-2.5 bg-surface-light border border-accent/15 rounded-full shadow-sm"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="text-text-dark-muted hover:text-[#0A66C2] transition-colors p-2.5 bg-surface-light border border-accent/15 rounded-full shadow-sm"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="text-text-dark-muted hover:text-[#25D366] transition-colors p-2.5 bg-surface-light border border-accent/15 rounded-full shadow-sm"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-surface-light p-8 rounded-2xl border border-accent/10 shadow-sm">
            <h3 className="text-2xl font-heading text-text-dark mb-6 font-bold">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map(related => (
                <Link href={`/articles/${related.slug}`} key={related.slug} className="group block">
                  <h4 className="font-heading text-lg text-text-dark group-hover:text-accent transition-colors mb-2 font-semibold">
                    {related.title}
                  </h4>
                  <p className="text-sm text-text-dark-muted line-clamp-2 leading-relaxed">
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
