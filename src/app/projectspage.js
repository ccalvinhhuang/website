import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function ProjectPage() {
  return (
    <main className="flex flex-col bg-black">
      <Navbar />
      <Projects />
    </main>
  );
}
