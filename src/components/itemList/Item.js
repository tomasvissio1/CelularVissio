
import React from 'react'
/* const Items = ({ nombres, caracteristicas, imgs, id }); */
                  
function Item({nombres,caracteristicas,imgs,precio}) {
  return (
    <div>
        <div className="card" >
            <img src={imgs} style={{"width":"10%","marginLeft":"45%"}}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{nombres}</h5>
                <p className="card-text">{caracteristicas}</p>
                <h5 className="card-title">{precio}</h5>
            </div>
        </div>
  </div>
  )
}

export default Item