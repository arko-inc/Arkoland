// components/Navbar.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Folder, Mail, Menu, ChevronDown } from "lucide-react";

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
            {/* Home Link: Icon to the left of text */}
            <Link href="/" legacyBehavior>
              <a className="flex items-center space-x-2">
                <Home />
                <span className="text-xl font-semibold">Portfolio</span>
              </a>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" legacyBehavior>
              <a className="hover:text-zinc-100 flex items-center space-x-2">
                <Home />
                <span>Home</span>
              </a>
            </Link>
            <div className="relative">
              <button
                onClick={handleDropdown}
                className="hover:text-zinc-100 flex items-center space-x-1"
              >
                {/* Dropdown icon to the left of "Showcase" */}
                <ChevronDown />
                <span>Showcase</span>
              </button>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 bg-zinc-800 text-zinc-300 rounded shadow-md"
                >
                  <Link href="/projects" legacyBehavior>
                    <a className="flex items-center px-4 py-2 hover:bg-zinc-700 ">
                  
                      <span className="hover:text-emerald-600"><Folder/></span>
                      
                      <span className="ml-3">Projects</span>
                    </a>
                  </Link>
                  <Link href="/gallery" legacyBehavior>
                    <a className="flex items-center px-4 py-2 hover:bg-zinc-700">
                      <span className="hover:text-rose-500"><Folder /></span>
                      <span className="ml-3">Gallery</span>
                    </a>
                  </Link>
                  <Link href="/clients" legacyBehavior>
                    <a className="flex items-center px-4 py-2 hover:bg-zinc-700 ">
                      
                      <span className="hover:text-blue-600"><Folder /></span>
                      <span className="ml-3">Clients</span>
                    </a>
                  </Link>
                </motion.div>
              )}
            </div>
            <Link href="/contact" legacyBehavior>
              <a className="hover:text-zinc-100 flex items-center space-x-2">
                <Mail />
                <span>Contact</span>
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="hover:text-zinc-100 flex items-center space-x-2">
                <User />
                <span>About Me</span>
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="hover:text-zinc-100">Services</a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a className="hover:text-zinc-100">Blog</a>
            </Link>
            <Link href="/testimonials" legacyBehavior>
              <a className="hover:text-zinc-100">Testimonials</a>
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
