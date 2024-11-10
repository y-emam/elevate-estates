/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Navbar from "@/components/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Footer from "@/components/Footer";

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
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Property Search Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 relative">
            <label className="text-gray-700 font-medium flex items-center">
              Number of Bedrooms
              <Tippy content="Excludes extra spaces like the nanny's room, driver’s quarters, laundry area, and study.">
                <span className="ml-1 cursor-pointer">?</span>
              </Tippy>
            </label>
            <select
              name="noBedrooms"
              value={propertyDetailsData.noBedrooms}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="Ready to move">Ready to Move</option>
              <option value="Near Delivery">Near Delivery</option>
              <option value="Off Plan">Off Plan</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Next
          </button>
        </form>
      </div>
      <Footer />

      <div className="absolute z-0 top-4 left-4 w-96 h-96 border-2 border-dashed border-blue-100 rounded-full animate-rotate" />
      <div className="absolute bottom-8 right-12 w-64 h-64 border-2 border-black-100 border-dashed rounded-full animate-rotate" />
    </div>
  );
}

export default PropertyDetails;
