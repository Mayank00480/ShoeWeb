import React, { useContext } from 'react'
import CreateContext from '../Store/CreateContext';
const ShoeForm = () => {
    const context  = useContext(CreateContext);
    const submitHandler = (e) =>{
        e.preventDefault();
        const shoeName = document.getElementById('shoeName')
      const shoeDescription = document.getElementById('description')
     const shoePrice =  document.getElementById('price')
           const large = document.getElementById('large')
           const medium = document.getElementById('medium')
          const  short = document.getElementById('short');
        const myObje = {
            shoeName : shoeName.value,
            shoeDescription : shoeDescription.value,
            shoePrice :  shoePrice.value,
            large : large.value,
            medium : medium.value,
            short : short.value
        }
        context.addItemsToCart(myObje);
        shoeName.value = "";
        shoeDescription.value = "";
        shoePrice.value= "";
        large.value = "";
        medium.value = "";
        short.value = ""
        
    }
  return (
    <>
      <form>
        <label>Shoe Name</label>
        <input type = "text" id = "shoeName"/>
        <label>Description</label>
        <input type = "text" id = "description"/>
        <label>Price</label>
        <input type = "number" id = "price" />
        <label>Large</label>
        <input type = "number" id = "large"/>
        <label>Medium</label>
        <input type = "number" id = "medium"/>
        <label>Short</label>
        <input type = "number" id = "short"/>
        <input type = "submit" value = "Add Product" onClick={submitHandler}/>
      </form>
    </>
  )
}

export default ShoeForm
