"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import FirstSec from "./Firstsec";

const SentenceSlider = () => {
  const sliderRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ["start start", "end start"],
  });

  // Use a fixed speed for the sliding animation
  const fixedSpeedScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  // Transform the scroll progress into a smooth horizontal motion
  const x = useTransform(fixedSpeedScroll, [0, 1], ["103%", "-130%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
    >
      <div ref={sliderRef} className="relative h-[200vh] bg-black -z-50   bottom-40">
        <FirstSec/>
        {/* Sticky container to keep text centered */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden -z-50 ">
          <motion.div
            style={{ x }}
            className="whitespace-nowrap text-black bg-white text-[17vw] font-bold uppercase px-10 bottom-96 -z-50 "
          >
            I love Programming. Website making is my Hobby!
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SentenceSlider;