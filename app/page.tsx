// Supondo que esse arquivo é page.tsx ou page.jsx

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { SocialLinks } from "../components/SocialLinks"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container px-4 py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center">
            <div className="relative w-full h-auto">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto object-contain rounded-xl"
                src="/Comp.mp4"
              >
                <source src="/Comp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="">
        <div className="relative w-full max-w-8xl aspect-video px-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/placeholder.svg?height=&width=600"
          >
            <source src="/Cópia de Comp1_5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Wave Section */}
      <section className="bg-black py-20 relative overflow-hidden w-full">
  <div className="flex flex-row justify-between items-center w-full px-6 md:px-20" style={{ aspectRatio: '16/9' }}>
    
    {/* Texto principal */}
    <div className="flex flex-col text-left z-10">
      <h2 className="text-3xl md:text-7xl font-extralight leading-tight ">
        A água é <br />
        essencial, vital, <br />
        primordial
      </h2>
    </div>

    {/* Texto secundário */}
    <div className="flex flex-col text-left ml-6 md:ml- z-10 ">
      <p className="text-md md:text-4xl font-extralight leading-snug">
        Para uma empresa, <br />
        comunicação também
      </p>
    </div>

    {/* Fundo SVG */}
    <div className="absolute inset-0 opacity-60 -z-0 justify-left">
      <img
        src="./Group.svg"
        alt="Wave Background"
        className="w-full h-full object-fit"
      />
    </div>
  </div>
</section>



      {/* Rebranding Section */}
      <section className="bg-black py-12 md:py-24 relative flex items-center justify-center px-4">
        <div className="w-full max-w-6xl relative rounded-lg overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src="/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Conceito <br /> Rebranding
            </h2>
            <Link
              href="https://www.youtube.com/watch?v=udBknRdZ2YQ"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm bg-white/10 px-6 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              Veja no Youtube
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SocialLinks />
    </main>
  )
}
