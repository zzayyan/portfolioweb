"use client";

import { useEffect, useRef, useState } from "react";

// Hook for intersection observer
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return [ref, isInView] as const;
}

// Component for fade-in animation
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const [ref, isInView] = useInView(0.1);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(50px)";
      case "down":
        return "translateY(-50px)";
      case "left":
        return "translateX(50px)";
      case "right":
        return "translateX(-50px)";
      default:
        return "translateY(50px)";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0)" : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Component for staggered animation
interface StaggeredFadeInProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function StaggeredFadeIn({
  children,
  staggerDelay = 100,
  direction = "up",
  className = "",
}: StaggeredFadeInProps) {
  return (
    <>
      {children.map((child, index) => (
        <FadeIn
          key={index}
          delay={index * staggerDelay}
          direction={direction}
          className={className}
        >
          {child}
        </FadeIn>
      ))}
    </>
  );
}

// Component for scale animation
interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, className = "" }: ScaleInProps) {
  const [ref, isInView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0.9)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Component for slide animation
interface SlideInProps {
  children: React.ReactNode;
  direction: "left" | "right";
  delay?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction,
  delay = 0,
  className = "",
}: SlideInProps) {
  const [ref, isInView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? "translateX(0)"
          : direction === "left"
          ? "translateX(-100px)"
          : "translateX(100px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Component for parallax effect
interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({
  children,
  offset = 50,
  className = "",
}: ParallaxProps) {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${scrollY * offset * 0.001}px)`,
      }}
    >
      {children}
    </div>
  );
}

// Component for typing animation
interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function Typewriter({
  text,
  delay = 0,
  speed = 50,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [ref, isInView] = useInView(0.1);

  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true);
      let typingInterval: ReturnType<typeof setInterval>;
      const timer = setTimeout(() => {
        let i = 0;
        typingInterval = setInterval(() => {
          if (i < text.length) {
            setDisplayText(text.slice(0, i + 1));
            i++;
          } else {
            clearInterval(typingInterval);
          }
        }, speed);
      }, delay);

      return () => {
        clearTimeout(timer);
        if (typingInterval) {
          clearInterval(typingInterval);
        }
      };
    }
  }, [isInView, text, delay, speed, isTyping]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Component for gradient text animation
interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className = "",
}: AnimatedGradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x ${className}`}
      style={{
        backgroundSize: "200% 200%",
        animation: "gradient-x 3s ease infinite",
      }}
    >
      {children}
    </span>
  );
}

