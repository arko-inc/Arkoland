"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, User, Folder, Mail, Menu, ChevronDown, Zap, X } from "lucide-react";
import Loader from "@/components/Loader"; // Import the Loader component

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const [pageName, setPageName] = useState(""); // State for page name

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (name, path) => {
    setIsLoading(true); // Activate loader
    setPageName(name); // Set the page name for the loader

    // Simulate page load delay
    setTimeout(() => {
      setIsLoading(false); // Deactivate loader
      window.location.href = path; // Navigate to the new page
    }, 3000); // Adjust timing as needed
  };

  return (
    <>
      {/* Loader Component */}
      <Loader isLoading={isLoading} pageName={pageName} />

      <motion.nav
        className="bg-zinc-900 text-zinc-300 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" legacyBehavior>
                <a className="flex items-center space-x-2">
                  <span className="text-xl font-semibold">Portfolio</span>
                </a>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleLinkClick("Home", "/")}
                >
                  <Home />
                  <span>Home</span>
                </a>
              </Link>

              <div className="relative">
                <button
                  onClick={handleDropdown}
                  className="hover:text-zinc-100 flex items-center space-x-1"
                >
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
                      <a
                        className="flex items-center px-4 py-2 hover:bg-zinc-700"
                        onClick={() => handleLinkClick("Projects", "/projects")}
                      >
                        <Folder />
                        <span className="ml-2">Projects</span>
                      </a>
                    </Link>
                    <Link href="/gallery" legacyBehavior>
                      <a
                        className="flex items-center px-4 py-2 hover:bg-zinc-700"
                        onClick={() => handleLinkClick("Gallery", "/gallery")}
                      >
                        <Folder />
                        <span className="ml-2">Gallery</span>
                      </a>
                    </Link>
                    <Link href="/clients" legacyBehavior>
                      <a
                        className="flex items-center px-4 py-2 hover:bg-zinc-700"
                        onClick={() => handleLinkClick("Clients", "/clients")}
                      >
                        <Folder />
                        <span className="ml-2">Clients</span>
                      </a>
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link href="/about" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleLinkClick("About", "/about")}
                >
                  <User />
                  <span>About Me</span>
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleLinkClick("Contact", "/contact")}
                >
                  <Mail />
                  <span>Get in touch</span>
                </a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleLinkClick("Services", "/services")}
                >
                  <Zap />
                  <span>Services</span>
                </a>
              </Link>
              <Link href="/testimonials" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleLinkClick("Testimonials", "/testimonials")}
                >
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                  >
                    <path
                      fill="#BAC4C8"
                      d="m13 21l2-1l2 1v-7h-4m4-5V7l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1m1-7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7v-2H4V5h16v10h-1v2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 5H5V6h6m-2 5H5V9h4m2 5H5v-2h6Z"
                    />
                  </svg>
                  <span>Testimonials</span>
                </a>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-zinc-300 hover:text-zinc-100 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-64 bg-zinc-800 text-zinc-300 shadow-lg z-50"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleMobileMenu}
                  className="text-zinc-300 hover:text-zinc-100 focus:outline-none"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleLinkClick("Home", "/")}
                  >
                    <Home />
                    <span>Home</span>
                  </a>
                </Link>

                <div className="relative">
                  <button
                    onClick={handleDropdown}
                    className="hover:text-zinc-100 flex items-center space-x-1"
                  >
                    <ChevronDown />
                    <span>Showcase</span>
                  </button>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 bg-zinc-700 text-zinc-300 rounded shadow-md"
                    >
                      <Link href="/projects" legacyBehavior>
                        <a
                          className="flex items-center px-4 py-2 hover:bg-zinc-600"
                          onClick={() => handleLinkClick("Projects", "/projects")}
                        >
                          <Folder />
                          <span className="ml-2">Projects</span>
                        </a>
                      </Link>
                      <Link href="/gallery" legacyBehavior>
                        <a
                          className="flex items-center px-4 py-2 hover:bg-zinc-600"
                          onClick={() => handleLinkClick("Gallery", "/gallery")}
                        >
                          <Folder />
                          <span className="ml-2">Gallery</span>
                        </a>
                      </Link>
                      <Link href="/clients" legacyBehavior>
                        <a
                          className="flex items-center px-4 py-2 hover:bg-zinc-600"
                          onClick={() => handleLinkClick("Clients", "/clients")}
                        >
                          <Folder />
                          <span className="ml-2">Clients</span>
                        </a>
                      </Link>
                    </motion.div>
                  )}
                </div>

                <Link href="/about" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleLinkClick("About", "/about")}
                  >
                    <User />
                    <span>About Me</span>
                  </a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleLinkClick("Contact", "/contact")}
                  >
                    <Mail />
                    <span>Get in touch</span>
                  </a>
                </Link>
                <Link href="/services" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleLinkClick("Services", "/services")}
                  >
                    <Zap />
                    <span>Services</span>
                  </a>
                </Link>
                <Link href="/testimonials" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleLinkClick("Testimonials", "/testimonials")}
                  >
                    <svg
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                    >
                      <path
                        fill="#BAC4C8"
                        d="m13 21l2-1l2 1v-7h-4m4-5V7l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1m1-7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7v-2H4V5h16v10h-1v2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 5H5V6h6m-2 5H5V9h4m2 5H5v-2h6Z"
                      />
                    </svg>
                    <span>Testimonials</span>
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}