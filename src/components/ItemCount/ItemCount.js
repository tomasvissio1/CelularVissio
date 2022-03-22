import React from 'react'
import {useState} from 'react'
import "./ItemCount.css"

function ItemCount() {
    const [numero, numeroEstado] = useState(1)
    
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
        alert(`elegiste ${numero}`)
    }
  return (
    <section>
        <div id="contenedor">
            <button onClick={restar} id="btnResta" disabled={numero == 1 ? true : null}>-</button>
            <h2>{numero}</h2>
            <button onClick={sumar} id="btnSuma" disabled={numero == 10 ? true : null}>+</button>
        </div>
        <div>
            <button onClick={onAdd}>agregar</button>
        </div>
    </section>
  )
}

export default ItemCount