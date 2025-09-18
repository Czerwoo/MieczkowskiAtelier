"use client";

import Button from "./button";
import Image from "next/image";
import about1 from "../../public/img/about1.jpg";
import about2 from "../../public/img/about2.jpg";


export default function AboutUs() {
  return (
    <>
    <h3 className="text-4xl font-bold mb-4">Peruki i toppery z włosów naturalnych piękno stworzone dla Ciebie!
</h3>
    <div
      id="aboutUs"
      className="w-full justify-center px-6 sm:px-10 md:px-20 py-6 sm:py-10 md:py-20 flex bg-white2 mb-20"
    >
      
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row">
        {/* Tekst */}
        <div className="flex flex-col py-6 sm:py-10 md:py-20 justify-around md:w-1/2">
          
          <h2 className="text-xs sm:text-sm md:text-base">
            </h2>
<p className="text-xs sm:text-sm md:text-base">Marzysz o fryzurze, która będzie wyglądać i układać się jak Twoje własne włosy? Nasze peruki i toppery z naturalnych włosów powstają z dbałością o każdy szczegół. Tworzymy również projekty indywidualne, które dopasowujemy do Twoich potrzeb i stylu tak, abyś czuła się pięknie i pewnie w każdej sytuacji. 

          </p>
        </div>

        {/* Filmy */}
        <div className="flex flex-col md:flex-row items-center justify-around md:w-1/2 gap-4">
          <video
            src="/img/topper1.mov"
            controls
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <video
            src="/img/topper2.mov"
            controls
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    <div
      id="aboutUs"
      className="w-full justify-center px-6 sm:px-10 md:px-20 py-6 sm:py-10 md:py-0 flex bg-white2 mb-20"
    >
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row">
        {/* Tekst */}
        <div className="flex flex-col py-6 sm:py-10 md:py-20 justify-around md:w-1/2">
          
<p className="text-xs sm:text-sm md:text-base">
- 100% naturalne włosy  
- Indywidualny dobór koloru i długości 
- Naturalny wygląd i komfort noszenia 
Ręczne wykonanie To więcej niż peruka to Twoja nowa fryzura, która podkreśli Twoją osobowość.  
Skontaktuj się z nami i stwórz swój wymarzony projekt już dziś!          </p>
        </div>

        {/* Filmy */}
        <div className="flex flex-col md:flex-row items-center justify-around md:w-1/2 gap-4">
          <video
            src="/img/topper3.mov"
            controls
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <video
            src="/img/topper4.mov"
            controls
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </>    
  );
}
