import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const UserCartContext =()=> useContext(CartContext)

function CartContextProvider({children}) { //componente

    const [cartList, setcartList] = useState([])
    const [infos, setInfo] = useState()
    const [booleana,setBooleana] = useState()
    const [total,setTotal] = useState(0)
    let unidad=0
    const addToCart = (item)=>{
        setcartList([
            ...cartList,
            item
        ])

        
    }
    const calcularTotal = (precio)=>{
        setTotal(precio)

    }
    const traerInfo = (idProducto)=>{
        setInfo(idProducto)
    }
    
    const  remover=(info)=>{
        cartList.splice(info)
        setcartList(cartList)
        setBooleana(true)
    }
    return (

        
            <CartContext.Provider value={{
                cartList,
                traerInfo,
                remover,
                booleana,
                calcularTotal,
                total,
                addToCart
            }}>  
                {children}
            
            </CartContext.Provider>
       
    )

}

export default CartContextProvider