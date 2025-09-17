"use client";

import Button from "./button";
import Image from "next/image";
import about1 from "../../public/img/about1.jpg";
import about2 from "../../public/img/about2.jpg";

export default function AboutUs() {
  return (
    <div
      id="aboutUs"
      className="w-full justify-center px-6 sm:px-10 md:px-20 py-6 sm:py-10 md:py-20 flex bg-white2 mb-20"
    >
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row">
        {/* Tekst */}
        <div className="flex flex-col py-6 sm:py-10 md:py-20 justify-around md:w-1/2">
          <p className="text-black text-sm sm:text-base md:text-lg">
            Ekskluzywna pielęgnacja, perfekcyjna stylizacja
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            W Mieczkowski Atelier
          </h3>
          <p className="text-xs sm:text-sm md:text-base">
            Wierzymy, że fryzjerstwo to sztuka, a włosy to płótno, na którym
            tworzymy. Nasz zespół to doświadczeni styliści i kolorzyści, którzy
            regularnie szkolą się u najlepszych ekspertów w branży. Pracujemy na
            prestiżowych produktach, dzięki czemu możemy zapewnić najwyższą
            jakość usług i wyjątkowe efekty. Zapraszamy Cię do świata, w którym
            piękno i precyzja idą w parze z luksusem i komfortem.
          </p>
        </div>

        {/* Obrazy */}
        <div className="flex items-center justify-around md:w-1/2 flex-wrap gap-4">
          <Image
            className="mt-6 sm:mt-10 md:mt-20 rounded-lg"
            src={about1}
            alt="about1"
            height={300}
            width={200}
          />
          <Image
            className="rounded-lg"
            src={about2}
            alt="about2"
            height={300}
            width={200}
          />
        </div>
      </div>
    </div>
  );
}
