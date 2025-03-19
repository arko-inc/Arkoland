"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader"; // Import the Loader

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [pageName, setPageName] = useState("");

  const handleNavigation = (name, path) => {
    setIsLoading(true);
    setPageName(name);

    // Simulate a delay for the loader animation
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = path;
    }, 2500); // Adjust timing to match the loader animation duration
  };

  return (
    <>
      <Navbar handleNavigation={handleNavigation} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CustomCursor />
      <Loader isLoading={isLoading} pageName={pageName} /> {/* Add the Loader */}
    </>
  );
}