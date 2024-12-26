import { useState, useEffect } from "react";
import Logo from "../assets/misbahlogo.png";
import { Link } from "react-router-dom";
// import { Call, Message, Phone, Whatsapp } from "../assets/icons/Icons";
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Handle outside click for dropdown
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="top-0 h-36 flex px-4 lg:px-20 fixed  w-full z-50 ">
      {/* Logo Section */}
      <div className="w-1/2 sm:w-1/6 h-36 flex items-center">
        <img src={Logo} alt="Logo" className="object-cover" />
      </div>

      {/* Main Navbar */}
      <div className="flex flex-col h-36 flex-grow px-2 sm:px-4 justify-center">
        {/* Top Section */}
        <div className="flex justify-between items-center h-14">
          {/* Contact Info (Hidden on small screens) */}
          <div className="hidden sm:flex h-18 items-center space-x-2 sm:space-x-6 px-4 sm:px-8">
            <div className="flex space-x-1 items-center">
              <FaMessage height="1rem" width="1rem" />
              <p className="text-xs text-blue-600">info@altrasul.net</p>
            </div>
            <div className="flex space-x-1 items-center">
              <IoIosCall height="1rem" width="1.3rem" />
              <p className="text-xs text-blue-600">+971 54 539 0070</p>
            </div>
            <div className="flex space-x-1 items-center">
              <FaWhatsapp height="1.3rem" width="1.3rem" />
              <p className="text-xs text-blue-600">+971 56 410 0504</p>
            </div>
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="sm:hidden flex items-center absolute right-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Links (Visible on larger screens) */}
        <div className="hidden sm:flex border-t-[1px] border-t-black/5 justify-between items-center">
          <div className="flex space-x-4 sm:space-x-8 items-center h-18 px-4 sm:px-8 text-sm sm:text-base">
            <Link className="hover:text-red-600" to="/">
              Home
            </Link>
            <Link className="hover:text-red-600" to="/about">
              About
            </Link>

            <div className="relative dropdown-container">
              <button
                className="hover:text-red-600 flex items-center"
                onClick={() => setDropdown(!dropdown)}
              >
                Our Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                    dropdown ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdown && (
                <div className="absolute left-0 bg-white w-52 shadow-lg z-10">
                  <ul>
                    <li>
                      <Link
                        to="/businesssetup"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => setDropdown(false)}
                      >
                        Business Setup
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/visaservice"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => setDropdown(false)}
                      >
                        UI Visa Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/proservice"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => setDropdown(false)}
                      >
                        PRO Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/trademark"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => setDropdown(false)}
                      >
                        Trademark Services
                      </Link>
                    </li>
                    <li>
                    </li>
                    <li>
                      <Link
                        to="/certification"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => setDropdown(false)}
                      >Certificate Attestation
                      </Link>
                    </li>
                    <li>
                    </li>
                    {/* Add other dropdown items */}
                  </ul>
                </div>
              )}
            </div>

            <Link className="hover:text-red-600" to="/contact">
              Contact
            </Link>
          </div>

          <div className="flex w-2/5 sm:w-1/6 space-x-2 sm:space-x-3 items-center text-xs sm:text-sm justify-center">
            <div className="flex items-center">
              <IoIosCall />
            </div>
            <div className="flex flex-col mt-5">
              <h3>Talk to Us</h3>
              <h1>+971 54 539 0070 </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hamburger dropdown) */}
      {menuOpen && (
        <div className="absolute top-28 left-0 w-full bg-white shadow-lg sm:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4 text-sm">
            <Link
              className="hover:text-red-600"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-red-600"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <div className="relative dropdown-container">
              <button
                className="hover:text-red-600"
                onClick={() => setDropdown(!dropdown)}
              >
                Our Services
              </button>
              {dropdown && (
                <div className="absolute left-0 bg-white w-52 shadow-lg z-10">
                  <ul>
                    <li>
                      <Link
                        to="/businesssetup"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => {
                          setDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        Business Setup
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/visaservice"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => {
                          setDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        UI Visa Service
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="/visaservice"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => {
                          setDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        UI Visa Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/visaservice"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => {
                          setDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        PRO services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/visaservice"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => {
                          setDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        Trademark Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/visaservice"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => {
                          setDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        Certificate Attestation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/visaservice"
                        className="block py-2 px-4 text-black/80 hover:text-black hover:bg-slate-100"
                        onClick={() => {
                          setDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        Tax and Accounting
                      </Link>
                    </li>
                    {/* Add other dropdown items */}
                  </ul>
                </div>
              )}
            </div>
            <Link
              className="hover:text-red-600"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col border-t pt-4">
              <div className="flex items-center space-x-1">
                <IoIosCall />
                <h1 className="text-xs">+971545390070 </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
