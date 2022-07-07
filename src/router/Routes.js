import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Portafolio } from '../components/Portafolio'
import { Contacto } from '../components/Contacto'
import { Servicios } from '../components/Servicios'
import { Curriculum } from '../components/Curriculum'
import { Inicio } from '../components/Inicio'
import { Footer } from '../components/layout/footer'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Proyecto } from '../components/Proyecto'


export const MyRoutes = () => {
  return (
    <BrowserRouter>
    {/*Header y navegación*/}
      <HeaderNav />
    {/*Contenido Central*/}
    <section className='content'>
    <Routes>
        <Route path="/" className = {({isActive}) => isActive ? "active": ""} element={<Inicio />} />
        <Route path="/portafolio" className = {({isActive}) => isActive ? "active": ""} element={<Portafolio />} />
        <Route path="/servicios" className = {({isActive}) => isActive ? "active": ""} element={<Servicios />} />
        <Route path="/curriculum" className = {({isActive}) => isActive ? "active": ""} element={<Curriculum />} />
        <Route path="/contacto" className = {({isActive}) => isActive ? "active": ""} element={<Contacto />} />
        <Route path="/proyecto/:id" element={<Proyecto />} />
        <Route path="*" element={
          <div className='page'>
            <h1 className='heading'>Error 404</h1>
          </div>
        
        } />
      </Routes>
    </section>
      
      <hr></hr>
      {/*Footer*/}
      <Footer />

    </BrowserRouter>
  )
}
