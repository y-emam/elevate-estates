"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import "./styles.css";

interface submitionData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

function Submitiotn() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const whatsappNumber = process.env.WHATSAPP_NUMBER;

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

    // submit data to the server
    await sendToServer();

    // show success message
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 h-full relative overflow-x-hidden">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 m-6 sm:m-16 shadow-lg w-full max-w-md z-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Final Steps
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-700 font-medium flex items-center">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={submitionData.firstname}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-navy"
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
                className="w-full p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-navy"
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
                className="w-full p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-navy"
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
                className="w-full p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>

            <a type="submit" className="animated-btn">
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

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 shadow-lg text-center max-w-sm w-full">
                <h2 className="text-xl font-semibold text-green-600">
                  Thank you for reaching out!
                </h2>
                <p className="mt-2 text-gray-700">
                  Someone will contact you soon. If you need immediate
                  assistance, feel free to reach us directly on WhatsApp.
                </p>
                <div>
                  <a
                    href={`https://wa.me/${whatsappNumber}`} // Replace with your WhatsApp contact number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-green-500 text-white py-2 px-6 hover:bg-green-600"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={closeModal}
                    className="mt-4 bg-gray-300 text-gray-800 py-2 px-6 hover:bg-gray-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {/* <RotatingCircles /> */}
    </div>
  );
}

export default Submitiotn;
