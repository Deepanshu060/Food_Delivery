// import { createContext, useEffect, useState } from "react";
// import { food_list,menu_list } from "../assets/assets";
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {

//     const [cartItems,setCartItems] = useState({});
//     const [ordersData,setOrdersData] = useState({});
    
//     const addToCart = (itemId) =>{
//         if(!cartItems[itemId])
//         {
//             setCartItems((prev)=>({...prev,[itemId]:1}));
//         }
//         else{
//             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
//         }
//     }

//     const removeFromCart = (itemId) =>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
    
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//           if (cartItems[item] > 0) {
//             let itemInfo = food_list.find((product) => product.food_id === Number(item));
//             totalAmount += itemInfo.food_price * cartItems[item];
//           }
//         }
//         return totalAmount;
//       }

//     const placeOrder = (deliveryData) =>{

//         console.log(deliveryData);
//     }

//     const contextValue = {
//         food_list,
//         menu_list,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         placeOrder
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//         )

// }

// export default StoreContextProvider;
// src/Context/StoreContext.jsx
import { createContext, useState } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [ordersData, setOrdersData] = useState({});
  const [userInitial, setUserInitial] = useState("");

  const addToCart = (itemId) => {
    setCartItems((prev) =>
      !prev[itemId]
        ? { ...prev, [itemId]: 1 }
        : { ...prev, [itemId]: prev[itemId] + 1 }
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const info = food_list.find(
          (product) => product.food_id === Number(item)
        );
        total += info.food_price * cartItems[item];
      }
    }
    return total;
  };

  const placeOrder = (deliveryData) => {
    console.log("Order Placed:", deliveryData);
  };

  const contextValue = {
    food_list,
    menu_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    placeOrder,
    userInitial,
    setUserInitial,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
