import React  from 'react';
import { useState, useEffect} from 'react';

function Api (){

  const [user, setUser] = useState(null)
  
  useEffect(() => {
   fetch('https://api.randomuser.me/')
   .then((res) => res.json())
   .then((data) =>{ 
    console.log(data);
    
    const userData = {
      name: data.results[0].name.firts , 
      email : data.results[0].email ,
      picture: data.results[0].picture.thumbnail,

    };
    setUser(userData)
   
   })
  }, [])
  

  
return(
    <div>
     {/* {user ? (
       <div> */}
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <picture>{user.picture}</picture>
       </div>
     /* ) : null} */
    
  
)

}
export default Api;