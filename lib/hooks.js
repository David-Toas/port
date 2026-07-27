"use client";

import { useEffect, useRef, useState } from "react";

/*
  Framer Motion has equivalents of both hooks below, but importing them pulled
  the whole framer-motion bundle (~38 kB) into the home page for one scroll
  trigger. Use these for plain state checks; reach for framer-motion only when
  it needs to animate something (layoutId, springs).
*/

// One-shot IntersectionObserver. Returns [ref, hasBeenSeen].
export const useInView = ({ margin = "-80px" } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // no IntersectionObserver (old browser, some test envs) — just show it
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return [ref, inView];
};

// Starts false so server and first client render agree, then corrects.
export const usePrefersReducedMotion = () => {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(query.matches);

    const onChange = (event) => setReduce(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduce;
};
