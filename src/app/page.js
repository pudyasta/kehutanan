import Image from "next/image";
import HomeHero from "../../layouts/components/home/HomeHero";
import HomeAgenda from "../../layouts/components/home/HomeAgenda";
import HomePartners from "../../layouts/components/home/HomePartners";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAgenda />
      <HomePartners />
    </main>
  );
}
