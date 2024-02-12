import Fasilitas from "@/components/elements/Fasilitas/Fasilitas";
import Footer from "@/components/elements/Footer/Footer";
import Hero from "@/components/elements/Hero/Hero";
import Kegiatan from "@/components/elements/Kegiatan/Kegiatan";
import Kelas from "@/components/elements/Kelas/Kelas";
import TenatangKami from "@/components/elements/TentangKami/TentangKami";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TenatangKami />
      <Kegiatan />
      <Fasilitas />
      <Kelas />
      <Footer />
    </main>
  );
}
