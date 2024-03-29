import React, { useRef } from 'react'
import axios from 'axios'

const baseURL = "http://localhost:3000/usuarios/registrar"
const Registrar = () => {

  const identificacion = useRef(null)
  const nombre = useRef(null)
  const telefono = useRef(null)
  const correo_electronico = useRef(null)
  const tipo_usuario = useRef(null)
  const password = useRef(null)
  const handle = async (e) => {

    e.preventDefault()
    try {
      const data = {
        identificacion: identificacion.current.value,
        nombre: nombre.current.value,
        telefono: telefono.current.value,
        correo_electronico: correo_electronico.current.value,
        tipo_usuario: tipo_usuario.current.value,
        password: password.current.value
      }
      await axios.post(baseURL, data).then((response) => {
        console.log(response)
        if (response.status == 201) {
          alert('USUARIO CREADO CON EXITO')
        } else {
          alert('NO SE PUDO REGISTRAR EL USUARIO')
        }
      })
    } catch (error) {
      console.log(error)
      alert('hay un error en el sistema ' + error)
    }
  }
  return (
    <div>
      <h1>Registrate</h1>
      <form method='post' onSubmit={handle}>
        <h4>IDENTIFICACION</h4>
        <input type="number" id='identificacion' name='identificacion' placeholder='ingrese su identificacion' ref={identificacion} /><br />
        <h4>TELEFONO</h4>
        <input type="number" id='telefono' name='telefono' placeholder='ingrese su telefono' ref={telefono} /> <br />
        <h4>NOMBRE</h4>
        <input type="text" id='nombre' name='nombre' placeholder='ingrese su nombre' ref={nombre} /> <br />
        <h4>CORREO</h4>
        <input type="email" id='correo_electronico' name='correo_electronico' placeholder='ingrese su correo' ref={correo_electronico} /> <br />
        <h4>SELECCIONE EL TIPO DE USUARIO</h4>
        <select name="tipo_usuario" id="tipo_usuario" ref={tipo_usuario}> <br />
          <option value="caficultor"> Caficultor </option>
          <option value="catador"> Catador </option>
        </select> <br />
        <h4>DIGITE SU CONTRASEÑA</h4>
        <input type="text" id='password' name='password' placeholder='Ingrese contraseña' ref={password} /> <br />
        <button type='submit'>Registrase</button> <br />

      </form>
    </div>
  )
}

export default Registrar