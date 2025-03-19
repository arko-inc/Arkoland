"use client";

import { useState, useEffect } from "react";
import EntryAnimation from "@/components/EntryAnimation";
import Loader from "@/components/Loader"; // Import the Loader component
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientWrapper({ children }) {
  const [showEntryAnimation, setShowEntryAnimation] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First visit: show EntryAnimation
      setShowEntryAnimation(true);
      localStorage.setItem("hasVisited", "true"); // Mark as visited
    } else {
      // Subsequent visits or refresh: show Loader
      setShowLoader(true);
    }

    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  const handleEntryAnimationComplete = () => {
    setShowEntryAnimation(false); // Hide EntryAnimation
    setIsLoading(false); // Mark loading as complete
  };

  const handleLoaderComplete = () => {
    setShowLoader(false); // Hide Loader
    setIsLoading(false); // Mark loading as complete
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show EntryAnimation only on first visit */}
      {showEntryAnimation && (
        <EntryAnimation onComplete={handleEntryAnimationComplete} />
      )}

      {/* Show Loader only on refresh or subsequent visits */}
      {showLoader && (
        <Loader isLoading={isLoading} pageName="Arkoland" onComplete={handleLoaderComplete} />
      )}

      {/* Show main content after animation/loader completes */}
      {!showEntryAnimation && !showLoader && (
        <>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}