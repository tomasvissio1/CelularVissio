import { useState } from "react";

import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({nombre,id,precio}) {

  const [activador,setActivado] = useState()
  
  return (
    <><h1 style={{"width":"50%","margin":"auto","fontSize":"2em"}}>{nombre}</h1><>
      
      
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