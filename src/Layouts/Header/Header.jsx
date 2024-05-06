import React from 'react'
import './Header.css'
import { Logo } from '../../UI/Logo/Logo'
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemsNavbar } from '../../UI/ItemsNavbar/ItemsNavbar'
import {Footer} from '../Footer/Footer'
import Imagen from '../../imagenes/WhatsApp Image 2024-05-06 at 11.11.39 AM.jpeg'

export const Header = () => {
  return (
    <header className='header-page'>
      <Logo src={Imagen} style='imagen1'/>
      <h2 className='underline'>Tomas Estrada Ruiz</h2>
    
        <Navbar>
          <ItemsNavbar></ItemsNavbar>
        </Navbar>
        <Logo src='src\imagenes\LogoSena1.png' style='img2'/>
        <Footer/>
    </header>
  )
}
