import Image from "next/image"
import Link from "next/link"
import Header from "../../components/header"
import { SocialLinks } from "../../components/SocialLinks"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white py-12 mt-4">
      <Header />

      <main className="container mx-auto mt-4 px-6 py-12">
        <h1 className="text-5xl font-light mb-12">Portfolio</h1>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { src: "/img1.jpg", title: "Press Garden" },
            { src: "/img2.jpg", title: "Humaniza" },
            { src: "/img3.jpg", title: "Winkelhaus" },
            { src: "/img4.jpg", title: "Carpid" },
            { src: "/img5.jpg", title: "Blend Magazine" },
            { src: "/img6.jpg", title: "Tulipez" },
          ].map((item, idx) => (
            <div key={idx} className="relative overflow-hidden group">
              <Image
                src={item.src}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />

              {/* Overlay que aparece no hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10" />

              {/* Texto que aparece no hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="text-white text-3xl font-light">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Projeto em destaque */}
        <section className="bg-black py-12 md:py-24 relative flex items-center justify-center px-4">
          <div className="w-full max-w-6xl relative rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/videothumb.jpg"
            >
              <source src="/videothumb.jpg" type="image/jpg" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay escurecedor fixo */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Texto sempre visível para o vídeo */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 text-white z-20">
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
      </main>

      <SocialLinks />
    </div>
  )
}