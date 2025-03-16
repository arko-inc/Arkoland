// components/Navbar.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Folder, Mail, Menu } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.nav
      className="bg-zinc-900 text-zinc-300 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" legacyBehavior className="flex items-center space-x-2">
              <Home />
              <span className="text-xl font-semibold">Portfolio</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" legacyBehavior className="hover:text-zinc-100">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={handleDropdown}
                className="hover:text-zinc-100 flex items-center space-x-1"
              >
                <Folder />
                <span>Showcase</span>
              </button>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 bg-zinc-800 text-zinc-300 rounded shadow-md"
                >
                  <Link href="/projects" legacyBehavior className="block px-4 py-2 hover:bg-zinc-700">
                    Projects
                  </Link>
                  <Link href="/gallery" legacyBehavior className="block px-4 py-2 hover:bg-zinc-700">
                    Gallery
                  </Link>
                  <Link href="/clients" legacyBehavior className="block px-4 py-2 hover:bg-zinc-700">
                    Clients
                  </Link>
                </motion.div>
              )}
            </div>
            <Link href="/contact" legacyBehavior className="hover:text-zinc-100">
              <Mail />
              Contact
            </Link>
            <Link href="/about" legacyBehavior className="hover:text-zinc-100">
              <User />
              About Me
            </Link>
            <Link href="/services" legacyBehavior className="hover:text-zinc-100">
              Services
            </Link>
            <Link href="/blog" legacyBehavior className="hover:text-zinc-100">
              Blog
            </Link>
            <Link href="/testimonials" legacyBehavior className="hover:text-zinc-100">
              Testimonials
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Menu className="hover:text-zinc-100" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
