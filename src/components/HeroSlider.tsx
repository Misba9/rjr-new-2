import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { resolveImage, type ImageAsset } from '../assets/images';

export interface HeroSlide {
  image: string | ImageAsset;
  title: string;
  subtitle: string;
  description: string;
  alt?: string;
  /** Optional responsive sources for high‑resolution images */
  sources?: Array<{ src: string; width: number }>;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  /** 0–1 black overlay darkness (higher = better text contrast) */
  overlayOpacity?: number;
  children?: (currentSlide: HeroSlide, currentIndex: number) => React.ReactNode;
  fullHeight?: boolean;
  ariaLabel?: string;
}

export default function HeroSlider({
  slides,
  autoPlayInterval = 5000,
  overlayOpacity = 0.55,
  children,
  fullHeight = true,
  ariaLabel = 'Featured services slideshow',
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const rootRef = useRef<HTMLElement>(null);

  const dim = Math.min(0.75, Math.max(0.45, overlayOpacity));

  const nextSlide = useCallback(() => {
    if (isTransitioning || slides.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || slides.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval, nextSlide, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      ref={rootRef}
      className={
        `relative overflow-hidden bg-gray-900 text-white ${
          fullHeight
            ? 'min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh]'
            : 'min-h-[500px] md:min-h-[600px] lg:min-h-[700px]'
        }`
      }
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const asset = resolveImage(slide.image);
          const eager = index === 0;
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: isActive ? 1 : 0 }}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slide.title} — slide ${index + 1} of ${slides.length}`}
            >
              <picture>
                {asset.webp ? (
                  <source
                    type="image/webp"
                    srcSet={
                      slide.sources?.length
                        ? slide.sources.map((s) => `${s.src} ${s.width}w`).join(', ')
                        : `${asset.webp} ${asset.width}w`
                    }
                    sizes="100vw"
                  />
                ) : null}
                <img
                  src={asset.src}
                  alt={slide.alt || slide.title}
                  width={asset.width}
                  height={asset.height}
                  className="h-full w-full object-cover object-center"
                  style={
                    {
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                    } as React.CSSProperties
                  }
                  loading={eager ? 'eager' : 'lazy'}
                  fetchPriority={eager ? 'high' : 'low'}
                  decoding="async"
                  sizes="100vw"
                />
              </picture>
              <div
                className="pointer-events-none absolute inset-0 bg-black"
                style={{ opacity: dim }}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        {children ? (
          children(currentSlide, currentIndex)
        ) : (
          <div className="max-w-3xl">
            <div key={currentIndex} className="animate-fadeIn">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {currentSlide.title}
              </h1>
              <p className="mb-8 text-xl font-medium text-white md:text-2xl">{currentSlide.subtitle}</p>
              <p className="mb-8 text-lg leading-relaxed text-white/95">{currentSlide.description}</p>
            </div>
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 md:p-3"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 md:p-3"
            aria-label="Next slide"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            aria-pressed={isPaused}
          >
            {isPaused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
          </button>
        </>
      )}

      {slides.length > 1 && (
        <div
          className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-1"
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-current={index === currentIndex ? 'true' : undefined}
              onClick={() => goToSlide(index)}
              className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
            >
              <span
                className={`block h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/60'
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
