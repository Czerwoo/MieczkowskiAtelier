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
      className="w-full px-20 h-25 py-3 flex bg-black items-center justify-around"
    >
      <div className="flex items-center justify-around w-1/3">
        <Image src={logo} alt="logo" width={550} height={175} />
      </div>
      <div className="flex flex-col items-center justify-around w-1/3">
        <h4 className="!text-2xl navText ">Umów się na wizytę</h4>
        <Link
          href="https://booksy.com/pl-pl/14111_mieczkowski-atelier_fryzjer_23280_lodz#ba_s=sh_1"
          target="_blank"
          className="p-2"
        >
          <Button className="bg-extension !text-black font-bold">
            Booksy.pl
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-around w-1/3">
        <h4 className="navText">Skontaktuj się z nami</h4>
        <div className="flex items-center justify-center w-full">
          <Link
            href="https://www.facebook.com/MieczkowskiAtelier"
            target="_blank"
            className="p-2"
          >
            <FaFacebookF size={35} color="white" />
          </Link>
          <Link
            href="https://www.instagram.com/mieczkowski_atelier/"
            target="_blank"
            className="p-2"
          >
            <FaInstagram size={35} color="white" />
          </Link>
        </div>
        <div className="flex items-center justify-center w-full">
          <FaPhone size={35} color="white" className="" />{" "}
          <p className="navText p-2">+48 668 310 144</p>
        </div>
        <div className="flex items-center justify-center w-full">
          <CiMail size={35} color="white" />{" "}
          <p className="navText p-2">mieczkowskiatelier@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
