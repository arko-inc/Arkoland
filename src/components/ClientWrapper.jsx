"use client";

import { useState } from "react";
import EntryAnimation from "@/components/EntryAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientWrapper({ children }) {
  const [showEntryAnimation, setShowEntryAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowEntryAnimation(false); // Hide the EntryAnimation component
  };

  return (
    <>
      {showEntryAnimation && (
        <EntryAnimation onComplete={handleAnimationComplete} />
      )}
      {!showEntryAnimation && (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}