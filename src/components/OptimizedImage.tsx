import { useState, useEffect, useRef } from 'react';
import { resolveImage, type ImageAsset } from '../assets/images';

interface OptimizedImageProps {
  src: string | ImageAsset;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  /** Hint for responsive decode (helps the browser pick an appropriate representation) */
  sizes?: string;
  /** Overrides default `high` when `priority` is true */
  fetchPriority?: 'high' | 'low' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized image: WebP via <picture>, lazy loading, width/height for CLS prevention.
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fetchPriority,
  objectFit = 'cover',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const asset = resolveImage(src);
  const imgWidth = width ?? asset.width;
  const imgHeight = height ?? asset.height;

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority || loading === 'eager');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '120px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const aspectRatio = imgWidth && imgHeight ? `${imgWidth} / ${imgHeight}` : undefined;
  const resolvedFetchPriority = priority ? fetchPriority ?? 'high' : fetchPriority ?? 'auto';
  const resolvedLoading = priority ? 'eager' : loading;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />
      )}

      {isInView && !hasError && (
        <picture>
          {asset.webp ? <source srcSet={asset.webp} type="image/webp" sizes={sizes} /> : null}
          <img
            src={asset.src}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            loading={resolvedLoading}
            decoding="async"
            fetchPriority={resolvedFetchPriority}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectFit }}
          />
        </picture>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-sm text-gray-400">Image not available</p>
        </div>
      )}
    </div>
  );
}
