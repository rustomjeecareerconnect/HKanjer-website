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
  const currentArticle = articles.find((a) => a.slug === slug);

  if (!currentArticle) {
    return <div className="container-custom py-20 text-center text-text-dark font-heading text-xl">Article not found.</div>;
  }

  // Find all articles in the same topic/category
  const topicArticles = articles.filter(a => a.category === currentArticle.category);

  // Sequential reading stream: current article first, followed by the rest of the articles in this same topic
  const readingList = [
    currentArticle,
    ...topicArticles.filter(a => a.slug !== currentArticle.slug)
  ];

  // Other categories for topic exploration at the end of the stream
  const allCategories = ['Leadership', 'Education', 'Management', 'Ed-Tech', 'Society'];
  const otherCategories = allCategories.filter(c => c !== currentArticle.category);

  return (
    <div className="min-h-screen py-16 bg-primary-light">
      <div className="container-custom max-w-3xl">
        <Link href="/articles" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover mb-6 font-medium transition-colors text-sm">
          <span>&larr;</span>
          <span>Back to All Articles</span>
        </Link>
        
        {/* Topic Stream Banner */}
        <div className="bg-surface-light border border-accent/20 rounded-2xl p-4 sm:p-5 mb-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-accent uppercase tracking-wider text-xs bg-accent/10 px-2.5 py-1 rounded-md">Topic</span>
              <span className="font-bold text-text-dark text-base">{currentArticle.category}</span>
              <span className="text-text-dark-muted text-xs sm:text-sm">
                ({topicArticles.length} {topicArticles.length === 1 ? 'article' : 'articles'} in this stream)
              </span>
            </div>
            {topicArticles.length > 1 && (
              <div className="text-xs text-text-dark-muted flex items-center gap-1">
                <span>Scroll down to continue reading</span>
                <span>↓</span>
              </div>
            )}
          </div>

          {/* Quick jump pills for all articles in this topic */}
          {topicArticles.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-accent/10">
              {topicArticles.map((art, idx) => (
                <a
                  key={art.slug}
                  href={`#${art.slug}`}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                    art.slug === currentArticle.slug
                      ? 'bg-accent text-primary font-bold shadow-xs'
                      : 'bg-primary-light text-text-dark hover:text-accent hover:border-accent border border-accent/20'
                  }`}
                >
                  {idx + 1}. {art.title}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Sequential Articles in this Topic */}
        {readingList.map((article, itemIndex) => {
          const articleUrl = `https://www.hanifkanjer.com/articles/${article.slug}`;
          const encodedTitle = encodeURIComponent(article.title);
          const encodedUrl = encodeURIComponent(articleUrl);

          return (
            <section key={article.slug} id={article.slug} className={itemIndex > 0 ? 'scroll-mt-24' : ''}>
              {/* Divider between sequential articles in the same topic */}
              {itemIndex > 0 && (
                <div className="my-16 pt-8">
                  <div className="flex items-center gap-4 my-6">
                    <div className="h-px bg-accent/25 flex-grow" />
                    <span className="text-xs uppercase tracking-widest text-accent font-bold px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 flex items-center gap-2 shadow-xs">
                      <span>Next in {article.category}</span>
                      <span className="text-accent/70 font-normal">({itemIndex + 1} of {readingList.length})</span>
                    </span>
                    <div className="h-px bg-accent/25 flex-grow" />
                  </div>
                </div>
              )}

              <header className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                  {itemIndex > 0 && (
                    <span className="text-xs text-text-dark-muted font-medium">
                      Article {itemIndex + 1} of {readingList.length}
                    </span>
                  )}
                </div>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4 font-bold leading-tight">
                  {article.title}
                </h1>
                <div className="text-text-dark-muted text-sm font-medium">
                  {article.date} • {article.readTime}
                </div>
              </header>

              <div className="gold-line mb-8" />

              <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-dark prose-a:text-accent hover:prose-a:text-accent-hover mb-12 font-body text-text-dark">
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

              {/* Share Section for this Article */}
              <div className="border-t border-accent/15 pt-6 pb-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-heading font-medium text-text-dark">Share this article:</span>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X / Twitter"
                    className="text-text-dark-muted hover:text-[#1DA1F2] transition-colors p-2 bg-surface-light border border-accent/15 rounded-full shadow-xs"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="text-text-dark-muted hover:text-[#0A66C2] transition-colors p-2 bg-surface-light border border-accent/15 rounded-full shadow-xs"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="text-text-dark-muted hover:text-[#25D366] transition-colors p-2 bg-surface-light border border-accent/15 rounded-full shadow-xs"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </section>
          );
        })}

        {/* End of Topic Completion Banner */}
        <div className="bg-surface-light border border-accent/20 p-8 sm:p-10 rounded-3xl text-center shadow-md my-16">
          <div className="inline-block text-3xl mb-3">✨</div>
          <h3 className="font-heading text-2xl font-bold text-text-dark mb-2">
            You&apos;ve completed all articles in {currentArticle.category}!
          </h3>
          <p className="text-text-dark-muted text-sm max-w-md mx-auto mb-6">
            Continue reading by exploring articles in other topics:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {otherCategories.map(cat => {
              const firstArt = articles.find(a => a.category === cat);
              return (
                <Link
                  key={cat}
                  href={`/articles/${firstArt?.slug || ''}`}
                  className="px-4 py-2 rounded-full text-sm font-body font-medium bg-primary-light text-text-dark hover:bg-accent hover:text-primary transition-all border border-accent/20 shadow-xs"
                >
                  {cat} &rarr;
                </Link>
              );
            })}
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            <span>&larr;</span>
            <span>Return to All Articles Index</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
