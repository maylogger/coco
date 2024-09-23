"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  Asterisk,
  BatteryCharging,
  Droplets,
  PowerOff,
  BatteryWarning,
  Drill,
} from "lucide-react";

const serviceList = [
  {
    icon: <Asterisk size={32} strokeWidth={1.25} />,
    text: "螢幕破裂",
  },
  {
    icon: <BatteryCharging size={32} strokeWidth={1.25} />,
    text: "電池耗電",
  },
  {
    icon: <Droplets size={32} strokeWidth={1.25} />,
    text: "泡水受潮",
  },
  {
    icon: <PowerOff size={32} strokeWidth={1.25} />,
    text: "無法開機",
  },
  {
    icon: <BatteryWarning size={32} strokeWidth={1.25} />,
    text: "無法充電",
  },
  {
    icon: <Drill size={32} strokeWidth={1.25} />,
    text: "各式損壞",
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

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold text-center">查理維修服務項目</h2>
      <motion.ul
        ref={ref}
        variants={GroupVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10"
      >
        {serviceList.map((item, index) => (
          <motion.li
            variants={ItemVariants}
            className="flex bg-slate-300/10 p-5 py-10 pb-9 rounded-2xl flex-col flex-1 items-center justify-center gap-2"
            key={index}
          >
            {item.icon}
            <span className="text-balance text-center">{item.text}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
export default Service;
