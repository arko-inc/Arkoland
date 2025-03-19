"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { v4 as uuidv4 } from "uuid"; // Unique ID for bubbles

const Loader = ({ isLoading, pageName }) => {
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    if (isLoading) {
      const tl = gsap.timeline();

      // Fade in background
      tl.to(bgRef.current, {
        opacity: 1,
        duration: 0.3,
      });

      // Circle grows from bottom with a bounce effect
      tl.to(circleRef.current, {
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)", // Smooth spring effect
      });

      // Text fades in with a slight scale effect
      tl.to(
        textRef.current,
        {
          opacity: 1,
          scale: 1.1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Circle pulses before disappearing
      tl.to(circleRef.current, {
        scale: 1.05,
        duration: 0.2,
        repeat: 1,
        yoyo: true,
      });

      // Circle shrinks and disappears at the top
      tl.to(circleRef.current, {
        scale: 0,
        y: "-100vh",
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });

      // Fade out background
      tl.to(bgRef.current, {
        opacity: 0,
        duration: 0.3,
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
    }
  }, [isLoading]);

  // Generate 20 random bubbles
  const bubbles = Array.from({ length: 20 }).map(() => ({
    id: uuidv4(),
    size: Math.random() * 40 + 10, // Random size
    left: Math.random() * 100 + "%", // Random horizontal position
  }));

  if (!isLoading) return null;

  return (
    <div ref={bgRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 opacity-0">
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

      {/* Circle and Text */}
      <div
        ref={circleRef}
        className="w-64 h-64 bg-lime-500 rounded-full flex items-center justify-center"
        style={{ scale: 0, y: "100vh" }}
      >
        <span
          ref={textRef}
          className="text-2xl font-bold text-white opacity-0"
        >
          {pageName}
        </span>
      </div>
    </div>
  );
};

export default Loader;