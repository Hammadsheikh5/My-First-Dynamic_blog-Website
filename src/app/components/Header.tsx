'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format the date (e.g., Dec 29, 2024)
      const dateString = now.toLocaleDateString([], {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Format the time (e.g., 12:34:56 PM)
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      // Update the state
      setCurrentDateTime({ date: dateString, time: timeString });
    };

    // Update every second
    const interval = setInterval(updateDateTime, 1000);

    // Initial update
    updateDateTime();

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="text-white font-serif  z-10">
      <div className="header bg-[#2e1717] w-full max-w-[1536px] mx-auto h-auto md:h-[80px] lg:h-[100px] flex flex-col item md:flex-row justify-between items-center p-2 md:px-6 gap-4 shadow-lg shadow-black">
        
        {/* Logo */}
        <div className="logo text-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px]  xl:text-[60px]">
            Creative Blogs
          </h1>
        </div>

        {/* Navigation */}
        <div className=" w-full md:w-auto">
          <ul className="flex flex-row items-center justify-center  text-sm sm:text-base md:text-md lg:text-xl font-medium text-center gap-4 md:gap-8 lg:gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        
        
        {/* Date & Time */}
        <div className="text-center md:text-right">
          <p className="text-xs lg:text-base font-medium">
            {currentDateTime.date}
          </p>
          <p className="text-xs  lg:text-base font-medium">
            {currentDateTime.time}
          </p>
        </div>

      </div>
    </nav>
  );
}
