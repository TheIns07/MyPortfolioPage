import React from 'react'

export const Inicio = () => {
  return (
    <div className='home'>
      <div className='main-section'>
      <div className='myself-photo'>
        <img src={"/images/Myself.jpg"} />
        <img src={"/images/FB_IMG_1580408710397.jpg"} />
        <img src={"/images/20190321_140851.jpg"} />
        <img src={"/images/68ca7042-8919-462e-9dce-8bf9dd45899a.jpg"} />
      </div>
      <div className='text-main-section'>
      <div className="wrapper">
        <div className="static-txt">Hola! Soy </div>
        <div className="words">
          <span>Arturo Cervantes 🧑</span>
          <span>Diseñador Web 🌐 </span>
          <span>Programador Multiplataforma 💾</span>
          <span>Editor Multimedia 📼</span>
        </div>
      </div>
      <h1>
        Soy programador y desarrollador web en el Valle del Yaqui.
        Ofresco mis servicios de <strong>programación y desarrollo</strong> en todo
        tipo de proyectos web, asi como en trabajos de <strong>producción multimedia</strong>.
      </h1>
      <h1>
        Tambien soy gerente de <strong>Agua Purificada ABG</strong> donde realizo trabajos
        comúnes, asi como administración, logistica, entre otros.
      </h1>
      </div>
      </div>
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
