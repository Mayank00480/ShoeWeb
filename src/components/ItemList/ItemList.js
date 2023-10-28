import React, { useContext,useState } from 'react'
import CreateContext from '../Store/CreateContext'
const ItemList = () => {
    const [cartItems , setCartItems] = useState(0);
    const cntxt = useContext(CreateContext)

  return (
    <div>
      {cntxt.items.map((val) =>{
        return <li>{val.shoeName} {val.shoePrice}  <button onClick = { () => {cntxt.reduceShortQuantity(val.shoeName);
                                                                               setCartItems((prevState) => prevState + 1) 
                                                                               cntxt.addShortQuantity({
                                                                                shoeName : val.shoeName,
                                                                                shoePrice : val.shoePrice
                                                                            })                                                                    
        }}>{val.short}</button><button onClick = { () => {cntxt.reduceMediumQuantity(val.shoeName)
            setCartItems((prevState) => prevState + 1)  
        }}>{val.medium}</button><button onClick = { () => {cntxt.reduceLargeQuantity(val.shoeName)
            setCartItems((prevState) => prevState + 1) 
            cntxt.addLargeQuantity({
                shoeName : val.shoeName,
                shoePrice : val.shoePrice
            })
           
        }}>{val.large}</button></li>
      })}

      <p>Cart Items {cartItems}</p>
    </div>
  )
}

export default ItemList
