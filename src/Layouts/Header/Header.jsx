import React from 'react'
import './Header.css'
import { Logo } from '../../UI/Logo/Logo'
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemsNavbar } from '../../UI/ItemsNavbar/ItemsNavbar'
import {Footer} from '../Footer/Footer'
import Imagen from '../../imagenes/Sin título.jpg'
import Imagen2 from '../../imagenes/LogoSena1.png'

export const Header = () => {
  return (
    <header className='header-page'>
      <Logo src={Imagen} style='imagen1'/>
      <h2 className='underline'>Tomas Estrada Ruiz</h2>
    
        <Navbar>
          <ItemsNavbar></ItemsNavbar>
        </Navbar>
        <Logo src={Imagen2} style='img2'/>
        <Footer/>
    </header>
  )
}
