import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// images
import mobileBanner from "@/assets/mobile-banner.png";
import desktopBanner from "@/assets/desktop-banner.png";

export default function Hero() {
  return (
    <section className="hero">
      <Image className="hero__bg-mobile" objectFit="cover" layout="fill" src={mobileBanner} alt="Mobile banner background" />
      <Image className="hero__bg-desktop" objectFit="cover" layout="fill" src={desktopBanner} alt="Desktop banner background" />
      <div className="hero__copy">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1.5 }}>
          Hello Developer!
        </motion.h1>
        <motion.h2 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, ease: "easeOut", duration: 1.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </motion.h2>
      </div>
    </section>
  );
}
