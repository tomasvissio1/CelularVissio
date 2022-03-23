import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Item from './Item';
import { useEffect, useState } from 'react';
import {objetos} from '../data/data.js'

let consulta=false;
function ItemList() {

    const [products, setProducts] = useState([]);
    

    const traerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(objetos);
        
          traerProductos
          .then(resp=>{
              setProducts(resp)
              consulta=false
                
          })
        /* .then(resp =>setProducts(resp)) */
        .catch(error => console.log())
        .finally(()=>consulta=true)
      },[]);
    }, 4000);

    
  return (
    <div>

        {
        consulta ? ( 
          <>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      nombres={product.nombre}
                      imgs={product.img} 
                      caracteristicas={product.caracteristica}
                      precio = {product.precio}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
    </div>
  )
}

export default ItemList