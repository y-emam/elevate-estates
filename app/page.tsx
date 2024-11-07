"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/index";
import Image from "next/image";
import { useRouter } from "next/navigation";

const images = ["/home/img1.jpg", "/home/img2.jpg", "/home/img3.jpg"];

export default function Home() {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const navigateToForm = () => {
    router.push("/destination");
  };

  return (
    <div className="w-full">
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

          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-start flex-col">
            <h2 className="text-white text-3xl mx-32 font-semibold">
              Tailored Choices for Your Perfect Home
            </h2>
            <button
              onClick={navigateToForm}
              className="text-silver border-silver border-2 my-3 mx-32 px-8 py-1 bg-transparent font-medium hover:text-white hover:border-white transition-all duration-100"
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
