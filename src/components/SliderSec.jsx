"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const SliderSec = () => {
  const sliderRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sliderRef });

  // Transformations for the first row (slides to the left)
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "-63%"]);
  // Transformations for the second row (slides to the right)
  const xRight = useTransform(scrollYProgress, [1, 0.5, 0], ["10%", "0%", "-60%"]);
  // Zoom effect for slides
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Slide data with image sources and links
  const slidesLeft = [
    {
      id: 1,
      image: "/images/mars.jpg", // Image for left slide 1
      link: "/project1",
    },
    {
      id: 2,
      image: "/images/mars.jpg", // Image for left slide 2
      link: "/project2",
    },
    {
      id: 3,
      image: "/images/mars.jpg", // Image for left slide 3
      link: "/project3",
    },
    {
      id: 4,
      image: "/images/mars.jpg", // Image for left slide 4
      link: "/project4",
    },
    {
        id: 5,
        image: "/images/mars.jpg", // Image for left slide 4
        link: "/project4",
      },
      {
        id: 6,
        image: "/images/mars.jpg", // Image for left slide 4
        link: "/project4",
      },

  ];

  const slidesRight = [
    {
      id: 1,
      image: "/images/mars.jpg", // Image for right slide 1
      link: "/project5",
    },
    {
      id: 2,
      image: "/images/mars.jpg", // Image for right slide 2
      link: "/project6",
    },
    {
      id: 3,
      image: "/images/mars.jpg", // Image for right slide 3
      link: "/project7",
    },
    {
      id: 4,
      image: "/images/mars.jpg", // Image for right slide 4
      link: "/project8",
    },
    {
        id: 5,
        image: "/images/mars.jpg", // Image for right slide 4
        link: "/project8",
      },
    {
        id: 6,
        image: "/images/mars.jpg", // Image for left slide 4
        link: "/project4",
      },
      {
        id: 7,
        image: "/images/mars.jpg", // Image for left slide 4
        link: "/project4",
      },
    
  ];

  return (
    <div ref={sliderRef} className="relative h-[300vh] -z-50 ">
  <div className="sticky -top-72 mix-blend-difference h-screen flex items-center justify-center text-white text-[6vw] font-bold uppercase z-10">
        My works
      </div>
      {/* First Row (Slides to the Left) */}
      <div className="sticky top-44 mt-20 h-[33.33vh] overflow-hidden cursor">
        <motion.div
          style={{ x: xLeft }}
          className="flex h-full w-[200%]"
        >
          {slidesLeft.map((slide) => (
            <Link key={slide.id} href={slide.link}>
              <motion.div
                className="w-[25vw] h-full flex items-center justify-center relative space-x-6 gap-3"
                style={{ scale }}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-contain" // Use object-contain to show full image
                />
                <div className="absolute i bg-opacity-30 hover:bg-opacity-10 transition-all duration-300 z-0" />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Second Row (Slides to the Right) */}
      <div className="sticky top-[55vh] h-[33.33vh] overflow-hidden">
        <motion.div
          style={{ x: xRight }}
          className="flex h-full w-[200%]"
        >
          {slidesRight.map((slide) => (
            <Link key={slide.id} href={slide.link}>
              <motion.div
                className="w-[25vw] h-full flex items-center justify-center relative"
                style={{ scale }}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-contain" // Use object-contain to show full image
                />
                <div className="absolute i bg-opacity-30 hover:bg-opacity-10 transition-all duration-300 z-0" />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* "See My More Works" Button */}
 
    </div>
  );
};

export default SliderSec;