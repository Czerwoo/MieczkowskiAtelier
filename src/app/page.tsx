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
      <AboutUs />
      <Realizations />
      {/* <Pricing /> */}
      <Testimonials />
      <Map />
    </main>
  );
}
