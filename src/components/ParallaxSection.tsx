import { useEffect, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  speed?: number;
  overlay?: boolean;
  className?: string;
}

const ParallaxSection = ({ 
  children, 
  backgroundImage,
  speed = 0.5,
  overlay = true,
  className = '' 
}: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offsetY * speed}px)`,
        }}
      >
        {/* Abstract gradient shapes for visual interest when no image */}
        {!backgroundImage && (
          <>
            <div 
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl"
              style={{ transform: `translate(${offsetY * 0.1}px, ${offsetY * -0.1}px)` }}
            />
            <div 
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-blue-light/15 blur-3xl"
              style={{ transform: `translate(${offsetY * -0.1}px, ${offsetY * 0.1}px)` }}
            />
            <div 
              className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/10 blur-2xl"
              style={{ transform: `translate(-50%, -50%) translate(${offsetY * 0.05}px, ${offsetY * -0.05}px)` }}
            />
          </>
        )}
      </div>
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
