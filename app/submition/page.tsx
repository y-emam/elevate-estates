"use client";

import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface submitionData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

function Submitiotn() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const propertyType = searchParams.get("propertyType");
  const noBedrooms = searchParams.get("noBedrooms");
  const delivery = searchParams.get("delivery");

  const [submitionData, setsubmitionData] = useState<submitionData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setsubmitionData({
      ...submitionData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToServer = async () => {
    try {
      const response = await fetch("/api/addNewLead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...submitionData,
          destination,
          propertyType,
          noBedrooms,
          delivery,
        }),
      });

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // show loader

    // submit data to the server
    await sendToServer();

    // hide the loader

    // show success message
    // it will show that someone will contact you soon
    // and show option to message throw whatsapp
  };
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Final Steps</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              name="firstname"
              value={submitionData.firstname}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={submitionData.lastname}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={submitionData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={submitionData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Submitiotn;
