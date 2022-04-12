import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';


let objetos
let activado
function ItemDetailContainer() {
  const {detalleId} = useParams()
    let [products, setProducts] = useState([]);
    let [anda,setAnda]=useState();
    let [detalleNumero,setDetalle]=useState();
    
    useState(detalleId)
     useEffect(()=>{
      fetch('archivosPrueba.json')
        .then(response => response.json())
        .then(data => {objetos=data

        /* console.log(objetos) */
        activado=true
        setProducts(objetos)
        
      setAnda(activado)
      })
        .catch("no anda")
    },[]) 
  return (
    <div>
      
        {anda ? (
          <div>
            <ItemDetail
                nombre={products[detalleId].caracteristicas}
                id={products[detalleId].id}
                precio ={products[detalleId].precio}
            />
          </div>
        ):(
          <div>no anda</div>
        )}

    </div>
  )
}

export default ItemDetailContainer