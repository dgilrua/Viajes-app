import React from 'react'

const Form = () => {
  return (
    <div className='md:col-span-3'>
      <form action="">
        <div>
          <label htmlFor="">Nombres</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Apellidos</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Correo electrónico</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Confirme su correo electrónico</label>
          <input type="email" />
        </div>

        <div>
          <label htmlFor="">Contraseña</label>
          <input type="password" />
        </div>

        <div>
          <label htmlFor="">Repetir contraseña</label>
          <input type="password" />
        </div>

        <div>
          <label htmlFor="tipo_documento">Tipo de documento</label>
          <select name="" value="" id="tipo_documento">
            <option value="" disabled>-- Selecciona una opcion --</option>
            <option value="">Tarjeta de identidad</option>
            <option value="">Cedula de ciudadania</option>
            <option value="">Cedula de extrangeria</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Número de documento</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Fecha de nacimiento</label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}

export default Form