import Header from "@/components/header"
import Image from "next/image"
import { Compass, Network, Users, Award, BarChart3 } from "lucide-react"
import { SocialLinks } from "@/components/SocialLinks"

export default function OQueFazemos() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col space-y-24">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-6 py-10 space-y-24">
        {/* Quem somos */}
        <section>
          <h1 className="text-4xl md:text-5xl font-extralight mb-6">Quem somos</h1>
          <p className="text-lg max-w-3xl">
            Somos uma agência de comunicação com mais de 23 anos de experiência, oferecendo estratégias que impulsionam
            marcas e empresas. Com um portfólio que inclui projetos para mais de 200 clientes, desenvolvemos soluções
            para atender às demandas de mercados dinâmicos, com foco em criatividade, inovação e resultados
            consistentes.
          </p>
        </section>

        {/* O que fazemos */}
        <section>
          <h2 className="text-3xl md:text-5xl font-extralight mb-12">O que fazemos?</h2>

          <div className="mb-12">
            <h3 className="text-xl font-extralight mb-2">Mentoria de ideias 360</h3>
            <p className="text-gray-300 max-w-2xl">
              Explore o potencial da sua marca com sessões de mentoria que ajudam a desenvolver visibilidade e
              estratégias para resultados acelerados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Planejamento estratégico de comunicação</h3>
              <p className="text-gray-300">
                Para ajudar sua entidade para definir objetivos claros e traçar caminhos eficazes. Damos um foco para
                que você alcance resultados consistentes e impulsione seu sucesso.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Planejamento estratégico de comunicação</h3>
              <p className="text-gray-300">
                Para ajudar sua entidade para definir objetivos claros e traçar caminhos eficazes. Como um fio que corre
                para o sucesso, definimos sua estratégia para alcançar o sucesso.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Tráfego pago</h3>
              <p className="text-gray-300">
                Direcione o tráfego de público certo para sua marca com estratégias assertivas de anúncios online.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Produção de vídeos e fotos</h3>
              <p className="text-gray-300">
                Crie narrativas de sua marca com produções audiovisuais que encantam e geram conexões autênticas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Desenvolvimento de landing pages</h3>
              <p className="text-gray-300">
                Capture a atenção do seu cliente com produções digitais que convertem visitantes em leads qualificados.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Identidade visual e rebranding</h3>
              <p className="text-gray-300">
                Crie uma personalidade única e sua marca ou renove sua identidade para conectar sua essência.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Design de embalagens</h3>
              <p className="text-gray-300">Criamos designs que contam histórias e destacam seu produto no mercado.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Assessoria de produção gráfica</h3>
              <p className="text-gray-300">Garantimos qualidade e precisão na produção dos seus materiais impressos.</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-2">Materiais digitais e impressos</h3>
            <p className="text-gray-300 max-w-2xl">
              Desenvolvemos materiais para diversas mídias, catálogos e portfólios que comunicam de forma impactante.
            </p>
          </div>
        </section>

        {/* Por que escolher */}
        <section>
          <h2 className="text-3xl md:text-4xl font-extralight mb-12">Por que escolher a Conceito?</h2>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full">
              <img
        src="./icone1.svg"
        alt="Wave Background"
        className="w-full h-full object-fit"
      />
              </div>
              <p className="text-xl">Expertise em comunicação 360º</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full">
              <img
        src="./Vector-1.svg"
    
        className="w-full h-full object-fit"
      />
              </div>
              <p className="text-xl">Abordagem integrada e estratégica</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full">
              <img
        src="./Vector.svg"
        alt="Wave Background"
        className="w-full h-full object-fit"
      />
              </div>
              <p className="text-xl">Equipe multidisciplinar e criativa</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full">
              <img
        src="./icon-3.svg"
        alt="Wave Background"
        className="w-full h-full object-fit"
      />
              </div>
              <p className="text-xl">Compromisso com a excelência e inovação</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full">
              <img
        src="./Vector-2.svg"
        alt="Wave Background"
        className="w-full h-full object-fit"
      />
              </div>
              <p className="text-xl">Resultados comprovados</p>
            </div>
          </div>
        </section>

        {/* Nossos Clientes */}
        <section className="pb-24">
          <h2 className="text-3xl md:text-4xl font-extralight mb-12">Nossos Clientes</h2>

          <div className="flex flex-wrap gap-8 items-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <Image src="/placeholder.svg?height=60&width=120" alt="Logo Cliente" width={120} height={60} />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <Image src="/placeholder.svg?height=60&width=120" alt="Logo Cliente" width={120} height={60} />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <Image src="/placeholder.svg?height=60&width=120" alt="Logo Cliente" width={120} height={60} />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <SocialLinks />
    </main>
  )
}
