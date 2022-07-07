import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <div className='myself-photo'>
      <img src = {"/images/Myself.jpg"}/>
      <img src = {"/images/20200224_075910.jpg"}/>
      <img src = {"/images/FB_IMG_1580408710397.jpg"}/>
      <img src = {"/images/20190321_140851.jpg"}/>
      <img src = {"/images/b252ab9c-6ad7-4f5b-9918-c1e335d68f79.jpg"}/>
      <img src = {"/images/68ca7042-8919-462e-9dce-8bf9dd45899a.jpg"}/>
      </div>
      <h1>
        Hola! Soy Arturo Cervantes. Desarrollador Web en el Valle del Yaqui
         ofresco mis servicios de <strong>programación y desarrollo</strong> en todo
        tipo de proyectos web.
      </h1>
      
      <h1>
        Tambien tengo especialidad en producción multimedia con 
         experiencia
        con trabajos para empresas así como en proyectos personales
      </h1>
      <h2>

      </h2>
      <h3></h3>
      
      <h3 className='heading'>
        Trabajo en generar visibilidad y formalidad a empresas o microempresas
        con soluciones de tecnologia y presentaciones empresariales
        acordes a tu estilo de negocio.
      </h3>
      <h2>¿Te interesa saber mas? Dale click a las palabras claves en color <strong>azul</strong></h2>
    </div>
  )
}
