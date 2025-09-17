"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "../../public/img/logo.webp";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-75 py-4">
      <div className="flex items-center justify-between h-auto px-4 lg:px-16 max-w-screen overflow-hidden">
        {/* Left Links */}
        <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
          <a
            href="#"
            className="navText text-sm lg:text-base xl:text-lg 2xl:text-xl"
            onClick={(event) => scrollToSection("home", event)}
          >
            Strona główna
          </a>
          <a
            href="#"
            className="navText text-sm lg:text-base xl:text-lg 2xl:text-xl"
            onClick={(event) => scrollToSection("aboutUs", event)}
          >
            O nas
          </a>
          <a
            href="#"
            className="navText text-sm lg:text-base xl:text-lg 2xl:text-xl"
            onClick={(event) => scrollToSection("realizations", event)}
          >
            Realizacje
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-none mx-8">
          <Image
            src={logo}
            alt="logo"
            width={550}
            height={175}
            className="w-[100px] h-auto sm:w-[150px] md:w-[200px] lg:w-[250px]"
          />
        </div>

        {/* Right Links */}
        <div className="hidden lg:flex items-center space-x-4 flex-1 justify-start">
          <a
            href="#"
            className="navText text-sm lg:text-base xl:text-lg 2xl:text-xl"
            onClick={(event) => scrollToSection("pricing", event)}
          >
            Usługi
          </a>
          <a
            href="#"
            className="navText text-sm lg:text-base xl:text-lg 2xl:text-xl"
            onClick={(event) => scrollToSection("testimonials", event)}
          >
            Opinie
          </a>
          <a
            href="#"
            className="navText text-sm lg:text-base xl:text-lg 2xl:text-xl"
            onClick={(event) => scrollToSection("footer", event)}
          >
            Kontakt
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-black bg-opacity-90 lg:hidden`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#"
              className="navText"
              onClick={(event) => scrollToSection("home", event)}
            >
              Strona główna
            </a>
            <a
              href="#"
              className="navText"
              onClick={(event) => scrollToSection("aboutUs", event)}
            >
              O nas
            </a>
            <a
              href="#"
              className="navText"
              onClick={(event) => scrollToSection("realizations", event)}
            >
              Realizacje
            </a>
            <a
              href="#"
              className="navText"
              onClick={(event) => scrollToSection("pricing", event)}
            >
              Usługi
            </a>
            <a
              href="#"
              className="navText"
              onClick={(event) => scrollToSection("testimonials", event)}
            >
              Opinie
            </a>
            <a
              href="#"
              className="navText"
              onClick={(event) => scrollToSection("footer", event)}
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
