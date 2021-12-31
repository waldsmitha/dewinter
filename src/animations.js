//Nav
export const revealNavMobile = {
  show: {
    x: 0,
    rotation: 0.02,
    zIndex: 10,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
  hidden: {
    x: "100%",
    zIndex: 10,
    rotation: 0.02,
    transition: {
      duration: 0.25,
      ease: "linear",
    },
  },
};
export const revealNavBar = {
  show: {
    y: "10px",
    opacity: 1,
    rotation: 0.02,
    zIndex: 10,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "0",
    opacity: 0,
    rotation: 0.02,
    zIndex: -1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

//General

export const opacity = {
  show: {
    opacity: 1,
    rotation: 0.02,
    transition: {
      duration: 1,
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

export const pulse = {
  show: {
    scale: [1, 1.1, 1],
    rotation: 0.02,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  hidden: {
    scale: [1, 0.9, 1],
    rotation: 0.02,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export const revealUp = {
  show: {
    y: "0%",
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "100%",
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const revealDown = {
  show: {
    y: "0%",
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "-100%",
    rotation: 0.02,
    transition: {
      duration: 1,
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

export const navStagger = {
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  hidden: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    // y: 300,
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

// export const slider = {
//   hidden: { x: "-130%", skew: "45deg" },
//   show: {
//     x: "100%",
//     skew: "0deg",
//     transition: { ease: "easeOut", duration: 1 },
//   },
// };

export const slider = {
  hidden: { x: "-100vw" },
  show: {
    x: "100vw",
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};
