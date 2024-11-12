/* eslint-disable react-hooks/exhaustive-deps */
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

  const searchParams = useSearchParams();
  const destination = searchParams.get("destination")?.trim();
  const propertyType = searchParams.get("propertyType")?.trim();
  const noBedrooms = searchParams.get("noBedrooms")?.trim();
  const delivery = searchParams.get("delivery")?.trim();

  const [submitionData, setsubmitionData] = useState<submitionData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

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
            Sign Up
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

            <div className="animated-btn">
              <a type="submit" className="center">
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
                  <span>Submit</span>
                </button>
              </a>
            </div>
          </form>

          {/* Modal part */}
          <div
            className={`fixed inset-0 flex justify-center items-center transition-opacity duration-300 ${
              isModalOpen
                ? "bg-black bg-opacity-60 opacity-100 z-30"
                : "opacity-0 -z-30"
            }`}
          >
            <div
              className={`bg-white rounded-lg p-8 shadow-2xl text-center max-w-md w-full transition-transform duration-300 transform ${
                isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Thank you for reaching out!
              </h2>
              <p className="text-gray-600 mb-6">
                Someone will contact you soon. If you need immediate assistance,
                feel free to reach us directly on WhatsApp.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={closeModal}
                  className={`${
                    isModalOpen
                      ? "block cursor-pointer"
                      : "hidden cursor-default"
                  } w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg transition hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300`}
                >
                  Close
                </button>
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isModalOpen
                      ? "block cursor-pointer"
                      : "hidden cursor-default"
                  } w-full bg-green-500 text-white py-2 px-4 rounded-lg transition hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400`}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* <RotatingCircles /> */}
    </div>
  );
}

export default Submitiotn;
