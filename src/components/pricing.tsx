"use client";

import Image from "next/image";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import about1 from "../../public/img/about1.jpg";
import about2 from "../../public/img/about2.jpg";

const services = [
  {
    category: "SOMBRE/OMBRE BEZ ROZJAŚNIANIA",
    items: [
      {
        name: "Ombre/Sombre koloryzacja włosy średnie",
        description:
          "Cena obejmuje koloryzacje podstawową bez rozjaśniania, naturalną pielęgnację dobraną indywidualnie, strzyżenie oraz modelowanie.",
        price: "430,00 zł+",
        duration: "3g",
      },
      {
        name: "Ombre/Sombre koloryzacja włosy długie",
        description:
          "Cena obejmuje koloryzacje podstawową bez rozjaśniania , naturalną pielęgnację dobraną indywidualnie, strzyżenie oraz modelowanie.",
        price: "470,00 zł+",
        duration: "3g 15min",
      },
    ],
  },
  {
    category: "SOMBRE/OMBRE/BALEYAGE",
    items: [
      {
        name: "Włosy krótkie sombre/ombre/baleyage",
        description:
          "Cena obejmuje rozjaśnianie włosów, koloryzacje wstępną, koloryzacje końcową, podstawową, naturalną pielęgnację dobraną indywidualnie oraz modelowanie. W cenie zawarte jest również strzyżenie.",
        price: "470,00 zł+",
        duration: "3g",
      },
      {
        name: "Włosy średnie sombre/ombre/baleyage",
        description:
          "Cena obejmuje rozjaśnianie włosów, koloryzacje wstępną, koloryzacje końcową, podstawową, naturalną pielęgnację dobraną indywidualnie oraz modelowanie. W cenie zawarte jest również strzyżenie.",
        price: "520,00 zł+",
        duration: "3g 30min",
      },
      {
        name: "Włosy długie sombre/ombre/baleyage",
        description:
          "Cena obejmuje rozjaśnianie włosów, koloryzacje wstępną, koloryzacje końcową, podstawową, naturalną pielęgnację dobraną indywidualnie oraz modelowanie. W cenie zawarte jest również strzyżenie.",
        price: "570,00 zł+",
        duration: "3g 30min",
      },
    ],
  },
  {
    category: "STRZYŻENIE",
    items: [
      {
        name: "Strzyżenie damskie włosy krótkie",
        description:
          "Cena obejmuje strzyżenie, podstawową pielęgnację, modelowanie",
        price: "110,00 zł+",
        duration: "1g",
      },
      {
        name: "Strzyżenie damskie włosy średniej długości",
        description:
          "Cena obejmuje strzyżenie, podstawową pielęgnację, modelowanie",
        price: "130,00 zł+",
        duration: "1g",
      },
      {
        name: "Strzyżenie damskie włosy długie",
        description:
          "Cena obejmuje strzyżenie, podstawową pielęgnację, modelowanie",
        price: "160,00 zł+",
        duration: "1g",
      },
      {
        name: "Strzyżenie damskie włosy bardzo długie",
        description:
          "Cena obejmuje strzyżenie, podstawową pielęgnację, modelowanie",
        price: "190,00 zł+",
        duration: "1g",
      },
      {
        name: "Strzyżenie grzywki",
        description: "",
        price: "30,00 zł",
        duration: "10min",
      },
      {
        name: "Modelowanie",
        description: "",
        price: "100,00 zł+",
        duration: "1g",
      },
    ],
  },
  {
    category: "POZOSTAŁE",
    items: [
      {
        name: "Dekoloryzacja konsultacje",
        description: "",
        price: "-",
        duration: "15min",
      },
      {
        name: "Konsultacje",
        description: "",
        price: "-",
        duration: "25min",
      },
    ],
  },
];

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="w-full justify-center px-20 py-3 flex bg-white2 mb-20"
    >
      <div className="w-[80%] flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-4">Usługi</h1>
        <Tabs>
          <TabList>
            {services.map((serviceCategory, index) => (
              <Tab key={index}>{serviceCategory.category}</Tab>
            ))}
          </TabList>

          {services.map((serviceCategory, index) => (
            <TabPanel key={index}>
              {serviceCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded-lg"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{item.price}</p>
                    <p className="text-gray-600">{item.duration}</p>
                    <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded mt-2">
                      <Link
                        href="https://booksy.com/pl-pl/14111_mieczkowski-atelier_fryzjer_23280_lodz#ba_s=seo"
                        target="_blank"
                      >
                        Umów
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
