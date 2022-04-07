import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const UserCartContext =()=> useContext(CartContext)

function CartContextProvider({children}) { //componente

    const [cartList, setcartList] = useState([])

    const addToCart = (item)=>{
        setcartList([
            ...cartList,
            item
        ])

        
    }
    return (

        
            <CartContext.Provider value={{
                cartList,
                addToCart
            }}>  
                {children}
            
            </CartContext.Provider>
       
    )

}

export default CartContextProvider