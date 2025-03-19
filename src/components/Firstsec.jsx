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

const TrailText = () => {
  const text = "Arko";
  const trailCount = 5; // Number of trailing copies
  const trailDelay = 0.5; // Delay between each trailing copy

  return (
    <div className="absolute right-[1rem] rotate-0 -top-60 text-left">
      {Array.from({ length: trailCount }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut", delay: index * trailDelay }}
        >
          <motion.h1
            className="text-9xl md:text-[33vh] font-bold relative text-white"
            animate={{ y: ["0%", "10%", "0%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * trailDelay,
            }}
            style={{
              opacity: 1 - (index / trailCount), // Fade out the trailing copies
            }}
          >
            {text}
          </motion.h1>
        </motion.div>
      ))}
    </div>
  );
};

export default function FirstSec() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center top-[10.5rem]"
        style={{ backgroundImage: "url('/images/someone.jpeg')" }}
      >
        {/* Replace the existing motion.h1 with TrailText */}
        <TrailText />

        {/* Typing Animation */}
        <div className="absolute left-[10rem] top-16 text-left">
          <h1 className="text-9xl md:text-7xl font-bold relative  text-white">
            I am <br />
            <span className="text">{text}</span>
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