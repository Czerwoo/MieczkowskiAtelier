"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Justyna",
      text: "Najlepszy fryzjer u jakiego byłam! Profesjonalizm, precyzja i świetna atmosfera, a za każdym razem wychodzę zadowolona. Włosy wyglądają dokładnie tak jak chciałam (a nawet lepiej), do tego relaks, pyszna kawka i rozmowy na najwyższym poziomie. Jeśli szukacie fryzjera, który naprawdę zna się na rzeczy - polecam całym sercem!",
    },
    {
      name: "Beata",
      text: "Piękny kolor to standard. Do tego atmosfera przyjazna. Jeżeli szukasz takiego miejsca to dobrze trafiłaś!",
    },
    {
      name: "Dominika",
      text: "Profesjonalizm, bardzo dobre kosmetyki i czas realizacji usługi - to wszystko na bardzo wysokim poziomie. Jestem bardzo zadowolona. W Atelier Mieczkowski jestem już któryś raz z kolei i na pewno wrócę.",
    },
    {
      name: "Katarzyna",
      text: "Zdecydowanie polecam. Profesjonalna i miła obsługa Pana Krystiana. Pierwszy raz wyszłam z salonu fryzjerskiego w pełni zadowolona. Koloryzacja i strzyżenie w pełni dopasowane do mojej urody!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="testimonials"
      className="w-full justify-center px-6 sm:px-10 md:px-20 py-10 flex flex-col bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="w-full flex flex-col items-center mb-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Opinie Klientów
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-center">
          Zobacz, co nasi klienci mówią o naszych usługach.
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-xl shadow-xl mx-4 sm:mx-6 md:mx-8 flex flex-col justify-between h-80 sm:h-80 md:h-[20rem] max-w-full md:max-w-[500px] mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl italic mb-6 line-clamp-6">
              "{testimonial.text}"
            </p>
            <p className="text-right font-bold text-sm sm:text-base md:text-lg">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
