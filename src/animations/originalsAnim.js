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
    x: "100%",
    opacity: 0,
    rotation: 0.02,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
