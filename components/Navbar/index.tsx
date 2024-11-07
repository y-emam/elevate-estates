"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { usePathname } from "next/navigation";

function Navbar() {
  const isHomePage = usePathname() === "/";

  return (
    <nav className="z-50 fixed bg-transparent p-10 w-full h-0 py-12">
      {!isHomePage && (
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-navy rounded-full"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="2x"
            className="text-black"
          />
        </button>
      )}
      <h1
        className={`${
          isHomePage ? "text-white" : "text-navy" // Change color based on the page
        } text-4xl font-bold h-0 flex justify-center items-center`}
      >
        ELEVATE ESTATES
      </h1>
    </nav>
  );
}

export default Navbar;
