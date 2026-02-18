// import React from 'react'
// const StoreContext = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// import { createContext } from "react";



// export const StoreContext = createContext(null)
// const StoreContextProvider = (props)=>{
//     const contextValue ={


//     }
//     return(
//         <StoreContext.Provider value ={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;





// StoreContext.js
import { createContext, useState } from "react";
// import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const contextValue = {
    // food_list, 
    cartItems,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
