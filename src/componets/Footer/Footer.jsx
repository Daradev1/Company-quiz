import React from 'react'
import './Footer.css'
const footer = () => {
  return (
    <div className="bottom">
    <ul>
      <li>  <i className="fab fa-whatsapp"></i>  <a href="https://wa.me/2349133878206" target="_blank" rel="noopener noreferrer" className="nav-link">whatsapp</a></li>
      <li>  <i className="fab fa-instagram"></i> <a href="https://www.instagram.com/master_frosty1?igsh=aXVsN3NzOWk1NnFx" target="_blank" rel="noopener noreferrer" className="nav-link">instagram</a></li>
      <li>  <i className="fab fa-github"></i> <a href="https://github.com/Daradev1" target="_blank" rel="noopener noreferrer" className="nav-link">Daradev</a></li>
    </ul>
    </div>
  )
}

export default footer