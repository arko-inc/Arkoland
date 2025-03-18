"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = [
  "Arko",
  "a web developer",
  "a student",
  "an explorer",
  "a creator",
];

export default function FirstSec() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);

      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [charIndex, isDeleting, wordIndex]);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/someone.jpeg')" }}
      >
        {/* Custom Cursor */}
        <motion.div
          className="fixed w-24 h-24 bg-white rounded-full pointer-events-none "
          style={{
            left: cursorPosition.x - 48,
            top: cursorPosition.y - 48,
          }}
        />

        {/* Text with the blend mode applied ONLY to text */}
        <div className="absolute right-[1rem] rotate-90 top-72 text-left mix-blend-difference">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.8, ease: "easeOut" }}
  >
    <motion.h1
      className="text-9xl md:text-[35vh] font-bold relative text-white"
      animate={{ y: ["0%", "10%", "0%"] }} // Moves up and down
      transition={{
        duration: 3, // Duration of one cycle
        repeat: Infinity, // Infinite loop
        repeatType: "loop", // Loop the animation
        ease: "easeInOut", // Smooth easing
      }}
    >
      Arko
    </motion.h1>
  </motion.div>
</div>


        {/* Typing Animation */}
        <div className="absolute left-[10rem] top-16 text-left">
          <h1 className="text-9xl md:text-6xl font-bold relative mix-blend-difference text-white">
            I am <br />
            <span>{text}</span>
            <span className="blinking-cursor text-lime-500">|</span>
          </h1>
        </div>

        <style jsx>{`
          .blinking-cursor {
            display: inline-block;
            width: 8px;
            height: 30px;
            background-color: Transparent;
            margin-left: 5px;
            animation: blink 0.8s infinite;
          }

          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}</style>
      </section>
    </motion.div>
  );
}
