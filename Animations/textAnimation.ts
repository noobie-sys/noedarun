export const textAnimation = {
  initial: {
    opacity: 0,
    translateY: "100%",
  },
  animate: (num: number) => ({
    opacity: 1,
    translateY: "0",
    transition: {
      duration: 1,
      delay: 0.25 * num,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

export const textAnimationLoop = {
  initial: {
    opacity: 0,
    translateY: "100%",
  },
  animate: (num: number) => ({
    opacity: 1,
    translateY: "0",
    transition: {
      duration: 1,
      delay: 0.02 * num,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

export const navBarTextAnimation = {
  initial: {
    opacity: 0,
    translateY: -52,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
