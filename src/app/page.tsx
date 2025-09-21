import AboutUs from "@/components/about_us";
import Baner from "@/components/baner";
import Map from "../components/map";
import Pricing from "@/components/pricing";
import Realizations from "@/components/realizations";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Baner />
      <AboutUs
        header
        title="Ekskluzywna pielęgnacja, perfekcyjna stylizacja"
        description="Marzysz o fryzurze, która będzie wyglądać i układać się jak Twoje
              własne włosy? Nasze peruki i toppery z naturalnych włosów powstają
              z dbałością o każdy szczegół. Tworzymy również projekty
              indywidualne, które dopasowujemy do Twoich potrzeb i stylu tak,
              abyś czuła się pięknie i pewnie w każdej sytuacji."
        src="/img/topper1.mov"
        secondSrc="/img/topper2.mov"
      />
      <AboutUs
        title="Twoje włosy, nasza pasja"
        description={`- 100% naturalne włosy
- Indywidualny dobór koloru i długości
- Naturalny wygląd i komfort noszenia
- Ręczne wykonanie
To więcej niż peruka to Twoja nowa fryzura, która podkreśli Twoją osobowość.
Skontaktuj się z nami i stwórz swój wymarzony projekt już dziś!`}
        src="/img/topper3.mov"
        secondSrc="/img/topper4.mov"
        inverted
      />

      <Realizations />
      {/* <Pricing /> */}
      <Testimonials />
      <Map />
    </main>
  );
}
