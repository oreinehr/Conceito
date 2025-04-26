"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false) // Scroll para baixo, esconde
      } else {
        setShow(true) // Scroll para cima, mostra
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${show ? 'opacity-100' : 'opacity-0'} bg-black/30 backdrop-blur-md`}>
      <div className="container mx-auto py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-light">conceito</div>
        <nav className="flex items-center gap-6">
          <Link href="/portfolio" className="text-sm hover:text-gray-300 transition-colors">
            Portfolio
          </Link>
          <Link href="/o-que-fazemos" className="text-sm hover:text-gray-300 transition-colors">
            O que fazemos?
          </Link>
          <Link
            href="/contato"
            className="text-sm bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
