import React from 'react'

function Contacto() {
  return (
    <div className='contact'>
        <h2 className='contact__title'>Contacto</h2>
        <p className="contact__copy contact__copy--mb">
        Contestaremos tus dudas lo antes posible
        </p>
        <div className='contact__item'>
          <input type="text" placeholder='Nombre' />
          <input type="email" placeholder='Correo Electronico' />
        </div>
        <div className='contact__item'>
          <input type="tel" placeholder='Telefono' />
          <input type="text" placeholder='Ciudad' />
        </div>
        <textarea cols="30" rows="3"  placeholder='¿Como te enteraste de nosotros?'></textarea>
        <textarea cols="30" rows="3"  placeholder='¿En que podemos ayudarte?'></textarea>
        <input type="submit" value="Enviar" />
    </div>
  )
}

export default Contacto