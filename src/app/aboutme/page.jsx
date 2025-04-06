'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Rocket, Sparkles, Code, Palette } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

gsap.registerPlugin(ScrollTrigger)

export default function AboutMe() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    // GSAP animations
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })

      // Card stagger animation
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })

      // Floating animation for avatar
      gsap.to('.floating-avatar', {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const skills = [
    { name: 'Next.js', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Node.js', level: 75 },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-100 overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-purple-500 filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-lime-400 filter blur-3xl opacity-20"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-lime-400 to-blue-500"
        >
          About <span className="text-white">Me</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-2 h-12 bg-gradient-to-b from-purple-500 to-lime-400 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Full Stack Developer & UI/UX Enthusiast
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-zinc-300 text-lg"
            >
              I build exceptional digital experiences with cutting-edge
              technologies. Passionate about creating intuitive interfaces and
              scalable architectures that delight users and drive business
              results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="outline" className="group hover:bg-lime-400 hover:text-zinc-900 transition-colors">
                <Rocket className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                View Projects
              </Button>
              <Button className="bg-lime-400 text-zinc-900 hover:bg-lime-500 transition-colors">
                <Sparkles className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center floating-avatar"
          >
            <Tooltip>
              <TooltipTrigger>
                <Avatar className="h-96 w-96  border-zinc-700 hover:border-lime-400 transition-all duration-300">
                  <AvatarImage
                    src="/images/someone.jpeg"
                    alt="Profile Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-zinc-800 text-4xl">
                    DS
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-zinc-800 text-lg h-10 w-44 text-white border-lime-400">
                <p>That's me! 👋</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: <Code className="h-8 w-8 text-purple-400" />,
              title: '5+ Years',
              description: 'Development Experience',
            },
            {
              icon: <Palette className="h-8 w-8 text-lime-400" />,
              title: '50+ Projects',
              description: 'Completed Successfully',
            },
            {
              icon: <Rocket className="h-8 w-8 text-lime-400" />,
              title: 'Fast',
              description: 'Performance Optimized',
            },
            {
              icon: <Sparkles className="h-8 w-8 text-lime-400" />,
              title: 'Innovative',
              description: 'Cutting-edge Solutions',
            },
          ].map((item, index) => (
            <Card
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="bg-zinc-800 border-zinc-700 hover:border-lime-400 transition-colors duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  {item.icon}
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-zinc-300">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 mb-20 relative overflow-hidden">
  {/* Animated background elements */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.1 }}
    transition={{ duration: 2 }}
    className="absolute inset-0 pointer-events-none"
  >
    <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-purple-500 filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-lime-400 filter blur-3xl"></div>
  </motion.div>

  {/* Glowing border effect */}
  <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden z-0">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0 border-2 border-transparent rounded-xl"
      style={{
        boxShadow: '0 0 20px rgba(163, 230, 53, 0.3)',
        animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }}
    />
  </div>

  <div className="relative z-10">
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-bold mb-8 text-center"
    >
      My <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-500">Skills</span>
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-2 h-1 bg-gradient-to-r from-purple-500 via-lime-400 to-transparent"
      />
    </motion.h3>

    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100
          }}
          className="group"
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-zinc-300 font-medium text-lg group-hover:text-lime-300 transition-colors">
              {skill.name}
            </span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
              className="text-lime-400 font-mono"
            >
              {skill.level}%
            </motion.span>
          </div>
          
          <div className="h-3 bg-zinc-700 rounded-full overflow-hidden relative">
            {/* Animated progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.15 + 0.3,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="h-full bg-gradient-to-r from-purple-500 to-lime-400 rounded-full relative"
            >
              {/* Glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.2 + 1
                }}
                className="absolute top-0 right-0 h-full w-8 bg-white blur-sm"
              />
            </motion.div>
            
            {/* Animated dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 1.5 }}
              className="absolute top-0 left-0 w-full h-full flex items-center"
            >
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="h-1 w-1 rounded-full bg-white/10"
                  style={{ marginLeft: `${i * 5}%` }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Floating tech icons */}
    <div className="absolute -bottom-8 -right-8 opacity-20">
      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className="text-6xl"
      >
        <Code className="text-lime-400" />
      </motion.div>
    </div>
  </div>
</div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-lime-400">
              Amazing
            </span>{' '}
            Together
          </h3>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision. Let's create something
            extraordinary!
          </p>
          <Button className="px-8 py-6 text-lg bg-lime-400 text-zinc-900 hover:bg-lime-500">
            <Sparkles className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}