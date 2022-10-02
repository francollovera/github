import React  from 'react';
import { useState, useEffect } from 'react';

const Prender = ()=>{

    const [stateCar, setStateCar] = useState(false);
    const [contar, setContar] = useState(0);
    
    const EncenderApagar = ()=>{
        setStateCar(!stateCar)
        setContar(contar +1)
    }
    useEffect(() => { /* SE EJECUTA CADA VEZ QUE SE RENDERIZA LA PAGINA */
      return () => { 
console.log(contar)
      }
    }, [contar])
    


return(
    <div>
       <h3>El coche esta: {stateCar ? 'encendido' : 'apagado' }</h3>
       <h4>
        clicks : {contar}
       </h4>
       <button onClick={EncenderApagar}> Encender/Apagar </button>
    </div>
)

}
export default Prender;