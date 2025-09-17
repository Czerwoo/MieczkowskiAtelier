"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Justyna",
      text: "Najlepszy fryzjer u jakiego byłam! Profesjonalizm, precyzja i świetna atmosfera, a za każdym razem wychodzę zadowolona. Włosy wyglądają dokładnie tak jak chciałam (a nawet lepiej), do tego relaks, pyszna kawka i rozmowy na najwyższym poziomie. Jeśli szukacie fryzjera, który naprawdę zna się na rzeczy - polecam całym sercem!.",
    },
    {
      name: "Beata",
      text: "Piękny kolor to standard. Do tego atmosfera przyjazda. Jeżeli szukasz takiego miejsca to dobrze trafiłaś!",
    },
    {
      name: "Dominika",
      text: "Profesjonalizm, bardzo dobre kosmetyki i czas realizacji usługi - to wszystko na bardzo wysokim poziomie. Jestem bardzo zadowolona. W Atelier Mieczkowski jestem już któryś raz z kolei i na pewno wrócę",
    },
    {
      name: "Katarzyna",
      text: "Zdecydowanie polecam. Profesjonalna i miła obsługa Pana Krystiana. Pierwszy raz wyszłam z salonu fryzjerskiego w pełni zadowolona. Koloryzacja i strzyżenie w pełni dopasowane do mojej urody!",
    },
    // Add more testimonials here
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
        breakpoint: 600,
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
      className="w-full justify-center px-20 py-10 flex flex-col bg-black text-white"
    >
      <div className="w-full flex flex-col items-center mb-10">
        <h3 className="text-4xl font-bold mb-4">Opinie Klientów</h3>
        <p className="text-lg">
          Zobacz, co nasi klienci mówią o naszych usługach.
        </p>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg mx-4 flex flex-col justify-between h-64 w-full max-w-lg"
          >
            <p className="text-lg italic mb-4">"{testimonial.text}"</p>
            <p className="text-right font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
