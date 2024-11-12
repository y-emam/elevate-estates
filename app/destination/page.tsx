"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const items = [
  {
    img_url: "/destination/shiekh-zayed1.jpg",
    title: "El Sheikh Zayed",
  },
  {
    img_url: "/destination/new-cairo.jpg",
    title: "New Cairo",
  },
  {
    img_url: "/destination/new-zayed.jpg",
    title: "New Zayed",
  },
  {
    img_url: "/destination/the-new-capital.jpg",
    title: "The New Capital",
  },
  {
    img_url: "/destination/sahel.jpg",
    title: "Sahel",
  },
  {
    img_url: "/destination/ain-sokhna.jpg",
    title: "Ain Sokhna",
  },
];

function Form() {
  const router = useRouter();

  const handleNavigation = (destination: string) => {
    router.push(`/propertyType?destination=${destination}`);
  };

  return (
    <div className="bg-gradient-to-r from-slate-100 via-white to-slate-50 h-full relative overflow-x-hidden">
      <Navbar />
      <div className="pt-36 flex flex-col justify-center">
        <h1 className="w-full text-black text-center text-xl font-bold">
          Pick up your Destination
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
      </div>
      <Footer />
    </div>
  );
}

export default Form;
