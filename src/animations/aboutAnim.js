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

export const scaleDown = {
  hidden: {
    scale: 1.2,
  },
  show: {
    scale: 1,

    transition: {
      duration: 1,
    },
  },
};
