import React, { useState } from 'react'

const Buscador = ()=>{

  const [contador, setContador] = useState(0)


  const Sumar = ()=>{
  setContador(contador +1)
  }
  const Restar = ()=>{
    setContador(contador - 1)

    }
    const Reset = ()=>{
      setContador(0)
    
      }
  return(
    <div>
      <h1>{ contador } </h1>
    <button onClick={Sumar}> Sumar </button>
    <button onClick={Restar}> Restar </button>
    <button onClick={Reset}> Reset </button> 
    </div>
  )
}


export default Buscador;