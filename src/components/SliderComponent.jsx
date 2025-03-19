"use client"
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const SliderComponent = () => {
  useEffect(() => {
    // GSAP scroll animation for top slider
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.slider-wrapper',
        start: 'top top',
        end: 'bottom+=1000 top',
        scrub: true,
        pin: true,
      },
    });

    tl.to('.slider-top', {
      xPercent: -100 * (5 - 1),
      ease: 'none',
    });

    // GSAP scroll animation for bottom slider (reverse direction)
    gsap.to('.slider-bottom', {
      xPercent: 100 * (5 - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.slider-wrapper',
        start: 'top top',
        end: 'bottom+=1000 top',
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-container bg-zinc-800 p-8">
        {/* Top Slider */}
        <motion.div
          className="slider-top flex space-x-4 overflow-x-hidden"
        >
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page1" className="block h-full w-full">Image 1</a>
          </div>
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page2" className="block h-full w-full">Image 2</a>
          </div>
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page3" className="block h-full w-full">Image 3</a>
          </div>
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page4" className="block h-full w-full">Image 4</a>
          </div>
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page5" className="block h-full w-full">Image 5</a>
          </div>
        </motion.div>

        {/* Bottom Slider (opposite direction) */}
        <motion.div
          className="slider-bottom flex space-x-4 overflow-x-hidden mt-12"
        >
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page1" className="block h-full w-full">Image 1</a>
          </div>
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page2" className="block h-full w-full">Image 2</a>
          </div>
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page3" className="block h-full w-full">Image 3</a>
          </div>
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page4" className="block h-full w-full">Image 4</a>
          </div>
          <div className="slider-item w-64 h-64 bg-gray-700 rounded-lg">
            <a href="/page5" className="block h-full w-full">Image 5</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SliderComponent;
