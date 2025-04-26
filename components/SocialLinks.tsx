"use client"

import { useState } from "react";

export function SocialLinks() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <footer className="bg-black py-10 px-4 relative">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center">

        {/* Instagram */}
        <div
          onMouseEnter={() => setHovered("instagram")}
          onMouseLeave={() => setHovered(null)}
          className="relative"
        >
          <a
            href="https://www.instagram.com/agencia_conceito/"
            target="_blank"
            className="text-white font-semibold hover:text-gray-300 transition-colors"
          >
            Instagram
          </a>

          {hovered === "instagram" && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-2 md:p-4 border border-gray-200 rounded-lg w-64 md:w-80 z-50">
              <img src="./instagrampreview.png" alt="Instagram Preview" className="rounded-md w-full h-auto" />
            </div>
          )}
        </div>

        {/* Behance */}
        <div
          onMouseEnter={() => setHovered("behance")}
          onMouseLeave={() => setHovered(null)}
          className="relative"
        >
          <a
            href="https://www.behance.net"
            target="_blank"
            className="text-white font-semibold hover:text-gray-300 transition-colors"
          >
            Behance
          </a>

          {hovered === "behance" && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-2 md:p-4 border border-gray-200 rounded-lg w-64 md:w-[320px] z-50">
              <img src="/previews/behance-preview.png" alt="Behance Preview" className="rounded-md w-full h-auto" />
            </div>
          )}
        </div>

        {/* LinkedIn */}
        <div
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
          className="relative"
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="text-white font-semibold hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>

          {hovered === "linkedin" && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-2 md:p-4 border border-gray-200 rounded-lg w-64 md:w-80 z-50">
              <img src="/previews/linkedin-preview.png" alt="LinkedIn Preview" className="rounded-md w-full h-auto" />
            </div>
          )}
        </div>

        {/* Twitter */}
        <div
          onMouseEnter={() => setHovered("twitter")}
          onMouseLeave={() => setHovered(null)}
          className="relative"
        >
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="text-white font-semibold hover:text-gray-300 transition-colors"
          >
            Twitter
          </a>

          {hovered === "twitter" && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-2 md:p-4 border border-gray-200 rounded-lg w-64 md:w-80 z-50">
              <img src="/previews/twitter-preview.png" alt="Twitter Preview" className="rounded-md w-full h-auto" />
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}
