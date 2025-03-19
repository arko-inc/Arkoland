"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ isLoading, pageName, onComplete }) {
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // Trigger lightning effect after the circle fills the screen
      const timer = setTimeout(() => {
        setShowLightning(true);
      }, 1000); // Adjust timing as needed
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ clipPath: "circle(0% at 50% 100%)" }}
          animate={{ clipPath: "circle(150% at 50% 100%)" }}
          exit={{ clipPath: "circle(0% at 50% 100%)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={onComplete} // Call onComplete when animation finishes
        >
          <motion.div
            className="text-white text-6xl font-bold relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {pageName} 
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}