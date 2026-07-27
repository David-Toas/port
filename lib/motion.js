// Shared motion tokens. Import these instead of inlining durations/easings,
// so timing stays consistent as new sections are added.

export const ease = {
  out: [0.16, 1, 0.3, 1], // entrances — decisive, no float
  inOut: [0.65, 0, 0.35, 1], // transitions between states
};

export const duration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.55,
};

export const stagger = 0.07;

// interaction feel — hover/tap only. Entrances use tween + ease.out.
export const spring = { type: "spring", stiffness: 400, damping: 30 };

// standard viewport config for scroll reveals
export const viewport = { once: true, margin: "-80px" };

// Entrance variants. Call with useReducedMotion() so the motion-sensitive
// path drops the transform and keeps only the fade.
export const fadeUp = (reduce = false) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
});

export const staggerParent = (delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
