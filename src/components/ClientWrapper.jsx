"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import EntryAnimation from "@/components/EntryAnimation";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientWrapper({ children }) {
  const [showEntryAnimation, setShowEntryAnimation] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pageName, setPageName] = useState(""); // Track page name
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem("hasVisited");
    const hasLoaded = localStorage.getItem("hasLoaded");

    if (!hasVisited) {
      // First visit: show EntryAnimation
      setShowEntryAnimation(true);
      localStorage.setItem("hasVisited", "true"); // Mark as visited
    } else if (!hasLoaded) {
      // Initial load or refresh: show Loader
      setShowLoader(true);
      localStorage.setItem("hasLoaded", "true"); // Mark as loaded
    } else {
      // Client-side navigation: show page name
      setIsLoading(false);
      setPageName(getPageName(pathname)); // Set page name based on path
    }

    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleEntryAnimationComplete = () => {
    setShowEntryAnimation(false); // Hide EntryAnimation
    setIsLoading(false); // Mark loading as complete
  };

  const handleLoaderComplete = () => {
    setShowLoader(false); // Hide Loader
    setIsLoading(false); // Mark loading as complete
  };

  // Function to get page name based on path
  const getPageName = (path) => {
    switch (path) {
      case "/aboutme":
        return "About";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
      default:
        return "Arkoland";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show EntryAnimation only on first visit */}
      {showEntryAnimation && (
        <EntryAnimation onComplete={handleEntryAnimationComplete} />
      )}

      {/* Show Loader only on initial load or refresh */}
      {showLoader && (
        <Loader isLoading={isLoading} pageName="Arkoland" onComplete={handleLoaderComplete} />
      )}

      {/* Show page name during navigation */}
      {!showEntryAnimation && !showLoader && isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <h1 className="text-white text-6xl font-bold">{pageName}</h1>
        </div>
      )}

      {/* Show main content after animation/loader completes */}
      {!showEntryAnimation && !showLoader && !isLoading && (
        <>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}