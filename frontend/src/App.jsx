import { useState } from 'react'
import './App.css'



function App() {
  const [email,setEmail] = useState ('')
  const [password,setPassword] = useState ('')
  const [mensaje,setMensaje] = useState ('')
  function iniciarSesion (event){
    event.preventDefault()
    fetch ("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then (response => response.json()) .then (data => {
      if( data.message === "Usuario no encontrado"){
        setMensaje("Lo siento, usuario no encontrado")
      } else if( data.message === "Contraseña incorrecta"){
        setMensaje("El usuario o la contraseña incorrecta")
      } else {
        setMensaje("Bienvenido "+ data.username)
      }
    }) .catch (error => console.error(error))
  }
  return (
    <>
    <p>{mensaje} </p>
    <h2>Inicie sesión</h2> 
    <form className='formulario-ingreso' onSubmit={iniciarSesion}>
      <input type='email' placeholder='Ingresa tu correo electronico' value={email} onChange={(event) => setEmail(event.target.value) }/> 
      <input type='password' placeholder='Ingresa tu contraseña' value={password} onChange={(event) => setPassword(event.target.value) }/> 
      <button type='submit'>inicia sesión</button> 
    </form>

    </>
  )
}

export default App
