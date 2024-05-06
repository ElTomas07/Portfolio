import React from 'react'
import { Logo } from '../Logo/Logo'
import './Experience.css'
import Imagen from '../../imagenes/React.png'
import Imagen2 from '../../imagenes/barra1.png'
import Imagen3 from '../../imagenes/Nodejs.png'
import Imagen4 from '../../imagenes/MongoDB.png'
import Imagen5 from '../../imagenes/barra3.png'
import Imagen6 from '../../imagenes/Java.png'
import Imagen7 from '../../imagenes/barra4.png'


export const Experience = () => {
  return (
    <div className='containerExperience'>
        <div className='containerEx'>
        <Logo src={Imagen} className='img7 '/>
        <Logo src={Imagen2} className='barras'/>
        <h2 className='pExperience'>Bases</h2>
        </div>
        <div className='containerEx'>
        <Logo src={Imagen3} className='img7 '/>
        <Logo src={Imagen2} className='barras'/>
        <h2 className='pExperience'>Bases</h2>
        </div>
        <div className='containerEx'>
        <Logo src={Imagen4} className='img7 '/>
        <Logo src={Imagen5} className='barras'/>
        <h2 className='pExperience'>Intermedio</h2>
        </div>
        <div className='containerEx'>
        <Logo src={Imagen6} className='img7 '/>
        <Logo src={Imagen7} className='barras'/>
        <h2 className='pExperience'>Avanzado</h2>
        </div>
        
    </div>
      
  )
}
