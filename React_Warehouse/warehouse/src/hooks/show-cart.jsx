// import React, { useState, useReducer } from "react";

// const showCartReducer = (state, action) => {
//   if (action.type === "On") {
//     return { showCart: !state.showCart };
//   }
// };

// export const showCart = () => {
  
//     const [state, dispatch] = useReducer(showCartReducer, { showCart: false });

//     const showCartHandler = () => {
//       dispatch({ type: "On" });
//       console.log("Called");
//       return state.showCart;
//     };

//     return {
//       showCartHandler,
//     };
// };
