import React, { useState, useCallback, useEffect, useRef } from 'react';

/**
 * RobustImage - An image component that retries loading on failure
 * and always displays either the image or a descriptive placeholder.
 */
export function RobustImage(props: React.ImgHTMLAttributes<HTMLImageElement> & { retries?: number }) {
  const { src, alt, retries = 3, className, style, ...rest } = props;
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset state when src changes
  useEffect(() => {
    setStatus('loading');
    setAttempt(0);
  }, [src]);

  // Retry logic: after a delay, bump the attempt counter to force re-render
  useEffect(() => {
    if (status === 'error' && attempt < retries) {
      const timer = setTimeout(() => {
        setStatus('loading');
        setAttempt((a) => a + 1);
      }, 1000 * (attempt + 1)); // progressive backoff
      return () => clearTimeout(timer);
    }
  }, [status, attempt, retries]);

  const handleLoad = useCallback(() => {
    setStatus('loaded');
  }, []);

  const handleError = useCallback(() => {
    setStatus('error');
  }, []);

  // Build the src with a cache-bust param on retries
  const resolvedSrc = src ? (attempt > 0 ? `${src}${src.includes('?') ? '&' : '?'}retry=${attempt}` : src) : undefined;

  if (status === 'error' && attempt >= retries) {
    // Final fallback: a styled placeholder with the alt text
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className ?? ''}`}
        style={{ minHeight: 120, ...style }}
      >
        <div className="text-center p-4">
          <svg className="mx-auto mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span className="text-xs">{alt || 'Image'}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={resolvedSrc}
      alt={alt}
      className={className}
      style={style}
      loading="eager"
      onLoad={handleLoad}
      onError={handleError}
      {...rest}
    />
  );
}
