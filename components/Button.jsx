import Link from 'next/link';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-accent text-primary hover:bg-accent-hover shadow-sm shadow-accent/20 hover:shadow-accent/40',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary',
    ghost: 'text-accent hover:bg-accent/10'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  const innerContent = (
    <>
      {Icon && <span className="mr-2"><Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} /></span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {innerContent}
    </button>
  );
}
