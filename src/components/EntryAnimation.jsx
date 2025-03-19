"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
  "Hello", // English (should always appear first)
  "Bonjour", // French
  "Holá", // Spanish
  "স্বাগতম", // Bengali
  "Ciao", // Italian
  "Hallo", // German
  "こんにちは", // Japanese (Konnichiwa)
  "नमस्ते", // Hindi (Namaste)
];

export default function EntryAnimation({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showGreetings, setShowGreetings] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setIsVisible(false);
      setShowGreetings(true);
    }, 1000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    if (!showGreetings) return;

    const greetingTimer = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 400);

    const endTimer = setTimeout(() => {
      clearInterval(greetingTimer);
      onComplete(); // Notify parent component that animation is complete
    }, 3000);

    return () => {
      clearInterval(greetingTimer);
      clearTimeout(endTimer);
    };
  }, [showGreetings, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-white text-6xl font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Welcome <br />to <br /> Arkoland
          </motion.div>
        </motion.div>
      )}

      {showGreetings && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 7 }}
        >
          <motion.div
            className="text-white text-6xl font-bold"
            key={currentGreeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {greetings[currentGreeting]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}