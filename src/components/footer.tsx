"use client";

import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import logo from "../../public/img/logo.webp";

export default function Footer() {
  return (
    <div
      id="footer"
      className="w-full px-6 sm:px-10 md:px-20 py-6 flex flex-col md:flex-row bg-black items-center justify-around"
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-6 md:mb-0 md:w-1/3">
        <Image
          src={logo}
          alt="logo"
          width={300}
          height={100}
          className="w-[120px] sm:w-[150px] md:w-[200px]"
        />
      </div>

      {/* Umów się na wizytę */}
      <div className="flex flex-col items-center justify-center mb-6 md:mb-0 md:w-1/3">
        <h4 className="text-base sm:text-lg md:text-xl navText mb-4 text-center">
          Umów się na wizytę
        </h4>
        <Link
          href="https://booksy.com/pl-pl/14111_mieczkowski-atelier_fryzjer_23280_lodz#ba_s=sh_1"
          target="_blank"
          className="p-2"
        >
          <Button className="bg-extension !text-black font-bold py-2 px-4 sm:py-3 sm:px-6">
            Booksy.pl
          </Button>
        </Link>
      </div>

      {/* Skontaktuj się z nami */}
      <div className="flex flex-col items-center justify-center md:w-1/3">
        <h4 className="text-base sm:text-lg md:text-xl navText mb-4 text-center">
          Skontaktuj się z nami
        </h4>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Link
            href="https://www.facebook.com/MieczkowskiAtelier"
            target="_blank"
            className="p-2"
          >
            <FaFacebookF
              size={25}
              className="text-white sm:text-30 md:text-35"
            />
          </Link>
          <Link
            href="https://www.instagram.com/mieczkowski_atelier/"
            target="_blank"
            className="p-2"
          >
            <FaInstagram
              size={25}
              className="text-white sm:text-30 md:text-35"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2 mb-2">
          <FaPhone size={20} className="text-white sm:text-25 md:text-30" />
          <p className="text-xs sm:text-sm md:text-base navText">
            +48 668 310 144
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <CiMail size={20} className="text-white sm:text-25 md:text-30" />
          <p className="text-xs sm:text-sm md:text-base navText">
            mieczkowskiatelier@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
