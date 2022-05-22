export const revealUp = {
  show: {
    y: "0%",
    opacity: 1,
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "50%",
    opacity: 0,
    rotation: 0.02,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

export const revealDown = {
  show: {
    y: "0%",
    rotation: 0.02,
    transition: {
      duration: 0.75,
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

export const revealLeft = {
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
    x: "-100%",
    opacity: 0,
    rotation: 0.02,
    transition: {
      duration: 0.75,

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
      duration: 0.75,
      ease: "easeInOut",
    },
  },
  hidden: {
    x: "100%",
    opacity: 0,
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
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
      // staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};
