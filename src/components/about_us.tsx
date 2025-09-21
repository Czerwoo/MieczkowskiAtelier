"use client";

import Button from "./button";
import Image from "next/image";

interface AboutUsData {
  header?: boolean; // Decyduje, czy nagłówek ma się pojawić
  headerText?: string; // Tekst nagłówka
  title?: string; // Tytuł w kafelku
  description?: string; // Opis w kafelku
  inverted?: boolean; // Odwrócony układ
  src?: string; // Źródło pierwszego wideo/obrazu
  secondSrc?: string; // Źródło drugiego wideo/obrazu
}

export default function AboutUs({
  header,
  headerText,
  title,
  description,
  inverted,
  src,
  secondSrc,
}: AboutUsData) {
  return (
    <>
      <div className="w-full flex flex-col justify-center py-8 items-center text-center">
        {header && <h3 className="text-4xl font-bold text-center">O nas</h3>}
      </div>
      <div
        id="aboutUs"
        className="w-full justify-center pb-1 sm:px-5  sm:pb-1  flex bg-white2 mb-5"
      >
        <div
          className={`w-full max-w-screen-xl flex flex-col md:flex-row ${
            inverted ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Tekst */}
          <div className="flex flex-col py-6 sm:py-10 md:py-20 justify-around md:w-1/2">
            {header && (
              <h2 className="text-lg sm:text-xl md:text-2xl  font-bold mb-4">
                {headerText}
              </h2>
            )}
            {title && (
              <h3 className="text-base sm:text-lg md:text-xl m-8 font-semibold mb-4">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm sm:text-base md:text-lg m-8 whitespace-pre-line">
                {description}
              </p>
            )}
          </div>

          {/* Obrazy lub filmy */}
          <div className="flex flex-col md:flex-row items-center justify-around md:w-1/2 gap-4">
            {src && (
              <video
                src={src}
                controls
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
            )}
            {secondSrc && (
              <video
                src={secondSrc}
                controls
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
