import React from 'react'
import '../../Styles/preloader.css'

function Preloader() {
  return (
     <div className="tree-preloader">
      <svg viewBox="0 0 240 300" className="tree-svg">
        {/* Main trunk */}
        <path d="M120 280 L120 240" className="tree-path" />
        <path d="M120 235 L120 200" className="tree-path" />
        <path d="M120 195 L120 160" className="tree-path" />
        <path d="M120 155 L120 120" className="tree-path" />
        <path d="M120 115 L120 80" className="tree-path" />
        <path d="M120 75 L120 40" className="tree-path" />

        {/* Left circuit branches */}
        <path d="M120 240 C100 230, 90 220, 80 200" className="tree-path" />
        <path d="M120 200 C100 190, 90 180, 80 160" className="tree-path" />
        <path d="M120 160 C100 150, 90 140, 80 120" className="tree-path" />

        {/* Right circuit branches */}
        <path d="M120 235 C140 225, 150 215, 160 195" className="tree-path" />
        <path d="M120 195 C140 185, 150 175, 160 155" className="tree-path" />
        <path d="M120 155 C140 145, 150 135, 160 115" className="tree-path" />

        {/* Leaves / End circuit nodes */}
        <circle cx="80" cy="192" r="3" className="leaf" />
        <circle cx="80" cy="159" r="3" className="leaf" />
        <circle cx="80" cy="125" r="3" className="leaf" />
        <circle cx="120" cy="189" r="3" className="leaf" />
        <circle cx="120" cy="156" r="3" className="leaf" />
        <circle cx="120" cy="121" r="3" className="leaf" />

        <circle cx="85" cy="90" r="3" className="leaf" />
        <circle cx="115" cy="90" r="3" className="leaf" />
        <circle cx="87" cy="65" r="3" className="leaf" />
        <circle cx="112" cy="65" r="3" className="leaf" />
        <circle cx="90" cy="40" r="3" className="leaf" />
        <circle cx="110" cy="40" r="3" className="leaf" />
        <circle cx="100" cy="20" r="3" className="leaf" />

        {/* Roots / Base end */}
        <path d="M120 280 C110 290, 100 295, 90 285" className="tree-path" />
        <path d="M120 280 C130 290, 140 295, 150 285" className="tree-path" />
      </svg>
    </div>
  )
}

export default Preloader
