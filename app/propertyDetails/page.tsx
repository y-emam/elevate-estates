/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Navbar from "@/components/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import "tippy.js/dist/tippy.css";
import Footer from "@/components/Footer";
import Tooltip from "@/components/Tooltip";
import RotatingCircles from "@/components/RotatingCircles";
import "./styles.css";

interface propertyDetailsData {
  noBedrooms: string;
  delivery: string;
}

function PropertyDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const propertyType = searchParams.get("propertyType");

  const [propertyDetailsData, setpropertyDetailsData] =
    useState<propertyDetailsData>({
      noBedrooms: "",
      delivery: "",
    });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setpropertyDetailsData({
      ...propertyDetailsData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // show window
    router.push(
      `/submition?destination=${destination}&propertyType=${propertyType}&noBedrooms=${propertyDetailsData.noBedrooms}&delivery=${propertyDetailsData.delivery}`
    );
  };

  return (
    <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 h-full relative overflow-x-hidden">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 shadow-lg w-full max-w-md z-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Pick options that suits you
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-700 font-medium flex items-center">
                Number of Bedrooms
                <Tooltip content="Excludes extra rooms like the nanny's room, driver’s quarters, laundry area, and study.">
                  <span className="ml-1 cursor-pointer">?</span>
                </Tooltip>
              </label>
              <select
                name="noBedrooms"
                value={propertyDetailsData.noBedrooms}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-navy cursor-pointer"
              >
                <option value="">Select an option</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Delivery</label>
              <select
                name="delivery"
                value={propertyDetailsData.delivery}
                onChange={handleChange}
                required
                className="w-full p-3 border text-black border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-navy cursor-pointer"
              >
                <option value="">Select an option</option>
                <option value="Ready to move">Ready to Move</option>
                <option value="Near Delivery">Near Delivery</option>
                <option value="Off Plan">Off Plan</option>
              </select>
            </div>

            <a
              className="animated-btn"
              href={`/submition?destination=${destination}&propertyType=${propertyType}&noBedrooms=${propertyDetailsData.noBedrooms}&delivery=${propertyDetailsData.delivery}`}
            >
              <div className="center">
                <button className="btn">
                  <svg
                    width="120px"
                    height="40px"
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
                  <span>Next</span>
                </button>
              </div>
            </a>
          </form>
        </div>
      </div>
      <Footer />

      <RotatingCircles />
    </div>
  );
}

export default PropertyDetails;
