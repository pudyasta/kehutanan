import Image from "next/image";
import HomeHero from "../../layouts/components/home/HomeHero";
import HomeAgenda from "../../layouts/components/home/HomeAgenda";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAgenda />
    </main>
  );
}
