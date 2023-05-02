import { HTMLMotionProps } from "framer-motion";

export const fadeIn: HTMLMotionProps<any> = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { delay: 0.3, duration: 0.5 },
}