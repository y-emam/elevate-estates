import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold mb-4">Elevate Estates</h1>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Elevate Estates. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
