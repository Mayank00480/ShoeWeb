import React, { useContext } from 'react'
import CreateContext from '../Store/CreateContext'
export default function Popup() {
    const cntxt = useContext(CreateContext);

    let totalAmnt = 0;
    cntxt.cartItems.forEach(val => {
        totalAmnt += Number(val.shoePrice) * ( (val.short != undefined ?  Number(val.short) : 0)+(val.large != undefined ?  Number(val.large) : 0)+(val.medium != undefined?  Number(val.medium) : 0) )
    });
  return (
    <>{
        cntxt.cartItems.map((val) =>{
            if(val.large > 0 || val.short > 0  || val.medium > 0)  return <li>{val.shoeName}&nbsp;&nbsp;&nbsp;{val.large === undefined? '' :`${val.large}L`}  {val.short === undefined? '' :`${val.short}S`} {val.medium === undefined? '' :`${val.medium}M`} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Number(val.shoePrice)*((val.short != undefined ?  Number(val.short) : 0)+(val.large != undefined ?  Number(val.large) : 0)+(val.medium != undefined?  Number(val.medium) : 0)) }</li>                      
         })

      
    }
       <p>Total Amount {totalAmnt}</p>
      
    </>
  )
}
