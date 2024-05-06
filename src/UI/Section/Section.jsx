import { Logo } from '../Logo/Logo'
import Image from '../../imagenes/LogoSena1.png'

import './Section.css'

export const Section = ({h2}) => {
  return (
    <section className='section-ui'>
    <Logo src={Image} style='img3'/>
    <h2 className='section-text'>{h2}</h2>
    </section>
   

  )
}
