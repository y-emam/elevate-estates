"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
    <div className="bg-white h-full">
      <Navbar />
      <div className="container pt-36 flex flex-col justify-center">
        <h1 className="w-full text-black text-center text-xl font-bold md:text-2xl">
          Choose your Property Type
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-8 md:p-16">
          {items.map((item) => (
            <div
              className="bg-white text-color pb-4 cursor-pointer shadow-lg"
              key={item.title.toUpperCase()}
              onClick={() => {
                handleNavigation(item.title);
              }}
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={item.img_url}
                  alt={item.title}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <p className="w-full text-center text-navy font-semibold pt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      <div className="absolute z-0 top-4 left-4 w-96 h-96 border-2 border-dashed border-blue-100 rounded-full animate-rotate" />
      <div className="absolute bottom-12 right-12 w-64 h-64 border-2 border-black-100 border-dashed rounded-full animate-rotate" />
    </div>
  );
}

export default PropertyType;
