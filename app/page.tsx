"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/index";
import Image from "next/image";
import "./styles.css";
import Footer from "@/components/Footer";

const images = [
  {
    image_url: "/home/img1.jpg",
    image_alt: "Slideshow Image 1",
    image_title: "Slideshow Image 1",
  },
  {
    image_url: "/home/img2.jpg",
    image_alt: "Slideshow Image 2",
    image_title: "Slideshow Image 2",
  },
  {
    image_url: "/home/img3.jpg",
    image_alt: "Slideshow Image 3",
    image_title: "Slideshow Image 3",
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-s">
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="relative w-full" style={{ height: "600px" }}>
          <div
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={images[currentImageIndex].image_url}
              alt={images[currentImageIndex].image_alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full animate-zoom-in"
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-start flex-col">
            <h2 className="text-white text-3xl mx-32 opacity-0 font-semibold animate-fade-in">
              {images[currentImageIndex].image_title}
            </h2>
            <a className="animated-btn" href={"/destination"}>
              <div className="center">
                <button className="btn">
                  <svg
                    width="180px"
                    height="60px"
                    viewBox="0 0 180 60"
                    className="border"
                  >
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      className="bg-line"
                    />
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      className="hl-line"
                    />
                  </svg>
                  <span>START</span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
