import React from 'react';
/* import App from '../App'; */

const Mensaje = ({nombre, edad, estado})=>{
    return(
        <div>
          <h2>{nombre} {edad} {estado} </h2>
        </div>
    )
    }
export default Mensaje;