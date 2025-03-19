"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, User, Folder, Mail, Menu, ChevronDown, Zap, X } from "lucide-react";
import Loader from "@/components/Loader"; // Import the Loader component

export default function Navbar() {
  const router = useRouter(); // Initialize useRouter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const [pageName, setPageName] = useState(""); // State for page name
  const dropdownRef = useRef(null); // Ref for dropdown
  const { scrollY } = useScroll(); // Track scroll position
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]); // Scale logo on scroll
  const logoText = useTransform(
    scrollY,
    [0, 100],
    ["Arko", "A"] // Transform "Arko" to "A"
  );

  // Handle dropdown toggle
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle navigation with loader
  const handleNavigation = (name, path) => {
    setIsLoading(true);
    setPageName(name);

    // Simulate page load delay
    setTimeout(() => {
      setIsLoading(false);
      router.push(path); // Use router.push for client-side navigation
    }, 2500); // Adjust timing as needed
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Loader Component */}
      <Loader isLoading={isLoading} pageName={pageName} />

      <motion.nav
        className="bg-transparent fixed top-0 z-50 text-lime-500 shadow-md w-full font-bold"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" legacyBehavior>
                <a className="flex items-center space-x-2">
                  <motion.span
                    className="text-3xl text-lime-500 font-bold"
                    style={{ scale: logoScale }}
                  >
                    <motion.span>{logoText}</motion.span>
                    <div className="w-3 h-3 bg-lime-500 inline-block rounded-full"></div>
                  </motion.span>
                </a>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleNavigation("Home", "/")}
                >
                  <Home />
                  <span>Home</span>
                </a>
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleDropdown}
                  className="hover:text-zinc-100 flex items-center space-x-1 cursor-pointer"
                >
                  <ChevronDown
                    className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <span>Showcase</span>
                </button>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-10 bg-zinc-800/20 text-white rounded shadow-md"
                  >
                    <Link href="/projects" legacyBehavior>
                      <a
                        className="flex items-center px-4 py-2 hover:bg-zinc-700/10"
                        onClick={() => handleNavigation("Projects", "/projects")}
                      >
                        <Folder />
                        <span className="ml-2">Projects</span>
                      </a>
                    </Link>
                    <Link href="/gallery" legacyBehavior>
                      <a
                        className="flex items-center px-4 py-2 hover:bg-zinc-700/10"
                        onClick={() => handleNavigation("Gallery", "/gallery")}
                      >
                        <Folder />
                        <span className="ml-2">Gallery</span>
                      </a>
                    </Link>
                    <Link href="/clients" legacyBehavior>
                      <a
                        className="flex items-center px-4 py-2 hover:bg-zinc-700/10"
                        onClick={() => handleNavigation("Clients", "/clients")}
                      >
                        <Folder />
                        <span className="ml-2">Clients</span>
                      </a>
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link href="/aboutme" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleNavigation("About", "/aboutme")}
                >
                  <User />
                  <span>About Me</span>
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleNavigation("Contact", "/contact")}
                >
                  <Mail />
                  <span>Get in touch</span>
                </a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleNavigation("Services", "/services")}
                >
                  <Zap />
                  <span>Services</span>
                </a>
              </Link>
              <Link href="/testimonials" legacyBehavior>
                <a
                  className="hover:text-zinc-100 flex items-center space-x-2"
                  onClick={() => handleNavigation("Testimonials", "/testimonials")}
                >
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                  >
                    <path
                      fill="#7ccf00"
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
              className="md:hidden p-2 text-lime-500 hover:text-zinc-100 focus:outline-none"
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
              className="fixed inset-y-0 right-0 w-64 bg-zinc-800 text-lime-500 shadow-lg z-50"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleMobileMenu}
                  className="text-lime-500 hover:text-zinc-100 focus:outline-none"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleNavigation("Home", "/")}
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
                    <ChevronDown
                      className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                    <span>Showcase</span>
                  </button>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 bg-zinc-700 text-lime-500 rounded shadow-md"
                    >
                      <Link href="/projects" legacyBehavior>
                        <a
                          className="flex items-center px-4 py-2 hover:bg-zinc-600"
                          onClick={() => handleNavigation("Projects", "/projects")}
                        >
                          <Folder />
                          <span className="ml-2">Projects</span>
                        </a>
                      </Link>
                      <Link href="/gallery" legacyBehavior>
                        <a
                          className="flex items-center px-4 py-2 hover:bg-zinc-600"
                          onClick={() => handleNavigation("Gallery", "/gallery")}
                        >
                          <Folder />
                          <span className="ml-2">Gallery</span>
                        </a>
                      </Link>
                      <Link href="/clients" legacyBehavior>
                        <a
                          className="flex items-center px-4 py-2 hover:bg-zinc-600"
                          onClick={() => handleNavigation("Clients", "/clients")}
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
                    onClick={() => handleNavigation("About", "/about")}
                  >
                    <User />
                    <span>About Me</span>
                  </a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleNavigation("Contact", "/contact")}
                  >
                    <Mail />
                    <span>Get in touch</span>
                  </a>
                </Link>
                <Link href="/services" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleNavigation("Services", "/services")}
                  >
                    <Zap />
                    <span>Services</span>
                  </a>
                </Link>
                <Link href="/testimonials" legacyBehavior>
                  <a
                    className="hover:text-zinc-100 flex items-center space-x-2"
                    onClick={() => handleNavigation("Testimonials", "/testimonials")}
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