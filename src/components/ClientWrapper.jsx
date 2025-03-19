"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader"; // Import the Loader
import EntryLoader from "@/components/EntryLoader"; // Import the EntryLoader

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEntryLoading, setIsEntryLoading] = useState(false);
  const [pageName, setPageName] = useState("");

  // Check if the user is entering the site for the first time
  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem("hasVisited") === null;

    if (isFirstVisit) {
      setIsEntryLoading(true); // Show EntryLoader
      sessionStorage.setItem("hasVisited", "true"); // Mark as visited

      // Simulate EntryLoader duration
      setTimeout(() => {
        setIsEntryLoading(false);
      }, 3000); // Adjust timing to match EntryLoader animation
    }
  }, []);

  const handleNavigation = (name, path) => {
    setIsLoading(true);
    setPageName(name);

    // Simulate a delay for the Loader animation
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = path;
    }, 2500); // Adjust timing to match the Loader animation duration
  };

  return (
    <>
      <Navbar handleNavigation={handleNavigation} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CustomCursor />

      {/* Show EntryLoader only on first visit */}
      {isEntryLoading && <EntryLoader />}

      {/* Show Loader during internal navigation or refresh */}
      <Loader isLoading={isLoading} pageName={pageName} />
    </>
  );
}