import React from "react";
import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function CardsBlock() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  return (
    <motion.section className="cards" variants={container} initial="hidden" animate="show">
      <motion.div variants={item}>
        <Card />
      </motion.div>
      <motion.div variants={item}>
        <Card />
      </motion.div>
      <motion.div variants={item}>
        <Card />
      </motion.div>
    </motion.section>
  );
}
