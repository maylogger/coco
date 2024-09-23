"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Smile, Eye, Hourglass } from "lucide-react";

const featureItems = [
  {
    icon: <Smile size={48} strokeWidth={1.25} />,
    text: "面對面解說詳細、過程透明",
  },
  {
    icon: <Eye size={48} strokeWidth={1.25} />,
    text: "更換料件、客戶可全程觀看過程",
  },
  {
    icon: <Hourglass size={48} strokeWidth={1.25} />,
    text: "當面30分鐘內維修完成",
  },
];

const GroupVariants = {
  visible: {
    transition: {
      staggerChildren: 0.125,
    },
  },
};

const ItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Feature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <section className="container mx-auto p-5">
      <h2 className="text-center text-balance text-2xl font-semibold [&>span]:inline-block">
        查理維修提供 iPhone 當面維修服務，<span>包括螢幕維修、</span>
        <span>電池更換、</span>
        <span>相機維修等</span>
      </h2>
      <motion.ul
        ref={ref}
        variants={GroupVariants}
        animate={isInView ? "visible" : "hidden"}
        initial="hidden"
        className="flex flex-col sm:flex-row items-stretch justify-center gap-5 mt-10"
      >
        {featureItems.map((item, index) => (
          <motion.li
            variants={ItemVariants}
            className="flex bg-slate-300/10 p-5 py-10 rounded-2xl flex-col flex-1 items-center justify-center gap-3"
            key={index}
          >
            {item.icon}
            <span className="text-balance text-lg text-center">
              {item.text}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
export default Feature;
