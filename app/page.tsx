"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out the current image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Fade in the next image
      }, 500); // Wait 500ms for fade-out to complete before changing image
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="relative w-full" style={{ height: "600px" }}>
          {/* Image with smooth fade transition */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={images[currentImageIndex]}
              alt="Slideshow Image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>

          <div className="text-start absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col">
            <h2 className="text-white text-3xl font-semibold -translate-x-40 -translate-y-10">
              Tailored Choices for Your Perfect Home
            </h2>
            <button className="text-white px-6 py-3 -translate-x-40 -translate-y-10">
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
