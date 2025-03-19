"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/images/image1.jpg", link: "/page1" },
  { src: "/images/image2.jpg", link: "/page2" },
  { src: "/images/image3.jpg", link: "/page3" },
  { src: "/images/image4.jpg", link: "/page4" },
  { src: "/images/image5.jpg", link: "/page5" },
];

const ScrollingSlider = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let sliderWidth = sliderRef.current.scrollWidth;
      let viewportWidth = window.innerWidth;
      let totalScroll = sliderWidth - viewportWidth;

      gsap.to(sliderRef.current, {
        x: -totalScroll,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${sliderWidth}`,
          scrub: 1,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      <div ref={sliderRef} className="flex space-x-8 px-10">
        {images.map((img, index) => (
          <motion.a
            key={index}
            href={img.link}
            className="w-[400px] h-[300px] flex-shrink-0 relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-lg font-bold">View More</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ScrollingSlider;
