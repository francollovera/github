
import Buscador from './Componentes/Buscador';
import Person from './Componentes/Person';
import Mensaje from './Componentes/Mensaje';
import Prender from './Componentes/Prender';
import jQuery from './Componentes/Jquery';


/* PROPS SIN DESTRUCTURACION:

const Texto = (props)=>{
  return(
      <div> 
        <h2> {props.propiedad} </h2>
      </div>
  )
  
  } */

function App (){ 
  return (
    <div>
     {/*  PROPS SIN DESTRUCTURACION:

      <Texto propiedad = 'yo soy la segunda propiedad'></Texto> */}
      
      <Buscador>
      </Buscador> 
    {/*   PUEDO PASAR UN BULEANO (TRUE O FALSE) PERO TENGO QUE APLICARLO COMO {}*/}
      <Person  nombre = 'Pedro ,' edad ='25' conectado= {true}></Person>

      <Mensaje nombre= 'Juan' edad= '25' estado= 'maraca' conectado= {false}>
        </Mensaje>
       <Mensaje nombre= 'Esteban' edad= '25' estado= 'maraca' conectado= {false}>
        </Mensaje>
      <Mensaje nombre= 'Julieta' edad= '25' estado= 'maraca' conectado= {false}>
      </Mensaje>
      <Prender></Prender>
      <jQuery></jQuery>
      
       
      </div>
  )
}

export default App;