import { useState } from "react";

import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({nombre,id,precio,imagen}) {

  const [activador,setActivado] = useState()
  
  return (
    <><h1 style={{"width":"50%","margin":"auto","fontSize":"2em"}}>{nombre}</h1>
      <>
        <img style={{"width":"10%","marginLeft":"45%"}} src={imagen}/>
      </>
    <>
      
      
      <div>
      
        <ItemCount nombre={nombre}
                  id={id}
                  precio={precio}
        />
       
      </div>
      
      
    </></>
    
  )
}

export default ItemDetail