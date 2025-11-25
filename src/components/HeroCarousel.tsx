import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  images: string[];
  altText?: string;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  height?: string;
  overlayOpacity?: number;
  minHeight?: string;
  priority?: boolean;
}

export default function HeroCarousel({
  images,
  altText = 'Carousel Image',
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  height = 'h-full',
  overlayOpacity = 0.2,
  minHeight = 'min-h-[500px] md:min-h-[600px] lg:min-h-[700px]',
  priority = true,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Single image - no carousel needed
  if (images.length === 1) {
    return (
      <div className={'absolute inset-0 ' + minHeight} style={{ opacity: overlayOpacity }}>
        <img
          src={images[0]}
          alt={altText}
          className={'w-full ' + height + ' object-cover object-center'}
          style={{
            imageRendering: 'crisp-edges',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          } as React.CSSProperties}
          loading='eager'
          fetchPriority='high'
          decoding='async'
        />
      </div>
    );
  }

  return (
    <div
      className={'absolute inset-0 overflow-hidden ' + minHeight}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      <div className='relative w-full h-full'>
        {images.map((image, index) => (
          <div
            key={index}
            className='absolute inset-0 transition-opacity duration-700 ease-in-out'
            style={{ opacity: index === currentIndex ? overlayOpacity : 0 }}
          >
            <img
              src={image}
              alt={' '}
              className={'w-full ' + height + ' object-cover object-center'}
              style={{
                imageRendering: 'auto',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
              } as React.CSSProperties}
              loading={index === 0 && priority ? 'eager' : 'lazy'}
              fetchPriority={index === 0 && priority ? 'high' : 'low'}
              decoding='async'
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && images.length > 1 && (
        <>
          <button
            type='button'
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10 focus:outline-none focus:ring-2 focus:ring-white'
            aria-label='Previous image'
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type='button'
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10 focus:outline-none focus:ring-2 focus:ring-white'
            aria-label='Next image'
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
          {images.map((_, index) => (
            <button
              key={index}
              type='button'
              onClick={() => goToSlide(index)}
              className={'w-2 h-2 rounded-full transition-all ' + (index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75')}
              aria-label={'Go to slide '}
            />
          ))}
        </div>
      )}
    </div>
  );
}
