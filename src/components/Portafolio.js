import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'> Portafolio </h1>
      <section className='works'>
      {
        trabajos.map(trabajo => {
          return(
          <article key = {trabajo.id} className="work-item"> 
          <div className='mask'>
            <img src = {"/images/"+trabajo.id+".png"}></img>
          </div> 
            <h2> <Link to = {"/proyecto/"+trabajo.nombre}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
            <span>{trabajo.posicion}</span>
          </article>)
        })
      }
      </section>
    </div>
  )
}
