import React, { useContext } from 'react'
import CreateContext from '../Store/CreateContext'
export default function Popup() {
    const cntxt = useContext(CreateContext);
  return (
    <>{
        cntxt.cartItems.map((val) =>{
            if(val.large > 0 || val.short > 0  || val.medium > 0)  return <li>{val.shoeName}</li>
        })
    }
      
    </>
  )
}
