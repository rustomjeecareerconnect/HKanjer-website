import Link from 'next/link';
import Image from 'next/image';

export default function Card({
  title,
  description,
  icon: Icon,
  image,
  href,
  tags = [],
  className = '',
  children
}) {
  const content = (
    <div className={`card-base h-full flex flex-col group ${className}`}>
      {image && (
        <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-xl shrink-0">
          <Image
            src={image}
            alt={title || 'Card image'}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className={`flex flex-col flex-grow ${image ? 'p-6' : 'p-8'}`}>
        {Icon && (
          <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent w-fit">
            <Icon size={28} />
          </div>
        )}
        
        {title && (
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-text-dark-muted dark:text-text-muted text-sm md:text-base leading-relaxed mb-4 flex-grow">
            {description}
          </p>
        )}
        
        {children}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-text-dark-muted/10 dark:border-text-muted/10">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-warm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full outline-none focus:ring-2 focus:ring-accent rounded-2xl">
        {content}
      </Link>
    );
  }

  return content;
}
