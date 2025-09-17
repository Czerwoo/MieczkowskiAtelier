"use client";

import Slider from "react-slick";
import Image from "next/image";
import background2 from "../../public/img/baner2.jpg";
import background1 from "../../public/img/baner.jpg";

export default function Baner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden pt-25">
      {" "}
      <Slider {...settings}>
        <div className="relative w-full h-screen">
          <Image
            src={background1}
            alt="Background 1"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">
                Twoje włosy w najlepszych rękach
              </h2>
              <h1 className="text-6xl font-bold mb-4">OSIĄGNIJ CEL</h1>
              <p className="text-lg">
                Zadbamy o odpowiednią pielęgnację i stylizację Twoich włosów.
              </p>
            </div>
            <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              ZAREZERWUJ
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around p-4 bg-black bg-opacity-75 text-white">
            <div className="flex items-center">
              <span className="material-icons mr-2">Lokalizacja</span>
              <p>Łucji 4, 91-491 Łódź</p>
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-2">Telefon</span>
              <p>668 310 144</p>
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-2">Godziny otwarcia</span>
              <p>Poniedziałek - Piątek: 10:00 - 19:00, Sobota 10:00 - 14:00</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-screen">
          <Image
            src={background2}
            alt="Background 2"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">
                KAŻDY DETAL TWORZY TWÓJ STYL
              </h2>
              <h1 className="text-6xl font-bold mb-4">
                ZADBAMY WŁAŚNIE O CIEBIE
              </h1>
              <p className="text-lg">
                Styl to nie tylko ubranie, ale również fryzura i makijaż.
                Zadbamy o każdy detal, abyś czuła się wyjątkowo w każdej
                sytuacji.
              </p>
            </div>
            <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              ZAREZERWUJ
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around p-4 bg-black bg-opacity-75 text-white">
            <div className="flex items-center">
              <span className="material-icons mr-2">Lokalizacja</span>
              <p>Drewnowska 102, 91-008 Łódź</p>
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-2">Telefon</span>
              <p>668 310 144</p>
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-2">Godziny otwarcia</span>
              <p>Poniedziałek - Piątek: 10:00 - 19:00, Sobota 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
