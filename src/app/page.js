import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex flex-col bg-black">
      <Navbar />
      <HeroSection />
    </main>
  );
}
