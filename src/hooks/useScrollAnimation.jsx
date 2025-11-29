import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (animation plays once)
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}

// Animation wrapper component for easier use
export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  ...props
}) {
  const { ref, isVisible } = useScrollAnimation();

  const animations = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    "fade-down": {
      initial: "opacity-0 -translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    "fade-left": {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "zoom-in": {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
    "zoom-out": {
      initial: "opacity-0 scale-105",
      animate: "opacity-100 scale-100",
    },
    fade: {
      initial: "opacity-0",
      animate: "opacity-100",
    },
  };

  const anim = animations[animation] || animations["fade-up"];

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${isVisible ? anim.animate : anim.initial}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

