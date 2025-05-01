"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react" // Ícone de menu branco (usa lucide)

export default function Header() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "opacity-100" : "opacity-0"
      } ${isMenuOpen ? "bg-black" : "bg-black/30"} backdrop-blur-md`}
    >
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-light text-white">
          conceito
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/portfolio" className="text-sm hover:text-gray-300 transition-colors text-white">
            Portfolio
          </Link>
          <Link href="/quem-somos" className="text-sm hover:text-gray-300 transition-colors text-white">
            Quem Somos?
          </Link>
          <Link
            href="/contato"
            className="text-sm bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Ícone de menu para mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "py-4" : "hidden"
        }`}
      >
        <Link
          href="/portfolio"
          className="text-sm py-2 hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          href="/quem-somos"
          className="text-sm py-2 hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Quem Somos?
        </Link>
        <Link
          href="/contato"
          className="text-sm bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Contato
        </Link>
      </div>
    </header>
  )
}
