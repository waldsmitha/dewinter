export const opacity = {
  show: {
    opacity: 1,
    rotation: 0.02,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const revealUp = {
  show: {
    y: "0%",
    rotation: 0.02,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "100%",
    rotation: 0.02,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

export const stagger = {
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
  hidden: {
    transition: { staggerChildren: 0.25, staggerDirection: -1 },
  },
};
