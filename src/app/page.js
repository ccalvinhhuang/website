import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { Container } from 'postcss'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <main className=" bg-black">
      <Navbar />
      <div class = "container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  )
}
