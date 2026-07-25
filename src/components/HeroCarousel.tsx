import { useState, useEffect, useCallback, useId, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { resolveImage, type ImageAsset } from '../assets/images';

interface HeroCarouselProps {
  images: Array<string | ImageAsset>;
  altText?: string;
  /** Optional per-image alt text (falls back to altText + index) */
  imageAlts?: string[];
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  height?: string;
  /** 0–1 black overlay darkness (higher = better text contrast) */
  overlayOpacity?: number;
  minHeight?: string;
  priority?: boolean;
  width?: number;
  heightAttr?: number;
  ariaLabel?: string;
}

export default function HeroCarousel({
  images,
  altText = 'RJR Safety Nets installation in Bangalore',
  imageAlts,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  height = 'h-full',
  overlayOpacity = 0.55,
  minHeight = 'min-h-[500px] md:min-h-[600px] lg:min-h-[700px]',
  priority = true,
  width: widthProp,
  heightAttr,
  ariaLabel = 'Hero image gallery',
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const regionId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  const resolved = images.map(resolveImage);
  const first = resolved[0];
  const imgWidth = widthProp ?? first?.width ?? 1920;
  const imgHeight = heightAttr ?? first?.height ?? 1080;
  const dim = Math.min(0.75, Math.max(0.45, overlayOpacity));

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resolved.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [resolved.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + resolved.length) % resolved.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [resolved.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (resolved.length <= 1 || isPaused) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [resolved.length, autoPlayInterval, nextSlide, isPaused]);

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

  const slideAlt = (index: number) =>
    imageAlts?.[index] ||
    (resolved.length > 1 ? `${altText} — photo ${index + 1}` : altText);

  const renderPicture = (asset: ImageAsset, index: number, eager: boolean) => (
    <>
      <picture>
        {asset.webp ? <source srcSet={asset.webp} type="image/webp" sizes="100vw" /> : null}
        <img
          src={asset.src}
          alt={slideAlt(index)}
          width={asset.width || imgWidth}
          height={asset.height || imgHeight}
          className={'w-full ' + height + ' object-cover object-center'}
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
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: dim }}
        aria-hidden="true"
      />
    </>
  );

  if (resolved.length === 1) {
    return (
      <div className={'absolute inset-0 ' + minHeight} aria-hidden="true">
        {renderPicture(resolved[0], 0, priority)}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      id={regionId}
      className={'absolute inset-0 overflow-hidden ' + minHeight}
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
      <div className="relative w-full h-full">
        {resolved.map((asset, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
            aria-hidden={index !== currentIndex}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${resolved.length}`}
          >
            {renderPicture(asset, index, index === 0 && priority)}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Next image"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            aria-pressed={isPaused}
          >
            {isPaused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1" role="tablist" aria-label="Slide indicators">
          {resolved.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              onClick={() => goToSlide(index)}
              className={
                'flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              }
              aria-label={`Go to slide ${index + 1} of ${resolved.length}`}
            >
              <span
                className={
                  'block h-2.5 rounded-full transition-all ' +
                  (index === currentIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/60')
                }
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
