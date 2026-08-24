export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true, 
  light = false 
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-sm font-semibold tracking-widest text-accent uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${light ? 'text-primary' : 'text-text-dark dark:text-text'}`}>
        {title}
      </h2>
      <div className={centered ? 'gold-line-center' : 'gold-line'} />
    </div>
  );
}
