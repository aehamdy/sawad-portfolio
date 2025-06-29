export const INITIAL_VALUE = "hidden";

export const END_VALUE = "visible";

export const MAIN_VARIANTS = {
  hidden: {
    y: "-7vw",
    opacity: 0,
    zIndex: -1,
  },
  visible: {
    y: 0,
    opacity: 1,
    zIndex: 1,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
