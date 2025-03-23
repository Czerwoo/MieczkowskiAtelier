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
    <div className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-75 flex items-center justify-around h-25 px-20">
      <div className="flex items-center justify-around w-1/3">
        <a
          href="#"
          className="!text-extension navText"
          onClick={(event) => scrollToSection("home", event)}
        >
          Strona główna
        </a>
        <a
          className="navText"
          onClick={(event) => scrollToSection("aboutUs", event)}
        >
          O nas
        </a>
        <a
          href="#"
          className="navText"
          onClick={(event) => scrollToSection("pricing", event)}
        >
          Usługi
        </a>
      </div>
      <Image src={logo} alt="logo" width={550} height={175} />
      <div className="flex items-center justify-around w-1/3">
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
  );
}
