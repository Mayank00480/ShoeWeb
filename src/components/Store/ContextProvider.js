import CreateContext from "./CreateContext";
import React,{useState} from "react";
const ContextProvider = (props) =>{
    const [item , setItem] = useState([]);
    const [cart,setCart] = useState([]);    
    console.log(cart);
    const addItemsToCartHandler = (data) =>{
      setItem([...item , data])
      }
    
    const reduceShortQuantity = (shoe) =>{
        setItem(item.map((res) =>{
            if(res.shoeName === shoe){
                res.short--;
                return res;
            }
            else return res;
        }))
    }
    const reduceLargeQuantity = (shoe) =>{
        setItem(item.map((res) =>{
            if(res.shoeName === shoe){
                res.large--;
                return res;
            }
            else return res;
        }))
    }
    const reduceMediumQuantity = (shoe) =>{
        setItem(item.map((res) =>{
            if(res.shoeName === shoe){
                res.medium--;
                return res;
            }
            else return res;
        }))
    }
    const addLargeQuantity =  (info) =>{
        let flag = true;
            cart.length > 0 && setCart(cart.map((data) =>{
                if(data.shoeName === info.shoeName && data.large === undefined){
                    flag = false;
                    return {...data , large : 1}
                }
                else if(data.shoeName === info.shoeName){
                    data.large++;
                    flag = false;
                    return data;
                }
                }))
        if(flag) {
            setCart([...cart , {...info , large : 1}]);
        }
}

        const addShortQuantity = (info) =>{
            let flag = true;
            cart.length > 0 && setCart(cart.map((data) =>{
                if(data.shoeName === info.shoeName && data.short === undefined){
                    flag = false;
                    return {...data , short : 1}
                }
                else if(data.shoeName === info.shoeName){
                    data.short++;
                    flag = false;
                    return data;
                }
                }))
        if(flag) {
            setCart([...cart , {...info , short : 1}]);
        }
        }
       
        const addMediumQuantity = (info) =>{
            let flag = true;
            cart.length > 0 && setCart(cart.map((data) =>{
                if(data.shoeName === info.shoeName && data.medium === undefined){
                    flag = false;
                    return {...data , medium : 1}
                }
                else if(data.shoeName === info.shoeName){
                    data.medium++;
                    flag = false;
                    return data;
                }
                }))
        if(flag) {
            setCart([...cart , {...info , medium : 1}]);
        }
        }

      const context = {
        items  : item,
        addItemsToCart : addItemsToCartHandler,
        reduceLargeQuantity : reduceLargeQuantity,
        reduceShortQuantity : reduceShortQuantity,
        reduceMediumQuantity : reduceMediumQuantity,
        cartItems : cart,
        addLargeQuantity : addLargeQuantity,
        addShortQuantity : addShortQuantity,
        addMediumQuantity : addMediumQuantity,
      }

    return <CreateContext.Provider value = {context}>
        {props.children}
    
    </CreateContext.Provider>
}

export default ContextProvider