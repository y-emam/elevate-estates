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
    img_url: "/destination/5th-settlement.jpg",
    title: "5th Settlement",
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
    img_url: "/destination/the-new-administrative-capital.jpg",
    title: "The New Administrative Capital",
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
    <div className="bg-gradient-to-r from-slate-100 via-white to-slate-50 h-full relative">
      <Navbar />
      <div className="container pt-36 flex flex-col justify-center">
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

      <div className="absolute z-0 top-4 left-4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-dashed border-blue-100 rounded-full animate-rotate" />
      <div className="absolute bottom-8 right-12 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 border-2 border-black-100 border-dashed rounded-full animate-rotate" />
    </div>
  );
}

export default Form;
