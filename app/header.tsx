"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline/next";

export default function Header() {
  const { scrollY } = useScroll();
  const cocoScroll = useTransform(scrollY, [0, 1000], [0, 750]);
  const cocoOpacity = useTransform(scrollY, [500, 1000], [1, 0]);

  return (
    <motion.section
      style={{ translateY: cocoScroll, opacity: cocoOpacity }}
      className="h-[600px] relative z-0"
    >
      <Spline
        scene="https://prod.spline.design/44j7MuFZaFW9zhcB/scene.splinecode"
        className="w-full h-full"
      />
    </motion.section>
  );
}
