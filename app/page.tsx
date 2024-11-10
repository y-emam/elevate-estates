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
    image_alt: "Eleven Estates img 1",
    image_title: "Relax and Unwind in Our Exclusive Beachfront Compound",
  },
  {
    image_url: "/home/img2.jpg",
    image_alt: "Eleven Estates img 2",
    image_title:
      "Strategic Location, Modern Amenities – Perfect for Your Business Growth",
  },
  {
    image_url: "/home/img3.jpg",
    image_alt: "Eleven Estates img 3",
    image_title: "Live the Dream: A Beautiful Beachfront Compound Awaits You",
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
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex w-full min-h-screen justify-center items-center flex-col">
        <div
          className="relative w-full min-h-screen"
          style={{ height: "600px" }}
        >
          <div
            className={`absolute min-h-screen w-full inset-0 overflow-hidden transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={images[currentImageIndex].image_url}
              alt={images[currentImageIndex].image_alt}
              layout="fill"
              objectFit="cover"
              className="w-full absolute top-0 animate-zoom-in min-h-screen "
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-start flex-col">
            <div className="text-white w-full sm:w-1/2 text-left pl-8 sm:pl-32 -translate-y-20">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Tailored Choices for Your Perfect Home
              </h1>
            </div>
            <h2 className="text-white text-xl sm:text-2xl pl-8 sm:pl-32 opacity-0 animate-fade-in -translate-y-10">
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
