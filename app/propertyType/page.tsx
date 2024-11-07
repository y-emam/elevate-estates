"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  const handleNavigation = (destination: string) => {
    router.push(`/form?destination=${destination}`);
  };

  return (
    <div className="bg-silver h-full">
      <Navbar />
      <div className="container pt-36 flex flex-col justify-center">
        <h1 className="w-full text-navy text-center text-xl font-bold ">
          Choose your Property Type
        </h1>
        <div className="grid grid-cols-3 gap-4 p-16">
          {items.map((item) => (
            <div
              className="bg-white text-navy pb-4 cursor-pointer"
              key={item.title.toUpperCase()}
              onClick={() => {
                handleNavigation(item.title);
              }}
            >
              <div className="relative w-full h-48">
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
    </div>
  );
}

export default PropertyType;
