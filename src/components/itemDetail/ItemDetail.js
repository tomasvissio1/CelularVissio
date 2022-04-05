import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({nombre}) {
  const [activador,setActivado] = useState()
  
  return (
    <><h1 style={{"width":"50%","margin":"auto","fontSize":"2em"}}>{nombre}</h1><>
      
      
      <div>
      
        <ItemCount />
       
      </div>
      
      
    </></>
    
  )
}

export default ItemDetail