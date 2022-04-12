import React, { useContext } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import "./ItemCount.css"
import { CartContext } from "../context/CartContext";



let activado=false
let igual=false
function ItemCount({nombre,id,precio}) {

    const {addToCart,cartList,traerInfo,calcularTotal,total} = useContext(CartContext)



    const [numero, numeroEstado] = useState(1)
    const [activador,setActivador] = useState()

    const [nombreProducto,setNombre] = useState(nombre)
    const [idProducto,setId] = useState(id)
    const [precioProducto,setPrecio] = useState(precio)
    
    function sumar (){
        if(numero<=9){
            numeroEstado(numero+1)
        }
    }
    
    function restar(){
        if(numero>=2){
            numeroEstado(numero-1)
        }
    }
    function onAdd(){
        calcularTotal(total+precio*numero)
        console.log("el total"+total)
        activado=false
        setActivador(activado)
        if (activado!=true) {
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].idProducto==idProducto) {
                    let cantidad=cartList[i].numero;
                        cantidad=cantidad+numero
                        cartList[i].numero=cantidad
                        activado=true
                        break
                }
            }
        }
        if(activado!=true){
            addToCart({nombreProducto, numero,idProducto})
            console.log(cartList)
            activado=true
            setActivador(activado)
        }
        if (activado) {
            setActivador(activado)
        }
        traerInfo(idProducto)
        
        
        
        
       /*  if (cartList!=null) {
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].idProducto==idProducto) {
                    let cantidad=cartList[i].numero;
                    cantidad=cantidad+numero
                    cartList[i].numero=cantidad
                    cartList.pop()
                }
                
            }
        } */
        
    }
    console.log("el id es"+idProducto)
    
    
  return (
    <section>
        <div id="contenedor">
            <button onClick={restar} id="btnResta" disabled={numero == 1 ? true : null}>-</button>
            <h2>{numero}</h2>
            <button onClick={sumar} id="btnSuma" disabled={numero == 10 ? true : null}>+</button>
        </div>
        <div style={{"marginLeft":"45%"}}>
        <div>
      
                {activador ? (
                    <div style={{"display":"flex"}}>
                            <div>
                                <Link to={`/`}>
                                 <button /* onClick={onAdd} */ >Seguir comprando</button>
                                </Link>
                                
                            </div>
                            <div>
                                <Link to={`/cart`}>
                                    <button /* onClick={onAdd} */ >ir al cart</button>
                                </Link>
                            
                            </div>

                    </div>
                ):(
                    <button onClick={onAdd} >agregar</button>
                    
                )}

            </div>
            
        </div>
    </section>
  )
}

export default ItemCount