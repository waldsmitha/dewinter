import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ triggerOnce: true, threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

//Use Example

// const [element, controls] = useScroll();

// <motion.div
//     ref={element}
//     initial="hidden"
//     animate={controls}
//     variants={revealUp}>
// </motion.div>
