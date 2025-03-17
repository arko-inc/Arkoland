
"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const SentenceSlider = () => {
  const sliderRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ["start start", "end start"],
  });

  // Smoother, more gradual motion
  const slowScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const x = useTransform(slowScroll, [0, 1], ["74%", "-110%"]); // Starts closer to center

  return (
    <div ref={sliderRef} className="relative h-[250vh] bg-black">
      {/* Sticky container to keep text centered */}
      <div className="sticky top-16 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="whitespace-nowrap text-black bg-white text-[15vw] font-bold uppercase px-10"
        >
          I love Programming. Website making is my Hobby!
        </motion.div>
      </div>
    </div>
  );
};

export default SentenceSlider;
