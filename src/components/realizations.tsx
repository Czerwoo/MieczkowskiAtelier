"use client";

import Image from "next/image";
import realizacja1 from "../../public/img/realizacja1.jpg";
import realizacja2 from "../../public/img/realizacja2.jpg";
import realizacja3 from "../../public/img/realizacja3.jpg";
import realizacja4 from "../../public/img/realizacja4.jpg";

const images = [realizacja1, realizacja2, realizacja3, realizacja4];

export default function Realizations() {
  return (
    <div
      id="realizations"
      className="w-full justify-center px-20 py-10 flex flex-col bg-black text-white"
    >
      <div className="w-full flex flex-col items-center mb-10">
        <h3 className="text-4xl font-bold mb-4">Nasze Realizacje</h3>
        <p className="text-lg">
          Zobacz nasze najnowsze realizacje i przekonaj się o jakości naszych
          usług.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <Image
              src={image}
              alt={`Realization ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
