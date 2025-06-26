import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for lazy loading elements when they enter the viewport
 *
 * @param options - IntersectionObserver options
 * @returns Object containing ref to attach to element and boolean indicating if element is in view
 */
export function useLazyLoad(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { ref: elementRef, isInView };
}

/**
 * Custom hook for lazy loading images
 *
 * @param src - Image source URL
 * @param options - IntersectionObserver options
 * @returns Object containing ref to attach to element, loaded image source, and loading state
 */
export function useLazyImage(src: string, options = {}) {
  // Use refs instead of state to prevent re-renders
  const imageRef = useRef<HTMLImageElement | null>(null);
  const isLoadedRef = useRef(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Skip if no src or already loaded
    if (!src || isLoadedRef.current) return;

    let observer: IntersectionObserver | null = null;
    let didCancel = false;

    // Only set up observer if we have an element to observe
    if (imageRef.current) {
      // Check if IntersectionObserver is available
      if (typeof IntersectionObserver !== "undefined") {
        observer = new IntersectionObserver(
          (entries) => {
            // Only process if not canceled
            if (didCancel) return;

            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Set the image source when in view
                setImageSrc(src);

                // Clean up observer
                if (observer && imageRef.current) {
                  observer.unobserve(imageRef.current);
                  observer.disconnect();
                }
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
            ...options,
          }
        );

        observer.observe(imageRef.current);
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer && imageRef.current) {
        observer.unobserve(imageRef.current);
        observer.disconnect();
      }
    };
  }, [src, options]); // Remove imageRef from dependencies

  const handleRef = useCallback((node: HTMLImageElement) => {
    if (node !== null) {
      imageRef.current = node;
    }
  }, []);

  const handleLoad = useCallback(() => {
    isLoadedRef.current = true;
    setIsLoaded(true);
  }, []);

  return {
    ref: handleRef,
    src: imageSrc || "", // Provide a default to prevent undefined
    isLoaded,
    onLoad: handleLoad,
  };
}
