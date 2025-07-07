/**
 * Performance optimization utilities for government networks
 */

/**
 * Lazy load images with intersection observer
 */
export const lazyLoadImage = (img: HTMLImageElement, src: string): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100', 'transition-opacity', 'duration-300');
        observer.unobserve(img);
      }
    });
  });
  observer.observe(img);
};

/**
 * Debounce function for search and input optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll and resize events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Preload critical resources
 */
export const preloadResource = (href: string, as: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

/**
 * Check network connection quality
 */
export const getNetworkQuality = (): 'slow' | 'fast' | 'unknown' => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
      return 'slow';
    }
    return 'fast';
  }
  return 'unknown';
};

/**
 * Optimize for government networks
 */
export const optimizeForGovernmentNetwork = (): void => {
  const quality = getNetworkQuality();
  
  if (quality === 'slow') {
    // Reduce animation duration
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
    
    // Disable non-critical animations
    const style = document.createElement('style');
    style.textContent = `
      .animate-pulse,
      .animate-bounce,
      .animate-float {
        animation: none !important;
      }
    `;
    document.head.appendChild(style);
  }
};