import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = () => {
  return (
      <section className='works'>
      {
        trabajos.map(trabajo => {
          return(
          <article key = {trabajo.id} className="work-item"> 
          <div className='mask'>
            <img src = {"/images/"+trabajo.id+".png"}/>
          </div>
            <h2> <Link to = {"/proyecto/"+trabajo.nombre}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
            <span>{trabajo.posicion}</span>
            <input className='input' type = "submit" target = "_blank"></input>
          </article>)
        })
      }
      </section>
  )
}
