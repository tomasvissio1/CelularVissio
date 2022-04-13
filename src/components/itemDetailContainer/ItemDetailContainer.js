import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestoneApp } from '../../firebase/Config';
import ItemDetail from '../itemDetail/ItemDetail';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'


let objetos
let activado
function ItemDetailContainer() {
  const {detalleId} = useParams()
    let [products, setProducts] = useState([]);

    //el que viene es de google
    /* let [productos,setProductos] = useState({}) *///sirve para objeto nada mas
    let [productos, setProductos] = useState([])
    //fin
    let [anda,setAnda]=useState();
    let [detalleNumero,setDetalle]=useState();
    

  /* useEffect(()=>{
    const querydb = getFirestore()
    const queryProd = doc(querydb,'productos','3Yodzko6IJeHFDFz32SN')

    getDoc(queryProd)
    .then(resp=> setProductos({id:resp.id,...resp.data()}))
  },[])
  console.log(productos) */
  useState(detalleId)
  useEffect(()=>{
    const querydb = getFirestore()
    const queryCollection = collection(querydb,'productos')
    const queryFilter = query(queryCollection, where('precio','==',2000))

    getDocs(queryCollection)
    .then(resp=> {setProductos(resp.docs.map(item =>({id:item.id,...item.data()})))
    activado=true
    setAnda(activado)})
    
  },[])
  console.log(productos)

  //IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: para filtrar, usar where... 01:42:00 clase 11
  
    /* useState(detalleId)
     useEffect(()=>{
      fetch('objetos.json')
        .then(response => response.json())
        .then(data => {objetos=data

        activado=true
        setProducts(objetos)
        
      setAnda(activado)
      })
        .catch("no anda")
    },[])  */
  return (
    <div>
      
        {anda ? (
          <div>
            <ItemDetail
                // nombre={products[detalleId].caracteristicas}
                // id={products[detalleId].id}
                // precio ={products[detalleId].precio}
                nombre={productos[detalleId].caracteristicas}
                id={productos[detalleId].id}
                precio={productos[detalleId].precio}
                imagen ={productos[detalleId].imagen}
            />
          </div>
        ):(
          <div><h1 style={{"textAlign":"center"}}>Cargando...</h1></div>
        )}

    </div>
  )
}

export default ItemDetailContainer