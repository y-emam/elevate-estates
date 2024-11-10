"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const isHomePage = usePathname() === "/";
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/");
  };

  return (
    <nav
      className={`${
        isHomePage ? "fixed" : "relative"
      } z-50 p-10 pb-0 w-full h-0 pt-12 bg-transparent`}
    >
      <div className="flex items-center justify-between w-full">
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
            isHomePage ? "text-white" : "text-black"
          } text-2xl sm:text-4xl font-bold h-0 flex justify-center items-center cursor-pointer mx-auto`}
          onClick={handleNavigation}
        >
          Elevate Estates
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
