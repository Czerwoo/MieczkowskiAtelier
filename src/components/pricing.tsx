"use client";

import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
        price: "140,00 zł+",
        duration: "1g",
      },
      {
        name: "Strzyżenie damskie włosy średniej długości",
        description:
          "Cena obejmuje strzyżenie, podstawową pielęgnację, modelowanie",
        price: "150,00 zł+",
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
    category: "DEKOLORYZACJA",
    items: [
      {
        name: "Dekoloryzacja konsultacje",
        description: "",
        price: "-",
        duration: "15min",
      },
      {
        name: "Włosy krótkie (Pierwsza wizyta konsultacje)",
        description:
          "Marzysz o zmianie koloru, ale na Twoich włosach wciąż widoczny jest ciemny pigment? Dekoloryzacja to proces usuwania sztucznego koloru z włosów – krok niezbędny przed rozjaśnianiem lub przejściem na jaśniejszy odcień. Stosujemy profesjonalne, jak najmniej inwazyjne preparaty, by zadbać o kondycję włosów na każdym etapie. (Zabieg zawsze poprzedzony jest konsultacją i oceną stanu włosów. Pierwsza wizyta KONSULTACJE) Efekt: usunięcie niechcianego pigmentu i przygotowanie włosów do dalszej koloryzacji. Dla kogo: dla osób, które chcą przejść z ciemnego koloru na jaśniejszy lub całkowicie zmienić odcień",
        price: "-",
        duration: "15min",
      },
      {
        name: "Włosy średnie (Pierwsza wizyta konsultacje)",
        description:
          "Marzysz o zmianie koloru, ale na Twoich włosach wciąż widoczny jest ciemny pigment? Dekoloryzacja to proces usuwania sztucznego koloru z włosów – krok niezbędny przed rozjaśnianiem lub przejściem na jaśniejszy odcień. Stosujemy profesjonalne, jak najmniej inwazyjne preparaty, by zadbać o kondycję włosów na każdym etapie. (Zabieg zawsze poprzedzony jest konsultacją i oceną stanu włosów. Pierwsza wizyta KONSULTACJE) Efekt: usunięcie niechcianego pigmentu i przygotowanie włosów do dalszej koloryzacji. Dla kogo: dla osób, które chcą przejść z ciemnego koloru na jaśniejszy lub całkowicie zmienić odcień",
        price: "-",
        duration: "15min",
      },
      {
        name: "Włosy długie (Pierwsza wizyta konsultacje)",
        description:
          "Marzysz o zmianie koloru, ale na Twoich włosach wciąż widoczny jest ciemny pigment? Dekoloryzacja to proces usuwania sztucznego koloru z włosów – krok niezbędny przed rozjaśnianiem lub przejściem na jaśniejszy odcień. Stosujemy profesjonalne, jak najmniej inwazyjne preparaty, by zadbać o kondycję włosów na każdym etapie. (Zabieg zawsze poprzedzony jest konsultacją i oceną stanu włosów. Pierwsza wizyta KONSULTACJE) Efekt: usunięcie niechcianego pigmentu i przygotowanie włosów do dalszej koloryzacji. Dla kogo: dla osób, które chcą przejść z ciemnego koloru na jaśniejszy lub całkowicie zmienić odcień",
        price: "-",
        duration: "15min",
      },
    ],
  },
  {
    category: "NATURALNA PIELĘGNACJA",
    items: [
      {
        name: "Intensywne odżywianie",
        description:
          "Cena obejmuje rytuał odżywczy naturalnymi i ekologicznymi kosmetykami oraz modelowanie włosów.",
        price: "150,00 zł+",
        duration: "1g 15min",
      },
      {
        name: "Zabieg odmładzający włosy (PREMIUM) włosy długie",
        description:
          "Cena obejmuje rytuał oczyszczający naturalnymi i ekologicznymi kosmetykami oraz modelowanie włosów.",
        price: "210,00 zł+",
        duration: "1g 30min",
      },
      {
        name: "Zabieg odmładzający włosy (PREMIUM) włosy krótkie",
        description:
          "Cena obejmuje rytuał regenerujący naturalnymi i ekologicznymi kosmetykami oraz modelowanie włosów.",
        price: "150,00 zł+",
        duration: "1g 30min",
      },
      {
        name: "Zabieg odmładzający włosy (PREMIUM) włosy średnie",
        description:
          "Cena obejmuje rytuał regenerujący naturalnymi i ekologicznymi kosmetykami oraz modelowanie włosów.",
        price: "180,00 zł+",
        duration: "1g 30min",
      },
    ],
  },
  {
    category: "UZUPEŁNIENIE ODROSTU BLOND (Total Blond)",
    items: [
      {
        name: "Dekoloryzacja odrostu + koloryzacja włosy krótkie",
        description:
          "Twoje blond marzenie wymaga regularnej pielęgnacji? Ta usługa jest dla Ciebie! Uzupełnienie odrostu w odcieniu total blond to precyzyjne rozjaśnienie i wyrównanie koloru przy nasadzie, dzięki czemu całość wygląda świeżo, jednolicie i perfekcyjnie. Stosujemy profesjonalne produkty chroniące strukturę włosa, aby uzyskać piękny, czysty blond. Efekt: jednolity, jasny blond bez widocznych odrostów. Dla kogo: dla osób, które noszą jednolity blond i chcą zachować idealny kolor na całej długości",
        price: "430,00 zł+",
        duration: "2g 30min",
      },
      {
        name: "Dekoloryzacja odrostu + koloryzacja włosy średnie",
        description:
          "Twoje blond marzenie wymaga regularnej pielęgnacji? Ta usługa jest dla Ciebie! Uzupełnienie odrostu w odcieniu total blond to precyzyjne rozjaśnienie i wyrównanie koloru przy nasadzie, dzięki czemu całość wygląda świeżo, jednolicie i perfekcyjnie. Stosujemy profesjonalne produkty chroniące strukturę włosa, aby uzyskać piękny, czysty blond. Efekt: jednolity, jasny blond bez widocznych odrostów. Dla kogo: dla osób, które noszą jednolity blond i chcą zachować idealny kolor na całej długości",
        price: "470,00 zł+",
        duration: "3g",
      },
      {
        name: "Dekoloryzacja odrostu + koloryzacja włosy długie",
        description:
          "Twoje blond marzenie wymaga regularnej pielęgnacji? Ta usługa jest dla Ciebie! Uzupełnienie odrostu w odcieniu total blond to precyzyjne rozjaśnienie i wyrównanie koloru przy nasadzie, dzięki czemu całość wygląda świeżo, jednolicie i perfekcyjnie. Stosujemy profesjonalne produkty chroniące strukturę włosa, aby uzyskać piękny, czysty blond. Efekt: jednolity, jasny blond bez widocznych odrostów. Dla kogo: dla osób, które noszą jednolity blond i chcą zachować idealny kolor na całej długości",
        price: "520,00 zł+",
        duration: "3g",
      },
    ],
  },
  {
    category: "UZUPEŁNIENIE ODROSTU BLOND (Total Blond)",
    items: [
      {
        name: "Dekoloryzacja odrostu + koloryzacja włosy krótkie",
        description:
          "Twoje blond marzenie wymaga regularnej pielęgnacji? Ta usługa jest dla Ciebie! Uzupełnienie odrostu w odcieniu total blond to precyzyjne rozjaśnienie i wyrównanie koloru przy nasadzie, dzięki czemu całość wygląda świeżo, jednolicie i perfekcyjnie. Stosujemy profesjonalne produkty chroniące strukturę włosa, aby uzyskać piękny, czysty blond. Efekt: jednolity, jasny blond bez widocznych odrostów. Dla kogo: dla osób, które noszą jednolity blond i chcą zachować idealny kolor na całej długości",
        price: "430,00 zł+",
        duration: "2g 30min",
      },
      {
        name: "Dekoloryzacja odrostu + koloryzacja włosy średnie",
        description:
          "Twoje blond marzenie wymaga regularnej pielęgnacji? Ta usługa jest dla Ciebie! Uzupełnienie odrostu w odcieniu total blond to precyzyjne rozjaśnienie i wyrównanie koloru przy nasadzie, dzięki czemu całość wygląda świeżo, jednolicie i perfekcyjnie. Stosujemy profesjonalne produkty chroniące strukturę włosa, aby uzyskać piękny, czysty blond. Efekt: jednolity, jasny blond bez widocznych odrostów. Dla kogo: dla osób, które noszą jednolity blond i chcą zachować idealny kolor na całej długości",
        price: "470,00 zł+",
        duration: "3g",
      },
      {
        name: "Dekoloryzacja odrostu + koloryzacja włosy długie",
        description:
          "Twoje blond marzenie wymaga regularnej pielęgnacji? Ta usługa jest dla Ciebie! Uzupełnienie odrostu w odcieniu total blond to precyzyjne rozjaśnienie i wyrównanie koloru przy nasadzie, dzięki czemu całość wygląda świeżo, jednolicie i perfekcyjnie. Stosujemy profesjonalne produkty chroniące strukturę włosa, aby uzyskać piękny, czysty blond. Efekt: jednolity, jasny blond bez widocznych odrostów. Dla kogo: dla osób, które noszą jednolity blond i chcą zachować idealny kolor na całej długości",
        price: "520,00 zł+",
        duration: "3g",
      },
    ],
  },
  {
    category: "KOLORYZACJA WIELOTONOWA sombre, baleyage, reflesy",
    items: [
      {
        name: "Włosy krótkie (sombre, baleyage, refleksy)",
        description:
          "Chcesz głębi, blasku i efektu naturalnych refleksów? Koloryzacja wielotonowa to technika, która łączy kilka odcieni farb, tworząc trójwymiarowy, wielowymiarowy efekt na włosach. Dzięki grze światła i cieni włosy wyglądają na gęstsze, bardziej lśniące i pełne życia. To idealna opcja dla osób, które chcą subtelnej zmiany, ale z wyraźnym efektem “wow”! Dostosujemy odcienie indywidualnie do Twojej urody, stylu i kondycji włosów. ( Baleyage, refleksy, sombre, front blond )",
        price: "470,00 zł+",
        duration: "3g",
      },
      {
        name: "Włosy średnie (sombre, baleyage, refleksy)",
        description:
          "Chcesz głębi, blasku i efektu naturalnych refleksów? Koloryzacja wielotonowa to technika, która łączy kilka odcieni farb, tworząc trójwymiarowy, wielowymiarowy efekt na włosach. Dzięki grze światła i cieni włosy wyglądają na gęstsze, bardziej lśniące i pełne życia. To idealna opcja dla osób, które chcą subtelnej zmiany, ale z wyraźnym efektem “wow”! Dostosujemy odcienie indywidualnie do Twojej urody, stylu i kondycji włosów. ( Baleyage, refleksy, sombre, front blond )",
        price: "550,00 zł+",
        duration: "3g 30min",
      },
      {
        name: "Włosy długie (sombre, baleyage, refleksy)",
        description:
          "Chcesz głębi, blasku i efektu naturalnych refleksów? Koloryzacja wielotonowa to technika, która łączy kilka odcieni farb, tworząc trójwymiarowy, wielowymiarowy efekt na włosach. Dzięki grze światła i cieni włosy wyglądają na gęstsze, bardziej lśniące i pełne życia. To idealna opcja dla osób, które chcą subtelnej zmiany, ale z wyraźnym efektem “wow”! Dostosujemy odcienie indywidualnie do Twojej urody, stylu i kondycji włosów. ( Baleyage, refleksy, sombre, front blond )",
        price: "650,00 zł+",
        duration: "4g",
      },
    ],
  },
  {
    category: "KOLORYZACJA JEDNOTONOWA",
    items: [
      {
        name: "Włosy krótkie",
        description:
          "Klasyka, która nigdy nie wychodzi z mody! Koloryzacja jednolita to farbowanie całych włosów jednym, równomiernym kolorem – bez rozjaśniania, refleksów czy cieniowania. Idealne rozwiązanie dla osób, które chcą zmienić lub odświeżyć swój kolor, wyrównać ton na całej długości lub skutecznie pokryć siwe włosy. Dobierzemy odcień indywidualnie do Twojego typu urody i kondycji włosów. Efekt: głęboki, jednolity kolor – pełen blasku i świeżości. Dla kogo: dla każdego, kto ceni sobie prostotę, elegancję i łatwą pielęgnację",
        price: "270,00 zł+",
        duration: "2g",
      },
      {
        name: "Włosy średnie",
        description:
          "Klasyka, która nigdy nie wychodzi z mody! Koloryzacja jednolita to farbowanie całych włosów jednym, równomiernym kolorem – bez rozjaśniania, refleksów czy cieniowania. Idealne rozwiązanie dla osób, które chcą zmienić lub odświeżyć swój kolor, wyrównać ton na całej długości lub skutecznie pokryć siwe włosy. Dobierzemy odcień indywidualnie do Twojego typu urody i kondycji włosów. Efekt: głęboki, jednolity kolor – pełen blasku i świeżości. Dla kogo: dla każdego, kto ceni sobie prostotę, elegancję i łatwą pielęgnację",
        price: "320,00 zł+",
        duration: "2g 30min",
      },
      {
        name: "Włosy długie",
        description:
          "Klasyka, która nigdy nie wychodzi z mody! Koloryzacja jednolita to farbowanie całych włosów jednym, równomiernym kolorem – bez rozjaśniania, refleksów czy cieniowania. Idealne rozwiązanie dla osób, które chcą zmienić lub odświeżyć swój kolor, wyrównać ton na całej długości lub skutecznie pokryć siwe włosy. Dobierzemy odcień indywidualnie do Twojego typu urody i kondycji włosów. Efekt: głęboki, jednolity kolor – pełen blasku i świeżości. Dla kogo: dla każdego, kto ceni sobie prostotę, elegancję i łatwą pielęgnację",
        price: "370,00 zł+",
        duration: "2g 30min",
      },
    ],
  },
  {
    category: "KOLORYZACJA PREMIUM AIR TOUCH",
    items: [
      {
        name: "OLAPLEX (dodatek do koloryzacji lub rozjaśniania)",
        description:
          "Zadbaj o kondycję swoich włosów podczas koloryzacji! Olaplex to innowacyjny system odbudowujący mostki siarczkowe wewnątrz włosa, które ulegają zniszczeniu podczas zabiegów chemicznych. Dodanie Olaplexu do farby chroni włosy, wzmacnia je i zapobiega łamliwości. Idealny wybór dla osób rozjaśniających lub farbujących włosy regularnie. Zalecany jako dodatek do koloryzacji lub rozjaśniania.",
        price: "70,00 zł+",
        duration: "5min",
      },
      {
        name: "Koloryzacja AIR TOUCH włosy średnie długości",
        description:
          "Koloryzacja AirTouch to nowoczesna technika farbowania włosów przy użyciu strumienia powietrza, która daje bardzo naturalny efekt przejścia kolorów.",
        price: "750,00 zł+",
        duration: "4g 30min",
      },
      {
        name: "Koloryzacja AIR TOUCH włosy długie",
        description:
          "KKoloryzacja AirTouch to nowoczesna technika farbowania włosów przy użyciu strumienia powietrza, która daje bardzo naturalny efekt przejścia kolorów.",
        price: "850,00 zł+",
        duration: "5g",
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
