import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    const params = useParams();
    const [proyecto, setProyecto] = useState({})
    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => 
            trabajo.id === params.id
        );
        setProyecto(proyecto)
    }, [])
  return ( 
    <div className='page'>
        <div className='mask'>
        <h1 className='heading'>{proyecto.id}</h1>
        <p>{proyecto.tecnologias}</p>
        </div>
        
    </div>
  )
}
