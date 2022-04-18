import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ModalBody } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom"


let activado=false
function Cart() {
  const {cartList,remover,booleana,total} = useContext(CartContext)
  const [activar,setActivar]=useState()
  const [lista, setLista] = useState()
  const [mostrarListadoListo,setListado]= useState()


  function generarOrden(e){
    e.preventDefault();

    let orden={}

    orden.comprador = {nombre:"tomas",email:"tom@gmail.com",telefono:"0000121212"}
    orden.total = total;

    orden.items = cartList.map(cartItem =>{
      const id = cartItem.idProducto
      const nombre = cartItem.nombreProducto
      console.log(orden.comprador.nombre)
      setLista(orden)
      setListado(true)
      console.log(orden)
      return {id,nombre}
      

      
    })

    const db = getFirestore()
    const queryCollection = collection(db, 'pedidos')
    addDoc(queryCollection, orden)
   
    /* mostrar() */
  }
  /* useEffect(()=>{
    function mostrar(){
    const querydb = getFirestore()
    const queryCollection = collection(querydb,'pedidos')

    getDocs(queryCollection)
    .then(resp=> {setProductos(resp.docs.map(item =>({id:item.id,...item.data()})))
    
    })
  }
    
  },[]) */
  

  useEffect(()=>{
    setActivar(booleana)
    /* activar=true */
    if(cartList[0]==null){
      activado=true
      
    }else{
      activado=false
      setActivar(activado)
    }
    
  },[])


  return (
    <><div>
      {activar ? (
        <div><h1 style={{ "textAlign": "center" }}>no hay productos</h1>
        </div>
      ) : (
        <><><div>{cartList.map(prod => <li key={prod.idProducto}>nombre:{prod.nombreProducto}+ cantidad:{prod.numero}
          <button id={prod.idProducto} onClick={remover}>eliminar</button></li>)}
        </div><div>
            <h1>total: {total}</h1>
          </div></><button onClick={generarOrden}>Confirmar</button></>
      )}
    </div>
    
    <div>
      {mostrarListadoListo ? (<div class="card-body" style={{"width": "18rem","position":"fixed!important","top":"0","right":"50%!important"}}>
        <div className="card-body">
          <h5 className="card-title">{lista.comprador.nombre}</h5>
          <h5 className="card-title">{lista.comprador.email}</h5>
          <h5 className="card-title">{lista.comprador.telefono}</h5>
          <h5 className="card-title">precio total: {total}</h5>
          <p className="card-text">Felicitaciones por la compra de: {lista.items[0].nombre}</p>
          <Link to={`/`}><a href="#" className="btn btn-primary">Volver al menu</a></Link>
          </div>
  </div>):(<div></div>)}
      
  </div></>
    
    
    

    
  )
}
/* <div>{cartList.map(prod=><li key={prod.idProducto}>nombre:{prod.nombreProducto}+ cantidad:{prod.numero}
      <button id={prod.idProducto} onClick={remover}>eliminar</button></li>)}
    </div> */

export default Cart