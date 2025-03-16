// components/Footer.js
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-zinc-900 text-zinc-300"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="text-sm text-zinc-400">
              Hi, I'm a passionate web developer dedicated to creating
              innovative and user-friendly digital experiences. Whether it's
              building sleek designs or optimizing performance, I love
              turning ideas into reality.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="space-y-4 md:text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-zinc-100">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-zinc-100">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-zinc-100">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-100">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-white">Follow Me</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://yourwebsite.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-6 border-t border-zinc-700"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {/* Copyright and Footer Links */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center space-y-4 text-sm text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>© {currentYear} @Arkoland All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-zinc-100">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-zinc-100">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
