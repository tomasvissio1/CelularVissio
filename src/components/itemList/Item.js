
import React from 'react'
import { Link,NavLink } from 'react-router-dom'
/* const Items = ({ nombres, caracteristicas, imgs, id }); */
                  
function Item({nombres,caracteristicas,imgs,precio,id}) {
  return (
    <div>
        <div className="card" style={{"textAlign":"center"}}>
            <div style={{"textAlign":"center"}}>
                <img src={imgs} style={{"width":"30%"/* ,"marginLeft":"45%" */}}className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{nombres}</h5>
                <p className="card-text">{caracteristicas}</p>
                <h5 className="card-title">{precio}</h5>
                <NavLink to={`/${id}`}>
                  <a href="#" className="btn btn-primary">Detalles</a>
                </NavLink>
                
            </div>
        </div>
  </div>
  )
}

export default Item