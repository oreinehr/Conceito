  import Image from "next/image"
  import Link from "next/link"
  import { Play } from "lucide-react"
  import { SocialLinks } from "../components/SocialLinks"

  // Importe o componente Header
  import Header from "@/components/header"

  export default function Home() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="container px-0 py-12  ">
    <div className="flex flex-col gap-1">
      <h1 className="text-8xl md:text-7xl lg:text-8xl font-bold">
        <div className="relative w-full h-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto object-contain"
            src="/Comp.mp4"
          >
            <source src="./Comp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </h1>
    </div>
  </section>

        {/* Video Section */}
        <section className="bg-[#fffbe6] py-0 md:py-32 lg:py-0 flex items-center justify-center">
    <div className="relative w-full max-w-10xl aspect-video">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/placeholder.svg?height=&width=600"
      >
        <source src="./Cópia de Comp1_5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>

        {/* Wave Section */}
        <section className="bg-black py-24 relative overflow-hidden">
    <div className="container px-20 flex flex-col md:flex-row justify-between items-center gap-8" style={{ width: '100%', maxWidth: '1920px', aspectRatio: '16/9' }}>
      <div className="max-w-md z-10 mt-16 mb-16">
        <h2 className="text-8xl md:text-6xl font-extralight mb-4 ml-16">A água é </h2>
        <h2 className="text-8xl md:text-6xl font-extralight mb-4 ml-16">essencial, vital,</h2>
        <h2 className="text-8xl md:text-6xl font-extralight ml-16">primordial</h2>
      </div>
      <div className="max-w-md z-10">
        <p className="text-xl md:text-1xl font-extralight mr-16">Para uma empresa,</p>
        <p className="text-xl md:text-1xl font-extralight mr-16">comunicação também</p>
      </div>
      <div className="absolute inset-0 opacity-68">
        <img src="./Group.svg" alt="Wave SVG" className="w- h-full object-fit" />
      </div>
    </div>
  </section>

        {/* Rebranding Section with Wireframe */}
        <section className="bg-black py-12 md:py-24 relative flex items-center justify-center">
    {/* Vídeo ou imagem de fundo */}
    <div className="w-full max-w-6xl relative ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
        poster="/placeholder.svg"
      >
        <source src="./videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      {/* Overlay preto em cima do vídeo */}
      <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

      {/* Conteúdo por cima */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-12 text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
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
