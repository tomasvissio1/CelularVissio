import React from 'react'
import img from './img/carro.png'

function CartWidget() {
  return (
    <button type="button" class="btn btn-lg " data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
        <img src={img}/>
    
    </button>
  )
}

export default CartWidget
