"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-4 h-4 bg-lime-500 rounded-full pointer-events-none z-50"
      style={{
        left: cursorPosition.x - 10,
        top: cursorPosition.y - 10,
      }}
    />
  );
};

export default CustomCursor;