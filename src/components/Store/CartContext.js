import React,{createContext} from "react";

const CartContext = createContext({
    cartItems : [],
    addLargeQuantity : () =>{},
    addSmallQuantity : () =>{},
    addShortQuantity : () =>{}
})