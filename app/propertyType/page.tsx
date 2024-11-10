"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RotatingCircles from "@/components/RotatingCircles";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const items = [
  { img_url: "/propertyType/ground-apartment.jpg", title: "Ground Apartment" },
  {
    img_url: "/propertyType/typical-apartment.jpg",
    title: "Typical Apartment",
  },
  { img_url: "/propertyType/ground-duplex.jpg", title: "Ground Duplex" },
  { img_url: "/propertyType/penthouse.jpg", title: "Penthouse" },
  { img_url: "/propertyType/typical-duplex.jpg", title: "Typical Duplex" },
  {
    img_url: "/propertyType/stand-alone-villa.jpg",
    title: "Stand Alone Villa",
  },
  {
    img_url: "/propertyType/town-house-corner.jpg",
    title: "Town House Corner",
  },
  { img_url: "/propertyType/twin-house.jpg", title: "Twin House" },
  {
    img_url: "/propertyType/typical-hotels-apartment.jpg",
    title: "Typical Hotels Apartment",
  },
  {
    img_url: "/propertyType/ground-service-apartment.jpg",
    title: "Ground Service Apartment",
  },
  {
    img_url: "/propertyType/typical-service-apartment.jpg",
    title: "Typical Service Apartment",
  },
];

function PropertyType() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");

  const handleNavigation = (propertyType: string) => {
    router.push(
      `/propertyDetails?destination=${destination}&propertyType=${propertyType}`
    );
  };

  return (
    <div className="bg-gradient-to-r from-slate-100 via-white to-slate-50 h-full relative">
      <Navbar />
      <div className=" z-10 pt-36 flex flex-col justify-center">
        <h1 className="w-full text-black text-center text-xl font-bold">
          Pick up your Property Type
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 sm:p-8 md:p-16">
          {items.map((item) => (
            <div
              className="bg-white z-10 text-black pb-4 cursor-pointer shadow-lg transform transition-all duration-300 hover:text-navy hover:scale-105 hover:shadow-2xl hover:bg-slate-100"
              key={item.title}
              onClick={() => handleNavigation(item.title)}
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <Image
                  src={item.img_url}
                  alt={item.title}
                  objectFit="cover"
                  layout="fill"
                  className="transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <p className="w-full text-center font-semibold pt-2 text-sm sm:text-base md:text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <RotatingCircles />
      </div>
      <Footer />
    </div>
  );
}

export default PropertyType;
