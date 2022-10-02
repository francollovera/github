import React  from 'react';
import './Person.css'

const Person = ({ nombre, edad }) =>{
    return(
        <div>
        <h1>{nombre } {edad}
        </h1>
        
        </div>
    )
} 





export default Person;