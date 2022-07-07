import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
    <h1>Contacto</h1>
    <form className='contact'>
      <input type = "text" placeholder='Nombre'></input>
      <input type = "text" placeholder='Empresa/Organización'></input>
      <input type = "text" placeholder='Correo Electronico'></input>
      <textarea placeholder='Razon del contacto'></textarea>
      <input className='input' type = "submit" value = "Enviar"/>

    </form>
    </div>
  )
}
