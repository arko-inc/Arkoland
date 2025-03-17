"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Arko", "a web develper", "a student", "an explorer", "a creator"];

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
    <section
      className="relative z-50 flex items-center justify-center h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/mars.jpg')" }} // Set your image here
    >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0"></div>

      {/* Typing Animation */}
      <div className="absolute left-[37rem] text-left">
        <h1 className="text-9xl md:text-9xl font-bold">
          I am <br /><span className="text-white">{text}</span>
          <span className="blinking-cursor text-lime-500">|</span>
        </h1>
      </div>

      {/* Cursor Animation */}
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
  );
}