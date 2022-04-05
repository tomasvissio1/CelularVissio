import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import "./ItemCount.css"


let activado=false
function ItemCount() {
    const [numero, numeroEstado] = useState(1)
    const [activador,setActivador] = useState()
    
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
        activado=true
        setActivador(activado)
    }
    
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
                                <button onClick={onAdd} >Seguir comprando</button>
                                
                                </Link>
                                
                            </div>
                            <div>
                            <button onClick={onAdd} >ir al cart</button>
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