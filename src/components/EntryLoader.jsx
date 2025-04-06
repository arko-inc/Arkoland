"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { v4 as uuidv4 } from "uuid"; // Unique ID for bubbles

const EntryLoader = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in container
    tl.to(containerRef.current, {
      opacity: 1,
      duration: 0.5,
    });

    // Animate text
    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    // Bubble animation
    bubblesRef.current.forEach((bubble) => {
      gsap.to(bubble, {
        y: "-100vh",
        opacity: 0,
        duration: Math.random() * 3 + 2, // Random speed
        delay: Math.random() * 1.5, // Random delay
        repeat: -1, // Infinite loop
        ease: "power2.out",
      });
    });

    // Fade out container
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  }, []);

  // Generate 10 random bubbles
  const bubbles = Array.from({ length: 60 }).map(() => ({
    id: uuidv4(),
    size: Math.random() * 40 + 10, // Random size
    left: Math.random() * 100 + "%", // Random horizontal position
  }));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-0"
    >
      {/* Floating Bubbles */}
      {bubbles.map((bubble, index) => (
        <div
          key={bubble.id}
          ref={(el) => (bubblesRef.current[index] = el)}
          className="absolute bg-lime-400 rounded-full opacity-50"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            bottom: "-50px", // Start off-screen
          }}
        />
      ))}

      {/* Text */}
      <h1
        ref={textRef}
        className="text-4xl font-bold text-white opacity-0 transform translate-y-10"
      >
        Hi, I am Arko!
      </h1>
    </div>
  );
};

export default EntryLoader;
