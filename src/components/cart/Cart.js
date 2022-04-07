import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'



function Cart() {
  const {addToCart,cartList} = useContext(CartContext)
  console.log(cartList)


  return (
    <div>{cartList.map(prod=><li key={prod.idProducto}>nombre:{prod.nombreProducto}+ cantidad:{prod.numero}</li>)}</div>
  )
}

export default Cart