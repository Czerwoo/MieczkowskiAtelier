"use client";

import Button from "./button";
import Image from "next/image";
import about1 from "../../public/img/about1.jpg";
import about2 from "../../public/img/about2.jpg";

export default function AboutUs() {
  return (
    <div
      id="aboutUs"
      className="w-full justify-center px-20 py-3 flex bg-white2 mb-20"
    >
      <div className="w-[80%] flex">
        <div className="flex flex-col py-20 justify-around w-1/2">
          <p className="text-black">
            Ekskluzywna pielęgnacja, perfekcyjna stylizacja
          </p>
          <h3 className="text-3xl font-bold">W Mieczkowski Atelier</h3>
          <p>
            wierzymy, że fryzjerstwo to sztuka, a włosy to płótno, na którym
            tworzymy. Nasz zespół to doświadczeni styliści i kolorzyści, którzy
            regularnie szkolą się u najlepszych ekspertów w branży. Pracujemy na
            prestiżowych produktach, dzięki czemu możemy zapewnić najwyższą
            jakość usług i wyjątkowe efekty. Zapraszamy Cię do świata, w którym
            piękno i precyzja idą w parze z luksusem i komfortem.
          </p>
        </div>
        <div className="flex items-center justify-around w-1/2">
          <Image className="mt-20" src={about1} alt="about1" height={400} />
          <Image src={about2} alt="about2" height={400} />
        </div>
      </div>
    </div>
  );
}
