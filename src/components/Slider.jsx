"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Slider = () => {
  const sliderRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sliderRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const slides = [
    { id: 1, content: "Slide 1", bg: "bg-red-500" },
    { id: 2, content: "Slide 2", bg: "bg-blue-500" },
    { id: 3, content: "Slide 3", bg: "bg-green-500" },
    { id: 4, content: "Slide 4", bg: "bg-yellow-500" },
    { id: 5, content: "Slide 5", bg: "bg-purple-500" },
  ];

  return (
    <div ref={sliderRef} className="h-[300vh] relative cursor-none"> {/* Disable cursor here */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex absolute h-full w-[300%]"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`${slide.bg} w-screen h-full flex items-center justify-center text-white text-4xl`}
            >
              {slide.content}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
