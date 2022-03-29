import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';

let objetos
function ItemDetailContainer() {
  
    const [products, setProducts] = useState([]);
    
    
     useEffect(()=>{
      /* fetch('archivosPrueba.json')
      .then(datas => datas.json())
      .then(data => objetos=parseInt(data[0].precio))
      .then(console.log(objetos)) */
      fetch('archivosPrueba.json')
        .then(response => response.json())
        .then(data => {objetos=data[0].caracteristicas
        console.log(objetos)
        setProducts(objetos)})
        .catch("no anda")
        
      
    },[]) 

    
  return (
    <div>
        <ItemDetail
            nombre={products}
        />
    </div>
  )
}

export default ItemDetailContainer