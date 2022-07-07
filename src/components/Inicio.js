import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola! Soy Arturo Cervantes. Desarrollador Web en el Valle del Yaqui
        y te ofresco mis servicios de <strong>programación y desarrollo</strong> en todo
        tipo de proyectos web.
      </h1>
      <h2 className='heading'>
        Genera visibilidad y formalidad a tu empresa o microempresa
        con soluciones de tecnologia y presentaciones empresariales
        acordes a tu estilo de negocio.
      </h2>
      <h2>¿Te interesa saber mas? <Link to = "/portafolio"> Dale Click</Link></h2>
    </div>
  )
}
