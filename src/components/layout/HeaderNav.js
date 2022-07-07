import React from 'react';
import {NavLink} from 'react-router-dom'

export const HeaderNav = () => {
  return (
   <header>
    <div className='logo'>
      <span>A</span>
    <h1>Arturo Cervantes</h1>
    </div>
    <nav>
      <ul>
          <li>
            <NavLink to = "/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to = "/portafolio">Portafolio</NavLink>
          </li>
          <li>
            <NavLink to = "/servicios">Servicios</NavLink>
          </li>
          <li>
            <NavLink to = "/curriculum">Curriculum</NavLink>
          </li>
          <li>
            <NavLink to = "/contacto">Contacto</NavLink>
          </li>
      </ul>
    </nav>
   </header>
  )
}

export default HeaderNav