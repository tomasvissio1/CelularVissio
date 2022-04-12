import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'


let activado=false
function Cart() {
  
  const {cartList,remover,booleana,total} = useContext(CartContext)
  const [activar,setActivar]=useState()


  useEffect(()=>{
    setActivar(booleana)
    /* activar=true */
    if(cartList[0]==null){
      activado=true
      
    }else{
      activado=false
    }
    setActivar(activado)
    console.log(cartList)
  },[])


  return (
    <div>
        {activar ?(
          <div><h1 style={{"textAlign":"center"}}>no hay productos</h1>
          </div>
        ):(
          <><div>{cartList.map(prod => <li key={prod.idProducto}>nombre:{prod.nombreProducto}+ cantidad:{prod.numero}
            <button id={prod.idProducto} onClick={remover}>eliminar</button></li>)}
          </div><div>
          <h1>{total}</h1>
            </div></>
        )}
    </div>
    

    
  )
}
/* <div>{cartList.map(prod=><li key={prod.idProducto}>nombre:{prod.nombreProducto}+ cantidad:{prod.numero}
      <button id={prod.idProducto} onClick={remover}>eliminar</button></li>)}
    </div> */

export default Cart