"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// Applies exit animation before navigating to a new route when links
// inside the navigation are clicked.
export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLElement | null>(null);

  // On route pathname change, re-apply enter class
  useEffect(() => {
    const el = document.getElementById("page-wrapper");
    if (!el) return;
    containerRef.current = el as HTMLElement;

    // Remove any exit class and force enter animation
    el.classList.remove("page-fade-exit");
    // restart animation
    el.classList.remove("page-fade-enter");
    void el.offsetWidth; // reflow to restart animation
    el.classList.add("page-fade-enter");
  }, [pathname]);

  // Intercept clicks on links inside the Navigation to play exit animation
  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const handleClick = (e: Event) => {
      const mouse = e as MouseEvent;
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Respect modifier or middle clicks
      if (
        mouse.button !== 0 ||
        mouse.metaKey ||
        mouse.ctrlKey ||
        mouse.shiftKey ||
        mouse.altKey
      ) {
        return;
      }

      // Find closest anchor with href
      const linkEl = target.closest("a[href]") as HTMLAnchorElement | null;

      if (!linkEl) return;
      const href = linkEl.getAttribute("href");
      const isExternal =
        linkEl.target === "_blank" || (href && /^(https?:)?\/\//.test(href));
      const isHash = href?.startsWith("#");

      if (!href || isExternal || isHash) return; // ignore external/hash

      // If navigating to the same path (no hash/query change), don't intercept
      try {
        const url = new URL(href, window.location.href);
        const samePath =
          url.pathname === window.location.pathname &&
          url.search === window.location.search &&
          (!url.hash || url.hash === "");
        if (samePath) {
          return; // let default (no-op) behavior occur; don't play exit
        }
      } catch {}

      // Prevent immediate navigation to allow exit animation
      e.preventDefault();
      const el = document.getElementById("page-wrapper");
      if (!el) {
        router.push(href);
        return;
      }

      el.classList.remove("page-fade-enter");
      // restart animation to ensure clean state
      void el.offsetWidth;
      el.classList.add("page-fade-exit");

      // Navigate after exit duration
      const EXIT_MS = 180;
      setTimeout(() => {
        router.push(href);
      }, EXIT_MS);
    };

    nav.addEventListener("click", handleClick);
    return () => nav.removeEventListener("click", handleClick);
  }, [router]);

  return children as React.ReactElement;
}

