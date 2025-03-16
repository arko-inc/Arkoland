"use client";

import { useState, useEffect } from "react";
import EntryAnimation from "@/components/EntryAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientWrapper({ children }) {
  const [showEntryAnimation, setShowEntryAnimation] = useState(false);

  useEffect(() => {
    // Check if the entry animation has already been shown
    const hasShownAnimation = localStorage.getItem("entryAnimationShown");

    if (!hasShownAnimation) {
      setShowEntryAnimation(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowEntryAnimation(false);
    localStorage.setItem("entryAnimationShown", "true"); // Store in localStorage
  };

  return (
    <>
      {showEntryAnimation ? (
        <EntryAnimation onComplete={handleAnimationComplete} />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
