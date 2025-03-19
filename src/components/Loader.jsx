"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ isLoading, pageName }) => {
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      const tl = gsap.timeline();

      // Circle grows from the bottom
      tl.to(circleRef.current, {
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });

      // Display the page name
      tl.to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=0.5"
      );

      // Circle shrinks and disappears at the top
      tl.to(circleRef.current, {
        scale: 0,
        y: "-100vh",
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
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