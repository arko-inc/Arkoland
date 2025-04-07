"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Skill = ({ name, proficiency, icon, delay, startAnimation }) => {
  const skillRef = useRef(null);
  const progressBarRef = useRef(null);
  const percentageRef = useRef(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!startAnimation) return;

    const progressBar = progressBarRef.current;
    const percentage = percentageRef.current;

    // Reset state for repeated animations
    setAnimatedProgress(0);
    gsap.set([progressBar, percentage], { y: 20, opacity: 0 });

    // Show elements first
    gsap.to([progressBar, percentage], {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
      delay: delay,
      onComplete: () => {
        // Animate progress linearly
        const duration = 1.5; // seconds
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const animate = () => {
          const now = Date.now();
          if (now >= endTime) {
            setAnimatedProgress(proficiency);
            return;
          }

          const progress = (now - startTime) / (duration * 1000);
          const currentValue = Math.round(progress * proficiency);
          setAnimatedProgress(currentValue);
          requestAnimationFrame(animate);
        };

        animate();
      }
    });
  }, [startAnimation, delay, proficiency]);

  return (
    <motion.div
      ref={skillRef}
      className={`relative bg-black border border-gray-900 rounded-xl p-5 flex flex-col items-center justify-between h-56 w-56 max-w-xs group overflow-hidden shadow-lg transition-all duration-400 ${
        isHovered ? 'scale-110 z-50' : 'scale-100 z-0'
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🔆 Top Glow Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* 🛸 Skill Icon */}
      <div className="relative">
        <img src={`/icons/${icon}`} alt={name} className="w-14 h-14 mb-3" />
        <div className="absolute inset-0 w-14 h-14 mx-auto bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* 🚀 Skill Name */}
      <h3 className="text-lg font-semibold text-white tracking-wide">{name}</h3>

      {/* 🌈 Animated Glowing Progress Bar */}
      <div ref={progressBarRef} className="w-full flex flex-col items-center mt-2">
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-lime-400 shadow-[0_0_20px_5px_rgba(163,230,53,0.9)] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${animatedProgress}%` }}
          />
        </div>
        <p ref={percentageRef} className="text-sm text-lime-300 mt-2 font-mono">
          {animatedProgress}%
        </p>
      </div>

      {/* 🌌 Bottom Glow Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* 💫 Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 border-2 border-white/10 rounded-xl group-hover:border-white/30 transition-colors duration-300" />
    </motion.div>
  );
};

const SkillsSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML5', proficiency: 85, icon: 'html.svg' },
    { name: 'CSS3', proficiency: 85, icon: 'css.svg' },
    { name: 'JavaScript', proficiency: 90, icon: 'javascript.svg' },
    { name: 'SCSS', proficiency: 75, icon: 'scss.svg' },
    { name: 'Tailwind CSS', proficiency: 85, icon: 'tailwind.svg' },
    { name: 'React.JS', proficiency: 88, icon: 'react.svg' },
    { name: 'Next.JS', proficiency: 80, icon: 'nextjs.svg' },
    { name: 'Python', proficiency: 75, icon: 'python.svg' },
    { name: 'GSAP', proficiency: 75, icon: 'gsap.svg' },
    { name: 'Framer Motion', proficiency: 75, icon: 'framer.svg' },
    { name: 'ThreeJS', proficiency: 75, icon: 'threejs.svg' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14 max-w-9xl w-full relative">
        {skills.map((skill, index) => (
          <Skill 
            key={index} 
            {...skill} 
            delay={index * 0.3} // 300ms between each skill
            startAnimation={startAnimation}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;