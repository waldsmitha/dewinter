//Nav
export const revealNavMobile = {
  show: {
    x: 0,
    rotation: 0.02,
    zIndex: 10,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hidden: {
    x: "100%",
    zIndex: 10,
    rotation: 0.02,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
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
    zIndex: 10,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    rotation: 0.02,
    zIndex: -1,
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
export const ScaleUp = {
  show: {
    scale: [0.8, 1],
    opacity: 1,
    rotation: 0.02,
    rotateY: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  hidden: {
    scale: 0.8,
    opacity: 0,
    rotateY: 50,
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
export const revealUp2 = {
  show: {
    y: "100%",
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "0%",
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export const revealUp3 = {
  show: {
    y: "0%",
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "80%",
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const revealRight = {
  show: {
    x: "0%",
    opacity: 1,
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    x: "50%",
    opacity: 0,
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export const revealRight2 = {
  show: {
    x: "100%",
    // opacity: 0,
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    x: "0%",
    // opacity: 1,
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const stagger = {
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.25, staggerDirection: -1 },
  },
};

export const navStagger = {
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};
export const navRevealUp = {
  show: {
    y: "0%",
    rotation: 0.02,
    zIndex: 10,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "100%",
    rotation: 0.02,
    zIndex: -1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export const widthZeroToFull = {
  show: {
    rotation: 0.02,
    y: "0%",
    transition: {
      duration: 1,
      delay: 0.25,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "75%",
    rotation: 0.02,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export const popIn = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.75 },
  },
};
